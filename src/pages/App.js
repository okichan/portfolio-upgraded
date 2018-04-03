import React, { Component, Fragment } from "react";
import Link from "gatsby-link";
import "aos/dist/aos.css";
import "./App.css";
import divider from "../assets/divider.png";
import * as S from "../assets/styles";
import tanto from "../assets/tanto.png";
import port from "../assets/port.png";
import zodiac from "../assets/zodiac.png";
import wordsworth from "../assets/wordsworth.png";
import mycookbook from "../assets/mycookbook.png";
import radiohead from "../assets/radiohead.png";
import { svgs } from "../assets/Svgs";

class App extends React.Component {
  state = {
    circles: [svgs.circle, svgs.circle, svgs.circle],
    favs: [
      "React",
      "Angular (2+)",
      "CSS",
      "SASS",
      "JavaScript",
      "Mongo",
      "Figma",
      "GitHub",
      "Jira",
      "SVG",
      "Netlify",
      "Bootstrap",
      "VSCode",
      "Yarn",
      "Refactoring",
      "Typography",
      "Karaoke",
      "Bike Share",
      "Vintage",
      "Tea",
      "Sushi",
      "Xiaolongbao",
      "Curry",
      "Singapore",
      "Chicago",
      "Madrid",
      "80s music",
      "90s too"
    ],
    projects: [
      {
        name: "Tanto",
        url: "https://mct-project-t3-demo.netlify.com",
        img: tanto,
        desc: "Sales management app for an existing shop in Melbourne. School group project.",
        stack: "React / Node / Express / Mongo / API / Bootstrap"
      },
      {
        name: "Portfolio",
        url: "https://tomomioki.netlify.com",
        img: port,
        desc: "My old portfolio. School solo project.",
        stack: "React / Node / SCSS / SVG"
      },
      {
        name: "Zodiac Redifined",
        url: "https://zodiac-redefined.netlify.com",
        img: zodiac,
        desc: "Toy app that tells your personality by entering your birth year.",
        stack: "React / Node / Express / Rest API / SCSS"
      },
      {
        name: "Wordsworth",
        url: "https://wordsworth.herokuapp.com",
        img: wordsworth,
        desc: "An Airtasker-like translation portal. School solo project.",
        stack: "Ruby on Rails / PostgreSQL / Bootstrap / AWS"
      },
      {
        name: "My Cookbook",
        url: "https://radiant-beach-49950.herokuapp.com/",
        img: mycookbook,
        desc: "Hackathon group project (to log in enter test@test.com pw: 123123).",
        stack: "Ruby on Rails / Bootstrap"
      },
      {
        name: "Radiohead fansite",
        url: "https://secretary-answers-11183.netlify.com",
        img: radiohead,
        desc: "Sales management app for an existing shop in Melbourne. School group project.",
        stack: "HTML / CSS"
      }
    ]
  }

  componentDidMount() {
    const isBrowser = typeof window !== 'undefined';
    const AOS = isBrowser ? require('aos') : undefined;
    AOS.init();

    document.getElementsByTagName("svg")[1].setAttribute("id", "circle1");
    document.getElementsByTagName("svg")[2].setAttribute("id", "circle2");
    document.getElementsByTagName("svg")[3].setAttribute("id", "circle3");
  }

  componentDidUpdate() {
    const isBrowser = typeof window !== 'undefined';
    const AOS = isBrowser ? require('aos') : undefined;
    
    AOS.refresh()
  }

  render() {
      const { circles, projects, favs } = this.state
      
    return (
      <S.Container>
        <S.Top>
          <div className="center">
            <div data-aos="fade" data-aos-delay="500" data-aos-duration="3000">
              <svg viewBox="0 0 500 500" preserveAspectRatio="xMidYMin slice">
                <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                <text textLength="336">
                  <textPath xlinkHref="#curve">&nbsp;&nbsp;&nbsp;TOMOMI</textPath>
                </text>
              </svg>
            </div>

            <S.Oki>
              <div data-aos="fade" data-aos-delay="1800" data-aos-duration="3000" data-aos-anchor=".center">
                Oki
              </div>
            </S.Oki>

            <div data-aos="fade" data-aos-delay="3000" data-aos-duration="3000" data-aos-anchor=".center">
              <S.SubTitle>web developer</S.SubTitle>
              <figure>
                <S.Divider src={divider} />
              </figure>
            </div>
          </div>
        </S.Top>

        <S.Greeting>
          <p className="bold hello" data-aos="fade" data-aos-duration="2000" data-aos-anchor-placement="top-center">
            Hello there.
          </p>

          <p className="p-1" data-aos="fade" data-aos-duration="2000" data-aos-delay="1500" data-aos-anchor=".hello">
            My name is Tomomi, an aspiring web developer who loves creating simple, elegant and eye-pleasing websites.<br />
            <br />
            In the recent past, I had been in a marketing research industry querying away SQL and dealing with Microsoft Excel.
          </p>
          <p className="p-2" data-aos="fade" data-aos-duration="2000" data-aos-delay="1500" data-aos-anchor=".hello">
            The world has evolved whilst I was v-looking up cells, so I decided to go back to school to learn new technologies,
            which turned out to be one of the best decisions I've ever made.
            <br />
            <br />
            In the more distant past, I grew up in Japan and that's what makes me "me" now, although quite frequently it's mixed
            with the quirky culture of Melbourne (north)!
          </p>

          <S.CircleWrapper data-aos="fade" data-aos-duration="1000" data-aos-delay="3000" data-aos-anchor=".hello">
            {circles.map((circle, i) => {
              if (i === 0) {
                return (
                  <a href="https://github.com/okichan/portfolio-upgraded/raw/master/public/Tomomi_Oki_resume.docx" title="Get resume (word)" key="1">
                    {circle}
                  </a>
                );
              } else if (i === 1) {
                return (
                  <a href="https://github.com/okichan/portfolio-upgraded/raw/master/public/Tomomi_Oki_resume.pdf" title="Get resume (pdf)" key="2">
                    {circle}
                  </a>
                );
              } else
                return (
                  <a href="https://github.com/okichan" title="Go to Github" key="3" target="_blank">
                    {circle}
                  </a>
                );
            })}
          </S.CircleWrapper>
        </S.Greeting>

        <S.Title className="works-title" data-aos="fade" data-aos-duration="2000" data-aos-anchor-placement="top-center">
          WORKS
        </S.Title>

        <S.WorksContainer>
          {projects.map((project, i) => {
            return (
              <Fragment key={project.name}>
                <S.WorkItem
                  href={project.url}
                  key={project.name}
                  target="_blank"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-easing="ease-out-quart"
                  data-aos-anchor="#trigger"
                  data-aos-delay={(i + 1) * 400}
                >
                  <img src={project.img} />
                  <span>{project.name}</span>
                </S.WorkItem>
                <S.WorkDesc>
                  {project.desc}
                  <br />
                  {project.stack}
                </S.WorkDesc>
              </Fragment>
            );
          })}
          <div id="trigger" />
        </S.WorksContainer>

        <S.Title className="fav" data-aos="fade" data-aos-duration="2000" data-aos-anchor-placement="top-center">
          FAVOURITES
        </S.Title>

        <S.FavContainer data-aos="fade" data-aos-duration="2000" data-aos-anchor=".fav">
          <ul>
            {favs.map((f, i) => {
              return (
                <li
                  key={f}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  data-aos-delay={1000}
                  data-aos-anchor-placement="top-bottom"
                >
                  {f}
                </li>
              );
            })}
          </ul>
        </S.FavContainer>

        <S.Footer>
          <a href="https://github.com/okichan">{svgs.github}</a>
          <a href="https://www.linkedin.com/in/tomomi-oki-parsons/">{svgs.linkedin}</a>
          <p>
            &copy;{`${new Date().getFullYear()} `}
            Tomomi Oki, coded with
            <S.Love />
            , <a href="https://reactjs.org/">React</a>, <a href="https://www.gatsbyjs.org/">Gatsby</a> and{" "}
            <a href="https://www.styled-components.com/">Styled Components</a>.
          </p>
        </S.Footer>
      </S.Container>
    );
  }
}

export default App;
