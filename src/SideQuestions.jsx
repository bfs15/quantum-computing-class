import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './react-sidenav.css';

const SideQuestions = ({ questions, onToggle, expanded }) => {
   const sidebarItems = questions.map( question => {
      return (
         <NavItem eventKey="home" key={question.id}>
            <NavIcon>
               <a className="" href={"#Question" + question.id}>{question.id}</a>
            </NavIcon>
            <NavText>
               <a className="" href={"#Question" + question.id}>{question.title}</a>
            </NavText>
         </NavItem>
      )
   })

   return (
      <SideNav className="SideNav"
         expanded={expanded}
         onToggle={onToggle}
      >
         <SideNav.Toggle />
         <SideNav.Nav defaultSelected="home">
            {sidebarItems}
         </SideNav.Nav>
      </SideNav>
   )
}

export default SideQuestions;

