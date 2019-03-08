import React, { Fragment } from "react"
import styled from "styled-components"
import { media, colors } from "../style/globalStyle"
import mainLogo from "../../static/logos/franze.svg"
import subLogo1 from "../../static/logos/architectus.svg"
import subLogo2 from "../../static/logos/hodges.svg"
import goDown from "../../static/images/arrow.svg"
import subLogo3 from "../../static/logos/holiday-inn.svg"

function Footer({ onClick, reverseArrow }) {
   return (
      <FooterContainer>
         <img src={goDown} alt="Go down or up" onClick={onClick} className={reverseArrow && "reverse-arrow"}/>
      </FooterContainer>
   )
}

const FooterContainer = styled.footer`
   position: relative;
   width: 4rem;
   height: 4rem;
   cursor: pointer;
   
   img {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 30%;
      width: 48px;
      transition: top .5s;

      &.reverse-arrow {
         top: 0%;
         transform: translate(-50%, -50%) scaleX(-1);
      }
   }

  :hover > img {
     top: 60%;

     &.reverse-arrow {
        top: -30%;
     }
  }
`

export default Footer
