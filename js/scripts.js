const list = document.querySelector('#pokemon_list');
const template = document.querySelector("#template_pkmn");
const templateEvo = document.querySelector("#template_pkmn_evo");

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
    pkmn_img_url.src = `images/${pokemon_id.padStart(3, '0')}.png`;
    pkmn_img_url.classList.toggle('grayscale-dark', pokemonCounter <= 0);

    let pkmn_name = clone.querySelector(".pkmn-name");
    pkmn_name.textContent = `${pokemon_name}${form_name}`;
    
    let pkmn_counter = clone.querySelector(".pkmn-counter");
    pkmn_counter.textContent = pokemonCounter;

    let pkmn_evolutions = clone.querySelector(".pkmn-evolutions");

    if (!Object.hasOwn(pokemon, 'preEvolution') && !Object.hasOwn(pokemon, 'evolutions')) {
        clone.querySelector('.pkmn-evo-container').classList.add('d-none');
    }

    if (pokemon.preEvolution) {
        let preevolution = pokemon.preEvolution.toString();
        evolutionIcon(preevolution, pkmn_evolutions);
    }

    pokemon.evolutions?.forEach((evo) => {
        let evolution = evo.toString();
        evolutionIcon(evolution, pkmn_evolutions);
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
}

function evolutionIcon(evolution, evolutionElement) {
    const clone = document.importNode(templateEvo.content, true);
    let image = clone.querySelector('.pkmn-evo-icon')
    image.src = `images/${evolution.padStart(3, '0')}.png`;
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

    if (Number(pokemonID) === Species.Nincada) {
        updateCounter(Species.Shedinja, 1);
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
        dungeonRow.textContent = dungeon.name;
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
        const floorDirection = dungeon.stairDirectionUp ? '' : 'B';
        const initialFloor = `${floorDirection}${floor.initialFloor}F`;
        const finalFloor = `${floorDirection}${floor.finalFloor}F`;
        const floorTitle = floor.initialFloor === floor.finalFloor ? initialFloor : `${initialFloor} - ${finalFloor}`;

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

            encounterName.textContent = PokemonList[pokemon.species].name;
            encounterIcon.src = `images/${pokemon.species.toString().padStart(3, '0')}.png`;
            //encounterIcon.classList = Number(localStorage.getItem(pokemon.species)) > 0 ? '' : 'grayscale-dark';
            encounterProbability.textContent = `${pokemon.probability / 100}%`;
            encounterLevel.textContent = pokemon.level;

            floorTable.appendChild(cloneEncounter)
        });

        modalBody.appendChild(cloneFloor);
    });

    bootstrapModal.show();
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