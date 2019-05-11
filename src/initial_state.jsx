import React from "react";
import MathJax from "react-mathjax2";

import type_filters from "./type_filters";

const initial_state = {
	type_filters: type_filters.list,
	questions: [
		{
			id: 0,
			title: "Question 1",
			type_filters: type_filters.list,
			description: (
				<MathJax.Context input="tex">
					<h4 className="question_description">
						{"Qual é o valor de "}

						<MathJax.Node inline>{"H^{\\otimes 2} ⎹01⟩"}</MathJax.Node>
						{
							"? Após aplicar a Transformada de Hadamard ao sistema quântico original (i.e., ⎹01⟩), se fizermos uma medida of final do processo, qual é a probababilidade de obtermos cada uma das strings clássicas "
						}
						<MathJax.Node inline>{"x \\in {(0, 1)}^2"}</MathJax.Node>
						{" ?"}
					</h4>
				</MathJax.Context>
			),
			solution: [
				{
					id: 0,
					type: "formula",
					step: "H^{\\otimes 2} ⎹01⟩",
					note: null
				},
				{
					id: 1,
					type: "substitution",
					step:
						"H^{\\otimes n}⎹u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x·u}⎹x⟩)",
					note: (
						<MathJax.Context input="tex">
							<div>
								<MathJax.Node inline>
									{"x\\in \\{0,1\\}^n = \\{⎹00⟩, ⎹01⟩, ⎹10⟩, ⎹11⟩\\}"}
								</MathJax.Node>
							</div>
						</MathJax.Context>
					)
				},
				{
					id: 2,
					type: "expand",
					step:
						"H^{\\otimes 2} ⎹01⟩ = \\frac{1}{2}\\sum_{x}( -1^{x·⎹01⟩}⎹x⟩)",
					note: (
						<MathJax.Context input="tex">
							<div>
								<MathJax.Node inline>{"u = ⎹01⟩, n = 2"}</MathJax.Node>
							</div>
						</MathJax.Context>
					)
				},
				{
					id: 3,
					type: "",
					step: "\\frac{1}{2}(+1⎹00⟩ -1⎹01⟩ +1⎹10⟩ -1⎹11⟩)",
					note: (
						<MathJax.Context input="tex">
							<div>
								{"all strings are equiprobable"}
								<br />
								<MathJax.Node inline>
									{"H^{\\otimes 2} ⎹01⟩"}
								</MathJax.Node>
								{" Means ⎹strings⟩ which have the "}
								<MathJax.Node inline>{"bit_1=1"}</MathJax.Node>
								{" are *(-1)"}
							</div>
						</MathJax.Context>
					)
				}
			]
		},
		{
			id: 1,
			title: "Question 2",
			type_filters: type_filters.list,
			description: (
				<MathJax.Context input="tex">
					<h4 className="question_description">
						{"Dada uma string binária "}
						<MathJax.Node inline>{"y = y_1 y_2 ... y_n"}</MathJax.Node>
						{", qual é o valor de "}
						<MathJax.Node inline>{"H^{\\otimes n}⎹y⟩?"}</MathJax.Node>
					</h4>
				</MathJax.Context>
			),
			solution: [
				{
					id: 0,
					type: "formula",
					step:
						"H^{\\otimes n} ⎹u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x} -1^{x·u}⎹x⟩",
					note: (
						<MathJax.Context input="tex">
							<div className="question_description">
								{"maybe he wants a description: a superposition of all possible strings, all with the same absolute amplitude (same probability) only changing the sign of an amplitude to negative if it has an odd number of bits in  "}
								<MathJax.Node inline>{"x * u"}</MathJax.Node>
								{" , (000·x is odd)"}
							</div>
						</MathJax.Context>
					)
				}
			]
		},
		{
			id: 2,
			title: "Question 3",
			type_filters: type_filters.list,
			description: (
				<MathJax.Context input="tex">
					<h4 className="question_description">
						{"Suponha que: "}
						<MathJax.Node inline>
							{
								"H^{\\otimes3} 	⎹\\phi⟩ = \\frac{1}{\\sqrt{2}} (⎹000⟩ + ⎹111⟩)"
							}
						</MathJax.Node>
						{". Qual é o valor de "}
						<MathJax.Node inline>{"⎹\\phi⟩"}</MathJax.Node>
						{"?"}
					</h4>
				</MathJax.Context>
			),
			solution: [
				{
					id: 0,
					type: "multiply both sides",
					step:
						"H^{\\otimes 3} ⎹\\phi⟩ = \\frac{1}{\\sqrt{2}}(⎹000⟩ + ⎹111⟩)",
					note: null
				},
				{
					id: 1,
					type: "simplification",
					step:
						"H^{\\otimes 3}H^{\\otimes 3} ⎹\\phi⟩ = H^{\\otimes 3}\\frac{1}{\\sqrt{2}}(⎹000⟩ + ⎹111⟩)",
					note: (
						<MathJax.Context input="tex">
							<div>
								<MathJax.Node inline>
									{"H^{\\otimes 3}H^{\\otimes 3} = I"}
								</MathJax.Node>
								{" , Hadamard is its own inverse"}
							</div>
						</MathJax.Context>
					)
				},
				{
					id: 2,
					type: "distributive",
					step:
						"⎹\\phi⟩ = H^{\\otimes 3}\\frac{1}{\\sqrt{2}}(⎹000⟩ + ⎹111⟩)",
					note: null
				},
				{
					id: 3,
					type: "",
					step:
						"\\frac{1}{\\sqrt{2}}(H^{\\otimes 3}⎹000⟩ + H^{\\otimes 3}⎹111⟩)",
					note: (
						<MathJax.Context input="tex">
							<div>
								{"right side of equation is now "}
								<MathJax.Node inline>{"\\phi"}</MathJax.Node>
								<p>
									{"let's find out the value of "}
									<MathJax.Node inline>{"H^{\\otimes 3} ⎹000⟩"}</MathJax.Node>
									{" and "}
									<MathJax.Node inline>{"H^{\\otimes 3} ⎹111⟩"}</MathJax.Node>
								</p>
								
							</div>
						</MathJax.Context>
					)
				},
				{
					id: 4,
					type: "simplification",
					step:
						"H^{\\otimes 3} ⎹000⟩ = \\frac{1}{2^{3/2}}\\sum_{x}(-1^{000·x}x)",
					note: (
						<MathJax.Context input="tex">
							<div>
								<MathJax.Node inline>{"000·x = 0"}</MathJax.Node>
								{" , so  "}
								<MathJax.Node inline>{"-1^{000·x}x = x"}</MathJax.Node>
							</div>
						</MathJax.Context>
					)
				},
				{
					id: 5,
					type: "",
					step: "H^{\\otimes 3} ⎹000⟩ = \\frac{1}{2^{3/2}}\\sum_{x}(x)",
					note: null
				},
				{
					id: 6,
					type: "substitution",
					step:
						"H^{\\otimes 3} ⎹111⟩ = \\frac{1}{2^{3/2}}\\sum_{x}(-1^{111·x}x)",
					note: (
						<MathJax.Context input="tex">
							<div>
								We have to find out their sum, the x's from ⎹000⟩'s sum will add with x's from ⎹111⟩'s sum, so x's with an even number of bits 1 will become 2x and
								x's with odd number of bits will cancel out
							</div>
						</MathJax.Context>
					)
				},
				{
					id: 7,
					type: "factorize",
					step:
						"H^{\\otimes 3} ⎹000⟩ + H^{\\otimes 3} ⎹111⟩ = \\frac{1}{2^{3/2}}\\sum_{x}(x) + \\frac{1}{2^{3/2}}\\sum_{x}(-1^{111·x}x)",
					note: null
				},
				{
					id: 8,
					type: "expand",
					step:
						"H^{\\otimes 3} ⎹000⟩ + H^{\\otimes 3} ⎹111⟩ = \\frac{1}{2^{3/2}}\\sum_{x}(x -1^{111·x}x)",
					note: null
				},
				{
					id: 9,
					type: "",
					step:
						"H^{\\otimes 3}(⎹000⟩ + ⎹111⟩) = \\frac{1}{2^{3/2}}\\left( 2⎹000⟩+2⎹011⟩+2⎹101⟩+2⎹110⟩ \\right)",
					note: null
				},
				{
					id: 10,
					type: "substitution",
					step:
						"⎹\\phi⟩ = H^{\\otimes 3}\\frac{1}{\\sqrt{2}}(⎹000⟩ + ⎹111⟩)",
					note: null
				},
				{
					id: 11,
					type: "simplification",
					step:
						"\\frac{1}{\\sqrt{2}} \\left( \\frac{1}{2^{3/2}} \\right) \\left( 2⎹000⟩+2⎹011⟩+2⎹101⟩+2⎹110⟩ \\right)",
					note: (
						<MathJax.Context input="tex">
							<div />
						</MathJax.Context>
					)
				},
				{
					id: 12,
					type: "",
					step:
						"\\frac{1}{2} \\left( +1⎹000⟩+1⎹011⟩+1⎹101⟩+1⎹110⟩ \\right)",
					note: (
						<MathJax.Context input="tex">
							<div>
								{"note: "}
								<MathJax.Node inline>
									{"\\frac{1}{2} < \\frac{1}{\\sqrt{2}}"}
								</MathJax.Node>
							</div>
						</MathJax.Context>
					)
				}
			]
		},
		{
			id: 3,
			title: "Question 4",
			type_filters: type_filters.list,
			description: (
				<MathJax.Context input="tex">
					<span>
						<h4 className="question_description">
							{
								"Desenhe o circuito da Amostragem de Fourier para uma entrada de n qubits"
							}
						</h4>
						<p>* look at the slides</p>
					</span>
				</MathJax.Context>
			),
			solution: []
		},
		{
			id: 4,
			title: "Question 5",
			type_filters: type_filters.list,
			description: (
				<MathJax.Context input="tex">
					<h4 className="question_description">
						{"Qual é o estado resultante quando aplicamos "}
						<MathJax.Node inline>{"H^{\\otimes n}"}</MathJax.Node>
						{" ao estado "}
						<MathJax.Node inline>
							{"\\frac{1}{\\sqrt{2}}(⎹0^n⟩ + ⎹1^n⟩)?"}
						</MathJax.Node>
					</h4>
				</MathJax.Context>
			),
			solution: [
				{
					id: 0,
					type: "",
					step:
						"\\frac{1}{2^{n/2} \\sqrt{2}} \\left(⎹x⟩+ (-1)^{⎹1^n⟩·x}⎹x⟩ \\right)",
					note: (
						<MathJax.Context input="tex">
							<div>
								{
									"All strings with even number of bits with the same amplitude, see question 3"
								}
							</div>
						</MathJax.Context>
					)
				}
			]
		},
		{
			id: 5,
			title: "Question 6",
			type_filters: type_filters.list,
			description: (
				<MathJax.Context input="tex">
					<h4 className="question_description">
						{"Fazendo-se uma amostragem de Fourier no estado "}
						<MathJax.Node inline>
							{
								"\\frac{1}{2 \\sqrt{2}}  \\left(⎹000⟩ − ⎹001⟩ + ⎹010⟩ − ⎹011⟩ + ⎹100⟩ − ⎹101⟩ + ⎹110⟩ − ⎹111⟩\\right)"
							}
						</MathJax.Node>
						{" , quais são os resultado possíveis?"}
					</h4>
				</MathJax.Context>
			),
			solution: [
				{
					id: 0,
					type: "",
					step:
						"H^{\\otimes3} \\frac{1}{2 \\sqrt{2}}  \\left(⎹000⟩ − ⎹001⟩ + ⎹010⟩ − ⎹011⟩ + ⎹100⟩ − ⎹101⟩ + ⎹110⟩ − ⎹111⟩\\right)",
					note: (
						<MathJax.Context input="tex">
							<div>
								<MathJax.Node>
									{
										"\\sum_{x \\in \\{0, 1\\}^n} \\alpha_x |x⟩ -> \\sum_{y \\in \\{0, 1\\}^n} \\beta_y |y⟩"
									}
								</MathJax.Node>

								{
									"The Fourier sampling technique applies Hadamard transform in a superposition and measures it afterward, obtaining the string x with probability "
								}
								<MathJax.Node inline>{"|\\beta|^2"}</MathJax.Node>
							</div>
						</MathJax.Context>
					)
				},
				{
					id: 1,
					type: "",
					step:
						"\\frac{1}{2 \\sqrt{2}}  \\left(H^{\\otimes3}⎹000⟩ − H^{\\otimes3}⎹001⟩ + H^{\\otimes3}⎹010⟩ − H^{\\otimes3}⎹011⟩ + H^{\\otimes3}⎹100⟩ − H^{\\otimes3}⎹101⟩ + H^{\\otimes3}⎹110⟩ − H^{\\otimes3}⎹111⟩\\right)",
					note: (
						<MathJax.Context input="tex">
							<div>
								<MathJax.Node>
									{
										"H^{\\otimes3} x = \\frac{1}{2 ^{3/2}} \\sum_{y \\in \\{0,1\\}^3} -1^{x·y}⎹y⟩"
									}
								</MathJax.Node>
							</div>
						</MathJax.Context>
					)
				},
				{
					id: 2,
					type: "",
					step:
						"\\frac{1}{2 \\sqrt{2} (2 ^{3/2})}  \\left(\\sum_{y \\in \\{0,1\\}^3} -1^{000·y}⎹y⟩ − \\sum_{y \\in \\{0,1\\}^3} -1^{001·y}⎹y⟩ + \\sum_{y \\in \\{0,1\\}^3} -1^{010·y}⎹y⟩ − \\sum_{y \\in \\{0,1\\}^3} -1^{011·y}⎹y⟩ + \\sum_{y \\in \\{0,1\\}^3} -1^{100·y}⎹y⟩ − \\sum_{y \\in \\{0,1\\}^3} -1^{101·y}⎹y⟩ + \\sum_{y \\in \\{0,1\\}^3} -1^{110·y}⎹y⟩ − \\sum_{y \\in \\{0,1\\}^3} -1^{111·y}⎹y⟩\\right)",
					note: (
						<MathJax.Context input="tex">
							<div>
								{
									"That is a lot of summations!"}

								<p>
								<MathJax.Node inline>
									{
										"x \\in \\{⎹000⟩−⎹001⟩+⎹010⟩−⎹011⟩+⎹100⟩−⎹101⟩+⎹110⟩−⎹111⟩\\}"
									}
								</MathJax.Node>
								{", beware the signs before the summations!"}
								</p>
								<p>
									{
										"the thing to be careful is of the sign of the amplitude of each x, since they might flip the sign of the summation, for example in the formula above this one will be flipped: "
									}
									<MathJax.Node inline>
										{
											"−H^{\\otimes3}⎹001⟩,\\ \\alpha_{001} = \\frac{-1}{2\\sqrt{2}},\\ sign_{001} = -1"
										}
									</MathJax.Node>
								</p>
								<p>let's change that and put the sign inside the summation
								<MathJax.Node>
									{
										"(sign_x)H^{\\otimes3} x = \\frac{1}{2 ^{3/2}} \\sum_{y \\in \\{0,1\\}^3} -1^{x·y}sign_x⎹y⟩"
									}
								</MathJax.Node>
								</p>
							</div>
						</MathJax.Context>
					)
				},
				{
					id: 3,
					type: "factorize",
					step:
						"\\frac{1}{8}  \\left(\\sum_{y} -1^{000·y}sign_{000}⎹y⟩ + \\sum_{y} -1^{001·y}sign_{001}⎹y⟩ + \\sum_{y} -1^{010·y}sign_{010}⎹y⟩ + \\sum_{y} -1^{011·y}sign_{011}⎹y⟩ + \\sum_{y} -1^{100·y}sign_{100}⎹y⟩ + \\sum_{y} -1^{101·y}sign_{101}⎹y⟩ + \\sum_{y} -1^{110·y}sign_{110}⎹y⟩ + \\sum_{y} -1^{111·y}sign_{111}⎹y⟩\\right)",
					note: (
						<MathJax.Context input="tex">
							<div>
								{"now every sum will be summed up"}
								<p>
									Doing it in a verbose way takes a lot of time, but since only the signs matter<sup>*</sup> you can do it by using the fact that every
								{" "}
									<MathJax.Node inline>{"y \\in \\{0,1\\}^3"} </MathJax.Node>
									{
										" is a common factor in each of the 8 summations above... think about it a little bit. 	"
									}
								</p>
								<p><sup>*</sup>since all the initial superpositions x are equiprobable you can factor out the amplitude
								</p>
							</div>
						</MathJax.Context>
					)
				},
				{
					id: 4,
					type: "expand",
					step:
						"\\frac{1}{8} \\sum_{x} \\sum_{y} -1^{x·y}sign_{x}⎹y⟩",
					note: (
						<MathJax.Context input="tex">
							<div>
								<p>
								{"phew"}
								</p>
								<p>I will now expand again, the y summation this time, just to make it easier to see the next step. We want to find out what multiplies each y, remember
									<MathJax.Node inline>{"\\beta_y"}</MathJax.Node>
								?
								</p>
							</div>
						</MathJax.Context>
					)
				},
				{
					id: 5,
					type: "",
					step:
						"\\frac{1}{8}  \\left(\\sum_x (-1^{x·000}sign_x)⎹000⟩ + \\sum_x (-1^{x·001}sign_x)⎹001⟩ + \\sum_x (-1^{x·010}sign_x)⎹010⟩ + \\sum_x (-1^{x·011}sign_x)⎹011⟩ + \\sum_x (-1^{x·100}sign_x)⎹100⟩ + \\sum_x (-1^{x·101}sign_x)⎹101⟩ + \\sum_x (-1^{x·110}sign_x)⎹110⟩ + \\sum_x (-1^{x·111}sign_x)⎹111⟩ \\right)",
					note: (
						<MathJax.Context input="tex">
							<div>
								<p>									
								{
									"To find the amplitude "
								}
								<MathJax.Node inline>
									{
										"\\beta_y"
									}
								</MathJax.Node>
								{
									" of each y just solve the corresponding summation in front of y."
									}
								</p>
								

								<MathJax.Node >
									{
										"\\beta_y = \\frac{1}{8} \\sum_x (-1^{x·y}sign_x)"
									}
								</MathJax.Node>
								<MathJax.Node >
									{
										"x \\in \\{000, −001, +010, −011, +100, −101, +110, −111\\}"
									}
								</MathJax.Node>
								{
									"The term "
								}
								<MathJax.Node inline>
									{
										"(-1^{x·001}sign_x)"
									}
								</MathJax.Node>
								{" "}
								is either 1 or -1, and each sum will be between -8 and 8<sup>*</sup>, since we sum 8 terms. If a string has a sum equal to 8 it means its probability is 1
								<p>this means you can just make a table, rows are different y and columns are x</p>
								<table className="pure-table">
									<thead>
										<tr>
											<th>y</th>
											<th>+000</th>
											<th>-001</th>
											<th>+010</th>
											<th>-011</th>
											<th>+100</th>
											<th>-101</th>
											<th>+110</th>
											<th>-111</th>
											<th>sum</th>
										</tr>
									</thead>

									<tbody>
										<tr>
											<td>000</td>
											<td>1</td>
											<td>-1</td>
											<td>+1</td>
											<td>-1</td>
											<td>+1</td>
											<td>-1</td>
											<td>+1</td>
											<td>-1</td>
											<td>0</td>
										</tr>
										<tr>
											<td>001</td>
											<td>1</td>
											<td>+1</td>
											<td>+1</td>
											<td>+1</td>
											<td>+1</td>
											<td>+1</td>
											<td>+1</td>
											<td>+1</td>
											<td>+8</td>
										</tr>
										<tr>
											<td>010</td>
											<td>1</td>
											<td>-1</td>
											<td>-1</td>
											<td>+1</td>
											<td>+1</td>
											<td>-1</td>
											<td>-1</td>
											<td>+1</td>
											<td>0</td>
										</tr>
										<tr>
											<td>011</td>
											<td>1</td>
											<td>+1</td>
											<td>-1</td>
											<td>-1</td>
											<td>+1</td>
											<td>+1</td>
											<td>-1</td>
											<td>-1</td>
											<td>0</td>
										</tr>
										<tr>
											<td>100</td>
											<td>1</td>
											<td>-1</td>
											<td>+1</td>
											<td>-1</td>
											<td>-1</td>
											<td>+1</td>
											<td>-1</td>
											<td>+1</td>
											<td>0</td>
										</tr>
										<tr>
											<td>101</td>
											<td>1</td>
											<td>-1</td>
											<td>+1</td>
											<td>-1</td>
											<td>+1</td>
											<td>-1</td>
											<td>+1</td>
											<td>-1</td>
											<td>0</td>
										</tr>
										<tr>
											<td>110</td>
											<td>1</td>
											<td>-1</td>
											<td>-1</td>
											<td>+1</td>
											<td>-1</td>
											<td>+1</td>
											<td>+1</td>
											<td>-1</td>
											<td>0</td>
										</tr>
										<tr>
											<td>111</td>
											<td>1</td>
											<td>+1</td>
											<td>-1</td>
											<td>-1</td>
											<td>-1</td>
											<td>-1</td>
											<td>+1</td>
											<td>+1</td>
											<td>0</td>
										</tr>
									</tbody>
								</table>
							</div>
						</MathJax.Context>
					)
				},
				{
					id: 6,
					type: "",
					step:
						"\\frac{1}{8} \\left( 8⎹001⟩ \\right)",
					note: (
						<MathJax.Context input="tex">
							<div>
								<p>
									100% chance of ⎹001⟩, if you do the calculations in order of y you can stop after you found 100% of the amplitude (in this case after you found)
									{" "}
									<MathJax.Node inline>{"\\beta_{001}"}</MathJax.Node>
								</p>
							</div>
						</MathJax.Context>
					)
				}
			]
		},
		{
			id: 6,
			title: "Question 7",
			type_filters: type_filters.list,
			description: (
				<MathJax.Context input="tex">
					<h4 className="question_description">
						Seja U<sub>f</sub> a matriz unitária que computa a função
						booleana{" "}
						<MathJax.Node inline>{"f :{0, 1}^n → {0, 1}"}</MathJax.Node>
						{". Prove que "}
						<MathJax.Node inline>
							{"U_f ⎹x⟩ ⎹−⟩ = (−1)^{f(x)} ⎹x⟩ ⎹−⟩"}
						</MathJax.Node>
						{
							"(em outras palavras, prove que a técnica “phase kickback” funciona)."
						}
					</h4>
				</MathJax.Context>
			),
			solution: []
		},
		{
			id: 7,
			title: "Question 8",
			type_filters: type_filters.list,
			description: (
				<MathJax.Context input="tex">
					<h4 className="question_description">
						{
							"Descreva o Algoritmo de Bernstein-Vazirani (qual é o problema, qual é o circuito, os estados dos qubits em cada parte do circuito, etc)."
						}
					</h4>
				</MathJax.Context>
			),
			solution: []
		},
		{
			id: 8,
			title: "Question 9",
			type_filters: type_filters.list,
			description: (
				<MathJax.Context input="tex">
					<h4 className="question_description">
						"Descreva o Algoritmo de Simon. (qual é o problema, quais são
						as etapas do algoritmo, qual é o circuito quântico, qual é a
						parte clássica, os estados dos qubits em cada parte do
						circuito, etc)."
					</h4>
				</MathJax.Context>
			),
			solution: []
		},
		{
			id: 9,
			title: "Question 10",
			type_filters: type_filters.list,
			description: (
				<MathJax.Context input="tex">
					<h4 className="question_description">
						{"Suponha que temos "}

						<MathJax.Node inline>
							{"⎹\\phi⟩ = \\sum_{y \\in \\{0, 1\\}^n} \\beta_y ⎹y⟩"}
						</MathJax.Node>
						{" tal que "}
						<MathJax.Node inline>{"\\beta_y = 0"}</MathJax.Node>
						{" se "}
						<MathJax.Node inline>{"s · y = 1 \\mod 2"}</MathJax.Node>
						{"  e "}
						<MathJax.Node inline>
							{"\\beta_y = \\frac{1}{2^{(n−1)/2}} "}
						</MathJax.Node>
						{" se "}
						<MathJax.Node inline>{"s · y = 0\\ mod\\ 2"}</MathJax.Node>
						{" , onde s é uma string secreta de n bits (assumindo "}
						<MathJax.Node inline>{"s \\neq 0^n"}</MathJax.Node>
						{"). Fazendo uma amostragem de Fourier em "}
						<MathJax.Node inline>{"φ "}</MathJax.Node>
						{
							", qual a probabilidade de obter s? Qual é o resultado obtido quando ele é diferente de s?"
						}
					</h4>
				</MathJax.Context>
			),
			solution: []
		},
		{
			id: 10,
			title: "Question 11",
			type_filters: type_filters.list,
			description: (
				<MathJax.Context input="tex">
					<h4 className="question_description">
						{
							"Vamos executar o Algoritmo de Simon. Suponha que n = 4 e que a string secreta s é 1101."
						}
						<br />
						{
							"(a) Qual é o estado dos 2n qubits (ou seja, dos dois registradores) após aplicar a tranformada de Hadamard nos primeiros n primeiros qubits (primeiro registrador) e fazer a query à função f?"
						}
						<br />
						{
							"(b) Digamos que medimos o segundo registrador e obtemos 0101. Se sabemos que f(1001) = 0101, qual o estado do sistema neste ponto?"
						}
						<br />
						{
							"(c) Agora fazemos uma amostragem de Fourier no primeiro registrador. Quais são as possíveis resultados?"
						}
					</h4>
				</MathJax.Context>
			),
			solution: []
		},
		{
			id: 11,
			title: "Question 12",
			type_filters: type_filters.list,
			description: (
				<MathJax.Context input="tex">
					<h4 className="question_description">
						Novamente suponha que n = 4, mas desta vez não sabemos qual é
						a string secreta. Suponha que rodamos 4 vezes o Algoritmo de
						Simon e obtemos 0000, 1101, 1010, e 0110. Qual é a string
						secreta s?
					</h4>
				</MathJax.Context>
			),
			solution: []
		},
		{
			id: 12,
			title: "Question 13",
			type_filters: type_filters.list,
			description: (
				<MathJax.Context input="tex">
					<h4 className="question_description">
						Explique com suas palavras a diferença entre a Tranformada
						Discreta de Fourier (a versão clássica) e a Transformada
						Quântica de Fourier (QFT). Qual é a vantagem e qual é a
						desvantagem de cada uma delas, sabendo que para a matriz F
						<sub>N</sub> de tais tranformadas, a complexidade de tempo da
						versão clássica é polinomial em N e na versão quântica, a
						complexidade de tempo (i.e., a quantidade de portas quânticas
						na implementação do circuito equivalente a matriz) é
						logaritmico em N.
					</h4>
				</MathJax.Context>
			),
			solution: []
		},
		{
			id: 13,
			title: "Question 14",
			type_filters: type_filters.list,
			description: (
				<MathJax.Context input="tex">
					<h4 className="question_description">
						Compute a QFT F<sub>6</sub> dos estados. Embora você precise
						justificar sua resposta, você não precisa fazer a
						multiplicação da matriz passo a passo. Basta você mostrar a
						resposta e justificar usando as propriedades da QFT quando
						aplicadas a superposições periódicas ou superposições
						circulares.
					</h4>
				</MathJax.Context>
			),
			solution: []
		},
		{
			id: 14,
			title: "Question 15",
			type_filters: type_filters.list,
			description: (
				<MathJax.Context input="tex" className="question_description">
					<h4>
						{
							"Suponha que k divide M. Qual é o estado obtido ao aplicarmos a QFT "
						}
						<MathJax.Node inline>{"F_M"}</MathJax.Node>
						{" ao estado abaixo:"}
						<br />
						<MathJax.Node inline>
							{
								"⎹\\alpha⟩ = \\sqrt{\\frac{k}{M}} \\sum _{j=0}^{M/k-1} ⎹ jk +1⟩"
							}
						</MathJax.Node>
					</h4>
				</MathJax.Context>
			),
			solution: []
		}
	]
};

export default initial_state;
