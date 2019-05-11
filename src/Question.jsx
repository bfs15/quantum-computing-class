import React from 'react'
import MathJax from 'react-mathjax2';
import Collapsible from 'react-collapsible';
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import type_filters from './type_filters'

const Question = ({ question, toggleFilter }) => {
   const solutionSteps = question.solution
   .filter(solutionStep => {
		console.log(solutionStep.step)
		console.log(solutionStep)
		console.log(type_filters.type_id[solutionStep.type])
		console.log(question.type_filters[type_filters.type_id[solutionStep.type]])
      return (
			!!!solutionStep.type || (typeof type_filters.type_id[solutionStep.type] === 'undefined') ||
			question.type_filters[type_filters.type_id[solutionStep.type]].switch
		);
   })
   .map(solutionStep => {
		return (
			<span key={solutionStep.id}>
				<p>[{solutionStep.id}]</p>
				<p>
				<MathJax.Context input="tex">
					<MathJax.Node>
						{solutionStep.step}
					</MathJax.Node>
				</MathJax.Context>
				</p>
				<p>{solutionStep.type}</p>
				<div className="question-note">
				{solutionStep.note}
				</div>

			</span>
		);
   })

   const type_filter_element = question.type_filters.map(type_filter => {
		const className = type_filter.switch ? "pure-menu-link pure-menu-item pure-button-active" : "pure-menu-link pure-menu-item"
		if(!!!type_filter){
			return null;
		}
      return (
         <label onClick={() => { toggleFilter(question.id, type_filter.id) }} key={type_filter.id} className={className} >
            <label>
               {type_filters.list[type_filter.id].string}
            </label>
         </label>
      )
   })

   const idName = "Question" + question.id;
   const titleElement = (<h2><a href={"#" + idName}>{question.title}</a><MdArrowDropDown className={"dropdown-icon"} /><MdArrowDropUp className={"dropup-icon"} /></h2>);
   return (
		<div className="question_component" id={idName}>
			<Collapsible
				trigger={titleElement}
				open={true}
				transitionTime={100}
			>
				<span className={"step-filters-collapsible"}>
				<Collapsible
					trigger={
						<label
							id={"step-filters-" + question.id}
							className="pure-menu-link step_filter_dropdown"
						>
							Step filters
							<MdArrowDropDown className={"dropdown-icon"} />
							<MdArrowDropUp className={"dropup-icon"} />
						</label>
					}
					open={false}
					transitionTime={100}
				>
					{type_filter_element}
				</Collapsible>
				</span>

				{question.description}

				{solutionSteps}
			</Collapsible>
		</div>
	);
}

export default Question;