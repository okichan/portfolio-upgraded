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

   render() {
      const projectsCornwell = [
         {
            logo: yarrabend,
            name: "YarraBend",
            tech: "React | GraphQL",
            desc: "In a team of ~10 ppl, I built the official website for a development project for Yarrabend.",
            href: "https://yarrabend.com.au"
         },
         {
            logo: flinders,
            name: "Flinders Lane",
            tech: "HTML | JavaScript | CSS",
            desc: "The first commercial website I built on my own.",
            href: "https://www.180-189flinders.com.au/"
         },
         {
            logo: adco,
            name: "Adco",
            tech: "React | GraphQL",
            desc: "In a team of ~5 ppl, I built the official website for a construction company.",
            href: "https://www.adcoconstruct.com.au/"
         },
         {
            logo: moritz,
            name: "Saint Moritz",
            tech: "React",
            desc: "I have worked on front end for this premium apartment's register page.",
            href: "https://saintmoritz.com.au/"
         }
      ]

      const projectsCA = [
         {
            // logo: null,
            name: "Tanto Management System",
            tech: "React | Express | MongoDB",
            desc: "For this final project we built an app to manage the sales, inventory and customer information.",
            href: "https://mct-project-t3-demo.netlify.com/"
         },
         {
            // logo: flinders,
            name: "Wordsworths",
            tech: "Ruby on Rails",
            desc: "I have built a two-sided marketplace app which features private message, payment system etc.",
            href: "https://wordsworth.herokuapp.com/"
         },
         {
            // logo: adco,
            name: "Zodiac Redefined",
            tech: "React",
            desc: "I repurposed a coding challenge for a job and made into a silly side project.",
            href: "https://zodiac-redefined.netlify.com/"
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

            <Page id="about" className="career">
               <h3>about me</h3>
               <Bio>
                  <p>Hello.</p>
                  <p>I'm a front-end web developer based in Melbourne.</p>
                  <p>
                     I was a career changer. I used to do Excel admin for 10 years, but decided to join the coding bootcamp because I've always wanted to code and I knew I'd be good at it.
                  </p>
                  <p>
                     I successfully landed a job at a design agency. 
                     I loved working with talented people but unfortunately, after a year the business shut down.
                  </p>
                  <p>I lost job but got a baby actually. I was away from work for a while parenting but I realised I still prefer coding to changing nappies, so here I am. </p>
               </Bio>
               <Footer onClick={() => this.scrollTo("works")} />
            </Page>
            
            <Page id="works" className="career">
               <h3>developer experiences</h3>
               <div>
                  <div className="">
                     <p className="mx-2">2018 - 2019</p>
                     <h3>Cornwell</h3>
                     <p>Junior front-end developer</p>
                     <p className="mx-2">
                        At this award-winning design agency, I built the following, but not limited to,<br className="hide-mob"/> websites with direction of a lead developer.  
                     </p>

                     <AccordionWrapper>
                        {projectsCornwell.map(m => {
                           return <Accordion project={m} />
                        })}
                     </AccordionWrapper>
                  </div>
               </div>
               <Footer onClick={() => this.scrollTo("career-2")} />
            </Page>

            <Page id="career-2" className="career">
               <br />
               <div>
                  <p className="mx-2">2018 Feb</p>
                  <h3><a href="https://serraview.com/" target="_blank">Serraview </a></h3>
                  <p>Internship</p>
                  <p className="mx-2">
                     In an agile environment, I worked mainly on cosmetic upgrades{" "}
                     <br className="hide-mob"/>
                     using Angular2 under supervison of a senior front-end mentor.
                  </p>
               </div>

               <Footer onClick={() => this.scrollTo("career-3")} />
            </Page>

            <Page id="career-3" className="career">
               <br className="hide-mob"/>
               <div className="">
                  <p className="mx-2">2017 - 2018</p>
                  <h3><a href="https://coderacademy.edu.au/" target="_blank">Coder Academy</a></h3>
                  <p>Full-time student</p>
                  <p className="mx-2">
                     Coder Academy is Australia's only accredited coding bootcamps.
                     <br /> During this intense 6-month course, we were taught {" "}
                     <br className="hide-mob" />
                     basic programming, Ruby on Rails, Git, Bootstrap and React.
                  </p>

                  <AccordionWrapper>
                     {projectsCA.map(m => {
                        return <Accordion project={m} />
                     })}
                  </AccordionWrapper>
               </div>
               <Footer onClick={() => this.scrollTo("contact")} />
            </Page>

            <Page id="contact">
               <h3>contact</h3>
               <Social>
                  <a href="https://github.com/okichan" target="_blank">
                     <img src={git} alt="git" />
                  </a>
                  <a href="https://www.linkedin.com/in/tomomi-oki-parsons/" target="_blank">
                     <img src={linkedIn} alt="git" />
                  </a>
                  {/* <span>
                     <img src={mail} alt="git" onClick={this.toggleHandler} />
                  </span> */}
               </Social>
               <Footer onClick={() => this.scrollTo("home")} reverseArrow />
            </Page>
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
      object-position: center 20%;
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
      justify-content: space-between;
   }

   h3 {
      text-transform: uppercase;

      &.organisation {
         padding: 2rem;
      }
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

   .hide-mob {
         ${below.tablet`
            display: none;
         `}
      }

   ${below.tablet`
      padding-right: 1rem;
      padding-left: 1rem;
   `}
`

const Bio = styled.div`
   width: 50vw;
   min-width: 18rem;
   p {
      ${above.tablet`
         text-align: left;
      `}
      margin: 1rem 0;
   }

   ${below.tablet`
      width: auto;
   `}
`

const AccordionWrapper = styled.div`
   width: 80%;
   max-width: 860px;
   /* border: 1px solid cyan; */
   margin: 0 auto 4rem;
   ${below.tablet`
      width: auto;
   `}
`

const Social = styled.div`
   img {
      width: 48px;
   }

   a {
      display: inline-block;
      margin: 0 .6rem;

   }
`

export default MainArea
