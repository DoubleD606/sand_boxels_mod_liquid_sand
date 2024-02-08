elements.Green_Stuff = {
	color: "#689F38",
	behaviour: behaviors.POWDER,
	category: "Green...",
	state: "powder",
},

elements.test = {
	color: "#ff0000",
	behavior: behaviors.POWDER,
	category: "test",
	state: "powder",
	reactions: {	
		"fire": { elem1: "Gas_Test", elem2: "Green_Stuff"},
		"water": { elem1: "Solid_Test", elem2: null},
		}
},

elements.Solid_Test = {
	color: "#9F3333",
	behavior: behaviors.WALL,
	category: "test",
	state: "solid",
}

elements.Gas_Test = {
	color: "#773838",
	behavior: behaviors.DGAS,
	category: "test",
	state: "gas",
};
