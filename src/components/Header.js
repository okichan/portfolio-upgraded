import React, { Fragment } from "react"
import styled from "styled-components"
import { media, colors, below, above } from "../style/globalStyle"

function Header() {
   return (
      <HeaderWrapper id="nav">
         <ul>
            <li className="left">Home</li>
            <li>about</li>
            <li>works</li>
            <li>contact</li>
         </ul>
      </HeaderWrapper>
   )
}

const HeaderWrapper = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   text-transform: uppercase;
   background: rgba(26, 26, 26, 0.6);
   padding: 1rem;
   z-index: 1;
   ul {
      display: flex;
      justify-content: flex-end;
      /* flex-wrap: wrap; */
      list-style: none;
      /* line-height: 4; */

      li {
         margin: 0 2rem;
         &.left {
            flex-grow: 1;
            text-align: left;
         }
      }
   }

   ${below.mobileL`
      // padding: 1rem 0; 
      ul {
         justify-content: space-between;
         
         li {
            font-size: .5rem;
            margin: 0;
            &.left {
               flex-grow: 0;
            }
         }
      }
   `}
`

export default Header
