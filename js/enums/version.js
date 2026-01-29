const RescueTeamVersion = Object.freeze({
    None:   0,
    Red:    1,
    Blue:   2,
});

const RedRescueTeamExclusives = [
    Species.Porygon,
    Species.Mantine,
    Species.Plusle,
    Species.Roselia,
    Species.Feebas,
    Species.Milotic,
];

const BlueRescueTeamExclusives = [
    Species.Magikarp,
    Species.Gyarados,
    Species.Lapras,
    Species.Aipom,
    Species.Porygon2,
    Species.Minun,
];

const Exclusives = Object.freeze({
    [RescueTeamVersion.Red]: RedRescueTeamExclusives,
    [RescueTeamVersion.Blue]: BlueRescueTeamExclusives,
});

const GameColor = Object.freeze({
    [RescueTeamVersion.None]: '#ffffff',
    [RescueTeamVersion.Red]: '#ff0000',
    [RescueTeamVersion.Blue]: '#0000ff',
});