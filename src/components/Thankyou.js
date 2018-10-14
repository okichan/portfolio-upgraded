import React from 'react'
import styled from 'styled-components'
import { media, colors } from '../style/globalStyle'
// import bg1 from "../../static/images/bg.png"
import ryrie2 from "../../static/logos/ryrie.svg"

function Footer({ location }) {
   return (
      <ThankouContainer>
         <img src={ryrie2} alt="Ryrie Residences" className="ryrie-logo" />
         <br/>
         <h3>THANK YOU FOR REGISTERING</h3>
         <br/>
         <a href="/">back to home</a>
         <Bg1></Bg1>
         <Bg2></Bg2>
      </ThankouContainer>
   )
}

const Bg1 = styled.div`
   position: absolute;
   background-size: 3rem;
   width: 100%;
   height: 98%;
   top: 50%;
   transform: translate(0%, -50%);
   animation: slider 20s linear infinite;

   @keyframes slider {
      0% {
         left: -100%;
      }
      50% {
         left: 0%;
      }
      100% {
         left: 100%;
      }
   }
`
const Bg2 = styled.div`
   position: absolute;
   background-size: 1.5rem;
   width: 100%;
   height: 50%;
   transform: translate(0%, -50%);
   top: 50%;
   right: -42%;
   animation: slider2 20s linear infinite;

   @keyframes slider2 {
      0% {
         right: -100%;
      }
      50% {
         right: 0%;
      }
      100% {
         right: 100%;
      }
   }
`

const ThankouContainer = styled.div`
   position: fixed;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background: ${colors.darkNavy};

   a {
      z-index: 3;
   }
   
   img {
      width: 90vw;
      max-width: 500px;
   }

   h3 {
      /* font-family: 'Big Caslon', Georgia, 'Times New Roman', Times, serif; */
      /* letter-spacing: 0.2rem; */
      font-size: calc(1vw + 16px);
      /* padding: 4vh; */
   }

`

export default Footer
