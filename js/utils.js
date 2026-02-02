const MAX_POKEMON = 413;

function getImageSrc(pokemonID) {
    return `images/${pokemonID.toString().padStart(3, '0')}.png`;
}

function calculateRecruitRate(pokemonID) {
    const recruitRate = PokemonPMDData[pokemonID].recruitRate;
    return recruitRate <= -340 ? "Can't be recruited" : `${recruitRate / 10}%`;
}

function calculateProbability(probability) {
    return `${probability / 100}%`;
}

function getFloorString(dungeonID, initialFloor, finalFloor) {
    const floorDirection = DungeonList[Number(dungeonID)].stairDirectionUp ? '' : 'B';
    const initialFloorString = `${floorDirection}${initialFloor}F`;
    const finalFloorString = `${floorDirection}${finalFloor}F`;
    return initialFloor === finalFloor ? initialFloorString : `${initialFloorString} - ${finalFloorString}`;
}

function getGameVersionText(pokemonID) {
    const version = getRescueTeamVersion(pokemonID);
    const color = GameColor[version];
    return version ? `<span style="color: ${color}">(${Object.keys(RescueTeamVersion)[version]})</span>` : '';
}

function getRescueTeamVersion(pokemonID) {
    const gameVersion = Object.keys(Exclusives).find((key) => {return Exclusives[key].includes(pokemonID) || RescueTeamVersion.None});
    //return Object.keys(RescueTeamVersion)[gameVersion];
    return Number(gameVersion);
}

function getTotalObtained() {
    return Object.values(localStorage).reduce((acc, curr) => acc + Number(curr), 0)
}

// Get navbar height and set it to a CSS variable
document.documentElement.style.setProperty('--nav-height', `${document.querySelector("#sticky_navbar").offsetHeight}px`);