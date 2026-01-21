const list = document.querySelector('#pokemon_list');
const template = document.querySelector("#templatepkm");
const templateEvo = document.querySelector("#template_pkmn_evo");

// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ("content" in document.createElement("template")) {
    Object.entries(PokemonList).forEach(([pokemonID, pokemon]) => {
        if (pokemon.forms) {
            Object.entries(pokemon.forms).forEach(([formID, form]) => {
                createPkmnContainer(pokemonID, formID);
            });
        } else {
            createPkmnContainer(pokemonID);
        }
    });

} else {
    alert('Template element unsupported.');
}

function createPkmnContainer(pokemonID, formID = null) {
    const pokemon = PokemonList[pokemonID];
    const form = formID ? pokemon.forms[formID] : null;
    const clone = document.importNode(template.content, true);

    var pokemon_id = pokemonID.toString().padStart(3, '0');
    var pokemon_name = pokemon.name;
    var form_id = form ? `-${formID}` : '';
    var form_name = form ? ` (${form.name})` : '';

    var pokemonCounter = Number(localStorage.getItem(`${pokemon_id}${form_id}`) || 0);

    let pkmn_container = clone.querySelector(".pkmn-container");
    pkmn_container.id = `pkmn_${pokemon_id}${form_id}`;
    pkmn_container.dataset.id = `${pokemon_id}${form_id}`;

    let pkmn_number = clone.querySelector(".pkmn-number");
    pkmn_number.textContent = `#${pokemon_id}`;

    let pkmn_img_url = clone.querySelector(".pkmn-img-url");
    pkmn_img_url.src = `images/${pokemon_id}${form_id}.png`;
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
        let preevolution = pokemon.preEvolution.toString().padStart(3, '0');
        evolutionIcon(preevolution, pkmn_evolutions);
    }

    pokemon.evolutions?.forEach((evo) => {
        let evolution = evo.toString().padStart(3, '0');
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
    image.src = `images/${evolution}.png`;
    image.dataset.evo = evolution;

    evolutionElement.appendChild(clone);
}

function evolvePokemon(pokemonID, evolutionID) {
    const counter = Number(localStorage.getItem(pokemonID));
    if (!counter) {
        return;
    }
    updateCounter(pokemonID, -1);
    updateCounter(evolutionID, 1)
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
    //var fileContent = JSON.stringify(localStorage);
    var myFile = new Blob([fileContent], {type: 'text/plain'});

    window.URL = window.URL || window.webkitURL;
    var dlBtn = document.querySelector("#export_checklist");

    dlBtn.setAttribute("href", window.URL.createObjectURL(myFile));
    dlBtn.setAttribute("download", fileName);
}

// function importFile() {
//     var reader = new FileReader();
//     console.log(reader)

//     // var data = JSON.parse(/*paste stringified JSON from clipboard*/);
//     // Object.keys(data).forEach(function (k) {
//     //     localStorage.setItem(k, data[k]);
//     // });
// }

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

document.querySelector('#file_upload').addEventListener('change', function(e) {
    let file = document.querySelector('#file_upload').files[0];

    (async () => {
        const fileContent = await file.text();

        console.log('.text()', fileContent);

        const fileContentStream = await file.stream();

        console.log('.stream()', await streamToText(fileContentStream));

        const buffer = await file.arrayBuffer();

        console.log('.buffer()', bufferToText(buffer));

        const fileSliceBlob = file.slice(0, file.length);
        const fileSliceBlobStream = await fileSliceBlob.stream();

        console.log('.slice() and .stream()', await streamToText(fileSliceBlobStream));

        var data = JSON.parse(atob(fileContent));
        Object.keys(data).forEach(function (k) {
            localStorage.setItem(k, data[k]);
        });
    })();

    setTimeout(() => {
        location.reload();
    }, 1000);
});