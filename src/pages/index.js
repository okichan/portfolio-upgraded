import React, { Component, Fragment } from "react"
import objectFitImages from "object-fit-images"
import Div100vh from "react-div-100vh"
// import Link from 'gatsby-link'

import styled from "styled-components"
import Form from "../components/Form"
import Button from "../components/Button"
import Header from "../components/Header"
import Accordion from "../components/Accordion"
import Footer from "../components/Footer"
import { media, colors, below, above } from "../style/globalStyle"
import bg from "../../static/images/bg.jpg"
import close from "../../static/images/close.svg"
import yarrabend from "../../static/images/yarrabend.svg"
import flinders from "../../static/images/dexus.svg"
import adco from "../../static/images/adco.svg"
import geelong from "../../static/images/geelong.svg"
import moritz from "../../static/images/moritz.svg"
import git from "../../static/images/github.svg"
import linkedIn from "../../static/images/linkedin.svg"
import mail from "../../static/images/mail.svg"

class MainArea extends Component {
   constructor(props) {
      super(props)
      this.workDetailRef = React.createRef()
      this.setContainerRef = element => {
         this.container = element
      }
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

   toggleAccordion = el => {
      console.log(el.classList)
      // this.container.classList.toggle("open")
   }

   // toggleWorkModal = idx => {
   //    let modalStyle = this.workDetailRef.current.style
   //    const body = document.querySelector("body")

   //    if (modalStyle.opacity === "1") {
   //       body.style.overflow = "auto"
   //       modalStyle.opacity = 0
   //       setTimeout(() => {
   //          modalStyle.zIndex = -1
   //       }, 500)
   //    } else {
   //       body.style.overflow = "hidden"
   //       modalStyle.zIndex = 1
   //       modalStyle.opacity = 1
   //    }
   // }

   render() {
      const projects = [
         {
            logo: yarrabend,
            name: "YarraBend",
            tech: "React, GraphQL",
            desc: "xxx",
            href: "https://yarrabend.com.au"
         },
         {
            logo: flinders,
            name: "Flinders Lane",
            tech: "Made with pure html and CSS.",
            desc: "xxx",
            href: "https://www.180-189flinders.com.au/"
         },
         {
            logo: adco,
            name: "Adco",
            tech: "React, GraphQL",
            desc: "xxx",
            href: "https://www.adcoconstruct.com.au/"
         },
         {
            logo: moritz,
            name: "Saint Moritz",
            tech: "React",
            desc: "xxx",
            href: "https://saintmoritz.com.au/"
         },
      ]
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
                  <h1 className="copy">Tomomi Oki</h1>
                  <h2 className="copy">Front-end web developer</h2>
               </Main>
               <Footer onClick={() => this.scrollTo("about")} />
            </Page>
            <Page id="about">
               <h3>about me</h3>
               <Bio>
                  <p>I'm a web developer based in Australia.</p>
                  <p>
                     I have a passion for creating simple, elegant, eye-pleasing yet
                     user-oriented websites.
                  </p>
                  <p>
                     After finishing coding bootcamp in 2018, I was hired by a design
                     studio in Melbourne where I honed my front-end skills and learnt
                     design principles and basic knowledge of Photoshop and XD, thanks to
                     the incredibly talented designers I've worked with.{" "}
                  </p>
                  <p>I am now living in Brisbane with my beautiful daughter Clara.</p>
               </Bio>
               <Footer onClick={() => this.scrollTo("works")} />
            </Page>
            <Page id="works" className="career">
               <h3>developer experiences</h3>
               <div>
                  {/* <WorkCard> */}
                  <small>2018 - 2019</small>
                  <h3>Cornwell</h3>
                  <p>Junior front-end developer</p>
                  <p>
                     At this award-winning design agency, I was working with a lead
                     developer and built the following websites.{" "}
                  </p>
                  
                  <AccordionWrapper>
                     {projects.map(m => {
                        return (
                           <Accordion project={m}/>
                        )
                     })}
                  </AccordionWrapper>

                     <small>2018 Feb</small>
                  <h3>Serraview</h3>
                  <p>Internship</p>
                  <p>
                     Tasks being managed by Jira, I worked mainly on cosmetic upgrades
                     using Angular2 under supervison of a senior front-end mentor.
                  </p>
                  <br />
                  <br />
                  <br />
                  <small>2017 - 2018</small>
                  <h3>Coder Academy</h3>
                  <p>Full-time student</p>
                  <p>
                     Coder Academy is Australia's only accredited coding bootcamps. During
                     this super intense 6-month course, we were taught basic programming,
                     Ruby on Rails, Git, Bootstrap and React.
                  </p>
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
      background: rgb(10, 10, 10);
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

   &.career {
      height: unset;
      min-height: 100vh;
      /* display: block; */
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

const WorkModal = styled.div`
   /* border: 1px solid lime; */
   background: rgba(0, 0, 0, 0.85);
   position: fixed;
   opacity: 0;
   z-index: -1;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   transition: opacity 0.3s;

   caption {
      display: block;
      text-align: right;
      /* padding-bottom: 2rem;    */

      .close {
         height: 2rem;
         width: 2rem;
         margin: 1rem;
         cursor: pointer;
         transition: opacity 0.3s;
         :hover {
            opacity: 0.4;
         }
      }
   }

   p {
      padding: 0 15%;
      /* max-width: 70%; */
   }
`

const AccordionWrapper = styled.div`
   width: 80%;
   /* border: 1px solid cyan; */
   margin: 0 auto;
`

const Social = styled.div`
   display: flex;
   align-items: flex-end;

   img {
      width: 48px;
   }
`

export default MainArea
