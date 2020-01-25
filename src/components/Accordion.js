import React, { Component } from "react"
import styled from "styled-components"
import goDown from "../../static/images/arrow.svg"
// import { media, customFonts } from "../style/globalStyle"

const Accordion = ({project}) => {
   let accorItem = React.createRef()

   const toggleAccordion = () => accorItem.current.classList.toggle("open")

   return (
      <div ref={accorItem}>
         <AccordionLabel onClick={toggleAccordion}>
            <img src={project.logo} alt={project.name} />
         </AccordionLabel>
         <AccordionDetail goDown={goDown} >
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
   position: relative;

   .open & {
      &:after {
         transform: rotate(180deg);
      }
   }

   img {
      max-width: 50%;
   }

   &:after {
      content: '';
      position: absolute;
      width: 1.1rem;
      height: 1.1rem;
      top: 50%;
      right: 1px;
		transform: translateY(-50%);
      transform-origin: 50% 25%;
      background: url(${goDown});
      transition: transform .5s;
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

   .open & {
      height: auto;
      max-height: 7rem;
   }
`

export default Accordion
