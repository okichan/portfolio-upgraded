import React, { Component, Fragment } from "react"
import objectFitImages from "object-fit-images"
import Div100vh from "react-div-100vh"
// import Link from 'gatsby-link'

import styled from "styled-components"
import Form from "../components/Form"
import Button from "../components/Button"
import Footer from "../components/Footer"
import { media, colors } from "../style/globalStyle"
// import bg1 from "../../static/images/bg.jpg"
import curtain from "../../static/images/curtain.jpg"
import geelong from "../../static/logos/main.svg"
import ryrie from "../../static/logos/ryrie.svg"
import bg1 from "../../static/images/I03_Bedroom.jpg"
import bg2 from "../../static/images/I05_Living.jpg"
import bg3 from "../../static/images/kitchen.jpg"
import bg4 from "../../static/images/toilet.jpg"

class MainArea extends Component {
   state = {
      rotation: 1
   }

   componentDidMount() {
      let rotation = 1

      if (rotation <= 4) {
         setInterval(() => {
            rotation = this.state.rotation + 1
            this.setState({ rotation })
            if (this.state.rotation > 4) {
               this.setState({ rotation: 1 })
            }
         }, 4000)
      }
      objectFitImages()
   }

   toggleHandler = () => {
      if (typeof window !== `undefined`) {
         const body = document.querySelector("body")
         body.classList.contains("open")
            ? body.classList.remove("open")
            : body.classList.add("open")
      }
   }

   createElements(n) {
      var elements = []
      for (let i = 0; i < n; i++) {
         elements.push(
            <Curtain
               className="curtain"
               style={{
                  backgroundPositionX: -(i * (100 / n)) + "vw",
                  animationDelay: 0.5 + 0.3 * i / 8 + "s"
               }}
               key={i}
               numberOfCurtain={n}
            />
         )
      }
      return elements
   }

   render() {
      const { rotation } = this.state

      return (
         <Div100vh className="div100">
             <figure className="bg-wrapper">
                  <Background src={bg1} alt="bg1" isVisible={rotation === 1} />
                  <Background src={bg2} alt="bg2" isVisible={rotation === 2} />
                  <Background src={bg3} alt="bg3" isVisible={rotation === 3} />
                  <Background src={bg4} alt="bg2" isVisible={rotation === 4} />
               </figure>
            <CurtainWrapper className="curtain-wrapper">
               {this.createElements(4)}
            </CurtainWrapper>
            <Container>
               <Header>
                  <img src={geelong} alt="Geelong Quarter" className="main-logo" />
               </Header>

               <Main>
                  <h1 className="copy">Where Geelong comes together</h1>
                  <img src={ryrie} alt="Ryrie" className="ryrie-logo" />
               </Main>

               <Footer clickAction={this.toggleHandler} />
            </Container>
            <Form closeButton={this.toggleHandler} />
         </Div100vh>
      )
   }
}

const Background = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   /* min-height: 600px; */
   object-fit: cover;
   object-position: center;
   font-family: "'object-fit: cover; object-position: top;'"; /* IE polyfill */
   opacity: ${props => (props.isVisible ? 1 : 0)};
   z-index: -1;

   /* body.open & {
      filter: blur(10px);
   } */
`

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   /* background: center/cover url(${bg1}) repeat; */
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   /* align-items: center; */
   transition: width 0.7s;
   /* object-fit: cover; */
   /* font-family: "'object-fit: cover'"; */
   body.open & {
      width: 50vw;
      /* background: ${colors.main}; */
   }
`

const CurtainWrapper = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: space-between;
   /* direction: rtl; */
`

const Curtain = styled.div`
   background: url(${curtain}) no-repeat;
   background-size: cover;
   height: 100%;
   width: 100%;
   /* flex-grow: 1; */
   transform-origin: 0% 50%;
   transform: scaleX(0);
   /* width: calc(100% / ${props => props.numberOfCurtain})vw; */
   animation: curtain 4s linear infinite;

   @keyframes curtain {
      0% {
         transform: scaleX(0);
         transform-origin: 0% 50%;
      }
      80% {
         transform: scaleX(0);
         transform-origin: 0% 50%;
      }
      88% {
         transform: scaleX(1);
         transform-origin: 0% 50%;
      }
      90% {
         transform: scaleX(1);
         transform-origin: 100% 50%;
      }
      95% {
         transform: scaleX(1);
         transform-origin: 100% 50%;
      }
      100% {
         transform: scaleX(0);
         transform-origin: 100% 50%;
      }
   }
`

const Header = styled.header`
   width: 100%;
   z-index: 0;
   .main-logo {
      width: 25vw;
      min-width: 200px;
      max-width: 800px;
      height: 100%;
      margin-top: 3vh;
      object-fit: contain;
      font-family: "'object-fit: contain'";

      body.open & {
         display: none;
      }
   }
`

const Main = styled.div`
   z-index: 0;
  h1 {
     text-transform: none;
     font-size: 4rem;
     
      body.open & {
         display: none;
      }

      ${media.mobileL`
         font-size: 2rem;
      `};
  }
      
   .ryrie-logo {
      display: none;

      body.open & {
         display: block;
         width: 60%;
         margin: 0 auto;
      }
         
      ${media.mobileL`
         min-width: 318px;
      `};
   }

    #to-form {
      /* z-index: 100;
      background: ${colors.main}; */
      body.open & {
         visibility: hidden;
      }
   }
`

export default MainArea
