const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
    
//Pokemon whose id is divisible by 3
const divByThree = pokemon.filter(p => p.id % 3 === 0)
console.log(divByThree)

//Pokemon who are fire type
const fireType = pokemon.filter(p => p.types.includes("fire"))
console.log(fireType)

//Pokemon with more than one type
const dualType = pokemon.filter(p => p.types.length > 1)
console.log(dualType)

//An array of just the names
const pokemonNames = pokemon.map(p => p.name)
console.log(pokemonNames)

//An array of the names of Pokemon with id numbers greater than 99
const namesGreater = pokemon.filter(p => p.id > 99).map(p => p.name)
console.log(namesGreater)

//An array of the names of Pokemon who only type is poison
const namesPoison = pokemon.filter(p => p.types.includes("poison") && p.types.length === 1).map(p => p.name)
console.log(namesPoison)

//An array of just the first type of pokemon whose second type is flying
const dualTypeFlying = pokemon.filter(p => p.types.includes("flying") && p.types.length > 1).map(p => p.types[0])
console.log(dualTypeFlying)

//A count of the number of Pokemon that are normal type
const normalCount = (pokemon.filter(p => p.types.includes("normal"))).length
console.log(normalCount)