import React, { Fragment } from "react"
import styled from "styled-components"
import { media, colors } from "../style/globalStyle"
import mainLogo from "../../static/logos/franze.svg"
import subLogo1 from "../../static/logos/architectus.svg"
import subLogo2 from "../../static/logos/hodges.svg"
import subLogo3 from "../../static/logos/holiday-inn.svg"

function Footer({ register, clickAction }) {
   return (
      <FooterContainer register={register}>
         <p onClick={clickAction}>discover residences</p>
         {/* <p><a href="/">discover commercial</a></p> */}
         <a href="http://franzedevelopments.com.au/" target="blank" className="open-visible">
           <img src={mainLogo} alt="Footer logo" />
         </a>
      </FooterContainer>
   )
}

const FooterContainer = styled.footer`
   display: flex;
   justify-content: space-around;
   z-index: 0;
   
   p {
      cursor: pointer;
      margin: 2rem 0;
      body.open & {
         display: none;
      }
   }
   ${media.mobileL`
      justify-content: center;
      align-self: center;
  `};


   a.open-visible {
      display: none;
      margin-bottom: 2rem;
      body.open & {
         display: block;
      }
      img {
         width: 90px;
         height: 1.2rem;
      }
   }
`

const LogoLink = styled.a`
   /* border: 1px solid lime; */
   /* height:100%; */
   /* margin: 1.2rem; */

   img {
   }
 
   ${media.tablet`
  `};

   ${media.mobileL`
      margin: .7rem 1.2rem;
   `};
`

export default Footer
