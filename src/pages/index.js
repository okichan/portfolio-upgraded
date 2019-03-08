import React, { Component, Fragment } from "react"
import objectFitImages from "object-fit-images"
import Div100vh from "react-div-100vh"
// import Link from 'gatsby-link'

import styled from "styled-components"
import Form from "../components/Form"
import Button from "../components/Button"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { media, colors, below, above } from "../style/globalStyle"
import bg from "../../static/images/bg.jpg"
import git from "../../static/images/github.svg"
import linkedIn from "../../static/images/linkedin.svg"
import mail from "../../static/images/mail.svg"

class MainArea extends Component {
   // constructor(props) {
   //    super(props);
   //  }

   state = {
      rotation: 1
   }

   componentDidMount() {
      objectFitImages()
      this.mobileHeightFix()
   }

   mobileHeightFix = () => {
      if (typeof window !== `undefined`) {
         // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
         let vh = window.innerHeight * 0.01
         let vw = window.innerWidth
         // Then we set the value in the --vh custom property to the root of the document
         document.documentElement.style.setProperty("--vh", `${vh}px`)
         if (vw > 768) {
            // We listen to the resize event for desktop
            window.addEventListener("resize", () => {
               // We execute the same script as before
               let vh = window.innerHeight * 0.01
               document.documentElement.style.setProperty("--vh", `${vh}px`)
            })
         }
      }
   }

   toggleHandler = () => {
      if (typeof window !== `undefined`) {
         const body = document.querySelector("body")
         body.classList.contains("open")
            ? body.classList.remove("open")
            : body.classList.add("open")
      }
   }

   scrollTo = el => {
      const target = document.getElementById(el).offsetTop
      console.log("yay", target)
      window.scrollTo({
         top: target,
         behavior: "smooth"
      })
   }

   render() {
      return (
         <Fragment>
            <Page id="home">
               <Bg>
                  <VideoWrapper autoPlay loop muted playsInline id="my-video">
                     <source src="/images/botanic_movie.mp4" type="video/mp4" />
                  </VideoWrapper>
                  <img src={bg} alt="bg" />
               </Bg>
               {/* <Header /> */}
               <Main>
                  <h1 className="copy">I'm Tomomi Oki</h1>
                  <h2 className="copy">Front-end web developer</h2>
               </Main>
               <Footer onClick={() => this.scrollTo("about")} />
            </Page>
            <Page id="about">
               <h3>about me</h3>
               <Bio>
                  <p>I'm a web developer based in Melbourne, Australia.</p>
                  <p>
                     I have a passion for creating simple, elegant and eye-pleasing
                     websites.
                  </p>
                  <p>blah blah</p>
               </Bio>
               <Footer onClick={() => this.scrollTo("works")} />
            </Page>
            <Page id="works">
               <h3>works</h3>
               <div>
                  <h4>Cornwell</h4>
                  <h4>Coder Academy</h4>
               </div>
               <Footer onClick={() => this.scrollTo("contact")} />
            </Page>
            <Page id="contact">
               <h3>contact</h3>
               <Social>
                  <a href="">
                     <img src={git} alt="git" />
                  </a>
                  <a href="">
                     <img src={linkedIn} alt="git" />
                  </a>
                  <span>
                     <img src={mail} alt="git" onClick={this.toggleHandler} />
                  </span>
               </Social>
               <Footer onClick={() => this.scrollTo("home")} reverseArrow />
            </Page>
            {/* <Form closeButton={this.toggleHandler} /> */}
         </Fragment>
      )
   }
}

const Bg = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   z-index: -1;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      font-family: "'object-fit: cover; object-position: center;'"; /* IE polyfill */
      ${above.tablet`
         display: none;
      `}
   }
`

const VideoWrapper = styled.video`
   width: 100%;
   height: 100%;
   object-fit: cover;
   object-position: center;
   font-family: "'object-fit: cover; object-position: top;'"; /* IE polyfill */
   ${below.tablet`
      display: none;
   `}
`

const Main = styled.div`
   position: absolute;
   transform: translate(-50%, -50%);
   top: 52%;
   left: 50%;
   width: 100%;
   text-shadow: 0px 0px 4px #333;
   h1 {
      font-size: 2rem;
   }

   h2 {
      font-size: 1.5rem;
      margin: 2rem;
   }
`

const Page = styled.div`
   /* border: 1px solid lime; */
   position: relative;
   width: 100%;
   height: 100vh;
   height: calc(var(--vh, 1vh) * 100);
   display: flex;
   flex-direction: column;
   align-items: center;
   transition: width 0.7s;
   justify-content: flex-end;
   padding-top: 1rem;
   /* object-fit: cover; */
   /* font-family: "'object-fit: cover'"; */
   &:not(#home) {
      background: black;
      justify-content: space-between;
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

const Social = styled.div`
   display: flex;
   align-items: flex-end;

   img {
      width: 48px;
   }
`

export default MainArea
