
const type_filters = {
	list: [
		{ id: 0, switch: true, string: "start" },
		{ id: 1, switch: true, string: "expand" },
		{ id: 2, switch: true, string: "rearrange" },
		{ id: 3, switch: true, string: "formula" },
		{ id: 4, switch: true, string: "substitution" },
		{ id: 5, switch: true, string: "simplification" },
		{ id: 6, switch: true, string: "distributive" },
		{ id: 7, switch: true, string: "multiply both sides" },
		{ id: 8, switch: true, string: "variable" }
	],
	type_id: {
		'start': 0,
		'expand': 1,
		'rearrange': 2,
		'formula': 3,
		'substitution': 4,
		'simplification': 5,
		'distributive': 6,
		'multiply both sides': 7,
		'variable': 8
	}
};

export default type_filters;