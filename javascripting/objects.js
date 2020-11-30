const superhero = [
	{
	type: "batmanhero",  
		name: "Batman",
		strength: 1000,
		color: "black"
	}, 

{
	type: "spidermanhero",
		name: "spiderman",
		strength: 2000,
		color: "red"
	},

	{
		type: "supermanhero", 
			name: "superman",
			strength: 1500,
			color: "blue"
	
	}];


for (let i = 0; i < superhero.length; i++) {
	console.log(superhero[i].type);
	console.log(superhero[i].strength);
	console.log("******")
}

console.log(superhero[2].color);



