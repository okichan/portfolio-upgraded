import React, { Fragment } from "react"
import styled from "styled-components"
import { media, colors } from "../style/globalStyle"
import mainLogo from "../../static/logos/franze.svg"
import subLogo1 from "../../static/logos/architectus.svg"
import subLogo2 from "../../static/logos/hodges.svg"
import goDown from "../../static/images/arrow.svg"
import subLogo3 from "../../static/logos/holiday-inn.svg"

function Footer({ onClick }) {
   return (
      <FooterContainer>
         <img src={goDown} alt="Go down" onClick={onClick}/>
      </FooterContainer>
   )
}

const FooterContainer = styled.footer`
  img {
     width: 48px;
     cursor: pointer;
  }
`

export default Footer
