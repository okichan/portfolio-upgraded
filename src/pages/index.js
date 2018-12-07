import React, { Component, Fragment } from "react"
import objectFitImages from "object-fit-images"
import Div100vh from "react-div-100vh"
// import Link from 'gatsby-link'

import styled from "styled-components"
import Form from "../components/Form"
import Button from "../components/Button"
import Footer from "../components/Footer"
import { media, colors, below, above } from "../style/globalStyle"
import bg from "../../static/images/bg.jpg"
import git from "../../static/images/github.svg"
import linkedIn from "../../static/images/linkedin.svg"
import mail from "../../static/images/mail.svg"

class MainArea extends Component {
   constructor(props) {
      super(props);
      this.about = React.createRef();
    }
   
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
         document.documentElement.style.setProperty('--vh', `${vh}px`)
         if (vw > 768) {
            // We listen to the resize event for desktop
            window.addEventListener('resize', () => {
               // We execute the same script as before
               let vh = window.innerHeight * 0.01
               document.documentElement.style.setProperty('--vh', `${vh}px`)
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

   scrollDown = () => {
      const target = this.about.current.getBoundingClientRect().top
      const navHeight = document.getElementById('nav').offsetHeight
      console.log('yay', target, navHeight)
      window.scrollTo({
         top: target - navHeight,
         behavior: "smooth"
      })
   }

   render() {
      return (
         <Fragment>
            <Page className="home">
               <Bg>
                  <VideoWrapper autoPlay loop muted playsInline id="my-video">
                     <source src="/images/botanic_movie.mp4" type="video/mp4" />
                  </VideoWrapper>
                  <img src={bg} alt="bg" />
               </Bg>
               <Header id="nav">
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
            <Page className="about" innerRef={this.about}>
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
               {/* <Footer onClick={this.scrollDown} /> */}
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
               {/* <Footer onClick={this.scrollDown} /> */}
            </Page>
            <Page className="contact">
               <h3>contact</h3>
               <Social>
                  <a href="" >
                     <img src={git} alt="git" />
                  </a>
                  <a href="" >
                  <img src={linkedIn} alt="git" />
                  </a>
                  <span>
                  <img src={mail} alt="git" onClick={this.toggleHandler} />

                  </span>
               </Social>
               <p></p>
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

const Header = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   text-transform: uppercase;
   background: rgba(26, 26, 26, 0.8);
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
   &:not(.home) {
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
