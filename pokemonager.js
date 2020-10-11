(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    findNames(n) {

      let data = fetch(`https://pokeapi.co/api/v2/pokemon?limit=${n}`)
        .then((response)=>{
          let newResponse = response.json();
          return newResponse;
        })
        .then((promiseJson) => {
          return promiseJson.results;
        })
        .then( (gottaArrayThemAll) => {
          let arrayOfPokemon = [];
          gottaArrayThemAll.map((pokemon) => {
            return arrayOfPokemon.push(pokemon.name) } );
          return arrayOfPokemon;
          });
          return data;
    }

    // This should return an array of all the Pokemon that are under a particular weight.

    findUnderWeight(weight) {
      return Promise.all([
        fetch('https://pokeapi.co/api/v2/pokemon/1/').then(result => result.json()),
        fetch('https://pokeapi.co/api/v2/pokemon/2/').then(result => result.json()),
        fetch('https://pokeapi.co/api/v2/pokemon/3/').then(result => result.json()),
        fetch('https://pokeapi.co/api/v2/pokemon/4/').then(result => result.json()),
        fetch('https://pokeapi.co/api/v2/pokemon/5/').then(result => result.json()),
        fetch('https://pokeapi.co/api/v2/pokemon/6/').then(result => result.json()),
        fetch('https://pokeapi.co/api/v2/pokemon/7/').then(result => result.json()),
        fetch('https://pokeapi.co/api/v2/pokemon/8/').then(result => result.json()),
        fetch('https://pokeapi.co/api/v2/pokemon/9/').then(result => result.json()),
        fetch('https://pokeapi.co/api/v2/pokemon/10/').then(result => result.json()),
      ]).then((pokemonArray) =>  {
        return pokemonArray.filter(pokemon => pokemon.weight < weight)
      })
    }
  }
  window.Pokemonager = Pokemonager;
})();

