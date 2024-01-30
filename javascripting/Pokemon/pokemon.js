const pokemonInput = document.getElementById('search-input');
const searchPokeForm = document.getElementById('search-form');
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
    console.log("User Input:", userInput);

    const apiUrl = `${pokemonUrl}/${userInput}`;
    // console.log("API URL:", apiUrl);

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

searchPokeForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission
  fetchPokemonData();
});


const displayPokemonData = ({ id, name, weight, height, stats, types, sprites }) => {
  // Display values in the specified elements
  pokemonNameElement.textContent = name ? name.toUpperCase() : 'N/A';
  pokemonIdElement.textContent = id ? `#${id}` : 'N/A';
  weightElement.textContent = weight ? `Weight: ${weight}` : 'N/A';
  heightElement.textContent = height ? `Height: ${height}` : 'N/A';
  hpElement.textContent = stats && stats[0] ? stats[0].base_stat : 'N/A';
  attackElement.textContent = stats && stats[1] ? stats[1].base_stat : 'N/A';
  defenseElement.textContent = stats && stats[2] ? stats[2].base_stat : 'N/A';
  specialAttackElement.textContent = stats && stats[3] ? stats[3].base_stat : 'N/A';
  specialDefenseElement.textContent = stats && stats[4] ? stats[4].base_stat : 'N/A';
  speedElement.textContent = stats && stats[5] ? stats[5].base_stat : 'N/A';

  // Display types in the #types element
  typesElement.innerHTML = '';
  types?.forEach(type => {
    const typeElement = document.createElement('div');
    typeElement.textContent = type.type.name.toUpperCase();
    typeElement.style.backgroundColor = "orange";
    typeElement.style.borderRadius = "20px";

    typesElement.appendChild(typeElement);
  });

  // Add sprite image
  const spriteImg = document.createElement('img');
  spriteImg.id = 'sprite';
  spriteImg.src = sprites?.front_default;
  spriteElement.innerHTML = ''; // Clear previous content
  spriteElement.appendChild(spriteImg);
};

searchBtn.addEventListener('click', fetchPokemonData);
