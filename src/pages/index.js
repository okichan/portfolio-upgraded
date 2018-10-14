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
      // let rotation = 1

      // if (rotation <= 4) {
      //    setInterval(() => {
      //       rotation = this.state.rotation + 1
      //       this.setState({ rotation })
      //       if (this.state.rotation > 4) {
      //          this.setState({ rotation: 1 })
      //       }
      //    }, 4000)
      // }
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
                  animationDelay: 0.5 + (0.3 * i) / 8 + "s"
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
            {/* <figure className="bg-wrapper"> */}
               {/* <Background src={bg1} alt="bg1" isVisible={rotation === 1} /> */}
               {/* <Background src={bg2} alt="bg2" isVisible={rotation === 2} /> */}
               {/* <Background src={bg3} alt="bg3" isVisible={rotation === 3} /> */}
               <Background autoPlay loop muted playsInline id="my-video">
                  <source src="/images/botanic_movie.mp4" type="video/mp4" />
               </Background>
               {/* <Background src={bg4} alt="bg2" isVisible={rotation === 4} /> */}
            {/* </figure> */}
            {/* <CurtainWrapper className="curtain-wrapper">
               {this.createElements(4)}
            </CurtainWrapper> */}
            <Container>
               <Header>
                  <ul>
                     <li className="left">
                        Home
                     </li>
                     <li>
                        about
                     </li>
                     <li>
                        works
                     </li>
                     <li>
                        contact
                     </li>
                  </ul>
               </Header>

               <Main>
                  <h1 className="copy">I'm Tomomi Oki</h1>
                  <h2 className="copy">A web developer</h2>
               </Main>

               <Footer clickAction={this.toggleHandler} />
            </Container>
            <Form closeButton={this.toggleHandler} />
         </Div100vh>
      )
   }
}

const Background = styled.video`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   /* min-height: 600px; */
   object-fit: cover;
   object-position: center;
   font-family: "'object-fit: cover; object-position: top;'"; /* IE polyfill */
   /* opacity: ${props => (props.isVisible ? 1 : 0)}; */
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

const Header = styled.nav`
   text-transform: uppercase;
   background: rgba(26, 26, 26, .8);
   ul {
      display: flex;
      justify-content: flex-end;
      list-style: none;
      line-height: 4;

      li {
         margin: 0 2rem;
         &.left {
            flex-grow: 1;
            text-align: left;
         }
      }
   }
`

const Main = styled.div`
  h1 {
     font-size: 2rem;
  }

  h2 {
     font-size: 1.5rem;
     margin: 2rem;
  }
      
 
`

export default MainArea
