const pokemonInput = document.getElementById('search-input');
const pokemonUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
const searchBtn = document.getElementById('search-button');
const pokemonNameElement = document.getElementById('pokemon-name');
const pokemonIdElement = document.getElementById('pokemon-id');
const weightElement = document.getElementById('weight');
const heightElement = document.getElementById('height');
const hpElement = document.getElementById('hp');
const attackElement = document.getElementById('attack');
const defenseElement = document.getElementById('defense');
const specialAttackElement = document.getElementById('special-attack');
const specialDefenseElement = document.getElementById('special-defense');
const speedElement = document.getElementById('speed');
const typesElement = document.getElementById('types');
const spriteElement = document.getElementById('sprite-container'); 

const fetchPokemonData = async () => {
  try {
    const userInput = pokemonInput.value.toLowerCase();
    const apiUrl = `${pokemonUrl}/${userInput}`;
    const res = await fetch(apiUrl);

    if (!res.ok) {
      alert("Pokémon not found");
      return;
    }

    const data = await res.json();
    displayPokemonData(data);
  } catch (err) {
    console.error("Error fetching Pokémon data:", err.message);
  }
};

const displayPokemonData = ({ id, name, weight, height, stats, types, sprites }) => {
  pokemonNameElement.textContent = name.toUpperCase();
  pokemonIdElement.textContent = `#${id}`;
  weightElement.textContent = `Weight: ${weight}`;
  heightElement.textContent = `Height: ${height}`;
  hpElement.textContent = stats[0].base_stat;
  attackElement.textContent = stats[1].base_stat;
  defenseElement.textContent = stats[2].base_stat;
  specialAttackElement.textContent = stats[3].base_stat;
  specialDefenseElement.textContent = stats[4].base_stat;
  speedElement.textContent = stats[5].base_stat;

  
  typesElement.innerHTML = '';
  types.forEach(type => {
    const typeElement = document.createElement('div');
    typeElement.textContent = type.type.name.toUpperCase();
    typeElement.style.backgroundColor = "orange";
    typesElement.appendChild(typeElement);
  });

  const spriteImg = document.createElement('img');
  spriteImg.id = 'sprite';
  spriteImg.src = sprites.front_default;
  spriteElement.innerHTML = '';
  spriteElement.appendChild(spriteImg);
};

searchBtn.addEventListener('click', fetchPokemonData);
