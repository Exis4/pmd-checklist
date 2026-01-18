const list = document.getElementById('pokemon_list');
const template = document.querySelector("#templatepkm");
const templateEvo = document.querySelector("#template_pkm_evo");


// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ("content" in document.createElement("template")) {
    pokemonList.forEach((pokemon) => {
        const pokemon_id = pokemon.id;
        const clone = document.importNode(template.content, true);
        let pkm_number = clone.querySelector(".pkm_number");
        let pkm_img_url = clone.querySelector(".pkm_img_url");
        let pkm_name = clone.querySelector(".pkm_name");
        let btn_add_pkm = clone.querySelector(".btn_add_pkm");
        let btn_sub_pkm = clone.querySelector(".btn_sub_pkm");
        let pkm_counter = clone.querySelector(".pkm_counter");
        let pkm_evolutions = clone.querySelector(".pkm_evolutions");

        if (pokemon.forms) {
            appendForms(pokemon);
        } else {
            var pokemonCounter = localStorage.getItem(pokemon.id) || 0;

            pkm_number.textContent = `#${pokemon_id}`;
            pkm_number.id = `pkm_number_${pokemon_id}`;

            pkm_img_url.src = `images/${pokemon_id}.png`;
            pkm_img_url.id = `pkm_img_url_${pokemon_id}`;
            pkm_img_url.style = `filter: grayscale(${pokemonCounter > 0 ? 0 : 1});`;

            pkm_name.textContent = pokemon.name;
            pkm_name.id = `pkm_name_${pokemon_id}`;

            btn_add_pkm.id = `pkm_btn_add_pkm_${pokemon_id}`;
            btn_add_pkm.dataset.id = pokemon_id;

            btn_sub_pkm.id = `pkm_btn_sub_pkm_${pokemon_id}`;
            btn_sub_pkm.dataset.id = pokemon_id;

            pkm_counter.id = `pkm_counter_${pokemon_id}`;
            pkm_counter.textContent = pokemonCounter;

            pkm_evolutions.id = `pkm_evolutions_${pokemon_id}`;



            if (!Object.hasOwn(pokemon, 'preEvolution') && !Object.hasOwn(pokemon, 'evolutions')) {
                clone.querySelector('.pkm_evo_container').classList.add('d-none');
            }
    
            if (pokemon.preEvolution) {
                let preevo = pokemon.preEvolution;
                //const image = document.createElement('img');
                const cloneEvo = document.importNode(templateEvo.content, true);
                let image = cloneEvo.querySelector('.evo-icon')
                image.src = `images/${preevo}.png`;
                pkm_evolutions.appendChild(cloneEvo);
            }
    
            pokemon.evolutions?.forEach((evo) => {
                //const image = document.createElement('img');
                const cloneEvo = document.importNode(templateEvo.content, true);
                let image = cloneEvo.querySelector('.evo-icon')
                image.src = `images/${evo}.png`;
                pkm_evolutions.appendChild(cloneEvo);
            });
    
            list.appendChild(clone);
        }
    });

} else {
    alert('Template element unsupported.');
}

function appendForms(pokemon) {
    const pokemon_id = pokemon.id;
    pokemon.forms.forEach((form) => {
        const form_id = form.id;
        const clone = document.importNode(template.content, true);
        let pkm_number = clone.querySelector(".pkm_number");
        let pkm_img_url = clone.querySelector(".pkm_img_url");
        let pkm_name = clone.querySelector(".pkm_name");
        let btn_add_pkm = clone.querySelector(".btn_add_pkm");
        let btn_sub_pkm = clone.querySelector(".btn_sub_pkm");
        let pkm_counter = clone.querySelector(".pkm_counter");
        let pkm_evolutions = clone.querySelector(".pkm_evolutions");

        var pokemonCounter = localStorage.getItem(`${pokemon_id}-${form_id}`) || 0;

        pkm_number.textContent = `#${pokemon_id}`;
        pkm_number.id = `pkm_number_${pokemon_id}-${form_id}`;

        pkm_img_url.src = `images/${pokemon_id}-${form_id}.png`;
        pkm_img_url.id = `pkm_img_url_${pokemon_id}-${form_id}`;
        pkm_img_url.style = `filter: grayscale(${pokemonCounter > 0 ? 0 : 1});`;

        pkm_name.textContent = `${pokemon.name} (${form.name})`;
        pkm_name.id = `pkm_name_${pokemon_id}-${form_id}`;

        btn_add_pkm.id = `pkm_btn_add_pkm_${pokemon_id}-${form_id}`;
        btn_add_pkm.dataset.id = `${pokemon_id}-${form_id}`;

        btn_sub_pkm.id = `pkm_btn_sub_pkm_${pokemon_id}-${form_id}`;
        btn_sub_pkm.dataset.id = `${pokemon_id}-${form_id}`;

        pkm_counter.id = `pkm_counter_${pokemon_id}-${form_id}`;
        pkm_counter.textContent = pokemonCounter;

        pkm_evolutions.id = `pkm_evolutions_${pokemon_id}-${form_id}`;

        if (!Object.hasOwn(pokemon, 'preEvolution') && !Object.hasOwn(pokemon, 'evolutions')) {
            clone.querySelector('.pkm_evo_container').classList.add('d-none');
        }

        list.appendChild(clone);
    });
}

function addPokemon(element) {
    const counterElement = document.querySelector(`#pkm_counter_${element.dataset.id}`);
    //let number = parseInt(counterElement.textContent, 10);
    let number = localStorage.getItem(`${element.dataset.id}`) || 0;
    number++;
    localStorage.setItem(`${element.dataset.id}`, number);
    document.getElementById(`pkm_img_url_${element.dataset.id}`).style = `filter: grayscale(${number > 0 ? 0 : 1});`
    counterElement.textContent = localStorage.getItem(`${element.dataset.id}`);
}

function substractPokemon(element) {
    const counterElement = document.querySelector(`#pkm_counter_${element.dataset.id}`);
    //let number = parseInt(counterElement.textContent, 10);
    let number = localStorage.getItem(`${element.dataset.id}`) || 0;
    number--;
    localStorage.setItem(`${element.dataset.id}`, Math.max(number, 0));
    document.getElementById(`pkm_img_url_${element.dataset.id}`).style = `filter: grayscale(${number > 0 ? 0 : 1});`
    counterElement.textContent = localStorage.getItem(`${element.dataset.id}`);
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
    var dlBtn = document.getElementById("export_checklist");

    dlBtn.setAttribute("href", window.URL.createObjectURL(myFile));
    dlBtn.setAttribute("download", fileName);
}

function importFile() {
    var reader = new FileReader();
    console.log(reader)

    // var data = JSON.parse(/*paste stringified JSON from clipboard*/);
    // Object.keys(data).forEach(function (k) {
    //     localStorage.setItem(k, data[k]);
    // });
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

document.getElementById('file-upload').addEventListener('change', function(e) {
    let file = document.getElementById('file-upload').files[0];

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