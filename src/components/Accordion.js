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
            <p>{project.desc}</p>
         </AccordionDetail>
      </div>
   )
}


const AccordionLabel = styled.div`
   padding: 1rem 0;
   display: flex;
   /* border: 1px solid red; */
   justify-content: space-between;
   /* border-top: 1px solid; */
   cursor: pointer;

   .open & {
      &:after {
         transform: rotate3d(90, 0, 1, 180deg);
      }
   }

   img {
      max-width: 160px;
      max-height:40px;
   }

   &:after {
      content: '';
      align-items: center;
      width: 1.1rem;
      height: 1.1rem;
      align-self: center;
      /* border: 1px solid red; */
      background: url(${goDown});
      transition: transform .8s;
   }
`

const AccordionDetail = styled.div`
   max-height: 0;
   overflow: hidden; 
   transition: max-height 0.7s ease-out;
   /* background: rgb(22, 22, 22); */
   border-bottom: 1px solid white;

   a {
      display: block;
   }

   a, p {
      padding: 0 0 1rem;

      &:first-child {
         padding-top: 1rem;
      }

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
