import React from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components'
import { media, customFonts } from '../style/globalStyle'

function CloseIcon({ clickClose }) {
   return (
      <Svg onClick={ clickClose } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 149.337 149.337"><path fill="#fff" d="M149.337 143.96L80.044 74.668l69.292-69.292L143.96 0 74.668 69.292 5.377 0 .001 5.376l69.291 69.292L0 143.96l5.376 5.376 69.292-69.292 69.293 69.292z"/>
      </Svg>
   )
}
const Svg = styled.svg`
   position: absolute;
   right: 0;
   top: 0;
   margin: 2vmin;
   width: calc(1.5rem + .4vw);
   height: calc(1.5rem + .4vw);
   cursor: pointer;
   transition: opacity .5s ease-in-out;
   
   &:hover {
      opacity: .2;
   }
`

export default CloseIcon
