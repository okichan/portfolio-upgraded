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

   scrollDown = () => {
      window.scrollTo({
         top: 500,
         behavior: "smooth"
      })
   }

   render() {
      const { rotation } = this.state

      return (
         <Div100vh className="div100">
            <Page className="home">
               <Background autoPlay loop muted playsInline id="my-video">
                  <source src="/images/botanic_movie.mp4" type="video/mp4" />
               </Background>
               <Header>
                  <ul>
                     <li className="left">Home</li>
                     <li>about</li>
                     <li>works</li>
                     <li>contact</li>
                  </ul>
               </Header>

               <Main>
                  <h1 className="copy">I'm Tomomi Oki</h1>
                  <h2 className="copy">A front-end web developer</h2>
               </Main>
               <Footer onClick={this.scrollDown} />
            </Page>
            <Page className="about ">
               <h3>about</h3>
               <Bio>
                  <p>I'm a web developer based in Melbourne, Australia.</p>
                  <p>
                     I have a passion for creating simple, elegant and eye-pleasing
                     websites.
                  </p>
                  <p>
                     I'm a developer, so I know how to create your website to run across
                     devices using the latest technologies available. If you have a
                     project that you want to get started, think you need my help with
                     something or just fancy saying hey, then get in touch.
                  </p>
               </Bio>
               <Footer onClick={this.scrollDown} />
            </Page>
            <Page className="works ">
               <h3>works</h3>
               <Bio>
                 <h4>
                    Cornwell
                    </h4>
                 <h4>
                    Coder Academy
                    </h4>
               </Bio>
               <Footer onClick={this.scrollDown} />
            </Page>
            <Page className="contact">
               <h3>contact</h3>
               <Bio>
              
               </Bio>
            </Page>
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
const Header = styled.nav`
   width: 100%;
   text-transform: uppercase;
   background: rgba(26, 26, 26, 0.8);
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

const Page = styled.div`
   position: relative;
   width: 100vw;
   height: 100vh;
   /* background: center/cover url(${bg1}) repeat; */
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   transition: width 0.7s;
   /* object-fit: cover; */
   /* font-family: "'object-fit: cover'"; */
   &:not(.home) {
      background: black;
   }

   h3 {
      text-transform: uppercase;
   }
   
`

const Bio = styled.div`
   width: 50vw;
   min-width: 18rem;
   p {
      text-align: left;
      margin: 1rem 0;

   }
`

export default MainArea
