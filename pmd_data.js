const PokemonPMDData = Object.freeze ({
  [Species.Bulbasaur]: { bodySize: 1, friendArea: "BEAU_PLAINS", recruitRate: 125 },
  [Species.Ivysaur]: { bodySize: 1, friendArea: "BEAU_PLAINS", recruitRate: -190 },
  [Species.Venusaur]: { bodySize: 1, friendArea: "BEAU_PLAINS", recruitRate: -999 },

  [Species.Charmander]: { bodySize: 1, friendArea: "MT_CLEFT", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: 117 },
  [Species.Charmeleon]: { bodySize: 1, friendArea: "MT_CLEFT", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: -190 },
  [Species.Charizard]: { bodySize: 1, friendArea: "MT_CLEFT", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: -999 },

  [Species.Squirtle]: { bodySize: 1, friendArea: "TURTLESHELL_POND", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 117 },
  [Species.Wartortle]: { bodySize: 1, friendArea: "TURTLESHELL_POND", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -190 },
  [Species.Blastoise]: { bodySize: 1, friendArea: "TURTLESHELL_POND", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -339 },

  [Species.Caterpie]: { bodySize: 1, friendArea: "MIST_RISE_FOREST", recruitRate: 102 },
  [Species.Metapod]: { bodySize: 1, friendArea: "MIST_RISE_FOREST", recruitRate: -190 },
  [Species.Butterfree]: { bodySize: 1, friendArea: "MIST_RISE_FOREST", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },

  [Species.Weedle]: { bodySize: 1, friendArea: "MIST_RISE_FOREST", recruitRate: 114 },
  [Species.Kakuna]: { bodySize: 1, friendArea: "MIST_RISE_FOREST", recruitRate: -190 },
  [Species.Beedrill]: { bodySize: 1, friendArea: "MIST_RISE_FOREST", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },

  [Species.Pidgey]: { bodySize: 1, friendArea: "FLYAWAY_FOREST", recruitRate: 101 },
  [Species.Pidgeotto]: { bodySize: 1, friendArea: "FLYAWAY_FOREST", recruitRate: -190 },
  [Species.Pidgeot]: { bodySize: 1, friendArea: "FLYAWAY_FOREST", recruitRate: -999 },

  [Species.Rattata]: { bodySize: 1, friendArea: "WILD_PLAINS", recruitRate: 95 },
  [Species.Raticate]: { bodySize: 1, friendArea: "WILD_PLAINS", recruitRate: -999 },

  [Species.Spearow]: { bodySize: 1, friendArea: "RAVAGED_FIELD", recruitRate: 119 },
  [Species.Fearow]: { bodySize: 1, friendArea: "RAVAGED_FIELD", recruitRate: -999 },

  [Species.Ekans]: { bodySize: 1, friendArea: "WILD_PLAINS", recruitRate: 124 },
  [Species.Arbok]: { bodySize: 1, friendArea: "WILD_PLAINS", recruitRate: -999 },

  [Species.Pikachu]: { bodySize: 1, friendArea: "ENERGETIC_FOREST", recruitRate: -190 },
  [Species.Raichu]: { bodySize: 1, friendArea: "ENERGETIC_FOREST", recruitRate: -999 },

  [Species.Sandshrew]: { bodySize: 1, friendArea: "FURNACE_DESERT", recruitRate: 104 },
  [Species.Sandslash]: { bodySize: 1, friendArea: "FURNACE_DESERT", recruitRate: -999 },

  [Species.NidoranF]: { bodySize: 1, friendArea: "SAFARI", recruitRate: 133 },
  [Species.Nidorina]: { bodySize: 1, friendArea: "SAFARI", recruitRate: -190 },
  [Species.Nidoqueen]: { bodySize: 1, friendArea: "SAFARI", recruitRate: -999 },

  [Species.NidoranM]: { bodySize: 1, friendArea: "SAFARI", recruitRate: 126 },
  [Species.Nidorino]: { bodySize: 1, friendArea: "SAFARI", recruitRate: -190 },
  [Species.Nidoking]: { bodySize: 1, friendArea: "SAFARI", recruitRate: -999 },

  [Species.Clefairy]: { bodySize: 1, friendArea: "MT_MOONVIEW", recruitRate: -190 },
  [Species.Clefable]: { bodySize: 1, friendArea: "MT_MOONVIEW", recruitRate: -999 },

  [Species.Vulpix]: { bodySize: 1, friendArea: "DARKNESS_RIDGE", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: 122 },
  [Species.Ninetales]: { bodySize: 1, friendArea: "DARKNESS_RIDGE", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: -999 },

  [Species.Jigglypuff]: { bodySize: 1, friendArea: "SKY_BLUE_PLAINS", recruitRate: -190 },
  [Species.Wigglytuff]: { bodySize: 1, friendArea: "SKY_BLUE_PLAINS", recruitRate: -999 },

  [Species.Zubat]: { bodySize: 1, friendArea: "ECHO_CAVE", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 137 },
  [Species.Golbat]: { bodySize: 1, friendArea: "ECHO_CAVE", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -190 },

  [Species.Oddish]: { bodySize: 1, friendArea: "JUNGLE", recruitRate: 120 },
  [Species.Gloom]: { bodySize: 1, friendArea: "JUNGLE", recruitRate: -190 },
  [Species.Vileplume]: { bodySize: 1, friendArea: "JUNGLE", recruitRate: -999 },

  [Species.Paras]: { bodySize: 1, friendArea: "MUSHROOM_FOREST", recruitRate: 114 },
  [Species.Parasect]: { bodySize: 1, friendArea: "MUSHROOM_FOREST", recruitRate: -999 },

  [Species.Venonat]: { bodySize: 1, friendArea: "SECRETIVE_FOREST", recruitRate: 114 },
  [Species.Venomoth]: { bodySize: 1, friendArea: "SECRETIVE_FOREST", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },

  [Species.Diglett]: { bodySize: 1, friendArea: "BOULDER_CAVE", recruitRate: 109 },
  [Species.Dugtrio]: { bodySize: 1, friendArea: "BOULDER_CAVE", recruitRate: -999 },

  [Species.Meowth]: { bodySize: 1, friendArea: "ENERGETIC_FOREST", recruitRate: 120 },
  [Species.Persian]: { bodySize: 1, friendArea: "ENERGETIC_FOREST", recruitRate: -999 },

  [Species.Psyduck]: { bodySize: 1, friendArea: "TURTLESHELL_POND", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 108 },
  [Species.Golduck]: { bodySize: 1, friendArea: "TURTLESHELL_POND", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Mankey]: { bodySize: 1, friendArea: "ENERGETIC_FOREST", recruitRate: 109 },
  [Species.Primeape]: { bodySize: 1, friendArea: "ENERGETIC_FOREST", recruitRate: -999 },

  [Species.Growlithe]: { bodySize: 1, friendArea: "SCORCHED_PLAINS", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: 106 },
  [Species.Arcanine]: { bodySize: 1, friendArea: "SCORCHED_PLAINS", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: -999 },

  [Species.Poliwag]: { bodySize: 1, friendArea: "TADPOLE_POND", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 81 },
  [Species.Poliwhirl]: { bodySize: 1, friendArea: "TADPOLE_POND", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -190 },
  [Species.Poliwrath]: { bodySize: 1, friendArea: "TADPOLE_POND", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Abra]: { bodySize: 1, friendArea: "DECREPIT_LAB", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 104 },
  [Species.Kadabra]: { bodySize: 1, friendArea: "DECREPIT_LAB", recruitRate: -190 },
  [Species.Alakazam]: { bodySize: 1, friendArea: "DECREPIT_LAB", recruitRate: -999 },

  [Species.Machop]: { bodySize: 1, friendArea: "MT_DISCIPLINE", recruitRate: 105 },
  [Species.Machoke]: { bodySize: 1, friendArea: "MT_DISCIPLINE", recruitRate: -190 },
  [Species.Machamp]: { bodySize: 1, friendArea: "MT_DISCIPLINE", recruitRate: -999 },

  [Species.Bellsprout]: { bodySize: 1, friendArea: "JUNGLE", recruitRate: 93 },
  [Species.Weepinbell]: { bodySize: 1, friendArea: "JUNGLE", recruitRate: -190 },
  [Species.Victreebel]: { bodySize: 1, friendArea: "JUNGLE", recruitRate: -999 },

  [Species.Tentacool]: { bodySize: 1, friendArea: "BOUNTIFUL_SEA", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 83 },
  [Species.Tentacruel]: { bodySize: 1, friendArea: "BOUNTIFUL_SEA", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -300 },

  [Species.Geodude]: { bodySize: 1, friendArea: "MT_DEEPGREEN", recruitRate: 91 },
  [Species.Graveler]: { bodySize: 1, friendArea: "MT_DEEPGREEN", recruitRate: -190 },
  [Species.Golem]: { bodySize: 1, friendArea: "MT_DEEPGREEN", recruitRate: -300 },

  [Species.Ponyta]: { bodySize: 1, friendArea: "SCORCHED_PLAINS", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: 109 },
  [Species.Rapidash]: { bodySize: 1, friendArea: "SCORCHED_PLAINS", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: -999 },

  [Species.Slowpoke]: { bodySize: 1, friendArea: "BOUNTIFUL_SEA", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 120 },
  [Species.Slowbro]: { bodySize: 1, friendArea: "BOUNTIFUL_SEA", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Magnemite]: { bodySize: 1, friendArea: "POWER_PLANT", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 128 },
  [Species.Magneton]: { bodySize: 1, friendArea: "POWER_PLANT", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },

  [Species.Farfetchd]: { bodySize: 1, friendArea: "WILD_PLAINS", recruitRate: 72 },

  [Species.Doduo]: { bodySize: 1, friendArea: "SAFARI", recruitRate: 73 },
  [Species.Dodrio]: { bodySize: 1, friendArea: "SAFARI", recruitRate: -999 },

  [Species.Seel]: { bodySize: 1, friendArea: "ICE_FLOE_BEACH", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 39 },
  [Species.Dewgong]: { bodySize: 1, friendArea: "ICE_FLOE_BEACH", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Grimer]: { bodySize: 1, friendArea: "POISON_SWAMP", recruitRate: 122 },
  [Species.Muk]: { bodySize: 1, friendArea: "POISON_SWAMP", recruitRate: -999 },

  [Species.Shellder]: { bodySize: 1, friendArea: "BOUNTIFUL_SEA", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 122 },
  [Species.Cloyster]: { bodySize: 1, friendArea: "BOUNTIFUL_SEA", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Gastly]: { bodySize: 1, friendArea: "DARKNESS_RIDGE", movementType: "MOVEMENT_TYPE_WALL", recruitRate: 10 },
  [Species.Haunter]: { bodySize: 1, friendArea: "DARKNESS_RIDGE", movementType: "MOVEMENT_TYPE_WALL", recruitRate: -190 },
  [Species.Gengar]: { bodySize: 1, friendArea: "DARKNESS_RIDGE", movementType: "MOVEMENT_TYPE_WALL", recruitRate: -999 },

  [Species.Onix]: { bodySize: 4, friendArea: "BOULDER_CAVE", recruitRate: 96 },

  [Species.Drowzee]: { bodySize: 1, friendArea: "WILD_PLAINS", recruitRate: 79 },
  [Species.Hypno]: { bodySize: 1, friendArea: "WILD_PLAINS", recruitRate: -999 },

  [Species.Krabby]: { bodySize: 1, friendArea: "SHALLOW_BEACH", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 80 },
  [Species.Kingler]: { bodySize: 1, friendArea: "SHALLOW_BEACH", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Voltorb]: { bodySize: 1, friendArea: "POWER_PLANT", recruitRate: 81 },
  [Species.Electrode]: { bodySize: 1, friendArea: "POWER_PLANT", recruitRate: -999 },

  [Species.Exeggcute]: { bodySize: 1, friendArea: "JUNGLE", recruitRate: 60 },
  [Species.Exeggutor]: { bodySize: 1, friendArea: "JUNGLE", recruitRate: -999 },

  [Species.Cubone]: { bodySize: 1, friendArea: "MT_DEEPGREEN", recruitRate: 105 },
  [Species.Marowak]: { bodySize: 1, friendArea: "MT_DEEPGREEN", recruitRate: -999 },

  [Species.Hitmonlee]: { bodySize: 1, friendArea: "MT_DISCIPLINE", recruitRate: -999 },
  [Species.Hitmonchan]: { bodySize: 1, friendArea: "MT_DISCIPLINE", recruitRate: -999 },

  [Species.Lickitung]: { bodySize: 1, friendArea: "SKY_BLUE_PLAINS", recruitRate: 86 },

  [Species.Koffing]: { bodySize: 1, friendArea: "POISON_SWAMP", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 79 },
  [Species.Weezing]: { bodySize: 1, friendArea: "POISON_SWAMP", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },

  [Species.Rhyhorn]: { bodySize: 1, friendArea: "SAFARI", recruitRate: 77 },
  [Species.Rhydon]: { bodySize: 1, friendArea: "SAFARI", recruitRate: -999 },

  [Species.Chansey]: { bodySize: 1, friendArea: "SKY_BLUE_PLAINS", recruitRate: 69 },

  [Species.Tangela]: { bodySize: 1, friendArea: "JUNGLE", recruitRate: 74 },

  [Species.Kangaskhan]: { bodySize: 1, friendArea: "SAFARI", recruitRate: 76 },

  [Species.Horsea]: { bodySize: 1, friendArea: "TREASURE_SEA", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 124 },
  [Species.Seadra]: { bodySize: 1, friendArea: "TREASURE_SEA", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -190 },

  [Species.Goldeen]: { bodySize: 1, friendArea: "RUB_A_DUB_RIVER", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 119 },
  [Species.Seaking]: { bodySize: 1, friendArea: "RUB_A_DUB_RIVER", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Staryu]: { bodySize: 1, friendArea: "BOUNTIFUL_SEA", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 89 },
  [Species.Starmie]: { bodySize: 1, friendArea: "BOUNTIFUL_SEA", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.MrMime]: { bodySize: 1, friendArea: "DECREPIT_LAB", recruitRate: 74 },

  [Species.Scyther]: { bodySize: 1, friendArea: "OVERGROWN_FOREST", recruitRate: 100 },

  [Species.Jynx]: { bodySize: 1, friendArea: "FRIGID_CAVERN", recruitRate: -999 },

  [Species.Electabuzz]: { bodySize: 1, friendArea: "POWER_PLANT", recruitRate: -999 },

  [Species.Magmar]: { bodySize: 1, friendArea: "CRATER", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: -999 },

  [Species.Pinsir]: { bodySize: 1, friendArea: "OVERGROWN_FOREST", recruitRate: 83 },

  [Species.Tauros]: { bodySize: 1, friendArea: "SAFARI", recruitRate: 79 },

  [Species.Magikarp]: { bodySize: 1, friendArea: "WATERFALL_LAKE", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 92 },
  [Species.Gyarados]: { bodySize: 4, friendArea: "WATERFALL_LAKE", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },

  [Species.Lapras]: { bodySize: 4, friendArea: "MYSTIC_LAKE", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 67 },

  [Species.Ditto]: { bodySize: 1, friendArea: "DECREPIT_LAB", recruitRate: 68 },

  [Species.Eevee]: { bodySize: 1, friendArea: "TRANSFORM_FOREST", recruitRate: 102 },
  [Species.Vaporeon]: { bodySize: 1, friendArea: "TRANSFORM_FOREST", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },
  [Species.Jolteon]: { bodySize: 1, friendArea: "TRANSFORM_FOREST", recruitRate: -999 },
  [Species.Flareon]: { bodySize: 1, friendArea: "TRANSFORM_FOREST", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: -999 },

  [Species.Porygon]: { bodySize: 1, friendArea: "DECREPIT_LAB", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 76 },

  [Species.Omanyte]: { bodySize: 1, friendArea: "DEEP_SEA_FLOOR", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 80 },
  [Species.Omastar]: { bodySize: 1, friendArea: "DEEP_SEA_FLOOR", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Kabuto]: { bodySize: 1, friendArea: "DEEP_SEA_FLOOR", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 72 },
  [Species.Kabutops]: { bodySize: 1, friendArea: "DEEP_SEA_FLOOR", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Aerodactyl]: { bodySize: 1, friendArea: "ANCIENT_RELIC", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 84 },

  [Species.Snorlax]: { bodySize: 1, friendArea: "ENERGETIC_FOREST", recruitRate: 20 },

  [Species.Articuno]: { bodySize: 4, friendArea: "LEGENDARY_ISLAND", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 300 },
  [Species.Zapdos]: { bodySize: 4, friendArea: "LEGENDARY_ISLAND", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 300 },
  [Species.Moltres]: { bodySize: 4, friendArea: "LEGENDARY_ISLAND", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 300 },

  [Species.Dratini]: { bodySize: 1, friendArea: "MYSTIC_LAKE", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 110 },
  [Species.Dragonair]: { bodySize: 1, friendArea: "MYSTIC_LAKE", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -190 },
  [Species.Dragonite]: { bodySize: 4, friendArea: "MYSTIC_LAKE", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Mewtwo]: { bodySize: 1, friendArea: "CRYPTIC_CAVE", recruitRate: 999 },
  [Species.Mew]: { bodySize: 1, friendArea: "FINAL_ISLAND", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 9 },
  
  [Species.Chikorita]: { bodySize: 1, friendArea: "BEAU_PLAINS", recruitRate: 114 },
  [Species.Bayleef]: { bodySize: 1, friendArea: "BEAU_PLAINS", recruitRate: -190 },
  [Species.Meganium]: { bodySize: 1, friendArea: "BEAU_PLAINS", recruitRate: -999 },

  [Species.Cyndaquil]: { bodySize: 1, movementType: "MOVEMENT_TYPE_LAVA", friendArea: "SCORCHED_PLAINS", recruitRate: 112 },
  [Species.Quilava]: { bodySize: 1, movementType: "MOVEMENT_TYPE_LAVA", friendArea: "SCORCHED_PLAINS", recruitRate: -190 },
  [Species.Typhlosion]: { bodySize: 1, movementType: "MOVEMENT_TYPE_LAVA", friendArea: "SCORCHED_PLAINS", recruitRate: -999 },

  [Species.Totodile]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "RUB_A_DUB_RIVER", recruitRate: 114 },
  [Species.Croconaw]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "RUB_A_DUB_RIVER", recruitRate: -190 },
  [Species.Feraligatr]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "RUB_A_DUB_RIVER", recruitRate: -339 },

  [Species.Sentret]: { bodySize: 1, friendArea: "THUNDER_MEADOW", recruitRate: 73 },
  [Species.Furret]: { bodySize: 1, friendArea: "THUNDER_MEADOW", recruitRate: -999 },

  [Species.Hoothoot]: { bodySize: 1, friendArea: "FLYAWAY_FOREST", recruitRate: 70 },
  [Species.Noctowl]: { bodySize: 1, friendArea: "FLYAWAY_FOREST", recruitRate: -999 },

  [Species.Ledyba]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "MIST_RISE_FOREST", recruitRate: 121 },
  [Species.Ledian]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "MIST_RISE_FOREST", recruitRate: -999 },

  [Species.Spinarak]: { bodySize: 1, friendArea: "SECRETIVE_FOREST", recruitRate: 78 },
  [Species.Ariados]: { bodySize: 1, friendArea: "SECRETIVE_FOREST", recruitRate: -999 },

  [Species.Crobat]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "ECHO_CAVE", recruitRate: -999 },

  [Species.Chinchou]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "DEEP_SEA_FLOOR", recruitRate: 87 },
  [Species.Lanturn]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "DEEP_SEA_FLOOR", recruitRate: -999 },

  [Species.Pichu]: { bodySize: 1, friendArea: "ENERGETIC_FOREST", recruitRate: 51 },

  [Species.Cleffa]: { bodySize: 1, friendArea: "MT_MOONVIEW", recruitRate: 131 },

  [Species.Igglybuff]: { bodySize: 1, friendArea: "SKY_BLUE_PLAINS", recruitRate: 113 },

  [Species.Togepi]: { bodySize: 1, friendArea: "FLYAWAY_FOREST", recruitRate: 79 },
  [Species.Togetic]: { bodySize: 1, friendArea: "FLYAWAY_FOREST", recruitRate: -999 },

  [Species.Natu]: { bodySize: 1, friendArea: "FLYAWAY_FOREST", recruitRate: 94 },
  [Species.Xatu]: { bodySize: 1, friendArea: "FLYAWAY_FOREST", recruitRate: -999 },

  [Species.Mareep]: { bodySize: 1, friendArea: "THUNDER_MEADOW", recruitRate: 119 },
  [Species.Flaaffy]: { bodySize: 1, friendArea: "THUNDER_MEADOW", recruitRate: -190 },
  [Species.Ampharos]: { bodySize: 1, friendArea: "THUNDER_MEADOW", recruitRate: -999 },

  [Species.Bellossom]: { bodySize: 1, friendArea: "JUNGLE", recruitRate: -999 },

  [Species.Marill]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "TURTLESHELL_POND", recruitRate: -190 },
  [Species.Azumarill]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "TURTLESHELL_POND", recruitRate: -999 },

  [Species.Sudowoodo]: { bodySize: 1, friendArea: "OVERGROWN_FOREST", recruitRate: 104 },
  [Species.Politoed]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "TADPOLE_POND", recruitRate: -999 },

  [Species.Hoppip]: { bodySize: 1, friendArea: "BEAU_PLAINS", recruitRate: 85 },
  [Species.Skiploom]: { bodySize: 1, friendArea: "BEAU_PLAINS", recruitRate: -190 },
  [Species.Jumpluff]: { bodySize: 1, friendArea: "BEAU_PLAINS", recruitRate: -999 },

  [Species.Aipom]: { bodySize: 1, friendArea: "ENERGETIC_FOREST", recruitRate: 72 },
  
  [Species.Sunkern]: { bodySize: 1, friendArea: "JUNGLE", recruitRate: 52 },
  [Species.Sunflora]: { bodySize: 1, friendArea: "JUNGLE", recruitRate: -999 },

  [Species.Yanma]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "MIST_RISE_FOREST", recruitRate: 74 },

  [Species.Wooper]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "PEANUT_SWAMP", recruitRate: 119 },
  [Species.Quagsire]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "PEANUT_SWAMP", recruitRate: -999 },

  [Species.Espeon]: { bodySize: 1, friendArea: "TRANSFORM_FOREST", recruitRate: -999 },
  [Species.Umbreon]: { bodySize: 1, friendArea: "TRANSFORM_FOREST", recruitRate: -999 },

  [Species.Murkrow]: { bodySize: 1, friendArea: "FLYAWAY_FOREST", recruitRate: 72 },

  [Species.Slowking]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "BOUNTIFUL_SEA", recruitRate: -999 },

  [Species.Misdreavus]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WALL", friendArea: "DARKNESS_RIDGE", recruitRate: 88 },

  [Species.Unown]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_AN", recruitRate: 18 },
  [Species.UnownB]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_AN", recruitRate: 18 },
  [Species.UnownC]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_AN", recruitRate: 18 },
  [Species.UnownD]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_AN", recruitRate: 18 },
  [Species.UnownE]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_AN", recruitRate: 18 },
  [Species.UnownF]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_AN", recruitRate: 18 },
  [Species.UnownG]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_AN", recruitRate: 18 },
  [Species.UnownH]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_AN", recruitRate: 18 },
  [Species.UnownI]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_AN", recruitRate: 18 },
  [Species.UnownJ]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_AN", recruitRate: 18 },
  [Species.UnownK]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_AN", recruitRate: 18 },
  [Species.UnownL]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_AN", recruitRate: 18 },
  [Species.UnownM]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_AN", recruitRate: 18 },
  [Species.UnownN]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_AN", recruitRate: 18 },
  [Species.UnownO]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_O_EXCLAIM", recruitRate: 18 },
  [Species.UnownP]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_O_EXCLAIM", recruitRate: 18 },
  [Species.UnownQ]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_O_EXCLAIM", recruitRate: 18 },
  [Species.UnownR]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_O_EXCLAIM", recruitRate: 18 },
  [Species.UnownS]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_O_EXCLAIM", recruitRate: 18 },
  [Species.UnownT]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_O_EXCLAIM", recruitRate: 18 },
  [Species.UnownU]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_O_EXCLAIM", recruitRate: 18 },
  [Species.UnownV]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_O_EXCLAIM", recruitRate: 18 },
  [Species.UnownW]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_O_EXCLAIM", recruitRate: 18 },
  [Species.UnownX]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_O_EXCLAIM", recruitRate: 18 },
  [Species.UnownY]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_O_EXCLAIM", recruitRate: 18 },
  [Species.UnownZ]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_O_EXCLAIM", recruitRate: 18 },
  [Species.UnownExclamation]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_O_EXCLAIM", recruitRate: 1 },
  [Species.UnownQuestion]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "AGED_CHAMBER_O_EXCLAIM", recruitRate: 1 },

  [Species.Wobbuffet]: { bodySize: 1, friendArea: "ECHO_CAVE", recruitRate: -999 },

  [Species.Girafarig]: { bodySize: 1, friendArea: "SKY_BLUE_PLAINS", recruitRate: 76 },

  [Species.Pineco]: { bodySize: 1, friendArea: "SECRETIVE_FOREST", recruitRate: 94 },
  [Species.Forretress]: { bodySize: 1, friendArea: "SECRETIVE_FOREST", recruitRate: -999 },

  [Species.Dunsparce]: { bodySize: 1, friendArea: "ECHO_CAVE", recruitRate: 76 },

  [Species.Gligar]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "MT_DEEPGREEN", recruitRate: 85 },

  [Species.Steelix]: { bodySize: 4, friendArea: "BOULDER_CAVE", recruitRate: -999 },

  [Species.Snubbull]: { bodySize: 1, friendArea: "SKY_BLUE_PLAINS", recruitRate: 81 },
  [Species.Granbull]: { bodySize: 1, friendArea: "SKY_BLUE_PLAINS", recruitRate: -999 },

  [Species.Qwilfish]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "SERENE_SEA", recruitRate: 69 },

  [Species.Scizor]: { bodySize: 1, friendArea: "OVERGROWN_FOREST", recruitRate: -999 },

  [Species.Shuckle]: { bodySize: 1, friendArea: "MT_DEEPGREEN", recruitRate: 69 },

  [Species.Heracross]: { bodySize: 1, friendArea: "OVERGROWN_FOREST", recruitRate: 26 },

  [Species.Sneasel]: { bodySize: 1, friendArea: "DARKNESS_RIDGE", recruitRate: 77 },

  [Species.Teddiursa]: { bodySize: 1, friendArea: "MT_DEEPGREEN", recruitRate: 114 },
  [Species.Ursaring]: { bodySize: 1, friendArea: "MT_DEEPGREEN", recruitRate: -999 },

  [Species.Slugma]: { bodySize: 1, movementType: "MOVEMENT_TYPE_LAVA", friendArea: "CRATER", recruitRate: 114 },
  [Species.Magcargo]: { bodySize: 1, movementType: "MOVEMENT_TYPE_LAVA", friendArea: "CRATER", recruitRate: -999 },

  [Species.Swinub]: { bodySize: 1, friendArea: "FRIGID_CAVERN", recruitRate: 109 },
  [Species.Piloswine]: { bodySize: 1, friendArea: "FRIGID_CAVERN", recruitRate: -999 },

  [Species.Corsola]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "SHALLOW_BEACH", recruitRate: 83 },

  [Species.Remoraid]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "TREASURE_SEA", recruitRate: 88 },
  [Species.Octillery]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "TREASURE_SEA", recruitRate: -300 },

  [Species.Delibird]: { bodySize: 1, friendArea: "FRIGID_CAVERN", recruitRate: 88 },

  [Species.Mantine]: { bodySize: 2, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "SERENE_SEA", recruitRate: 95 },

  [Species.Skarmory]: { bodySize: 1, friendArea: "RAVAGED_FIELD", recruitRate: 68 },

  [Species.Houndour]: { bodySize: 1, movementType: "MOVEMENT_TYPE_LAVA", friendArea: "RAVAGED_FIELD", recruitRate: 114 },
  [Species.Houndoom]: { bodySize: 1, movementType: "MOVEMENT_TYPE_LAVA", friendArea: "RAVAGED_FIELD", recruitRate: -999 },

  [Species.Kingdra]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "TREASURE_SEA", recruitRate: -999 },

  [Species.Phanpy]: { bodySize: 1, friendArea: "SAFARI", recruitRate: 82 },
  [Species.Donphan]: { bodySize: 1, friendArea: "SAFARI", recruitRate: -999 },

  [Species.Porygon2]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "DECREPIT_LAB", recruitRate: 100 },

  [Species.Stantler]: { bodySize: 1, friendArea: "ENERGETIC_FOREST", recruitRate: 72 },

  [Species.Smeargle]: { bodySize: 1, friendArea: "SKY_BLUE_PLAINS", recruitRate: 68 },

  [Species.Tyrogue]: { bodySize: 1, friendArea: "MT_DISCIPLINE", recruitRate: 80 },
  [Species.Hitmontop]: { bodySize: 1, friendArea: "MT_DISCIPLINE", recruitRate: -999 },

  [Species.Smoochum]: { bodySize: 1, friendArea: "FRIGID_CAVERN", recruitRate: 80 },

  [Species.Elekid]: { bodySize: 1, friendArea: "POWER_PLANT", recruitRate: 103 },

  [Species.Magby]: { bodySize: 1, movementType: "MOVEMENT_TYPE_LAVA", friendArea: "CRATER", recruitRate: 95 },

  [Species.Miltank]: { bodySize: 1, friendArea: "SAFARI", recruitRate: 87 },

  [Species.Blissey]: { bodySize: 1, friendArea: "SKY_BLUE_PLAINS", recruitRate: -999 },

  [Species.Raikou]: { bodySize: 1, friendArea: "SACRED_FIELD", recruitRate: 1 },

  [Species.Entei]: { bodySize: 1, movementType: "MOVEMENT_TYPE_LAVA", friendArea: "SACRED_FIELD", recruitRate: 1 },

  [Species.Suicune]: { bodySize: 1, movementType: "MOVEMENT_TYPE_WATER", friendArea: "SACRED_FIELD", recruitRate: 1 },

  [Species.Larvitar]: { bodySize: 1, friendArea: "MT_CLEFT", recruitRate: 122 },
  [Species.Pupitar]: { bodySize: 1, friendArea: "MT_CLEFT", recruitRate: -190 },
  [Species.Tyranitar]: { bodySize: 1, friendArea: "MT_CLEFT", recruitRate: -999 },

  [Species.Lugia]: { bodySize: 4, movementType: "MOVEMENT_TYPE_WATER", friendArea: "DEEP_SEA_CURRENT", recruitRate: 999 },

  [Species.HoOh]: { bodySize: 4, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "RAINBOW_PEAK", recruitRate: 999 },

  [Species.Celebi]: { bodySize: 1, movementType: "MOVEMENT_TYPE_CHASM", friendArea: "HEALING_FOREST", recruitRate: 999 },
  
  [Species.Treecko]: { bodySize: 1, friendArea: "OVERGROWN_FOREST", recruitRate: 112 },
  [Species.Grovyle]: { bodySize: 1, friendArea: "OVERGROWN_FOREST", recruitRate: -190 },
  [Species.Sceptile]: { bodySize: 1, friendArea: "OVERGROWN_FOREST", recruitRate: -999 },

  [Species.Torchic]: { bodySize: 1, friendArea: "SCORCHED_PLAINS", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: 119 },
  [Species.Combusken]: { bodySize: 1, friendArea: "SCORCHED_PLAINS", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: -190 },
  [Species.Blaziken]: { bodySize: 1, friendArea: "SCORCHED_PLAINS", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: -999 },

  [Species.Mudkip]: { bodySize: 1, friendArea: "PEANUT_SWAMP", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 123 },
  [Species.Marshtomp]: { bodySize: 1, friendArea: "PEANUT_SWAMP", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -190 },
  [Species.Swampert]: { bodySize: 1, friendArea: "PEANUT_SWAMP", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -339 },

  [Species.Poochyena]: { bodySize: 1, friendArea: "WILD_PLAINS", recruitRate: 82 },
  [Species.Mightyena]: { bodySize: 1, friendArea: "WILD_PLAINS", recruitRate: -999 },

  [Species.Zigzagoon]: { bodySize: 1, friendArea: "WILD_PLAINS", recruitRate: 85 },
  [Species.Linoone]: { bodySize: 1, friendArea: "WILD_PLAINS", recruitRate: -999 },

  [Species.Wurmple]: { bodySize: 1, friendArea: "MIST_RISE_FOREST", recruitRate: 74 },
  [Species.Silcoon]: { bodySize: 1, friendArea: "MIST_RISE_FOREST", recruitRate: -190 },
  [Species.Beautifly]: { bodySize: 1, friendArea: "MIST_RISE_FOREST", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },
  [Species.Cascoon]: { bodySize: 1, friendArea: "MIST_RISE_FOREST", recruitRate: -190 },
  [Species.Dustox]: { bodySize: 1, friendArea: "MIST_RISE_FOREST", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },

  [Species.Lotad]: { bodySize: 1, friendArea: "TADPOLE_POND", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 80 },
  [Species.Lombre]: { bodySize: 1, friendArea: "TADPOLE_POND", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -190 },
  [Species.Ludicolo]: { bodySize: 1, friendArea: "TADPOLE_POND", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Seedot]: { bodySize: 1, friendArea: "MUSHROOM_FOREST", recruitRate: 112 },
  [Species.Nuzleaf]: { bodySize: 1, friendArea: "MUSHROOM_FOREST", recruitRate: -190 },
  [Species.Shiftry]: { bodySize: 1, friendArea: "MUSHROOM_FOREST", recruitRate: -300 },

  [Species.Taillow]: { bodySize: 1, friendArea: "BEAU_PLAINS", recruitRate: 75 },
  [Species.Swellow]: { bodySize: 1, friendArea: "BEAU_PLAINS", recruitRate: -999 },

  [Species.Wingull]: { bodySize: 1, friendArea: "SHALLOW_BEACH", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 125 },
  [Species.Pelipper]: { bodySize: 1, friendArea: "SHALLOW_BEACH", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },

  [Species.Ralts]: { bodySize: 1, friendArea: "SKY_BLUE_PLAINS", recruitRate: 10 },
  [Species.Kirlia]: { bodySize: 1, friendArea: "SKY_BLUE_PLAINS", recruitRate: -190 },
  [Species.Gardevoir]: { bodySize: 1, friendArea: "SKY_BLUE_PLAINS", recruitRate: -999 },

  [Species.Surskit]: { bodySize: 1, friendArea: "TADPOLE_POND", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 38 },
  [Species.Masquerain]: { bodySize: 1, friendArea: "TADPOLE_POND", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },

  [Species.Shroomish]: { bodySize: 1, friendArea: "MUSHROOM_FOREST", recruitRate: 77 },
  [Species.Breloom]: { bodySize: 1, friendArea: "MUSHROOM_FOREST", recruitRate: -999 },

  [Species.Slakoth]: { bodySize: 1, friendArea: "ENERGETIC_FOREST", recruitRate: 113 },
  [Species.Vigoroth]: { bodySize: 1, friendArea: "ENERGETIC_FOREST", recruitRate: -190 },
  [Species.Slaking]: { bodySize: 1, friendArea: "ENERGETIC_FOREST", recruitRate: -999 },

  [Species.Nincada]: { bodySize: 1, friendArea: "SECRETIVE_FOREST", recruitRate: 74 },
  [Species.Ninjask]: { bodySize: 1, friendArea: "SECRETIVE_FOREST", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },
  [Species.Shedinja]: { bodySize: 1, friendArea: "SECRETIVE_FOREST", movementType: "MOVEMENT_TYPE_WALL", recruitRate: -999 },

  [Species.Whismur]: { bodySize: 1, friendArea: "ECHO_CAVE", recruitRate: 88 },
  [Species.Loudred]: { bodySize: 1, friendArea: "ECHO_CAVE", recruitRate: -190 },
  [Species.Exploud]: { bodySize: 1, friendArea: "ECHO_CAVE", recruitRate: -999 },

  [Species.Makuhita]: { bodySize: 1, friendArea: "MT_DISCIPLINE", recruitRate: 102 },
  [Species.Hariyama]: { bodySize: 1, friendArea: "MT_DISCIPLINE", recruitRate: -999 },

  [Species.Azurill]: { bodySize: 1, friendArea: "TURTLESHELL_POND", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 102 },

  [Species.Nosepass]: { bodySize: 1, friendArea: "ECHO_CAVE", recruitRate: 74 },

  [Species.Skitty]: { bodySize: 1, friendArea: "ENERGETIC_FOREST", recruitRate: 72 },
  [Species.Delcatty]: { bodySize: 1, friendArea: "ENERGETIC_FOREST", recruitRate: -999 },

  [Species.Sableye]: { bodySize: 1, friendArea: "DARKNESS_RIDGE", recruitRate: 82 },

  [Species.Mawile]: { bodySize: 1, friendArea: "ECHO_CAVE", recruitRate: 71 },

  [Species.Aron]: { bodySize: 1, friendArea: "MT_CLEFT", recruitRate: 78 },
  [Species.Lairon]: { bodySize: 1, friendArea: "MT_CLEFT", recruitRate: -190 },
  [Species.Aggron]: { bodySize: 1, friendArea: "MT_CLEFT", recruitRate: -999 },

  [Species.Meditite]: { bodySize: 1, friendArea: "MT_DISCIPLINE", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 55 },
  [Species.Medicham]: { bodySize: 1, friendArea: "MT_DISCIPLINE", recruitRate: -999 },

  [Species.Electrike]: { bodySize: 1, friendArea: "THUNDER_MEADOW", recruitRate: 78 },
  [Species.Manectric]: { bodySize: 1, friendArea: "THUNDER_MEADOW", recruitRate: -999 },

  [Species.Plusle]: { bodySize: 1, friendArea: "THUNDER_MEADOW", recruitRate: 350 },
  [Species.Minun]: { bodySize: 1, friendArea: "THUNDER_MEADOW", recruitRate: 350 },

  [Species.Volbeat]: { bodySize: 1, friendArea: "RUB_A_DUB_RIVER", recruitRate: 86 },

  [Species.Illumise]: { bodySize: 1, friendArea: "RUB_A_DUB_RIVER", recruitRate: 73 },

  [Species.Roselia]: { bodySize: 1, friendArea: "BEAU_PLAINS", recruitRate: 70 },

  [Species.Gulpin]: { bodySize: 1, friendArea: "POISON_SWAMP", recruitRate: 69 },
  [Species.Swalot]: { bodySize: 1, friendArea: "POISON_SWAMP", recruitRate: -999 },

  [Species.Carvanha]: { bodySize: 1, friendArea: "TREASURE_SEA", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 89 },
  [Species.Sharpedo]: { bodySize: 1, friendArea: "TREASURE_SEA", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Wailmer]: { bodySize: 1, friendArea: "SERENE_SEA", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 82 },
  [Species.Wailord]: { bodySize: 4, friendArea: "SERENE_SEA", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Numel]: { bodySize: 1, friendArea: "CRATER", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: 81 },
  [Species.Camerupt]: { bodySize: 1, friendArea: "CRATER", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: -999 },

  [Species.Torkoal]: { bodySize: 1, friendArea: "CRATER", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: 81 },

  [Species.Spoink]: { bodySize: 1, friendArea: "MT_DEEPGREEN", recruitRate: 75 },
  [Species.Grumpig]: { bodySize: 1, friendArea: "MT_DEEPGREEN", recruitRate: -999 },

  [Species.Spinda]: { bodySize: 1, friendArea: "MT_DEEPGREEN", recruitRate: 72 },

  [Species.Trapinch]: { bodySize: 1, friendArea: "FURNACE_DESERT", recruitRate: 83 },
  [Species.Vibrava]: { bodySize: 1, friendArea: "FURNACE_DESERT", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -190 },
  [Species.Flygon]: { bodySize: 1, friendArea: "FURNACE_DESERT", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },

  [Species.Cacnea]: { bodySize: 1, friendArea: "FURNACE_DESERT", recruitRate: 72 },
  [Species.Cacturne]: { bodySize: 1, friendArea: "FURNACE_DESERT", recruitRate: -999 },

  [Species.Swablu]: { bodySize: 1, friendArea: "FLYAWAY_FOREST", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 75 },
  [Species.Altaria]: { bodySize: 1, friendArea: "FLYAWAY_FOREST", recruitRate: -999 },

  [Species.Zangoose]: { bodySize: 1, friendArea: "WILD_PLAINS", recruitRate: 72 },

  [Species.Seviper]: { bodySize: 1, friendArea: "WILD_PLAINS", recruitRate: 72 },

  [Species.Lunatone]: { bodySize: 1, friendArea: "MT_MOONVIEW", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 50 },

  [Species.Solrock]: { bodySize: 1, friendArea: "MT_MOONVIEW", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 50 },

  [Species.Barboach]: { bodySize: 1, friendArea: "PEANUT_SWAMP", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 83 },
  [Species.Whiscash]: { bodySize: 1, friendArea: "PEANUT_SWAMP", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Corphish]: { bodySize: 1, friendArea: "TURTLESHELL_POND", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 88 },
  [Species.Crawdaunt]: { bodySize: 1, friendArea: "TURTLESHELL_POND", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Baltoy]: { bodySize: 1, friendArea: "ANCIENT_RELIC", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 56 },
  [Species.Claydol]: { bodySize: 1, friendArea: "ANCIENT_RELIC", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },

  [Species.Lileep]: { bodySize: 1, friendArea: "DEEP_SEA_FLOOR", recruitRate: 73 },
  [Species.Cradily]: { bodySize: 1, friendArea: "DEEP_SEA_FLOOR", recruitRate: -300 },

  [Species.Anorith]: { bodySize: 1, friendArea: "TREASURE_SEA", recruitRate: 87 },
  [Species.Armaldo]: { bodySize: 1, friendArea: "TREASURE_SEA", recruitRate: -999 },

  [Species.Feebas]: { bodySize: 1, friendArea: "WATERFALL_LAKE", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 92 },
  [Species.Milotic]: { bodySize: 4, friendArea: "WATERFALL_LAKE", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Castform]: { bodySize: 1, friendArea: "THUNDER_MEADOW", recruitRate: 74 },

  [Species.Kecleon]: { bodySize: 1, friendArea: "OVERGROWN_FOREST", recruitRate: -339 },

  [Species.Shuppet]: { bodySize: 1, friendArea: "DARKNESS_RIDGE", movementType: "MOVEMENT_TYPE_WALL", recruitRate: 80 },
  [Species.Banette]: { bodySize: 1, friendArea: "DARKNESS_RIDGE", movementType: "MOVEMENT_TYPE_WALL", recruitRate: -999 },

  [Species.Duskull]: { bodySize: 1, friendArea: "DARKNESS_RIDGE", movementType: "MOVEMENT_TYPE_WALL", recruitRate: 75 },
  [Species.Dusclops]: { bodySize: 1, friendArea: "DARKNESS_RIDGE", recruitRate: -999 },

  [Species.Tropius]: { bodySize: 1, friendArea: "JUNGLE", recruitRate: 76 },

  [Species.Chimecho]: { bodySize: 1, friendArea: "THUNDER_MEADOW", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 69 },

  [Species.Absol]: { bodySize: 1, friendArea: "DARKNESS_RIDGE", recruitRate: 68 },

  [Species.Wynaut]: { bodySize: 1, friendArea: "ECHO_CAVE", recruitRate: 96 },

  [Species.Snorunt]: { bodySize: 1, friendArea: "FRIGID_CAVERN", recruitRate: 75 },
  [Species.Glalie]: { bodySize: 1, friendArea: "FRIGID_CAVERN", recruitRate: -999 },

  [Species.Spheal]: { bodySize: 1, friendArea: "ICE_FLOE_BEACH", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 88 },
  [Species.Sealeo]: { bodySize: 1, friendArea: "ICE_FLOE_BEACH", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -190 },
  [Species.Walrein]: { bodySize: 1, friendArea: "ICE_FLOE_BEACH", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Clamperl]: { bodySize: 1, friendArea: "DEEP_SEA_FLOOR", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 85 },
  [Species.Huntail]: { bodySize: 1, friendArea: "DEEP_SEA_FLOOR", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },
  [Species.Gorebyss]: { bodySize: 1, friendArea: "DEEP_SEA_FLOOR", movementType: "MOVEMENT_TYPE_WATER", recruitRate: -999 },

  [Species.Relicanth]: { bodySize: 1, friendArea: "DEEP_SEA_FLOOR", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 79 },

  [Species.Luvdisc]: { bodySize: 1, friendArea: "TREASURE_SEA", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 86 },

  [Species.Bagon]: { bodySize: 1, friendArea: "DRAGON_CAVE", recruitRate: 76 },
  [Species.Shelgon]: { bodySize: 1, friendArea: "DRAGON_CAVE", recruitRate: -190 },
  [Species.Salamence]: { bodySize: 2, friendArea: "DRAGON_CAVE", recruitRate: -999 },

  [Species.Beldum]: { bodySize: 1, friendArea: "MAGNETIC_QUARRY", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 78 },
  [Species.Metang]: { bodySize: 1, friendArea: "MAGNETIC_QUARRY", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -190 },
  [Species.Metagross]: { bodySize: 2, friendArea: "MAGNETIC_QUARRY", recruitRate: -999 },

  [Species.Regirock]: { bodySize: 1, friendArea: "ANCIENT_RELIC", recruitRate: 1 },

  [Species.Regice]: { bodySize: 1, friendArea: "ANCIENT_RELIC", recruitRate: 1 },

  [Species.Registeel]: { bodySize: 1, friendArea: "ANCIENT_RELIC", recruitRate: 1 },

  [Species.Latias]: { bodySize: 1, friendArea: "SOUTHERN_ISLAND", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 1 },

  [Species.Latios]: { bodySize: 2, friendArea: "SOUTHERN_ISLAND", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 1 },

  [Species.Kyogre]: { bodySize: 4, friendArea: "SEAFLOOR_CAVE", movementType: "MOVEMENT_TYPE_WATER", recruitRate: 500 },

  [Species.Groudon]: { bodySize: 4, friendArea: "VOLCANIC_PIT", movementType: "MOVEMENT_TYPE_LAVA", recruitRate: -100 },

  [Species.Rayquaza]: { bodySize: 4, friendArea: "STRATOS_LOOKOUT", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -100 },

  [Species.Jirachi]: { bodySize: 1, friendArea: "MT_MOONVIEW", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: 999 },

  [Species.Deoxys]: { bodySize: 1, friendArea: "ENCLOSED_ISLAND", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -100 },
  [Species.DeoxysAttack]: { bodySize: 1, friendArea: "ENCLOSED_ISLAND", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },
  [Species.DeoxysDefense]: { bodySize: 1, friendArea: "ENCLOSED_ISLAND", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },
  [Species.DeoxysSpeed]: { bodySize: 1, friendArea: "ENCLOSED_ISLAND", movementType: "MOVEMENT_TYPE_CHASM", recruitRate: -999 },
});