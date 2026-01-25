const Dungeons = Object.freeze({
    TinyWoods:                                  0,
    ThunderwaveCave:                            1,
    MtSteel:                                    2,
    SinisterWoods:                              3,
    SilentChasm:                                4,
    MtThunder:                                  5,
    MtThunderPeak:                              6,
    GreatCanyon:                                7,
    LapisCave:                                  8,
    MtBlaze:                                    9,
    MtBlazePeak:                                10,
    FrostyForest:                               11,
    FrostyGrotto:                               12,
    MtFreeze:                                   13,
    MtFreezePeak:                               14,
    MagmaCavern:                                15,
    MagmaCavernPit:                             16,
    SkyTower:                                   17,
    SkyTowerSummit:                             18,
    StormySea:                                  19,
    SilverTrench:                               20,
    MeteorCave:                                 21,
    MtFreezePeak2:                              22, // Unused
    WesternCave:                                23,
    Boss3:                                      24, // Unused
    Boss4:                                      25, // Unused
    WishCave:                                   26,
    BuriedRelic:                                27,
    PitfallValley:                              28,
    NorthernRange:                              29,
    Boss9:                                      30, // Unused
    DesertRegion:                               31,
    SouthernCavern:                             32,
    WyvernHill:                                 33,
    FieryField:                                 34,
    NorthwindField:                             35,
    SolarCave:                                  36,
    LightningField:                             37,
    DarknightRelic:                             38,
    WondrousSea:                                39, // Unused
    MurkyCave:                                  40,
    GrandSea:                                   41,
    UproarForest:                               42,
    OddityCave:                                 43,
    RemainsIsland:                              44,
    MarvelousSea:                               45,
    FantasyStrait:                              46,
    RockPath:                                   47,
    SnowPath:                                   48,
    Autopilot:                                  49, // Unused
    D50:                                        50, // Unused
    D51:                                        51, // Unused
    NormalMaze2:                                52, // Unused
    HowlingForest:                              53,
    D54:                                        54, // Unused
    PoisonMaze2:                                55, // Unused
    WaterfallPond:                              56,
    UnownRelic:                                 57,
    JoyousTower:                                58,
    FarOffSea:                                  59,
    MtFaraway:                                  60,
    D61:                                        61, // Unused
    PurityForest:                               62, 

    OutOnRescue:                                63, // Unused
    JoinLocationLeader:                         64, // Unused
    JoinLocationPartner:                        65, // Unused
    UnknownWorld:                               66, // Unused
    FrostyGrotto2:                              67, // Unused
    HowlingForest2:                             68, // Unused
    PokemonSquare:                              69, // Unused
    PokemonSquare2:                             70, // Unused
    RescueTeamBase:                             71, // Unused
    RescueTeamBase2:                            72, // Unused
    AgbSlot:                                    73, // Unused
    JoinLocationClientPokemon:                  74, // Unused
    NormalMaze:                                 75,
    FireMaze:                                   76,
    WaterMaze:                                  77,
    GrassMaze:                                  78,
    ElectricMaze:                               79,
    IceMaze:                                    80,
    FightingMaze:                               81,
    GroundMaze:                                 82,
    FlyingMaze:                                 83,
    PsychicMaze:                                84,
    PoisonMaze:                                 85,
    BugMaze:                                    86,
    RockMaze:                                   87,
    GhostMaze:                                  88,
    DragonMaze:                                 89,
    DarkMaze:                                   90,
    SteelMaze:                                  91,
    TeamShifty:                                 92,
    TeamConstrictor:                            93,
    TeamHydro:                                  94,
    TeamRumblerock:                             95,
    RescueTeam2:                                96, // Unused
    RescueTeamMaze:                             97, // Unused
});

const DungeonsMaxFloor = Object.freeze({
    [Dungeons.TinyWoods]:                       3,
    [Dungeons.ThunderwaveCave]:                 5,
    [Dungeons.MtSteel]:                         9,
    [Dungeons.SinisterWoods]:                   13,
    [Dungeons.SilentChasm]:                     9,
    [Dungeons.MtThunder]:                       10,
    [Dungeons.MtThunderPeak]:                   3,
    [Dungeons.GreatCanyon]:                     12,
    [Dungeons.LapisCave]:                       14,
    [Dungeons.MtBlaze]:                         12,
    [Dungeons.MtBlazePeak]:                     3,
    [Dungeons.FrostyForest]:                    9,
    [Dungeons.FrostyGrotto]:                    5,
    [Dungeons.MtFreeze]:                        15,
    [Dungeons.MtFreezePeak]:                    5,
    [Dungeons.MagmaCavern]:                     23,
    [Dungeons.MagmaCavernPit]:                  3,
    [Dungeons.SkyTower]:                        25,
    [Dungeons.SkyTowerSummit]:                  9,
    [Dungeons.StormySea]:                       40,
    [Dungeons.SilverTrench]:                    99,
    [Dungeons.MeteorCave]:                      20,
    [Dungeons.MtFreezePeak2]:                   4,
    [Dungeons.WesternCave]:                     99,
    [Dungeons.Boss3]:                           20,
    [Dungeons.Boss4]:                           11,
    [Dungeons.WishCave]:                        99,
    [Dungeons.BuriedRelic]:                     99,
    [Dungeons.PitfallValley]:                   25,
    [Dungeons.NorthernRange]:                   25,
    [Dungeons.Boss9]:                           12,
    [Dungeons.DesertRegion]:                    20,
    [Dungeons.SouthernCavern]:                  50,
    [Dungeons.WyvernHill]:                      30,
    [Dungeons.FieryField]:                      30,
    [Dungeons.NorthwindField]:                  30,
    [Dungeons.SolarCave]:                       20,
    [Dungeons.LightningField]:                  30,
    [Dungeons.DarknightRelic]:                  15,
    [Dungeons.WondrousSea]:                     12,
    [Dungeons.MurkyCave]:                       19,
    [Dungeons.GrandSea]:                        30,
    [Dungeons.UproarForest]:                    10,
    [Dungeons.OddityCave]:                      15,
    [Dungeons.RemainsIsland]:                   20,
    [Dungeons.MarvelousSea]:                    20,
    [Dungeons.FantasyStrait]:                   30,
    [Dungeons.RockPath]:                        4,
    [Dungeons.SnowPath]:                        4,
    [Dungeons.Autopilot]:                       10,
    [Dungeons.D50]:                             2,
    [Dungeons.D51]:                             50,
    [Dungeons.NormalMaze]:                      69,
    [Dungeons.HowlingForest]:                   15,
    [Dungeons.D54]:                             30,
    [Dungeons.PoisonMaze]:                      19,
    [Dungeons.WaterfallPond]:                   19,
    [Dungeons.UnownRelic]:                      11,
    [Dungeons.JoyousTower]:                     99,
    [Dungeons.FarOffSea]:                       75,
    [Dungeons.MtFaraway]:                       40,
    [Dungeons.D61]:                             99,
    [Dungeons.PurityForest]:                    99,
});

function isMaze(dungeonID) {
    if (dungeonID >= Dungeons.NormalMaze && dungeonID <= Dungeons.TeamRumblerock) {
        return true;
    }
    return false;
}