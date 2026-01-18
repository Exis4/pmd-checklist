var pokemonList = [
  { id: "001", name: "Bulbasaur", evolutions: ["002"] },
  { id: "002", name: "Ivysaur", evolutions: ["003"], preEvolution: "001" },
  { id: "003", name: "Venusaur", preEvolution: "002" },

  { id: "004", name: "Charmander", evolutions: ["005"] },
  { id: "005", name: "Charmeleon", evolutions: ["006"], preEvolution: "004" },
  { id: "006", name: "Charizard", preEvolution: "005" },

  { id: "007", name: "Squirtle", evolutions: ["008"] },
  { id: "008", name: "Wartortle", evolutions: ["009"], preEvolution: "007" },
  { id: "009", name: "Blastoise", preEvolution: "008" },

  { id: "010", name: "Caterpie", evolutions: ["011"] },
  { id: "011", name: "Metapod", evolutions: ["012"], preEvolution: "010" },
  { id: "012", name: "Butterfree", preEvolution: "011" },

  { id: "013", name: "Weedle", evolutions: ["014"] },
  { id: "014", name: "Kakuna", evolutions: ["015"], preEvolution: "013" },
  { id: "015", name: "Beedrill", preEvolution: "014" },

  { id: "016", name: "Pidgey", evolutions: ["017"] },
  { id: "017", name: "Pidgeotto", evolutions: ["018"], preEvolution: "016" },
  { id: "018", name: "Pidgeot", preEvolution: "017" },

  { id: "019", name: "Rattata", evolutions: ["020"] },
  { id: "020", name: "Raticate", preEvolution: "019" },

  { id: "021", name: "Spearow", evolutions: ["022"] },
  { id: "022", name: "Fearow", preEvolution: "021" },

  { id: "023", name: "Ekans", evolutions: ["024"] },
  { id: "024", name: "Arbok", preEvolution: "023" },

  { id: "025", name: "Pikachu", evolutions: ["026"], preEvolution: "172" },
  { id: "026", name: "Raichu", preEvolution: "025" },

  { id: "027", name: "Sandshrew", evolutions: ["028"] },
  { id: "028", name: "Sandslash", preEvolution: "027" },

  { id: "029", name: "Nidoran♀", evolutions: ["030"] },
  { id: "030", name: "Nidorina", evolutions: ["031"], preEvolution: "029" },
  { id: "031", name: "Nidoqueen", preEvolution: "030" },

  { id: "032", name: "Nidoran♂", evolutions: ["033"] },
  { id: "033", name: "Nidorino", evolutions: ["034"], preEvolution: "032" },
  { id: "034", name: "Nidoking", preEvolution: "033" },

  { id: "035", name: "Clefairy", evolutions: ["036"], preEvolution: "173" },
  { id: "036", name: "Clefable", preEvolution: "035" },

  { id: "037", name: "Vulpix", evolutions: ["038"] },
  { id: "038", name: "Ninetales", preEvolution: "037" },

  { id: "039", name: "Jigglypuff", evolutions: ["040"], preEvolution: "174" },
  { id: "040", name: "Wigglytuff", preEvolution: "039" },

  { id: "041", name: "Zubat", evolutions: ["042"] },
  { id: "042", name: "Golbat", evolutions: ["169"], preEvolution: "041" },

  { id: "043", name: "Oddish", evolutions: ["044"] },
  { id: "044", name: "Gloom", evolutions: ["045", "182"], preEvolution: "043" },
  { id: "045", name: "Vileplume", preEvolution: "044" },

  { id: "046", name: "Paras", evolutions: ["047"] },
  { id: "047", name: "Parasect", preEvolution: "046" },

  { id: "048", name: "Venonat", evolutions: ["049"] },
  { id: "049", name: "Venomoth", preEvolution: "048" },

  { id: "050", name: "Diglett", evolutions: ["051"] },
  { id: "051", name: "Dugtrio", preEvolution: "050" },

  { id: "052", name: "Meowth", evolutions: ["053"] },
  { id: "053", name: "Persian", preEvolution: "052" },

  { id: "054", name: "Psyduck", evolutions: ["055"] },
  { id: "055", name: "Golduck", preEvolution: "054" },

  { id: "056", name: "Mankey", evolutions: ["057"] },
  { id: "057", name: "Primeape", preEvolution: "056" },

  { id: "058", name: "Growlithe", evolutions: ["059"] },
  { id: "059", name: "Arcanine", preEvolution: "058" },

  { id: "060", name: "Poliwag", evolutions: ["061"] },
  { id: "061", name: "Poliwhirl", evolutions: ["062", "186"], preEvolution: "060" },
  { id: "062", name: "Poliwrath", preEvolution: "061" },

  { id: "063", name: "Abra", evolutions: ["064"] },
  { id: "064", name: "Kadabra", evolutions: ["065"], preEvolution: "063" },
  { id: "065", name: "Alakazam", preEvolution: "064" },

  { id: "066", name: "Machop", evolutions: ["067"] },
  { id: "067", name: "Machoke", evolutions: ["068"], preEvolution: "066" },
  { id: "068", name: "Machamp", preEvolution: "067" },

  { id: "069", name: "Bellsprout", evolutions: ["070"] },
  { id: "070", name: "Weepinbell", evolutions: ["071"], preEvolution: "069" },
  { id: "071", name: "Victreebel", preEvolution: "070" },

  { id: "072", name: "Tentacool", evolutions: ["073"] },
  { id: "073", name: "Tentacruel", preEvolution: "072" },

  { id: "074", name: "Geodude", evolutions: ["075"] },
  { id: "075", name: "Graveler", evolutions: ["076"], preEvolution: "074" },
  { id: "076", name: "Golem", preEvolution: "075" },

  { id: "077", name: "Ponyta", evolutions: ["078"] },
  { id: "078", name: "Rapidash", preEvolution: "077" },

  { id: "079", name: "Slowpoke", evolutions: ["080", "199"] },
  { id: "080", name: "Slowbro", preEvolution: "079" },

  { id: "081", name: "Magnemite", evolutions: ["082"] },
  { id: "082", name: "Magneton", preEvolution: "081" },

  { id: "083", name: "Farfetch'd" },

  { id: "084", name: "Doduo", evolutions: ["085"] },
  { id: "085", name: "Dodrio", preEvolution: "084" },

  { id: "086", name: "Seel", evolutions: ["087"] },
  { id: "087", name: "Dewgong", preEvolution: "086" },

  { id: "088", name: "Grimer", evolutions: ["089"] },
  { id: "089", name: "Muk", preEvolution: "088" },

  { id: "090", name: "Shellder", evolutions: ["091"] },
  { id: "091", name: "Cloyster", preEvolution: "090" },

  { id: "092", name: "Gastly", evolutions: ["093"] },
  { id: "093", name: "Haunter", evolutions: ["094"], preEvolution: "092" },
  { id: "094", name: "Gengar", preEvolution: "093" },

  { id: "095", name: "Onix", evolutions: ["208"] },

  { id: "096", name: "Drowzee", evolutions: ["097"] },
  { id: "097", name: "Hypno", preEvolution: "096" },

  { id: "098", name: "Krabby", evolutions: ["099"] },
  { id: "099", name: "Kingler", preEvolution: "098" },

  { id: "100", name: "Voltorb", evolutions: ["101"] },
  { id: "101", name: "Electrode", preEvolution: "100" },

  { id: "102", name: "Exeggcute", evolutions: ["103"] },
  { id: "103", name: "Exeggutor", preEvolution: "102" },

  { id: "104", name: "Cubone", evolutions: ["105"] },
  { id: "105", name: "Marowak", preEvolution: "104" },

  { id: "106", name: "Hitmonlee", preEvolution: "236" },
  { id: "107", name: "Hitmonchan", preEvolution: "236" },

  { id: "108", name: "Lickitung" },

  { id: "109", name: "Koffing", evolutions: ["110"] },
  { id: "110", name: "Weezing", preEvolution: "109" },

  { id: "111", name: "Rhyhorn", evolutions: ["112"] },
  { id: "112", name: "Rhydon", preEvolution: "111" },

  { id: "113", name: "Chansey", evolutions: ["242"] },

  { id: "114", name: "Tangela" },

  { id: "115", name: "Kangaskhan" },

  { id: "116", name: "Horsea", evolutions: ["117"] },
  { id: "117", name: "Seadra", evolutions: ["230"], preEvolution: "116" },

  { id: "118", name: "Goldeen", evolutions: ["119"] },
  { id: "119", name: "Seaking", preEvolution: "118" },

  { id: "120", name: "Staryu", evolutions: ["121"] },
  { id: "121", name: "Starmie", preEvolution: "120" },

  { id: "122", name: "Mr. Mime" },

  { id: "123", name: "Scyther", evolutions: ["212"] },

  { id: "124", name: "Jynx", preEvolution: "238" },
  { id: "125", name: "Electabuzz", preEvolution: "239" },
  { id: "126", name: "Magmar", preEvolution: "240" },

  { id: "127", name: "Pinsir" },

  { id: "128", name: "Tauros" },

  { id: "129", name: "Magikarp", evolutions: ["130"] },
  { id: "130", name: "Gyarados", preEvolution: "129" },

  { id: "131", name: "Lapras" },

  { id: "132", name: "Ditto" },

  { id: "133", name: "Eevee", evolutions: ["134", "135", "136", "196", "197"] },
  { id: "134", name: "Vaporeon", preEvolution: "133" },
  { id: "135", name: "Jolteon", preEvolution: "133" },
  { id: "136", name: "Flareon", preEvolution: "133" },

  { id: "137", name: "Porygon", evolutions: ["233"] },

  { id: "138", name: "Omanyte", evolutions: ["139"] },
  { id: "139", name: "Omastar", preEvolution: "138" },

  { id: "140", name: "Kabuto", evolutions: ["141"] },
  { id: "141", name: "Kabutops", preEvolution: "140" },

  { id: "142", name: "Aerodactyl" },

  { id: "143", name: "Snorlax" },

  { id: "144", name: "Articuno" },

  { id: "145", name: "Zapdos" },

  { id: "146", name: "Moltres" },

  { id: "147", name: "Dratini", evolutions: ["148"] },
  { id: "148", name: "Dragonair", evolutions: ["149"], preEvolution: "147" },
  { id: "149", name: "Dragonite", preEvolution: "148" },

  { id: "150", name: "Mewtwo" },

  { id: "151", name: "Mew" },

  { id: "152", name: "Chikorita", evolutions: ["153"] },
  { id: "153", name: "Bayleef", evolutions: ["154"], preEvolution: "152" },
  { id: "154", name: "Meganium", preEvolution: "153" },

  { id: "155", name: "Cyndaquil", evolutions: ["156"] },
  { id: "156", name: "Quilava", evolutions: ["157"], preEvolution: "155" },
  { id: "157", name: "Typhlosion", preEvolution: "156" },

  { id: "158", name: "Totodile", evolutions: ["159"] },
  { id: "159", name: "Croconaw", evolutions: ["160"], preEvolution: "158" },
  { id: "160", name: "Feraligatr", preEvolution: "159" },

  { id: "161", name: "Sentret", evolutions: ["162"] },
  { id: "162", name: "Furret", preEvolution: "161" },

  { id: "163", name: "Hoothoot", evolutions: ["164"] },
  { id: "164", name: "Noctowl", preEvolution: "163" },

  { id: "165", name: "Ledyba", evolutions: ["166"] },
  { id: "166", name: "Ledian", preEvolution: "165" },

  { id: "167", name: "Spinarak", evolutions: ["168"] },
  { id: "168", name: "Ariados", preEvolution: "167" },

  { id: "169", name: "Crobat", preEvolution: "042" },

  { id: "170", name: "Chinchou", evolutions: ["171"] },
  { id: "171", name: "Lanturn", preEvolution: "170" },

  { id: "172", name: "Pichu", evolutions: ["025"] },

  { id: "173", name: "Cleffa", evolutions: ["035"] },

  { id: "174", name: "Igglybuff", evolutions: ["039"] },

  { id: "175", name: "Togepi", evolutions: ["176"] },
  { id: "176", name: "Togetic", preEvolution: "175" },

  { id: "177", name: "Natu", evolutions: ["178"] },
  { id: "178", name: "Xatu", preEvolution: "177" },

  { id: "179", name: "Mareep", evolutions: ["180"] },
  { id: "180", name: "Flaaffy", evolutions: ["181"], preEvolution: "179" },
  { id: "181", name: "Ampharos", preEvolution: "180" },

  { id: "182", name: "Bellossom", preEvolution: "044" },

  { id: "183", name: "Marill", evolutions: ["184"], preEvolution: "298" },
  { id: "184", name: "Azumarill", preEvolution: "183" },

  { id: "185", name: "Sudowoodo" },

  { id: "186", name: "Politoed", preEvolution: "061" },

  { id: "187", name: "Hoppip", evolutions: ["188"] },
  { id: "188", name: "Skiploom", evolutions: ["189"], preEvolution: "187" },
  { id: "189", name: "Jumpluff", preEvolution: "188" },

  { id: "190", name: "Aipom" },

  { id: "191", name: "Sunkern", evolutions: ["192"] },
  { id: "192", name: "Sunflora", preEvolution: "191" },

  { id: "193", name: "Yanma" },

  { id: "194", name: "Wooper", evolutions: ["195"] },
  { id: "195", name: "Quagsire", preEvolution: "194" },

  { id: "196", name: "Espeon", preEvolution: "133" },
  { id: "197", name: "Umbreon", preEvolution: "133" },

  { id: "198", name: "Murkrow" },

  { id: "199", name: "Slowking", preEvolution: "079" },

  { id: "200", name: "Misdreavus" },

  { id: "201", name: "Unown", 
    forms: [
      { id: 1,  name: "A" },
      { id: 2,  name: "B" },
      { id: 3,  name: "C" },
      { id: 4,  name: "D" },
      { id: 5,  name: "E" },
      { id: 6,  name: "F" },
      { id: 7,  name: "G" },
      { id: 8,  name: "H" },
      { id: 9,  name: "I" },
      { id: 10, name: "J" },
      { id: 11, name: "K" },
      { id: 12, name: "L" },
      { id: 13, name: "M" },
      { id: 14, name: "N" },
      { id: 15, name: "O" },
      { id: 16, name: "P" },
      { id: 17, name: "Q" },
      { id: 18, name: "R" },
      { id: 19, name: "S" },
      { id: 20, name: "T" },
      { id: 21, name: "U" },
      { id: 22, name: "V" },
      { id: 23, name: "W" },
      { id: 24, name: "X" },
      { id: 25, name: "Y" },
      { id: 26, name: "Z" },
      { id: 27, name: "?" },
      { id: 28, name: "!" }
    ]
  },

  { id: "202", name: "Wobbuffet", preEvolution: "360" },

  { id: "203", name: "Girafarig" },

  { id: "204", name: "Pineco", evolutions: ["205"] },
  { id: "205", name: "Forretress", preEvolution: "204" },

  { id: "206", name: "Dunsparce" },

  { id: "207", name: "Gligar" },

  { id: "208", name: "Steelix", preEvolution: "095" },

  { id: "209", name: "Snubbull", evolutions: ["210"] },
  { id: "210", name: "Granbull", preEvolution: "209" },

  { id: "211", name: "Qwilfish" },

  { id: "212", name: "Scizor", preEvolution: "123" },

  { id: "213", name: "Shuckle" },

  { id: "214", name: "Heracross" },

  { id: "215", name: "Sneasel" },

  { id: "216", name: "Teddiursa", evolutions: ["217"] },
  { id: "217", name: "Ursaring", preEvolution: "216" },

  { id: "218", name: "Slugma", evolutions: ["219"] },
  { id: "219", name: "Magcargo", preEvolution: "218" },

  { id: "220", name: "Swinub", evolutions: ["221"] },
  { id: "221", name: "Piloswine", preEvolution: "220" },

  { id: "222", name: "Corsola" },

  { id: "223", name: "Remoraid", evolutions: ["224"] },
  { id: "224", name: "Octillery", preEvolution: "223" },

  { id: "225", name: "Delibird" },

  { id: "226", name: "Mantine" },

  { id: "227", name: "Skarmory" },

  { id: "228", name: "Houndour", evolutions: ["229"] },
  { id: "229", name: "Houndoom", preEvolution: "228" },

  { id: "230", name: "Kingdra", preEvolution: "117" },

  { id: "231", name: "Phanpy", evolutions: ["232"] },
  { id: "232", name: "Donphan", preEvolution: "231" },

  { id: "233", name: "Porygon2", preEvolution: "137" },

  { id: "234", name: "Stantler" },

  { id: "235", name: "Smeargle" },

  { id: "236", name: "Tyrogue", evolutions: ["106", "107", "237"] },
  { id: "237", name: "Hitmontop", preEvolution: "236" },

  { id: "238", name: "Smoochum", evolutions: ["124"] },
  { id: "239", name: "Elekid", evolutions: ["125"] },
  { id: "240", name: "Magby", evolutions: ["126"] },

  { id: "241", name: "Miltank" },

  { id: "242", name: "Blissey", preEvolution: "113" },

  { id: "243", name: "Raikou" },

  { id: "244", name: "Entei" },

  { id: "245", name: "Suicune" },

  { id: "246", name: "Larvitar", evolutions: ["247"] },
  { id: "247", name: "Pupitar", evolutions: ["248"], preEvolution: "246" },
  { id: "248", name: "Tyranitar", preEvolution: "247" },

  { id: "249", name: "Lugia" },

  { id: "250", name: "Ho-Oh" },

  { id: "251", name: "Celebi" },

  { id: "252", name: "Treecko", evolutions: ["253"] },
  { id: "253", name: "Grovyle", evolutions: ["254"], preEvolution: "252" },
  { id: "254", name: "Sceptile", preEvolution: "253" },

  { id: "255", name: "Torchic", evolutions: ["256"] },
  { id: "256", name: "Combusken", evolutions: ["257"], preEvolution: "255" },
  { id: "257", name: "Blaziken", preEvolution: "256" },

  { id: "258", name: "Mudkip", evolutions: ["259"] },
  { id: "259", name: "Marshtomp", evolutions: ["260"], preEvolution: "258" },
  { id: "260", name: "Swampert", preEvolution: "259" },

  { id: "261", name: "Poochyena", evolutions: ["262"] },
  { id: "262", name: "Mightyena", preEvolution: "261" },

  { id: "263", name: "Zigzagoon", evolutions: ["264"] },
  { id: "264", name: "Linoone", preEvolution: "263" },

  { id: "265", name: "Wurmple", evolutions: ["266", "268"] },
  { id: "266", name: "Silcoon", evolutions: ["267"], preEvolution: "265" },
  { id: "267", name: "Beautifly", preEvolution: "266" },
  { id: "268", name: "Cascoon", evolutions: ["269"], preEvolution: "265" },
  { id: "269", name: "Dustox", preEvolution: "268" },

  { id: "270", name: "Lotad", evolutions: ["271"] },
  { id: "271", name: "Lombre", evolutions: ["272"], preEvolution: "270" },
  { id: "272", name: "Ludicolo", preEvolution: "271" },

  { id: "273", name: "Seedot", evolutions: ["274"] },
  { id: "274", name: "Nuzleaf", evolutions: ["275"], preEvolution: "273" },
  { id: "275", name: "Shiftry", preEvolution: "274" },

  { id: "276", name: "Taillow", evolutions: ["277"] },
  { id: "277", name: "Swellow", preEvolution: "276" },

  { id: "278", name: "Wingull", evolutions: ["279"] },
  { id: "279", name: "Pelipper", preEvolution: "278" },

  { id: "280", name: "Ralts", evolutions: ["281"] },
  { id: "281", name: "Kirlia", evolutions: ["282"], preEvolution: "280" },
  { id: "282", name: "Gardevoir", preEvolution: "281" },

  { id: "283", name: "Surskit", evolutions: ["284"] },
  { id: "284", name: "Masquerain", preEvolution: "283" },

  { id: "285", name: "Shroomish", evolutions: ["286"] },
  { id: "286", name: "Breloom", preEvolution: "285" },

  { id: "287", name: "Slakoth", evolutions: ["288"] },
  { id: "288", name: "Vigoroth", evolutions: ["289"], preEvolution: "287" },
  { id: "289", name: "Slaking", preEvolution: "288" },

  { id: "290", name: "Nincada", evolutions: ["291"] }, // Technically, Nincada does not evolve into Shedinja
  { id: "291", name: "Ninjask", preEvolution: "290" },
  { id: "292", name: "Shedinja"},

  { id: "293", name: "Whismur", evolutions: ["294"] },
  { id: "294", name: "Loudred", evolutions: ["295"], preEvolution: "293" },
  { id: "295", name: "Exploud", preEvolution: "294" },

  { id: "296", name: "Makuhita", evolutions: ["297"] },
  { id: "297", name: "Hariyama", preEvolution: "296" },

  { id: "298", name: "Azurill", evolutions: ["183"] },

  { id: "299", name: "Nosepass" },

  { id: "300", name: "Skitty", evolutions: ["301"] },
  { id: "301", name: "Delcatty", preEvolution: "300" },

  { id: "302", name: "Sableye" },

  { id: "303", name: "Mawile" },

  { id: "304", name: "Aron", evolutions: ["305"] },
  { id: "305", name: "Lairon", evolutions: ["306"], preEvolution: "304" },
  { id: "306", name: "Aggron", preEvolution: "305" },

  { id: "307", name: "Meditite", evolutions: ["308"] },
  { id: "308", name: "Medicham", preEvolution: "307" },

  { id: "309", name: "Electrike", evolutions: ["310"] },
  { id: "310", name: "Manectric", preEvolution: "309" },

  { id: "311", name: "Plusle" },
  { id: "312", name: "Minun" },

  { id: "313", name: "Volbeat" },

  { id: "314", name: "Illumise" },

  { id: "315", name: "Roselia" },

  { id: "316", name: "Gulpin", evolutions: ["317"] },
  { id: "317", name: "Swalot", preEvolution: "316" },

  { id: "318", name: "Carvanha", evolutions: ["319"] },
  { id: "319", name: "Sharpedo", preEvolution: "318" },

  { id: "320", name: "Wailmer", evolutions: ["321"] },
  { id: "321", name: "Wailord", preEvolution: "320" },

  { id: "322", name: "Numel", evolutions: ["323"] },
  { id: "323", name: "Camerupt", preEvolution: "322" },

  { id: "324", name: "Torkoal" },

  { id: "325", name: "Spoink", evolutions: ["326"] },
  { id: "326", name: "Grumpig", preEvolution: "325" },

  { id: "327", name: "Spinda" },

  { id: "328", name: "Trapinch", evolutions: ["329"] },
  { id: "329", name: "Vibrava", evolutions: ["330"], preEvolution: "328" },
  { id: "330", name: "Flygon", preEvolution: "329" },

  { id: "331", name: "Cacnea", evolutions: ["332"] },
  { id: "332", name: "Cacturne", preEvolution: "331" },

  { id: "333", name: "Swablu", evolutions: ["334"] },
  { id: "334", name: "Altaria", preEvolution: "333" },

  { id: "335", name: "Zangoose" },
  { id: "336", name: "Seviper" },

  { id: "337", name: "Lunatone" },
  { id: "338", name: "Solrock" },

  { id: "339", name: "Barboach", evolutions: ["340"] },
  { id: "340", name: "Whiscash", preEvolution: "339" },

  { id: "341", name: "Corphish", evolutions: ["342"] },
  { id: "342", name: "Crawdaunt", preEvolution: "341" },

  { id: "343", name: "Baltoy", evolutions: ["344"] },
  { id: "344", name: "Claydol", preEvolution: "343" },

  { id: "345", name: "Lileep", evolutions: ["346"] },
  { id: "346", name: "Cradily", preEvolution: "345" },

  { id: "347", name: "Anorith", evolutions: ["348"] },
  { id: "348", name: "Armaldo", preEvolution: "347" },

  { id: "349", name: "Feebas", evolutions: ["350"] },
  { id: "350", name: "Milotic", preEvolution: "349" },

  { id: "351", name: "Castform" },

  { id: "352", name: "Kecleon" },

  { id: "353", name: "Shuppet", evolutions: ["354"] },
  { id: "354", name: "Banette", preEvolution: "353" },

  { id: "355", name: "Duskull", evolutions: ["356"] },
  { id: "356", name: "Dusclops", preEvolution: "355" },

  { id: "357", name: "Tropius" },

  { id: "358", name: "Chimecho" },

  { id: "359", name: "Absol" },

  { id: "360", name: "Wynaut", evolutions: ["202"] },

  { id: "361", name: "Snorunt", evolutions: ["362"] },
  { id: "362", name: "Glalie", preEvolution: "361" },

  { id: "363", name: "Spheal", evolutions: ["364"] },
  { id: "364", name: "Sealeo", evolutions: ["365"], preEvolution: "363" },
  { id: "365", name: "Walrein", preEvolution: "364" },

  { id: "366", name: "Clamperl", evolutions: ["367", "368"] },
  { id: "367", name: "Huntail", preEvolution: "366" },
  { id: "368", name: "Gorebyss", preEvolution: "366" },

  { id: "369", name: "Relicanth" },

  { id: "370", name: "Luvdisc" },

  { id: "371", name: "Bagon", evolutions: ["372"] },
  { id: "372", name: "Shelgon", evolutions: ["373"], preEvolution: "371" },
  { id: "373", name: "Salamence", preEvolution: "372" },

  { id: "374", name: "Beldum", evolutions: ["375"] },
  { id: "375", name: "Metang", evolutions: ["376"], preEvolution: "374" },
  { id: "376", name: "Metagross", preEvolution: "375" },

  { id: "377", name: "Regirock" },

  { id: "378", name: "Regice" },

  { id: "379", name: "Registeel" },

  { id: "380", name: "Latias" },

  { id: "381", name: "Latios" },

  { id: "382", name: "Kyogre" },

  { id: "383", name: "Groudon" },

  { id: "384", name: "Rayquaza" },

  { id: "385", name: "Jirachi" },

  { id: "386", name: "Deoxys" }
];
