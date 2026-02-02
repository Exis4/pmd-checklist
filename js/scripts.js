const list = document.querySelector('#pokemon_list');
const template = document.querySelector("#template_pkmn");
const templateEvo = document.querySelector("#template_pkmn_evo");
const templatePokemonIcon = document.querySelector("#template_pokemon_icon");

const totalObtainedElement = document.querySelector('.total-obtained');
const maxPokemonElement = document.querySelector('.max-pokemon');
updateTotalCounter();

// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ("content" in document.createElement("template")) {
    sortPokemonList(PokemonList).forEach((pokemonID) => {
        const pokemon = PokemonList[pokemonID];
        if (!pokemon.unavailable) {
            createPkmnContainer(pokemonID);
        }
    });

} else {
    alert('Template element unsupported.');
}

function createPkmnContainer(pokemonID) {
    const pokemon = PokemonList[pokemonID];
    const clone = document.importNode(template.content, true);

    var pokemon_id = pokemonID.toString();
    var pokemon_name = pokemon.name;
    var form_name = pokemon.formName ? ` (${pokemon.formName})` : '';

    var pokemonCounter = Number(localStorage.getItem(`${pokemon_id}`) || 0);

    let pkmn_container = clone.querySelector(".pkmn-container");
    pkmn_container.id = `pkmn_${pokemon_id}`;
    pkmn_container.dataset.id = `${pokemon_id}`;

    let pkmn_number = clone.querySelector(".pkmn-number");
    pkmn_number.textContent = `#${pokemon.baseForm ? pokemon.baseForm.toString() : pokemon_id}`;

    let pkmn_img_url = clone.querySelector(".pkmn-img-url");
    pkmn_img_url.src = getImageSrc(pokemon_id);
    pkmn_img_url.classList.toggle('grayscale-dark', pokemonCounter <= 0);

    let pkmn_name = clone.querySelector(".pkmn-name");
    pkmn_name.textContent = `${pokemon_name}${form_name}`;
    
    let pkmn_counter = clone.querySelector(".pkmn-counter");
    pkmn_counter.textContent = pokemonCounter;

    let pkmn_evolutions = clone.querySelector(".pkmn-evolutions");

    // If no preevolution, not evolutions or Shedinja, hide de/evolution container
    if ((!pokemon.preEvolution && !pokemon.evolutions) || Number(pokemonID) === Species.Shedinja) {
        clone.querySelector('.pkmn-evo-container').classList.add('d-none');
    }

    if (pokemon.preEvolution) {
        let preevolution = pokemon.preEvolution.toString();
        evolutionIcon(preevolution, pkmn_evolutions);
    }

    pokemon.evolutions?.forEach((evo) => {
        // Hide icon for evolving Nincada into Shedinja
        if (evo !== Species.Shedinja) {
            let evolution = evo.toString();
            evolutionIcon(evolution, pkmn_evolutions);
        }
    });

    list.appendChild(clone);
}

function updateCounter(pokemonID, number) {
    const counter = Number(localStorage.getItem(pokemonID) || 0);
    const result = Math.max((counter + number), 0);
    localStorage.setItem(pokemonID, result);

    updateCounterVisual(pokemonID, result);
}

function updateCounterVisual(pokemonID, number) {
    // Pokemon Icon (Grayscale)
    document
        .querySelector(`#pkmn_${pokemonID} img.pkmn-img-url`)
        .classList.toggle('grayscale-dark', number <= 0);

    // Counter
    document
        .querySelector(`#pkmn_${pokemonID} span.pkmn-counter`)
        .textContent = localStorage.getItem(pokemonID);

    // Counter in Pokemon Modal
    const pokemonModalElement = document.querySelector('#pokemon_modal');
    if (pokemonModalElement.classList.contains('show')) {
        pokemonModalElement
            .querySelector('.modal-footer .pkmn-counter')
            .textContent = localStorage.getItem(pokemonID);
    }

    // Counter in Dungeon Modal
    const dungeonModalElement = document.querySelector('#dungeon_modal');
    if (dungeonModalElement.classList.contains('show')) {
        console.log('test')
        dungeonModalElement
            .querySelectorAll(`.modal-body .pkmn-encounter-${pokemonID}`).forEach((element) => {
                element.textContent = localStorage.getItem(pokemonID);
            })
    }

    // Total counter
    updateTotalCounter();
}

function evolutionIcon(evolution, evolutionElement) {
    const clone = document.importNode(templateEvo.content, true);
    let image = clone.querySelector('.pkmn-evo-icon')
    image.src = getImageSrc(evolution);
    image.dataset.evo = evolution;

    evolutionElement.appendChild(clone);
}

function evolvePokemon(pokemonID, evolutionID) {
    const counter = Number(localStorage.getItem(pokemonID));
    if (!counter) {
        return;
    }
    updateCounter(pokemonID, -1);
    updateCounter(evolutionID, 1);

    // Evolving Nincada into Ninjask gives you Shedinja
    if (Number(pokemonID) === Species.Nincada) {
        updateCounter(Species.Shedinja, 1);
    }
    if (Number(pokemonID) === Species.Ninjask) {
        updateCounter(Species.Shedinja, -1);
    }
}

function resetData(){
    localStorage.clear();
    setTimeout(() => {
        location.reload();
    }, 1000);
}

function exportFile() {
    var fileName = "pmd_checklist.txt";
    var fileContent = btoa(JSON.stringify(localStorage));
    var myFile = new Blob([fileContent], {type: 'text/plain'});

    window.URL = window.URL || window.webkitURL;
    var dlBtn = document.querySelector("#export_checklist");

    dlBtn.setAttribute("href", window.URL.createObjectURL(myFile));
    dlBtn.setAttribute("download", fileName);
}
function importFile() {
    let file = document.querySelector('#file_upload').files[0];

    (async () => {
        const fileContent = await file.text();
        // const fileContentStream = await file.stream();
        // const buffer = await file.arrayBuffer();
        // const fileSliceBlob = file.slice(0, file.length);
        // const fileSliceBlobStream = await fileSliceBlob.stream();

        var data = JSON.parse(atob(fileContent));

        localStorage.clear();

        Object.keys(data).forEach(function (k) {
            // Transform the ID into number to remove 0 padding
            var key = k;
            if (!Number.isNaN(Number(k))) {
                key = Number(k);
            }
            localStorage.setItem(key, data[k]);
        });
    })();

    setTimeout(() => {
        location.reload();
    }, 1000);
}

const streamToText = async (blob) => {
    const readableStream = await blob.getReader();
    const chunk = await readableStream.read();

    return new TextDecoder('utf-8').decode(chunk.value);
};

const bufferToText = (buffer) => {
    const bufferByteLength = buffer.byteLength;
    const bufferUint8Array = new Uint8Array(buffer, 0, bufferByteLength);

    return new TextDecoder().decode(bufferUint8Array);
};

//

const dungeonList = document.querySelector('#dungeon_list tbody');
const templateDungeonTr = document.querySelector("#template_dungeon_tr");
const templateDungeonEncounter = document.querySelector("#template_dungeon_encounter");
const templateDungeonFloor = document.querySelector("#template_dungeon_floor");
if ("content" in document.createElement("template")) {
    Object.entries(DungeonList).forEach(([dungeonID, dungeon]) => {
        //createPkmnContainer(pokemonID);
        const clone = document.importNode(templateDungeonTr.content, true);
        const dungeonRow = clone.querySelector('.dungeon-row button');
        dungeonRow.textContent = `${dungeon.name} ${WonderMailDungeons.includes(Number(dungeonID)) ? '(*)' : ''}`;
        dungeonRow.dataset.id = dungeonID;

        dungeonList.appendChild(clone);
    });

} else {
    alert('Template element unsupported.');
}

function dungeonModal(dungeonID) {
    const modalElement = document.querySelector("#dungeon_modal");
    const bootstrapModal = new bootstrap.Modal(modalElement, {});
    const modalTitle = modalElement.querySelector('.modal-title');
    const modalBody = modalElement.querySelector('.modal-body');
    // Clear the modal
    modalBody.innerHTML = '';

    const dungeon = DungeonList[dungeonID];
    modalTitle.textContent = dungeon.name;
    DungeonEncounterTables[dungeonID].forEach((floor) => {
        const cloneFloor = document.importNode(templateDungeonFloor.content, true);
        const floorTitle = getFloorString(dungeonID, floor.initialFloor, floor.finalFloor);

        cloneFloor.querySelector('.floor-title').textContent = floorTitle;
        const floorTable = cloneFloor.querySelector('.floor-table tbody');

        if (!floor.pokemonData.length) {
            cloneFloor.querySelector('.floor-body').innerHTML = '<hr/><div class="text-center">No Pokémon found in this floor.</div><hr/>';
        }

        floor.pokemonData.forEach((pokemon) => {
            // If probability is 0, skip
            if (!pokemon.probability) {
                return;
            }

            const cloneEncounter = document.importNode(templateDungeonEncounter.content, true);
            const encounterName = cloneEncounter.querySelector('.encounter-name');
            const encounterIcon = cloneEncounter.querySelector('.encounter-icon img');
            const encounterProbability = cloneEncounter.querySelector('.encounter-probability');
            const encounterLevel = cloneEncounter.querySelector('.encounter-level');
            const pokemonRecruitRate = cloneEncounter.querySelector('.pokemon-recruit-rate');
            const pokemonObtained = cloneEncounter.querySelector('.pokemon-obtained');

            encounterName.innerHTML = `${PokemonList[pokemon.species].name} ${getGameVersionText(pokemon.species)}`;
            encounterIcon.src = getImageSrc(pokemon.species);
            encounterIcon.dataset.id = pokemon.species;
            //encounterIcon.classList = Number(localStorage.getItem(pokemon.species)) > 0 ? '' : 'grayscale-dark';
            encounterProbability.textContent = calculateProbability(pokemon.probability);
            encounterLevel.textContent = pokemon.level;
            pokemonRecruitRate.textContent = DungeonList[dungeonID].recruitingEnabled ? calculateRecruitRate(pokemon.species) : "Can't be recruited here";
            pokemonObtained.classList.add(`pkmn-encounter-${pokemon.species}`);
            pokemonObtained.textContent = localStorage.getItem(pokemon.species) || 0;

            floorTable.appendChild(cloneEncounter);
        });

        modalBody.appendChild(cloneFloor);
    });

    bootstrapModal.show();
}

const templatePokemonEncounter = document.querySelector("#template_pokemon_encounter");
const templatePokemonModalBody = document.querySelector("#template_pokemon_modal_body");

function pokemonModal(pokemonID) {
    const modalElement = document.querySelector("#pokemon_modal");
    const bootstrapModal = new bootstrap.Modal(modalElement, {});
    
    const modalTitle = modalElement.querySelector('.modal-title');
    const modalHeaderIcon = modalElement.querySelector('.modal-header .pkmn-img-url');
    const modalBody = modalElement.querySelector('.modal-body');
    const modalFooter = modalElement.querySelector('.modal-footer');

    modalElement.dataset.id = pokemonID;
    modalFooter.querySelector('.pkmn-counter').textContent = localStorage.getItem(pokemonID) || 0;
    // Clear the modal
    modalBody.innerHTML = '';

    const pokemon = PokemonList[pokemonID];
    const recruitRate = calculateRecruitRate(pokemonID);
    modalHeaderIcon.src = getImageSrc(pokemonID);
    modalTitle.textContent = `${pokemon.name} (Recruitment rate: ${recruitRate}) (Body size: ${PokemonPMDData[pokemonID].bodySize}*)`;

    const clonePokemonModalBody = document.importNode(templatePokemonModalBody.content, true);
    const pokemonTable = clonePokemonModalBody.querySelector('.dungeon-list-table tbody');

    const filteredDungeonList = Object.entries(filterDungeonList(pokemonID));
    if (!filteredDungeonList.length) {
        clonePokemonModalBody.querySelector('.dungeon-list-body').innerHTML = `<hr/><div class="text-center">This Pokémon can't be found anywhere.</div><hr/>`;
        modalBody.appendChild(clonePokemonModalBody);
    }

    filteredDungeonList.forEach(([dungeonID, dungeonEncounters]) => {
        dungeonEncounters.forEach((floors) => {
            //console.log(floors.length)
            floors.forEach((floor, index) => {
                const cloneDungeon = document.importNode(templatePokemonEncounter.content, true);
                if (!DungeonList[dungeonID].recruitingEnabled) {
                    cloneDungeon.querySelector('tr').classList.add('table-danger');
                }
                const dungeonFloor = cloneDungeon.querySelector('.dungeon-floor');
                const pokemonLevel = cloneDungeon.querySelector('.pokemon-level');
                const pokemonProbability = cloneDungeon.querySelector('.pokemon-probability');

                // If first one of the dungeon, merge dungeon name rows
                if (index === 0) {
                    const dungeonName = cloneDungeon.querySelector('.dungeon-name');
                    dungeonName.rowSpan = floors.length;
                    dungeonName.textContent = `${DungeonList[Number(dungeonID)].name} ${WonderMailDungeons.includes(Number(dungeonID)) ? '(*)' : ''}`;
                    dungeonName.classList.remove('d-none');
                }

                const floorTitle = getFloorString(dungeonID, floor.initialFloor, floor.finalFloor)

                dungeonFloor.textContent = floorTitle;
                pokemonLevel.textContent = floor.pokemonData[0].level;
                pokemonProbability.textContent = calculateProbability(floor.pokemonData[0].probability);

                pokemonTable.appendChild(cloneDungeon);
            });
        });
        modalBody.appendChild(clonePokemonModalBody);
    });

    // Footer
    const familyArray = getPokemonFamily(pokemonID);
    const evolutionFamily = modalFooter.querySelector('.evolution-family');
    evolutionFamily.innerHTML = '';
    familyArray.forEach((speciesID) => {
        const clonePokemonIcon = document.importNode(templatePokemonIcon.content, true);
        clonePokemonIcon.querySelector('.pkm-img-url').src = getImageSrc(speciesID);
        if (speciesID === pokemonID) {
            clonePokemonIcon.querySelector('.pkm-img-url').classList.add('selected-species')
        }
        if (speciesID !== pokemonID) {
            clonePokemonIcon.querySelector('.pkm-img-url').addEventListener('click', () => {
                //alert(speciesID)
                bootstrapModal.hide();
                modalElement.addEventListener('hidden.bs.modal', event => {
                    pokemonModal(speciesID);
                }, { once: true });
            })
        }
        
        evolutionFamily.appendChild(clonePokemonIcon);
    });

    bootstrapModal.show();
    //console.log(bootstrapModal._isShown)
}


function sortPokemonList(pokemonList) {
    var keys = Object.keys(pokemonList);
    return keys.sort((a,b) => {
        const nameA = pokemonList[a].baseForm ? pokemonList[a].baseForm : a;
        const nameB = pokemonList[b].baseForm ? pokemonList[b].baseForm : b;
        // if (nameA < nameB) {
        //     return -1;
        // }
        // if (nameA > nameB) {
        //     return 1;
        // }

        // // names must be equal
        // return 0;
        return nameA - nameB;
    });
}

function filterDungeonList(pokemonID) {
    return Object.entries(DungeonEncounterTables).reduce((acc, [dungeonID, floors]) => {
        // Check if any floor in this dungeon has the species
        const matchedFloors = floors
            .map(floor => ({
                ...floor,
                // Only keep the specific pokemon in the pokemonData array
                pokemonData: floor.pokemonData.filter(p => p.species === pokemonID)
            }))
            .filter(floor => floor.pokemonData.length > 0);
    
        // If we found any floors with that species, add the dungeon to our result
        if (matchedFloors.length > 0) {
            acc[Number(dungeonID)] = [];
            acc[Number(dungeonID)].push(matchedFloors);
        }
        
        return acc;
    }, {});
}

function getPokemonFamily(pokemonID) {
    var basePokemonID = Number(pokemonID);
    const family = [];

    basePokemonID = getBaseStage(basePokemonID);
    family.push(basePokemonID);
    getEvolutionStages(basePokemonID);

    function getEvolutionStages(speciesID) {
        PokemonList[speciesID].evolutions?.forEach((evolutionID) => {
            family.push(evolutionID);
            if (PokemonList[evolutionID].evolutions) {
                getEvolutionStages(evolutionID);
            }
        });
    }
    
    return family;
}

function getBaseStage(pokemonID) {
    while (PokemonList[pokemonID].preEvolution) {
        pokemonID = PokemonList[pokemonID].preEvolution;
    }
    return pokemonID;
}

function updateTotalCounter() {
    const totalObtained = getTotalObtained();
    totalObtainedElement.textContent = totalObtained;
    maxPokemonElement.textContent = MAX_POKEMON;
    totalObtainedElement.classList.toggle('text-danger', totalObtained > MAX_POKEMON)
}

const pokemon_modal = document.querySelector('#pokemon_modal')
pokemon_modal.addEventListener('show.bs.modal', event => {
    ['bg-dark', 'bg-opacity-50'].forEach((singleClass) => {
        pokemon_modal.classList.toggle(singleClass, document.querySelector('#dungeon_modal').classList.contains('show'));
    });
});