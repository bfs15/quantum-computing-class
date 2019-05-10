import React from 'react'
import MathJax from 'react-mathjax2';
import Collapsible from 'react-collapsible';
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import type_filters from './type_filters'

const Question = ({ question, toggleFilter }) => {
   const solutionSteps = question.solution
   .filter(solutionStep => {
      return question.type_filters[type_filters.type_id[solutionStep.type]].switch
   })
   .map(solutionStep => {
      return (
         <tr className="collection-item" key={solutionStep.id}>
            <td>[{solutionStep.id}]</td>
            <td>
               <MathJax.Context input='tex'>
                  <MathJax.Node inline>{solutionStep.step}</MathJax.Node>
               </MathJax.Context>
            </td>
            <td>
               {solutionStep.type}
            </td>
            <td>
               {solutionStep.note}
            </td>
         </tr> 
      )
   })

   const type_filter_element = question.type_filters.map(type_filter => {
      const className = type_filter.switch ? "pure-menu-link pure-menu-item pure-button-active" : "pure-menu-link pure-menu-item"
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

         <Collapsible trigger={titleElement} open={true} transitionTime={100}>

            <Collapsible trigger={
            <label id="menuLink1" className="pure-menu-link step_filter_dropdown">
               Step filters
            <MdArrowDropDown className={"dropdown-icon"} /><MdArrowDropUp className={"dropup-icon"} /></label>} open={false} transitionTime={100}>
               {type_filter_element}
            </Collapsible>

            {/* <div className="pure-menu pure-menu-horizontal">
               <ul className="pure-menu-list">
                  <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                     <label id="menuLink1" className="pure-menu-link step_filter_dropdown">
                        Step filters
                     </label>
                     <ul className="pure-menu-children">
                        {type_filter_element}
                     </ul>
                  </li>
               </ul>
            </div> */}

            <table className="pure-table">
               <thead>
               </thead>
               <tbody>
                  {solutionSteps}
               </tbody>
            </table>

         </Collapsible>
         
      </div>
   )
}

export default Question;