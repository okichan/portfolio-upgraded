import React, { Component } from "react"
import styled from "styled-components"
// import { media, customFonts } from "../style/globalStyle"

const Accordion = ({project}) => {
   let textInput = React.createRef()

   const toggleAccordion = () => textInput.current.classList.toggle("open")

   return (
      <div>
         <AccordionLabel onClick={toggleAccordion}>
            <img src={project.logo} alt={project.name} />
         </AccordionLabel>
         <AccordionDetail innerRef={textInput}>
            <a href={project.href} target="_blank">
               {project.name}
            </a>
            <p>{project.tech}</p>
         </AccordionDetail>
      </div>
   )
}


const AccordionLabel = styled.div`
   padding: 1rem 0;
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid;
   cursor: pointer;

   .open & {
      &:after {
         content: "-";
         display: inline-block;
         margin: auto 0;
      }
   }

   img {
      max-width: 50%;
   }

   &:after {
      content: "+";
      display: inline-block;
      margin: auto 0;
   }
`

const AccordionDetail = styled.div`
   max-height: 0;
   overflow: hidden; 
   transition: max-height 0.7s ease-out;

   a {
      display: block;
      padding: 1rem 0;
   }

   * {
      text-align: left;
   }

   &.open {
      height: auto;
      max-height: 7rem;
   }
`

export default Accordion
