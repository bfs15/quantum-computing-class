
const type_filters = {
	list: [
		{ id: 0, switch: true, string: "expand" },
		{ id: 1, switch: true, string: "formula" },
		{ id: 2, switch: true, string: "substitute" },
		{ id: 3, switch: true, string: "simplify" },
		{ id: 4, switch: true, string: "distribute" },
		{ id: 5, switch: true, string: "multiply both sides" },
		{ id: 6, switch: true, string: "factorize" },
		{ id: 7, switch: true, string: "rearrange" },
	],
	type_id: {
		'expand': 0,
		'formula': 1,
		'substitute': 2,
		'simplify': 3,
		'distribute': 4,
		'multiply both sides': 5,
		'factorize': 6,
		'rearrange': 7,
	}
};

export default type_filters;