import React from 'react';
import './App.css';
import Questions from './Questions';
import SideQuestions from './SideQuestions';

// Be sure to include styles at some point, probably during your bootstraping
import './react-sidenav.css';

import update from 'immutability-helper';

class App extends React.Component {
	state = {

		type_filters: [
			{ id: 0, switch: true},
			{ id: 1, switch: true},
			{ id: 2, switch: true},
		],
		questions: [
			{
				id: 0,
				title: 'Question 1',
				type_filters: [
					{ id: 0, switch: true},
					{ id: 1, switch: true},
					{ id: 2, switch: true},
				],
				solution: [
					{ id: 0, type:'start', step: '\\sum_{j=0}^3 (j^2)'},
					{ id: 1, type: 'expand', step: 'H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)' },
					{ id: 2, type: 'rearrange', step: 'H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)' },
					{ id: 3, type: 'expand', step: 'H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)' },
				]
			},
			{
				id: 1,
				title: 'Question 2',
				type_filters: [
					{ id: 0, switch: true },
					{ id: 1, switch: true },
					{ id: 2, switch: true },
				],
				solution: [
					{ id: 0, type: 'start', step: 'finish quantum website' },
					{ id: 1, type: 'expand', step: 'H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)' },
					{ id: 2, type: 'rearrange', step: 'H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)' },
					{ id: 3, type: 'expand', step: 'H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)' },
				]
			},
			{
				id: 2,
				title: 'Question 3',
				type_filters: [
					{ id: 0, switch: true },
					{ id: 1, switch: true },
					{ id: 2, switch: true },
				],
				solution: [
					{ id: 0, type: 'start', step: 'finish quantum website' },
					{ id: 1, type: 'expand', step: 'H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)' },
					{ id: 2, type: 'rearrange', step: 'H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)' },
					{ id: 3, type: 'expand', step: 'H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)' },
				]
			},
			{
				id: 3,
				title: 'Question 4',
				type_filters: [
					{ id: 0, switch: true },
					{ id: 1, switch: true },
					{ id: 2, switch: true },
				],
				solution: [
					{ id: 0, type: 'start', step: 'finish quantum website' },
					{ id: 1, type: 'expand', step: 'H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)' },
					{ id: 2, type: 'rearrange', step: 'H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)' },
					{ id: 3, type: 'expand', step: 'H^{\\otimes n} |u_n⟩ = \\frac{1}{2^{n/2}}\\sum_{x}( -1^{x.u}|x⟩)' },
				]
			},
		]
	}

	toggleFilter = (questionId, filter_id) => {
		const question = this.state.questions[questionId].type_filters.map(type_f => {
			if (type_f.id === filter_id){
				return {...type_f, switch: !type_f.switch}
			}
			return type_f
		})
		
		this.setState(update(this.state, {
			questions: {
				[questionId]: {
					type_filters: {$set: question}
				}
			}
		}))
	};

	render() {
		return (
			<div className="App">
				<SideQuestions questions={this.state.questions}/>
				<Questions questions={this.state.questions} toggleFilter={this.toggleFilter}/>
			</div>
		);
	}
}
export default App;
