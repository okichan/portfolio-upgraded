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
import close from "../../static/images/close.svg"
import git from "../../static/images/github.svg"
import linkedIn from "../../static/images/linkedin.svg"
import mail from "../../static/images/mail.svg"

class MainArea extends Component {
   constructor(props) {
      super(props)
      this.workDetailRef = React.createRef()
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
      window.scrollTo({
         top: target,
         behavior: "smooth"
      })
   }

   toggleWorkModal = idx => {
      let modalStyle = this.workDetailRef.current.style

      if (modalStyle.opacity === '1' ) {
         modalStyle.opacity = 0
         setTimeout(() => {
            modalStyle.zIndex = -1
         }, 500);
      }
      else {
         modalStyle.zIndex = 1
         modalStyle.opacity = 1
      }
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
                  <WorkCard>
                     <small>2018 - 2019</small>
                     <h3>Cornwell</h3>
                     <p>An award-winning design agency</p>
                     <small className="more" onClick={() => this.toggleWorkModal(0)}>
                        tell me more
                     </small>
                     <WorkDetail innerRef={this.workDetailRef} onClick={() => this.toggleWorkModal(0)} >
                        <figure onClick={(e) => e.stopPropagation()}>
                           <img className="close" src={close} onClick={() => this.toggleWorkModal(0)}/>

                           <img src="http://html5doctor.com/wp-content/uploads/2010/03/macaque.jpg" />
                           <figcaption>
                              Refs provide a way to access DOM nodes or React elements
                              created in the render method. In the typical React dataflow,
                              props are the only way that parent components interact with
                              their children. To modify a child, you re-render it with new
                              props. However, there are a few cases where you need to
                              imperatively modify a child outside of the typical dataflow.
                              The child to be modified could be an instance of a React
                              component, or it could be a DOM element. For both of these
                              cases, React provides an escape hatch. When to Use Refs
                              There are a few good use cases for refs: Managing focus,
                              text selection, or media playback. Triggering imperative
                              animations. Integrating with third-party DOM libraries.
                              Avoid using refs for anything that can be done
                              declaratively. For example, instead of exposing open() and
                              close() methods on a Dialog component, pass an isOpen prop
                              to it.
                           </figcaption>
                        </figure>
                     </WorkDetail>
                  </WorkCard>

                  <WorkCard>
                     <small>2017 - 2018</small>
                     <h3>Coder Academy</h3>
                     <p>Australia's only accredited coding bootcamp</p>
                     <small className="more" onClick={() => this.toggleWorkModal(1)}>
                        tell me more
                     </small>
                     {/* <WorkDetail innerRef={this.workDetailRef}>
                        <figure>
                           <img src={close} onClick={() => this.toggleWorkModal(1)}/>

                           <img src="https://media.wired.com/photos/59326c6058b0d64bb35d1809/master/w_616,c_limit/Kakapo-2.jpg" />
                           <figcaption>
                              Refs provide a way to access DOM nodes or React elements
                              created in the render method. In the typical React dataflow,
                              props are the only way that parent components interact with
                              their children. To modify a child, you re-render it with new
                              props. However, there are a few cases where you need to
                              imperatively modify a child outside of the typical dataflow.
                              The child to be modified could be an instance of a React
                              component, or it could be a DOM element. For both of these
                              cases, React provides an escape hatch. When to Use Refs
                              There are a few good use cases for refs: Managing focus,
                              text selection, or media playback. Triggering imperative
                              animations. Integrating with third-party DOM libraries.
                              Avoid using refs for anything that can be done
                              declaratively. For example, instead of exposing open() and
                              close() methods on a Dialog component, pass an isOpen prop
                              to it.
                           </figcaption>
                        </figure>
                     </WorkDetail> */}
                  </WorkCard>
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
   position: relative;
   width: 100%;
   height: 100vh;
   height: calc(var(--vh, 1vh) * 100);
   display: flex;
   flex-direction: column;
   align-items: center;
   transition: width 0.7s;
   justify-content: flex-end;
   padding-top: 3rem;
   /* object-fit: cover; */
   /* font-family: "'object-fit: cover'"; */
   &:not(#home) {
      background: black;
      justify-content: space-between;
   }

   h3 {
      text-transform: uppercase;
   }

   &#contact {
      footer {
         :after {
            content: "top";
            opacity: 0;
            transition: opacity 0.3s;
         }
         :hover:after {
            opacity: 1;
         }
      }
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

const WorkCard = styled.div`
   padding: 2rem;
   /* border: 1px solid red; */

   :first-child {
      margin-bottom: 4rem;
   }

   h3 {
      margin: 2rem 0;
      display: inline-block;
   }

   small {
      display: block;
      font-size: 0.6rem;
   }

   .more {
      display: inline-block;
      margin-top: 1rem;
      font-size: 0.7rem;
      cursor: pointer;

      :hover:after {
         transform: scale(0);
      }

      :after {
         content: "";
         margin-top: 0.1rem;
         display: block;
         background: grey;
         height: 1px;
         transition: all 0.5s;
      }
   }
`

const WorkDetail = styled.div`
   /* border: 1px solid lime; */
   background: rgba(0, 0, 0, 0.8);
   position: fixed;
   opacity: 0;
   z-index: -1;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   transition: opacity 0.3s;

   .close {
      position: absolute;
      height: 2rem;
      width: 2rem;
      right: -1rem;
      top: -1rem;
      transform: translate(100%, -100%);
      cursor: pointer;
      transition: opacity .3s;
      :hover {
         opacity: .4;
      }
   }

   figure {
      /* border: 1px solid magenta; */
      display: flex;
      position: absolute;
      height: 60%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      figcaption {
         overflow: auto;
         height: 100%;
      }
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
