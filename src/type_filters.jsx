
const type_filters = {
	list: [
		{ id: 0, switch: true, string: "expand" },
		{ id: 1, switch: true, string: "formula" },
		{ id: 2, switch: true, string: "substitution" },
		{ id: 3, switch: true, string: "simplification" },
		{ id: 4, switch: true, string: "distributive" },
		{ id: 5, switch: true, string: "multiply both sides" },
	],
	type_id: {
		'expand': 0,
		'formula': 1,
		'substitution': 2,
		'simplification': 3,
		'distributive': 4,
		'multiply both sides': 5,
	}
};

export default type_filters;