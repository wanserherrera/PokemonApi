const pokemonContainer = document.querySelector(".pokemon-container");



//esto usamos para traer un pokemon
//https://pokeapi.co/api/v2/pokemon?limit=50
function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
      crearPokemon(data);
    });
}

function traerPokemon(numero) {
  
  for (let i = 1; i <= numero; i++) {
    fetchPokemon(i);
  }
}

function crearPokemon(pokemon){
  const card=document.createElement('div');
  card.classList.add('pokemon-block');
  //const spriteContainer.classList.add('img-container');

  const spriteContainer=document.createElement('div');
  spriteContainer.classList.add('img-container');


  const sprite=document.createElement('img');
  sprite.src=pokemon.sprites.front_default

  spriteContainer.appendChild(sprite);

  const number = document.createElement('p');
  number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

  const name=document.createElement('p');
  name.classList.add("name");
  name.textContent=pokemon.name;

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  pokemonContainer.appendChild(card);
}
traerPokemon(50)

