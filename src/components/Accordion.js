import React, { Component } from "react"
import styled from "styled-components"
import goDown from "../../static/images/arrow.svg"
// import { media, customFonts } from "../style/globalStyle"

const Accordion = ({ project }) => {
   let accorItem = React.createRef()

   const toggleAccordion = () => accorItem.current.classList.toggle("open")

   return (
      <div ref={accorItem}>
         <AccordionLabel onClick={toggleAccordion}>
            {
             !!project.logo ? <img src={project.logo} alt={project.name} /> : <p>{project.name}</p>
            }
         </AccordionLabel>
         <AccordionDetail goDown={goDown}>
            <p>
               <a href={project.href} target="_blank">
                  {!!project.logo ? 

                  project.name
                  :
                  `Go to site`
                  }
               </a>
            </p>
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

   p {
      text-align: left;

   }

   .open & {
      &:after {
         transform: rotate3d(90, 0, 1, 180deg);
      }
   }

   img {
      max-width: 160px;
      max-height: 40px;
   }

   &:after {
      content: "";
      align-items: center;
      width: 1.1rem;
      height: 1.1rem;
      align-self: center;
      /* border: 1px solid red; */
      background: url(${goDown});
      transition: transform 0.8s;
   }
`

const AccordionDetail = styled.div`
   max-height: 0;
   overflow: hidden;
   transition: max-height 0.6s ease-out;
   border-bottom: 1px solid white;

   a,
   p {
      padding: 0 0 1rem;
      text-align: left;

      &:first-child {
         padding-top: 1rem;
      }
      &:last-child {
         padding-bottom: 1rem;
      }
   }

   .open & {
      height: auto;
      max-height: 12rem;
   }
`

export default Accordion
