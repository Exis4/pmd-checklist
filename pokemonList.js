const PokemonList = Object.freeze({
    [Species.Bulbasaur]:            { name: "Bulbasaur", type: [PokemonType.Grass, PokemonType.Poison], evolutions: [Species.Ivysaur] },
    [Species.Ivysaur]:              { name: "Ivysaur", type: [PokemonType.Grass, PokemonType.Poison], evolutions: [Species.Venusaur], preEvolution: Species.Bulbasaur },
    [Species.Venusaur]:             { name: "Venusaur", type: [PokemonType.Grass, PokemonType.Poison], preEvolution: Species.Ivysaur },
  
    [Species.Charmander]:           { name: "Charmander", type: [PokemonType.Fire], evolutions: [Species.Charmeleon] },
    [Species.Charmeleon]:           { name: "Charmeleon", type: [PokemonType.Fire], evolutions: [Species.Charizard], preEvolution: Species.Charmander },
    [Species.Charizard]:            { name: "Charizard", type: [PokemonType.Fire, PokemonType.Flying], preEvolution: Species.Charmeleon },
  
    [Species.Squirtle]:             { name: "Squirtle", type: [PokemonType.Water], evolutions: [Species.Wartortle] },
    [Species.Wartortle]:            { name: "Wartortle", type: [PokemonType.Water], evolutions: [Species.Blastoise], preEvolution: Species.Squirtle },
    [Species.Blastoise]:            { name: "Blastoise", type: [PokemonType.Water], preEvolution: Species.Wartortle },
  
    [Species.Caterpie]:             { name: "Caterpie", type: [PokemonType.Bug], evolutions: [Species.Metapod] },
    [Species.Metapod]:              { name: "Metapod", type: [PokemonType.Bug], evolutions: [Species.Butterfree], preEvolution: Species.Caterpie },
    [Species.Butterfree]:           { name: "Butterfree", type: [PokemonType.Bug, PokemonType.Flying], preEvolution: Species.Metapod },
  
    [Species.Weedle]:               { name: "Weedle", type: [PokemonType.Bug, PokemonType.Poison], evolutions: [Species.Kakuna] },
    [Species.Kakuna]:               { name: "Kakuna", type: [PokemonType.Bug, PokemonType.Poison], evolutions: [Species.Beedrill], preEvolution: Species.Weedle },
    [Species.Beedrill]:             { name: "Beedrill", type: [PokemonType.Bug, PokemonType.Poison], preEvolution: Species.Kakuna },
  
    [Species.Pidgey]:               { name: "Pidgey", type: [PokemonType.Normal, PokemonType.Flying], evolutions: [Species.Pidgeotto] },
    [Species.Pidgeotto]:            { name: "Pidgeotto", type: [PokemonType.Normal, PokemonType.Flying], evolutions: [Species.Pidgeot], preEvolution: Species.Pidgey },
    [Species.Pidgeot]:              { name: "Pidgeot", type: [PokemonType.Normal, PokemonType.Flying], preEvolution: Species.Pidgeotto },
  
    [Species.Rattata]:              { name: "Rattata", type: [PokemonType.Normal], evolutions: [Species.Raticate] },
    [Species.Raticate]:             { name: "Raticate", type: [PokemonType.Normal], preEvolution: Species.Rattata },
  
    [Species.Spearow]:              { name: "Spearow", type: [PokemonType.Normal, PokemonType.Flying], evolutions: [Species.Fearow] },
    [Species.Fearow]:               { name: "Fearow", type: [PokemonType.Normal, PokemonType.Flying], preEvolution: Species.Spearow },
  
    [Species.Ekans]:                { name: "Ekans", type: [PokemonType.Poison], evolutions: [Species.Arbok] },
    [Species.Arbok]:                { name: "Arbok", type: [PokemonType.Poison], preEvolution: Species.Ekans },
  
    [Species.Pikachu]:              { name: "Pikachu", type: [PokemonType.Electric], evolutions: [Species.Raichu], preEvolution: Species.Pichu },
    [Species.Raichu]:               { name: "Raichu", type: [PokemonType.Electric], preEvolution: Species.Pikachu },
  
    [Species.Sandshrew]:            { name: "Sandshrew", type: [PokemonType.Ground], evolutions: [Species.Sandslash] },
    [Species.Sandslash]:            { name: "Sandslash", type: [PokemonType.Ground], preEvolution: Species.Sandshrew },
  
    [Species.NidoranF]:             { name: "Nidoran♀", type: [PokemonType.Poison], evolutions: [Species.Nidorina] },
    [Species.Nidorina]:             { name: "Nidorina", type: [PokemonType.Poison], evolutions: [Species.Nidoqueen], preEvolution: Species.NidoranF },
    [Species.Nidoqueen]:            { name: "Nidoqueen", type: [PokemonType.Poison, PokemonType.Ground], preEvolution: Species.Nidorina },
  
    [Species.NidoranM]:             { name: "Nidoran♂", type: [PokemonType.Poison], evolutions: [Species.Nidorino] },
    [Species.Nidorino]:             { name: "Nidorino", type: [PokemonType.Poison], evolutions: [Species.Nidoking], preEvolution: Species.NidoranM },
    [Species.Nidoking]:             { name: "Nidoking", type: [PokemonType.Poison, PokemonType.Ground], preEvolution: Species.Nidorino },
  
    [Species.Clefairy]:             { name: "Clefairy", type: [PokemonType.Normal], evolutions: [Species.Clefable], preEvolution: Species.Cleffa },
    [Species.Clefable]:             { name: "Clefable", type: [PokemonType.Normal], preEvolution: Species.Clefairy },
  
    [Species.Vulpix]:               { name: "Vulpix", type: [PokemonType.Fire], evolutions: [Species.Ninetales] },
    [Species.Ninetales]:            { name: "Ninetales", type: [PokemonType.Fire], preEvolution: Species.Vulpix },
  
    [Species.Jigglypuff]:           { name: "Jigglypuff", type: [PokemonType.Normal], evolutions: [Species.Wigglytuff], preEvolution: Species.Igglybuff },
    [Species.Wigglytuff]:           { name: "Wigglytuff", type: [PokemonType.Normal], preEvolution: Species.Jigglypuff },
  
    [Species.Zubat]:                { name: "Zubat", type: [PokemonType.Poison, PokemonType.Flying], evolutions: [Species.Golbat] },
    [Species.Golbat]:               { name: "Golbat", type: [PokemonType.Poison, PokemonType.Flying], evolutions: [Species.Crobat], preEvolution: Species.Zubat },
  
    [Species.Oddish]:               { name: "Oddish", type: [PokemonType.Grass, PokemonType.Poison], evolutions: [Species.Gloom] },
    [Species.Gloom]:                { name: "Gloom", type: [PokemonType.Grass, PokemonType.Poison], evolutions: [Species.Vileplume, Species.Bellossom], preEvolution: Species.Oddish },
    [Species.Vileplume]:            { name: "Vileplume", type: [PokemonType.Grass, PokemonType.Poison], preEvolution: Species.Gloom },
  
    [Species.Paras]:                { name: "Paras", type: [PokemonType.Bug, PokemonType.Grass], evolutions: [Species.Parasect] },
    [Species.Parasect]:             { name: "Parasect", type: [PokemonType.Bug, PokemonType.Grass], preEvolution: Species.Paras },
  
    [Species.Venonat]:              { name: "Venonat", type: [PokemonType.Bug, PokemonType.Poison], evolutions: [Species.Venomoth] },
    [Species.Venomoth]:             { name: "Venomoth", type: [PokemonType.Bug, PokemonType.Poison], preEvolution: Species.Venonat },
  
    [Species.Diglett]:              { name: "Diglett", type: [PokemonType.Ground], evolutions: [Species.Dugtrio] },
    [Species.Dugtrio]:              { name: "Dugtrio", type: [PokemonType.Ground], preEvolution: Species.Diglett },
  
    [Species.Meowth]:               { name: "Meowth", type: [PokemonType.Normal], evolutions: [Species.Persian] },
    [Species.Persian]:              { name: "Persian", type: [PokemonType.Normal], preEvolution: Species.Meowth },
  
    [Species.Psyduck]:              { name: "Psyduck", type: [PokemonType.Water], evolutions: [Species.Golduck] },
    [Species.Golduck]:              { name: "Golduck", type: [PokemonType.Water], preEvolution: Species.Psyduck },
  
    [Species.Mankey]:               { name: "Mankey", type: [PokemonType.Fighting], evolutions: [Species.Primeape] },
    [Species.Primeape]:             { name: "Primeape", type: [PokemonType.Fighting], preEvolution: Species.Mankey },
  
    [Species.Growlithe]:            { name: "Growlithe", type: [PokemonType.Fire], evolutions: [Species.Arcanine] },
    [Species.Arcanine]:             { name: "Arcanine", type: [PokemonType.Fire], preEvolution: Species.Growlithe },
  
    [Species.Poliwag]:              { name: "Poliwag", type: [PokemonType.Water], evolutions: [Species.Poliwhirl] },
    [Species.Poliwhirl]:            { name: "Poliwhirl", type: [PokemonType.Water], evolutions: [Species.Poliwrath, Species.Politoed], preEvolution: Species.Poliwag },
    [Species.Poliwrath]:            { name: "Poliwrath", type: [PokemonType.Water, PokemonType.Fighting], preEvolution: Species.Poliwhirl },
  
    [Species.Abra]:                 { name: "Abra", type: [PokemonType.Psychic], evolutions: [Species.Kadabra] },
    [Species.Kadabra]:              { name: "Kadabra", type: [PokemonType.Psychic], evolutions: [Species.Alakazam], preEvolution: Species.Abra },
    [Species.Alakazam]:             { name: "Alakazam", type: [PokemonType.Psychic], preEvolution: Species.Kadabra },
  
    [Species.Machop]:               { name: "Machop", type: [PokemonType.Fighting], evolutions: [Species.Machoke] },
    [Species.Machoke]:              { name: "Machoke", type: [PokemonType.Fighting], evolutions: [Species.Machamp], preEvolution: Species.Machop },
    [Species.Machamp]:              { name: "Machamp", type: [PokemonType.Fighting], preEvolution: Species.Machoke },
  
    [Species.Bellsprout]:           { name: "Bellsprout", type: [PokemonType.Grass, PokemonType.Poison], evolutions: [Species.Weepinbell] },
    [Species.Weepinbell]:           { name: "Weepinbell", type: [PokemonType.Grass, PokemonType.Poison], evolutions: [Species.Victreebel], preEvolution: Species.Bellsprout },
    [Species.Victreebel]:           { name: "Victreebel", type: [PokemonType.Grass, PokemonType.Poison], preEvolution: Species.Weepinbell },
  
    [Species.Tentacool]:            { name: "Tentacool", type: [PokemonType.Water, PokemonType.Poison], evolutions: [Species.Tentacruel] },
    [Species.Tentacruel]:           { name: "Tentacruel", type: [PokemonType.Water, PokemonType.Poison], preEvolution: Species.Tentacool },
  
    [Species.Geodude]:              { name: "Geodude", type: [PokemonType.Rock, PokemonType.Ground], evolutions: [Species.Graveler] },
    [Species.Graveler]:             { name: "Graveler", type: [PokemonType.Rock, PokemonType.Ground], evolutions: [Species.Golem], preEvolution: Species.Geodude },
    [Species.Golem]:                { name: "Golem", type: [PokemonType.Rock, PokemonType.Ground], preEvolution: Species.Graveler },
  
    [Species.Ponyta]:               { name: "Ponyta", type: [PokemonType.Fire], evolutions: [Species.Rapidash] },
    [Species.Rapidash]:             { name: "Rapidash", type: [PokemonType.Fire], preEvolution: Species.Ponyta },
  
    [Species.Slowpoke]:             { name: "Slowpoke", type: [PokemonType.Water, PokemonType.Psychic], evolutions: [Species.Slowbro, Species.Slowking] },
    [Species.Slowbro]:              { name: "Slowbro", type: [PokemonType.Water, PokemonType.Psychic], preEvolution: Species.Slowpoke },
  
    [Species.Magnemite]:            { name: "Magnemite", type: [PokemonType.Electric, PokemonType.Steel], evolutions: [Species.Magneton] },
    [Species.Magneton]:             { name: "Magneton", type: [PokemonType.Electric, PokemonType.Steel], preEvolution: Species.Magnemite },
  
    [Species.Farfetchd]:            { name: "Farfetch'd", type: [PokemonType.Normal, PokemonType.Flying] },
  
    [Species.Doduo]:                { name: "Doduo", type: [PokemonType.Normal, PokemonType.Flying], evolutions: [Species.Dodrio] },
    [Species.Dodrio]:               { name: "Dodrio", type: [PokemonType.Normal, PokemonType.Flying], preEvolution: Species.Doduo },
  
    [Species.Seel]:                 { name: "Seel", type: [PokemonType.Water], evolutions: [Species.Dewgong] },
    [Species.Dewgong]:              { name: "Dewgong", type: [PokemonType.Water, PokemonType.Ice], preEvolution: Species.Seel },
  
    [Species.Grimer]:               { name: "Grimer", type: [PokemonType.Poison], evolutions: [Species.Muk] },
    [Species.Muk]:                  { name: "Muk", type: [PokemonType.Poison], preEvolution: Species.Grimer },
  
    [Species.Shellder]:             { name: "Shellder", type: [PokemonType.Water], evolutions: [Species.Cloyster] },
    [Species.Cloyster]:             { name: "Cloyster", type: [PokemonType.Water, PokemonType.Ice], preEvolution: Species.Shellder },
  
    [Species.Gastly]:               { name: "Gastly", type: [PokemonType.Ghost, PokemonType.Poison], evolutions: [Species.Haunter] },
    [Species.Haunter]:              { name: "Haunter", type: [PokemonType.Ghost, PokemonType.Poison], evolutions: [Species.Gengar], preEvolution: Species.Gastly },
    [Species.Gengar]:               { name: "Gengar", type: [PokemonType.Ghost, PokemonType.Poison], preEvolution: Species.Haunter },
  
    [Species.Onix]:                 { name: "Onix", type: [PokemonType.Rock, PokemonType.Ground], evolutions: [Species.Steelix] },
  
    [Species.Drowzee]:              { name: "Drowzee", type: [PokemonType.Psychic], evolutions: [Species.Hypno] },
    [Species.Hypno]:                { name: "Hypno", type: [PokemonType.Psychic], preEvolution: Species.Drowzee },
  
    [Species.Krabby]:               { name: "Krabby", type: [PokemonType.Water], evolutions: [Species.Kingler] },
    [Species.Kingler]:              { name: "Kingler", type: [PokemonType.Water], preEvolution: Species.Krabby },
  
    [Species.Voltorb]:              { name: "Voltorb", type: [PokemonType.Electric], evolutions: [Species.Electrode] },
    [Species.Electrode]:            { name: "Electrode", type: [PokemonType.Electric], preEvolution: Species.Voltorb },
  
    [Species.Exeggcute]:            { name: "Exeggcute", type: [PokemonType.Grass, PokemonType.Psychic], evolutions: [Species.Exeggutor] },
    [Species.Exeggutor]:            { name: "Exeggutor", type: [PokemonType.Grass, PokemonType.Psychic], preEvolution: Species.Exeggcute },
  
    [Species.Cubone]:               { name: "Cubone", type: [PokemonType.Ground], evolutions: [Species.Marowak] },
    [Species.Marowak]:              { name: "Marowak", type: [PokemonType.Ground], preEvolution: Species.Cubone },
  
    [Species.Hitmonlee]:            { name: "Hitmonlee", type: [PokemonType.Fighting], preEvolution: Species.Tyrogue },
    [Species.Hitmonchan]:           { name: "Hitmonchan", type: [PokemonType.Fighting], preEvolution: Species.Tyrogue },
  
    [Species.Lickitung]:            { name: "Lickitung", type: [PokemonType.Normal] },
  
    [Species.Koffing]:              { name: "Koffing", type: [PokemonType.Poison], evolutions: [Species.Weezing] },
    [Species.Weezing]:              { name: "Weezing", type: [PokemonType.Poison], preEvolution: Species.Koffing },
  
    [Species.Rhyhorn]:              { name: "Rhyhorn", type: [PokemonType.Ground, PokemonType.Rock], evolutions: [Species.Rhydon] },
    [Species.Rhydon]:               { name: "Rhydon", type: [PokemonType.Ground, PokemonType.Rock], preEvolution: Species.Rhyhorn },
  
    [Species.Chansey]:              { name: "Chansey", type: [PokemonType.Normal], evolutions: [Species.Blissey] },
  
    [Species.Tangela]:              { name: "Tangela", type: [PokemonType.Grass] },
  
    [Species.Kangaskhan]:           { name: "Kangaskhan", type: [PokemonType.Normal] },
  
    [Species.Horsea]:               { name: "Horsea", type: [PokemonType.Water], evolutions: [Species.Seadra] },
    [Species.Seadra]:               { name: "Seadra", type: [PokemonType.Water], evolutions: [Species.Kingdra], preEvolution: Species.Horsea },
  
    [Species.Goldeen]:              { name: "Goldeen", type: [PokemonType.Water], evolutions: [Species.Seaking] },
    [Species.Seaking]:              { name: "Seaking", type: [PokemonType.Water], preEvolution: Species.Goldeen },
  
    [Species.Staryu]:               { name: "Staryu", type: [PokemonType.Water], evolutions: [Species.Starmie] },
    [Species.Starmie]:              { name: "Starmie", type: [PokemonType.Water, PokemonType.Psychic], preEvolution: Species.Staryu },
  
    [Species.MrMime]:               { name: "Mr. Mime", type: [PokemonType.Psychic] },
  
    [Species.Scyther]:              { name: "Scyther", type: [PokemonType.Bug, PokemonType.Flying], evolutions: [Species.Scizor] },
  
    [Species.Jynx]:                 { name: "Jynx", type: [PokemonType.Ice, PokemonType.Psychic], preEvolution: Species.Smoochum },
  
    [Species.Electabuzz]:           { name: "Electabuzz", type: [PokemonType.Electric], preEvolution: Species.Elekid },
  
    [Species.Magmar]:               { name: "Magmar", type: [PokemonType.Fire], preEvolution: Species.Magby },
  
    [Species.Pinsir]:               { name: "Pinsir", type: [PokemonType.Bug] },
  
    [Species.Tauros]:               { name: "Tauros", type: [PokemonType.Normal] },
  
    [Species.Magikarp]:             { name: "Magikarp", type: [PokemonType.Water], evolutions: [Species.Gyarados] },
    [Species.Gyarados]:             { name: "Gyarados", type: [PokemonType.Water, PokemonType.Flying], preEvolution: Species.Magikarp },
  
    [Species.Lapras]:               { name: "Lapras", type: [PokemonType.Water, PokemonType.Ice] },
  
    [Species.Ditto]:                { name: "Ditto", type: [PokemonType.Normal] },
  
    [Species.Eevee]:                { name: "Eevee", type: [PokemonType.Normal], evolutions: [Species.Vaporeon, Species.Jolteon, Species.Flareon, Species.Espeon, Species.Umbreon] },
    [Species.Vaporeon]:             { name: "Vaporeon", type: [PokemonType.Water], preEvolution: Species.Eevee },
    [Species.Jolteon]:              { name: "Jolteon", type: [PokemonType.Electric], preEvolution: Species.Eevee },
    [Species.Flareon]:              { name: "Flareon", type: [PokemonType.Fire], preEvolution: Species.Eevee },
  
    [Species.Porygon]:              { name: "Porygon", type: [PokemonType.Normal], evolutions: [Species.Porygon2] },
  
    [Species.Omanyte]:              { name: "Omanyte", type: [PokemonType.Rock, PokemonType.Water], evolutions: [Species.Omastar] },
    [Species.Omastar]:              { name: "Omastar", type: [PokemonType.Rock, PokemonType.Water], preEvolution: Species.Omanyte },
  
    [Species.Kabuto]:               { name: "Kabuto", type: [PokemonType.Rock, PokemonType.Water], evolutions: [Species.Kabutops] },
    [Species.Kabutops]:             { name: "Kabutops", type: [PokemonType.Rock, PokemonType.Water], preEvolution: Species.Kabuto },
  
    [Species.Aerodactyl]:           { name: "Aerodactyl", type: [PokemonType.Rock, PokemonType.Flying] },
  
    [Species.Snorlax]:              { name: "Snorlax", type: [PokemonType.Normal] },
  
    [Species.Articuno]:             { name: "Articuno", type: [PokemonType.Ice, PokemonType.Flying] },

    [Species.Zapdos]:               { name: "Zapdos", type: [PokemonType.Electric, PokemonType.Flying] },

    [Species.Moltres]:              { name: "Moltres", type: [PokemonType.Fire, PokemonType.Flying] },
  
    [Species.Dratini]:              { name: "Dratini", type: [PokemonType.Dragon], evolutions: [Species.Dragonair] },
    [Species.Dragonair]:            { name: "Dragonair", type: [PokemonType.Dragon], evolutions: [Species.Dragonite], preEvolution: Species.Dratini },
    [Species.Dragonite]:            { name: "Dragonite", type: [PokemonType.Dragon, PokemonType.Flying], preEvolution: Species.Dragonair },
  
    [Species.Mewtwo]:               { name: "Mewtwo", type: [PokemonType.Psychic] },

    [Species.Mew]:                  { name: "Mew", type: [PokemonType.Psychic] },
  
    [Species.Chikorita]:            { name: "Chikorita", type: [PokemonType.Grass], evolutions: [Species.Bayleef] },
    [Species.Bayleef]:              { name: "Bayleef", type: [PokemonType.Grass], evolutions: [Species.Meganium], preEvolution: Species.Chikorita },
    [Species.Meganium]:             { name: "Meganium", type: [PokemonType.Grass], preEvolution: Species.Bayleef },
  
    [Species.Cyndaquil]:            { name: "Cyndaquil", type: [PokemonType.Fire], evolutions: [Species.Quilava] },
    [Species.Quilava]:              { name: "Quilava", type: [PokemonType.Fire], evolutions: [Species.Typhlosion], preEvolution: Species.Cyndaquil },
    [Species.Typhlosion]:           { name: "Typhlosion", type: [PokemonType.Fire], preEvolution: Species.Quilava },
  
    [Species.Totodile]:             { name: "Totodile", type: [PokemonType.Water], evolutions: [Species.Croconaw] },
    [Species.Croconaw]:             { name: "Croconaw", type: [PokemonType.Water], evolutions: [Species.Feraligatr], preEvolution: Species.Totodile },
    [Species.Feraligatr]:           { name: "Feraligatr", type: [PokemonType.Water], preEvolution: Species.Croconaw },
  
    [Species.Sentret]:              { name: "Sentret", type: [PokemonType.Normal], evolutions: [Species.Furret] },
    [Species.Furret]:               { name: "Furret", type: [PokemonType.Normal], preEvolution: Species.Sentret },
  
    [Species.Hoothoot]:             { name: "Hoothoot", type: [PokemonType.Normal, PokemonType.Flying], evolutions: [Species.Noctowl] },
    [Species.Noctowl]:              { name: "Noctowl", type: [PokemonType.Normal, PokemonType.Flying], preEvolution: Species.Hoothoot },
  
    [Species.Ledyba]:               { name: "Ledyba", type: [PokemonType.Bug, PokemonType.Flying], evolutions: [Species.Ledian] },
    [Species.Ledian]:               { name: "Ledian", type: [PokemonType.Bug, PokemonType.Flying], preEvolution: Species.Ledyba },
  
    [Species.Spinarak]:             { name: "Spinarak", type: [PokemonType.Bug, PokemonType.Poison], evolutions: [Species.Ariados] },
    [Species.Ariados]:              { name: "Ariados", type: [PokemonType.Bug, PokemonType.Poison], preEvolution: Species.Spinarak },
  
    [Species.Crobat]:               { name: "Crobat", type: [PokemonType.Poison, PokemonType.Flying], preEvolution: Species.Golbat },
  
    [Species.Chinchou]:             { name: "Chinchou", type: [PokemonType.Water, PokemonType.Electric], evolutions: [Species.Lanturn] },
    [Species.Lanturn]:              { name: "Lanturn", type: [PokemonType.Water, PokemonType.Electric], preEvolution: Species.Chinchou },
  
    [Species.Pichu]:                { name: "Pichu", type: [PokemonType.Electric], evolutions: [Species.Pikachu] },

    [Species.Cleffa]:               { name: "Cleffa", type: [PokemonType.Normal], evolutions: [Species.Clefairy] },

    [Species.Igglybuff]:            { name: "Igglybuff", type: [PokemonType.Normal], evolutions: [Species.Jigglypuff] },
  
    [Species.Togepi]:               { name: "Togepi", type: [PokemonType.Normal], evolutions: [Species.Togetic] },
    [Species.Togetic]:              { name: "Togetic", type: [PokemonType.Normal, PokemonType.Flying], preEvolution: Species.Togepi },
  
    [Species.Natu]:                 { name: "Natu", type: [PokemonType.Psychic, PokemonType.Flying], evolutions: [Species.Xatu] },
    [Species.Xatu]:                 { name: "Xatu", type: [PokemonType.Psychic, PokemonType.Flying], preEvolution: Species.Natu },
  
    [Species.Mareep]:               { name: "Mareep", type: [PokemonType.Electric], evolutions: [Species.Flaaffy] },
    [Species.Flaaffy]:              { name: "Flaaffy", type: [PokemonType.Electric], evolutions: [Species.Ampharos], preEvolution: Species.Mareep },
    [Species.Ampharos]:             { name: "Ampharos", type: [PokemonType.Electric], preEvolution: Species.Flaaffy },
  
    [Species.Bellossom]:            { name: "Bellossom", type: [PokemonType.Grass], preEvolution: Species.Gloom },
  
    [Species.Marill]:               { name: "Marill", type: [PokemonType.Water], evolutions: [Species.Azumarill], preEvolution: Species.Azurill },
    [Species.Azumarill]:            { name: "Azumarill", type: [PokemonType.Water], preEvolution: Species.Marill },
  
    [Species.Sudowoodo]:            { name: "Sudowoodo", type: [PokemonType.Rock] },
  
    [Species.Politoed]:             { name: "Politoed", type: [PokemonType.Water], preEvolution: Species.Poliwhirl },
  
    [Species.Hoppip]:               { name: "Hoppip", type: [PokemonType.Grass, PokemonType.Flying], evolutions: [Species.Skiploom] },
    [Species.Skiploom]:             { name: "Skiploom", type: [PokemonType.Grass, PokemonType.Flying], evolutions: [Species.Jumpluff], preEvolution: Species.Hoppip },
    [Species.Jumpluff]:             { name: "Jumpluff", type: [PokemonType.Grass, PokemonType.Flying], preEvolution: Species.Skiploom },
  
    [Species.Aipom]:                { name: "Aipom", type: [PokemonType.Normal] },
  
    [Species.Sunkern]:              { name: "Sunkern", type: [PokemonType.Grass], evolutions: [Species.Sunflora] },
    [Species.Sunflora]:             { name: "Sunflora", type: [PokemonType.Grass], preEvolution: Species.Sunkern },
  
    [Species.Yanma]:                { name: "Yanma", type: [PokemonType.Bug, PokemonType.Flying] },
  
    [Species.Wooper]:               { name: "Wooper", type: [PokemonType.Water, PokemonType.Ground], evolutions: [Species.Quagsire] },
    [Species.Quagsire]:             { name: "Quagsire", type: [PokemonType.Water, PokemonType.Ground], preEvolution: Species.Wooper },
  
    [Species.Espeon]:               { name: "Espeon", type: [PokemonType.Psychic], preEvolution: Species.Eevee },
    [Species.Umbreon]:              { name: "Umbreon", type: [PokemonType.Dark], preEvolution: Species.Eevee },
  
    [Species.Murkrow]:              { name: "Murkrow", type: [PokemonType.Dark, PokemonType.Flying] },
  
    [Species.Slowking]:             { name: "Slowking", type: [PokemonType.Water, PokemonType.Psychic], preEvolution: Species.Slowpoke },
  
    [Species.Misdreavus]:           { name: "Misdreavus", type: [PokemonType.Ghost] },
  
    [Species.Unown]:                { name: "Unown", type: [PokemonType.Psychic], formName: "A" },
    [Species.UnownB]:               { name: "Unown", type: [PokemonType.Psychic], formName: "B", baseForm: Species.Unown },
    [Species.UnownC]:               { name: "Unown", type: [PokemonType.Psychic], formName: "C", baseForm: Species.Unown },
    [Species.UnownD]:               { name: "Unown", type: [PokemonType.Psychic], formName: "D", baseForm: Species.Unown },
    [Species.UnownE]:               { name: "Unown", type: [PokemonType.Psychic], formName: "E", baseForm: Species.Unown },
    [Species.UnownF]:               { name: "Unown", type: [PokemonType.Psychic], formName: "F", baseForm: Species.Unown },
    [Species.UnownG]:               { name: "Unown", type: [PokemonType.Psychic], formName: "G", baseForm: Species.Unown },
    [Species.UnownH]:               { name: "Unown", type: [PokemonType.Psychic], formName: "H", baseForm: Species.Unown },
    [Species.UnownI]:               { name: "Unown", type: [PokemonType.Psychic], formName: "I", baseForm: Species.Unown },
    [Species.UnownJ]:               { name: "Unown", type: [PokemonType.Psychic], formName: "J", baseForm: Species.Unown },
    [Species.UnownK]:               { name: "Unown", type: [PokemonType.Psychic], formName: "K", baseForm: Species.Unown },
    [Species.UnownL]:               { name: "Unown", type: [PokemonType.Psychic], formName: "L", baseForm: Species.Unown },
    [Species.UnownM]:               { name: "Unown", type: [PokemonType.Psychic], formName: "M", baseForm: Species.Unown },
    [Species.UnownN]:               { name: "Unown", type: [PokemonType.Psychic], formName: "N", baseForm: Species.Unown },
    [Species.UnownO]:               { name: "Unown", type: [PokemonType.Psychic], formName: "O", baseForm: Species.Unown },
    [Species.UnownP]:               { name: "Unown", type: [PokemonType.Psychic], formName: "P", baseForm: Species.Unown },
    [Species.UnownQ]:               { name: "Unown", type: [PokemonType.Psychic], formName: "Q", baseForm: Species.Unown },
    [Species.UnownR]:               { name: "Unown", type: [PokemonType.Psychic], formName: "R", baseForm: Species.Unown },
    [Species.UnownS]:               { name: "Unown", type: [PokemonType.Psychic], formName: "S", baseForm: Species.Unown },
    [Species.UnownT]:               { name: "Unown", type: [PokemonType.Psychic], formName: "T", baseForm: Species.Unown },
    [Species.UnownU]:               { name: "Unown", type: [PokemonType.Psychic], formName: "U", baseForm: Species.Unown },
    [Species.UnownV]:               { name: "Unown", type: [PokemonType.Psychic], formName: "V", baseForm: Species.Unown },
    [Species.UnownW]:               { name: "Unown", type: [PokemonType.Psychic], formName: "W", baseForm: Species.Unown },
    [Species.UnownX]:               { name: "Unown", type: [PokemonType.Psychic], formName: "X", baseForm: Species.Unown },
    [Species.UnownY]:               { name: "Unown", type: [PokemonType.Psychic], formName: "Y", baseForm: Species.Unown },
    [Species.UnownZ]:               { name: "Unown", type: [PokemonType.Psychic], formName: "Z", baseForm: Species.Unown },
    [Species.UnownExclamation]:     { name: "Unown", type: [PokemonType.Psychic], formName: "!", baseForm: Species.Unown },
    [Species.UnownQuestion]:        { name: "Unown", type: [PokemonType.Psychic], formName: "?", baseForm: Species.Unown },
  
    [Species.Wobbuffet]:            { name: "Wobbuffet", type: [PokemonType.Psychic], preEvolution: Species.Wynaut },
  
    [Species.Girafarig]:            { name: "Girafarig", type: [PokemonType.Normal, PokemonType.Psychic] },
  
    [Species.Pineco]:               { name: "Pineco", type: [PokemonType.Bug], evolutions: [Species.Forretress] },
    [Species.Forretress]:           { name: "Forretress", type: [PokemonType.Bug, PokemonType.Steel], preEvolution: Species.Pineco },
  
    [Species.Dunsparce]:            { name: "Dunsparce", type: [PokemonType.Normal] },
  
    [Species.Gligar]:               { name: "Gligar", type: [PokemonType.Ground, PokemonType.Flying] },
  
    [Species.Steelix]:              { name: "Steelix", type: [PokemonType.Steel, PokemonType.Ground], preEvolution: Species.Onix },
  
    [Species.Snubbull]:             { name: "Snubbull", type: [PokemonType.Normal], evolutions: [Species.Granbull] },
    [Species.Granbull]:             { name: "Granbull", type: [PokemonType.Normal], preEvolution: Species.Snubbull },
  
    [Species.Qwilfish]:             { name: "Qwilfish", type: [PokemonType.Water, PokemonType.Poison] },
  
    [Species.Scizor]:               { name: "Scizor", type: [PokemonType.Bug, PokemonType.Steel], preEvolution: Species.Scyther },
  
    [Species.Shuckle]:              { name: "Shuckle", type: [PokemonType.Bug, PokemonType.Rock] },
  
    [Species.Heracross]:            { name: "Heracross", type: [PokemonType.Bug, PokemonType.Fighting] },
  
    [Species.Sneasel]:              { name: "Sneasel", type: [PokemonType.Dark, PokemonType.Ice] },
  
    [Species.Teddiursa]:            { name: "Teddiursa", type: [PokemonType.Normal], evolutions: [Species.Ursaring] },
    [Species.Ursaring]:             { name: "Ursaring", type: [PokemonType.Normal], preEvolution: Species.Teddiursa },
  
    [Species.Slugma]:               { name: "Slugma", type: [PokemonType.Fire], evolutions: [Species.Magcargo] },
    [Species.Magcargo]:             { name: "Magcargo", type: [PokemonType.Fire, PokemonType.Rock], preEvolution: Species.Slugma },
  
    [Species.Swinub]:               { name: "Swinub", type: [PokemonType.Ice, PokemonType.Ground], evolutions: [Species.Piloswine] },
    [Species.Piloswine]:            { name: "Piloswine", type: [PokemonType.Ice, PokemonType.Ground], preEvolution: Species.Swinub },
  
    [Species.Corsola]:              { name: "Corsola", type: [PokemonType.Water, PokemonType.Rock] },
  
    [Species.Remoraid]:             { name: "Remoraid", type: [PokemonType.Water], evolutions: [Species.Octillery] },
    [Species.Octillery]:            { name: "Octillery", type: [PokemonType.Water], preEvolution: Species.Remoraid },
  
    [Species.Delibird]:             { name: "Delibird", type: [PokemonType.Ice, PokemonType.Flying] },
  
    [Species.Mantine]:              { name: "Mantine", type: [PokemonType.Water, PokemonType.Flying] },
  
    [Species.Skarmory]:             { name: "Skarmory", type: [PokemonType.Steel, PokemonType.Flying] },
  
    [Species.Houndour]:             { name: "Houndour", type: [PokemonType.Dark, PokemonType.Fire], evolutions: [Species.Houndoom] },
    [Species.Houndoom]:             { name: "Houndoom", type: [PokemonType.Dark, PokemonType.Fire], preEvolution: Species.Houndour },
  
    [Species.Kingdra]:              { name: "Kingdra", type: [PokemonType.Water, PokemonType.Dragon], preEvolution: Species.Seadra },
  
    [Species.Phanpy]:               { name: "Phanpy", type: [PokemonType.Ground], evolutions: [Species.Donphan] },
    [Species.Donphan]:              { name: "Donphan", type: [PokemonType.Ground], preEvolution: Species.Phanpy },
  
    [Species.Porygon2]:             { name: "Porygon2", type: [PokemonType.Normal], preEvolution: Species.Porygon },
  
    [Species.Stantler]:             { name: "Stantler", type: [PokemonType.Normal] },
  
    [Species.Smeargle]:             { name: "Smeargle", type: [PokemonType.Normal] },
  
    [Species.Tyrogue]:              { name: "Tyrogue", type: [PokemonType.Fighting], evolutions: [Species.Hitmonlee, Species.Hitmonchan, Species.Hitmontop] },
    [Species.Hitmontop]:            { name: "Hitmontop", type: [PokemonType.Fighting], preEvolution: Species.Tyrogue },
  
    [Species.Smoochum]:             { name: "Smoochum", type: [PokemonType.Ice, PokemonType.Psychic], evolutions: [Species.Jynx] },
    [Species.Elekid]:               { name: "Elekid", type: [PokemonType.Electric], evolutions: [Species.Electabuzz] },
    [Species.Magby]:                { name: "Magby", type: [PokemonType.Fire], evolutions: [Species.Magmar] },
  
    [Species.Miltank]:              { name: "Miltank", type: [PokemonType.Normal] },
  
    [Species.Blissey]:              { name: "Blissey", type: [PokemonType.Normal], preEvolution: Species.Chansey },
  
    [Species.Raikou]:               { name: "Raikou", type: [PokemonType.Electric] },

    [Species.Entei]:                { name: "Entei", type: [PokemonType.Fire] },

    [Species.Suicune]:              { name: "Suicune", type: [PokemonType.Water] },
  
    [Species.Larvitar]:             { name: "Larvitar", type: [PokemonType.Rock, PokemonType.Ground], evolutions: [Species.Pupitar] },
    [Species.Pupitar]:              { name: "Pupitar", type: [PokemonType.Rock, PokemonType.Ground], evolutions: [Species.Tyranitar], preEvolution: Species.Larvitar },
    [Species.Tyranitar]:            { name: "Tyranitar", type: [PokemonType.Rock, PokemonType.Dark], preEvolution: Species.Pupitar },
  
    [Species.Lugia]:                { name: "Lugia", type: [PokemonType.Psychic, PokemonType.Flying] },

    [Species.HoOh]:                 { name: "Ho-Oh", type: [PokemonType.Fire, PokemonType.Flying] },
  
    [Species.Celebi]:               { name: "Celebi", type: [PokemonType.Psychic, PokemonType.Grass] },
  
    [Species.Treecko]:              { name: "Treecko", type: [PokemonType.Grass], evolutions: [Species.Grovyle] },
    [Species.Grovyle]:              { name: "Grovyle", type: [PokemonType.Grass], evolutions: [Species.Sceptile], preEvolution: Species.Treecko },
    [Species.Sceptile]:             { name: "Sceptile", type: [PokemonType.Grass], preEvolution: Species.Grovyle },
  
    [Species.Torchic]:              { name: "Torchic", type: [PokemonType.Fire], evolutions: [Species.Combusken] },
    [Species.Combusken]:            { name: "Combusken", type: [PokemonType.Fire, PokemonType.Fighting], evolutions: [Species.Blaziken], preEvolution: Species.Torchic },
    [Species.Blaziken]:             { name: "Blaziken", type: [PokemonType.Fire, PokemonType.Fighting], preEvolution: Species.Combusken },
  
    [Species.Mudkip]:               { name: "Mudkip", type: [PokemonType.Water], evolutions: [Species.Marshtomp] },
    [Species.Marshtomp]:            { name: "Marshtomp", type: [PokemonType.Water, PokemonType.Ground], evolutions: [Species.Swampert], preEvolution: Species.Mudkip },
    [Species.Swampert]:             { name: "Swampert", type: [PokemonType.Water, PokemonType.Ground], preEvolution: Species.Marshtomp },
  
    [Species.Poochyena]:            { name: "Poochyena", type: [PokemonType.Dark], evolutions: [Species.Mightyena] },
    [Species.Mightyena]:            { name: "Mightyena", type: [PokemonType.Dark], preEvolution: Species.Poochyena },
  
    [Species.Zigzagoon]:            { name: "Zigzagoon", type: [PokemonType.Normal], evolutions: [Species.Linoone] },
    [Species.Linoone]:              { name: "Linoone", type: [PokemonType.Normal], preEvolution: Species.Zigzagoon },
  
    [Species.Wurmple]:              { name: "Wurmple", type: [PokemonType.Bug], evolutions: [Species.Silcoon, Species.Cascoon] },
    [Species.Silcoon]:              { name: "Silcoon", type: [PokemonType.Bug], evolutions: [Species.Beautifly], preEvolution: Species.Wurmple },
    [Species.Beautifly]:            { name: "Beautifly", type: [PokemonType.Bug, PokemonType.Flying], preEvolution: Species.Silcoon },
    [Species.Cascoon]:              { name: "Cascoon", type: [PokemonType.Bug], evolutions: [Species.Dustox], preEvolution: Species.Wurmple },
    [Species.Dustox]:               { name: "Dustox", type: [PokemonType.Bug, PokemonType.Poison], preEvolution: Species.Cascoon },
  
    [Species.Lotad]:                { name: "Lotad", type: [PokemonType.Water, PokemonType.Grass], evolutions: [Species.Lombre] },
    [Species.Lombre]:               { name: "Lombre", type: [PokemonType.Water, PokemonType.Grass], evolutions: [Species.Ludicolo], preEvolution: Species.Lotad },
    [Species.Ludicolo]:             { name: "Ludicolo", type: [PokemonType.Water, PokemonType.Grass], preEvolution: Species.Lombre },
  
    [Species.Seedot]:               { name: "Seedot", type: [PokemonType.Grass], evolutions: [Species.Nuzleaf] },
    [Species.Nuzleaf]:              { name: "Nuzleaf", type: [PokemonType.Grass, PokemonType.Dark], evolutions: [Species.Shiftry], preEvolution: Species.Seedot },
    [Species.Shiftry]:              { name: "Shiftry", type: [PokemonType.Grass, PokemonType.Dark], preEvolution: Species.Nuzleaf },
  
    [Species.Taillow]:              { name: "Taillow", type: [PokemonType.Normal, PokemonType.Flying], evolutions: [Species.Swellow] },
    [Species.Swellow]:              { name: "Swellow", type: [PokemonType.Normal, PokemonType.Flying], preEvolution: Species.Taillow },
  
    [Species.Wingull]:              { name: "Wingull", type: [PokemonType.Water, PokemonType.Flying], evolutions: [Species.Pelipper] },
    [Species.Pelipper]:             { name: "Pelipper", type: [PokemonType.Water, PokemonType.Flying], preEvolution: Species.Wingull },
  
    [Species.Ralts]:                { name: "Ralts", type: [PokemonType.Psychic], evolutions: [Species.Kirlia] },
    [Species.Kirlia]:               { name: "Kirlia", type: [PokemonType.Psychic], evolutions: [Species.Gardevoir], preEvolution: Species.Ralts },
    [Species.Gardevoir]:            { name: "Gardevoir", type: [PokemonType.Psychic], preEvolution: Species.Kirlia },
  
    [Species.Surskit]:              { name: "Surskit", type: [PokemonType.Bug, PokemonType.Water], evolutions: [Species.Masquerain] },
    [Species.Masquerain]:           { name: "Masquerain", type: [PokemonType.Bug, PokemonType.Flying], preEvolution: Species.Surskit },
  
    [Species.Shroomish]:            { name: "Shroomish", type: [PokemonType.Grass], evolutions: [Species.Breloom] },
    [Species.Breloom]:              { name: "Breloom", type: [PokemonType.Grass, PokemonType.Fighting], preEvolution: Species.Shroomish },
  
    [Species.Slakoth]:              { name: "Slakoth", type: [PokemonType.Normal], evolutions: [Species.Vigoroth] },
    [Species.Vigoroth]:             { name: "Vigoroth", type: [PokemonType.Normal], evolutions: [Species.Slaking], preEvolution: Species.Slakoth },
    [Species.Slaking]:              { name: "Slaking", type: [PokemonType.Normal], preEvolution: Species.Vigoroth },
  
    [Species.Nincada]:              { name: "Nincada", type: [PokemonType.Bug, PokemonType.Ground], evolutions: [Species.Ninjask, Species.Shedinja] },
    [Species.Ninjask]:              { name: "Ninjask", type: [PokemonType.Bug, PokemonType.Flying], preEvolution: Species.Nincada },
    [Species.Shedinja]:             { name: "Shedinja", type: [PokemonType.Bug, PokemonType.Ghost], preEvolution: Species.Nincada },
  
    [Species.Whismur]:              { name: "Whismur", type: [PokemonType.Normal], evolutions: [Species.Loudred] },
    [Species.Loudred]:              { name: "Loudred", type: [PokemonType.Normal], evolutions: [Species.Exploud], preEvolution: Species.Whismur },
    [Species.Exploud]:              { name: "Exploud", type: [PokemonType.Normal], preEvolution: Species.Loudred },
  
    [Species.Makuhita]:             { name: "Makuhita", type: [PokemonType.Fighting], evolutions: [Species.Hariyama] },
    [Species.Hariyama]:             { name: "Hariyama", type: [PokemonType.Fighting], preEvolution: Species.Makuhita },
  
    [Species.Azurill]:              { name: "Azurill", type: [PokemonType.Normal], evolutions: [Species.Marill] },
  
    [Species.Nosepass]:             { name: "Nosepass", type: [PokemonType.Rock] },
  
    [Species.Skitty]:               { name: "Skitty", type: [PokemonType.Normal], evolutions: [Species.Delcatty] },
    [Species.Delcatty]:             { name: "Delcatty", type: [PokemonType.Normal], preEvolution: Species.Skitty },
  
    [Species.Sableye]:              { name: "Sableye", type: [PokemonType.Dark, PokemonType.Ghost] },
  
    [Species.Mawile]:               { name: "Mawile", type: [PokemonType.Steel] },
  
    [Species.Aron]:                 { name: "Aron", type: [PokemonType.Steel, PokemonType.Rock], evolutions: [Species.Lairon] },
    [Species.Lairon]:               { name: "Lairon", type: [PokemonType.Steel, PokemonType.Rock], evolutions: [Species.Aggron], preEvolution: Species.Aron },
    [Species.Aggron]:               { name: "Aggron", type: [PokemonType.Steel, PokemonType.Rock], preEvolution: Species.Lairon },
  
    [Species.Meditite]:             { name: "Meditite", type: [PokemonType.Fighting, PokemonType.Psychic], evolutions: [Species.Medicham] },
    [Species.Medicham]:             { name: "Medicham", type: [PokemonType.Fighting, PokemonType.Psychic], preEvolution: Species.Meditite },
  
    [Species.Electrike]:            { name: "Electrike", type: [PokemonType.Electric], evolutions: [Species.Manectric] },
    [Species.Manectric]:            { name: "Manectric", type: [PokemonType.Electric], preEvolution: Species.Electrike },
  
    [Species.Plusle]:               { name: "Plusle", type: [PokemonType.Electric] },

    [Species.Minun]:                { name: "Minun", type: [PokemonType.Electric] },
  
    [Species.Volbeat]:              { name: "Volbeat", type: [PokemonType.Bug] },

    [Species.Illumise]:             { name: "Illumise", type: [PokemonType.Bug] },
  
    [Species.Roselia]:              { name: "Roselia", type: [PokemonType.Grass, PokemonType.Poison] },
  
    [Species.Gulpin]:               { name: "Gulpin", type: [PokemonType.Poison], evolutions: [Species.Swalot] },
    [Species.Swalot]:               { name: "Swalot", type: [PokemonType.Poison], preEvolution: Species.Gulpin },
  
    [Species.Carvanha]:             { name: "Carvanha", type: [PokemonType.Water, PokemonType.Dark], evolutions: [Species.Sharpedo] },
    [Species.Sharpedo]:             { name: "Sharpedo", type: [PokemonType.Water, PokemonType.Dark], preEvolution: Species.Carvanha },
  
    [Species.Wailmer]:              { name: "Wailmer", type: [PokemonType.Water], evolutions: [Species.Wailord] },
    [Species.Wailord]:              { name: "Wailord", type: [PokemonType.Water], preEvolution: Species.Wailmer },
  
    [Species.Numel]:                { name: "Numel", type: [PokemonType.Fire, PokemonType.Ground], evolutions: [Species.Camerupt] },
    [Species.Camerupt]:             { name: "Camerupt", type: [PokemonType.Fire, PokemonType.Ground], preEvolution: Species.Numel },
  
    [Species.Torkoal]:              { name: "Torkoal", type: [PokemonType.Fire] },
  
    [Species.Spoink]:               { name: "Spoink", type: [PokemonType.Psychic], evolutions: [Species.Grumpig] },
    [Species.Grumpig]:              { name: "Grumpig", type: [PokemonType.Psychic], preEvolution: Species.Spoink },
  
    [Species.Spinda]:               { name: "Spinda", type: [PokemonType.Normal] },
  
    [Species.Trapinch]:             { name: "Trapinch", type: [PokemonType.Ground], evolutions: [Species.Vibrava] },
    [Species.Vibrava]:              { name: "Vibrava", type: [PokemonType.Ground, PokemonType.Dragon], evolutions: [Species.Flygon], preEvolution: Species.Trapinch },
    [Species.Flygon]:               { name: "Flygon", type: [PokemonType.Ground, PokemonType.Dragon], preEvolution: Species.Vibrava },
  
    [Species.Cacnea]:               { name: "Cacnea", type: [PokemonType.Grass], evolutions: [Species.Cacturne] },
    [Species.Cacturne]:             { name: "Cacturne", type: [PokemonType.Grass, PokemonType.Dark], preEvolution: Species.Cacnea },
  
    [Species.Swablu]:               { name: "Swablu", type: [PokemonType.Normal, PokemonType.Flying], evolutions: [Species.Altaria] },
    [Species.Altaria]:              { name: "Altaria", type: [PokemonType.Dragon, PokemonType.Flying], preEvolution: Species.Swablu },
  
    [Species.Zangoose]:             { name: "Zangoose", type: [PokemonType.Normal] },

    [Species.Seviper]:              { name: "Seviper", type: [PokemonType.Poison] },
  
    [Species.Lunatone]:             { name: "Lunatone", type: [PokemonType.Rock, PokemonType.Psychic] },

    [Species.Solrock]:              { name: "Solrock", type: [PokemonType.Rock, PokemonType.Psychic] },
  
    [Species.Barboach]:             { name: "Barboach", type: [PokemonType.Water, PokemonType.Ground], evolutions: [Species.Whiscash] },
    [Species.Whiscash]:             { name: "Whiscash", type: [PokemonType.Water, PokemonType.Ground], preEvolution: Species.Barboach },
  
    [Species.Corphish]:             { name: "Corphish", type: [PokemonType.Water], evolutions: [Species.Crawdaunt] },
    [Species.Crawdaunt]:            { name: "Crawdaunt", type: [PokemonType.Water, PokemonType.Dark], preEvolution: Species.Corphish },
  
    [Species.Baltoy]:               { name: "Baltoy", type: [PokemonType.Ground, PokemonType.Psychic], evolutions: [Species.Claydol] },
    [Species.Claydol]:              { name: "Claydol", type: [PokemonType.Ground, PokemonType.Psychic], preEvolution: Species.Baltoy },
  
    [Species.Lileep]:               { name: "Lileep", type: [PokemonType.Rock, PokemonType.Grass], evolutions: [Species.Cradily] },
    [Species.Cradily]:              { name: "Cradily", type: [PokemonType.Rock, PokemonType.Grass], preEvolution: Species.Lileep },
  
    [Species.Anorith]:              { name: "Anorith", type: [PokemonType.Rock, PokemonType.Bug], evolutions: [Species.Armaldo] },
    [Species.Armaldo]:              { name: "Armaldo", type: [PokemonType.Rock, PokemonType.Bug], preEvolution: Species.Anorith },
  
    [Species.Feebas]:               { name: "Feebas", type: [PokemonType.Water], evolutions: [Species.Milotic] },
    [Species.Milotic]:              { name: "Milotic", type: [PokemonType.Water], preEvolution: Species.Feebas },
  
    [Species.Castform]:             { name: "Castform", type: [PokemonType.Normal] },
  
    [Species.Kecleon]:              { name: "Kecleon", type: [PokemonType.Normal] },
  
    [Species.Shuppet]:              { name: "Shuppet", type: [PokemonType.Ghost], evolutions: [Species.Banette] },
    [Species.Banette]:              { name: "Banette", type: [PokemonType.Ghost], preEvolution: Species.Shuppet },
  
    [Species.Duskull]:              { name: "Duskull", type: [PokemonType.Ghost], evolutions: [Species.Dusclops] },
    [Species.Dusclops]:             { name: "Dusclops", type: [PokemonType.Ghost], preEvolution: Species.Duskull },
  
    [Species.Tropius]:              { name: "Tropius", type: [PokemonType.Grass, PokemonType.Flying] },
  
    [Species.Chimecho]:             { name: "Chimecho", type: [PokemonType.Psychic] },
  
    [Species.Absol]:                { name: "Absol", type: [PokemonType.Dark] },
  
    [Species.Wynaut]:               { name: "Wynaut", type: [PokemonType.Psychic], evolutions: [Species.Wobbuffet] },
  
    [Species.Snorunt]:              { name: "Snorunt", type: [PokemonType.Ice], evolutions: [Species.Glalie] },
    [Species.Glalie]:               { name: "Glalie", type: [PokemonType.Ice], preEvolution: Species.Snorunt },
  
    [Species.Spheal]:               { name: "Spheal", type: [PokemonType.Ice, PokemonType.Water], evolutions: [Species.Sealeo] },
    [Species.Sealeo]:               { name: "Sealeo", type: [PokemonType.Ice, PokemonType.Water], evolutions: [Species.Walrein], preEvolution: Species.Spheal },
    [Species.Walrein]:              { name: "Walrein", type: [PokemonType.Ice, PokemonType.Water], preEvolution: Species.Sealeo },
  
    [Species.Clamperl]:             { name: "Clamperl", type: [PokemonType.Water], evolutions: [Species.Huntail, Species.Gorebyss] },
    [Species.Huntail]:              { name: "Huntail", type: [PokemonType.Water], preEvolution: Species.Clamperl },
    [Species.Gorebyss]:             { name: "Gorebyss", type: [PokemonType.Water], preEvolution: Species.Clamperl },
  
    [Species.Relicanth]:            { name: "Relicanth", type: [PokemonType.Water, PokemonType.Rock] },
  
    [Species.Luvdisc]:              { name: "Luvdisc", type: [PokemonType.Water] },
  
    [Species.Bagon]:                { name: "Bagon", type: [PokemonType.Dragon], evolutions: [Species.Shelgon] },
    [Species.Shelgon]:              { name: "Shelgon", type: [PokemonType.Dragon], evolutions: [Species.Salamence], preEvolution: Species.Bagon },
    [Species.Salamence]:            { name: "Salamence", type: [PokemonType.Dragon, PokemonType.Flying], preEvolution: Species.Shelgon },
  
    [Species.Beldum]:               { name: "Beldum", type: [PokemonType.Steel, PokemonType.Psychic], evolutions: [Species.Metang] },
    [Species.Metang]:               { name: "Metang", type: [PokemonType.Steel, PokemonType.Psychic], evolutions: [Species.Metagross], preEvolution: Species.Beldum },
    [Species.Metagross]:            { name: "Metagross", type: [PokemonType.Steel, PokemonType.Psychic], preEvolution: Species.Metang },
  
    [Species.Regirock]:             { name: "Regirock", type: [PokemonType.Rock] },

    [Species.Regice]:               { name: "Regice", type: [PokemonType.Ice] },

    [Species.Registeel]:            { name: "Registeel", type: [PokemonType.Steel] },
  
    [Species.Latias]:               { name: "Latias", type: [PokemonType.Dragon, PokemonType.Psychic] },

    [Species.Latios]:               { name: "Latios", type: [PokemonType.Dragon, PokemonType.Psychic] },
  
    [Species.Kyogre]:               { name: "Kyogre", type: [PokemonType.Water] },

    [Species.Groudon]:              { name: "Groudon", type: [PokemonType.Ground] },

    [Species.Rayquaza]:             { name: "Rayquaza", type: [PokemonType.Dragon, PokemonType.Flying] },
  
    [Species.Jirachi]:              { name: "Jirachi", type: [PokemonType.Steel, PokemonType.Psychic] },
    
    [Species.Deoxys]:               { name: "Deoxys", type: [PokemonType.Psychic] },
    [Species.DeoxysAttack]:         { name: "Deoxys", type: [PokemonType.Psychic], formName: "Attack", baseForm: Species.Deoxys, unavailable: true },
    [Species.DeoxysDefense]:        { name: "Deoxys", type: [PokemonType.Psychic], formName: "Defense", baseForm: Species.Deoxys, unavailable: true },
    [Species.DeoxysSpeed]:          { name: "Deoxys", type: [PokemonType.Psychic], formName: "Speed", baseForm: Species.Deoxys, unavailable: true },
});
  