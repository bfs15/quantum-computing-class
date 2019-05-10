import React from 'react'
import type_filters from './type_filters'
import MathJax from 'react-mathjax2';

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
         </tr>
      )
   })

   const type_filter_element = type_filters.list.map(type_filter =>{
      const className = question.type_filters[type_filter.id].switch ? "pure-menu-link pure-menu-item pure-button-active" : "pure-menu-link pure-menu-item"
      
      return (
         <li onClick={() => { toggleFilter(question.id, type_filter.id) }} key={type_filter.id} className={className} >
            <label href="#" class="pure-menu-link">
               {type_filter.string}
            </label>
         </li>
      )
   })

   const idName = "Question" + question.id;

   return (
      <div className="question_component" id={idName}>
         <h2>{question.title}</h2>

         <div class="pure-menu pure-menu-horizontal">
            <ul class="pure-menu-list">
               <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
                  <label id="menuLink1" class="pure-menu-link step_filter_dropdown">
                     Step filters
                  </label>
                  <ul className="pure-menu-children">
                     {type_filter_element}
                  </ul>
               </li>
            </ul>
         </div>
         {/* {type_filter_element} */}
         <table className="pure-table">
            <thead>
            </thead>
            <tbody>
               {solutionSteps}
            </tbody>
         </table>
         
      </div>
   )
}

export default Question;