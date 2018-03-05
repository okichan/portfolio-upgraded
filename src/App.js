import React, { Component } from 'react';
import AOS from 'aos'
import './App.css';
import './assets/aos.css';
import girl from './assets/coder_girl.png';
import tsubaki from './assets/tsubaki.svg';
import hagi from './assets/hagi.png';
import fuji from './assets/fuji.png';
import fujiR from './assets/fuji_r.png';
import heart from './assets/heart.svg'


class App extends Component {

  componentDidMount = () => {
    const svgWithWhiteSpace = document.getElementsByClassName("svg");
    for (let i = 0; i < svgWithWhiteSpace.length; i++) { 
      const svg = svgWithWhiteSpace[i];
      const bbox = svg.getBBox();
      const viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
      svg.setAttribute("viewBox", viewBox);
    }
  }

  copyText = () => {
    const copiedText = document.getElementById("addy").select();
    document.execCommand("Copy");
    console.log(copiedText);
    // alert(copiedText)
    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!";
  }

  outFunc = () => {
    const tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy email address";
  }

  render() {

    AOS.init()
    return (
      <div className="App">
        <div className="frame" id="card1">
          <img id="coder_girl_img" data-aos="flip-left" data-aos-duration="1000"
            alt="coder girl" src={girl} />
          <div id="title-frame-outer">
            <div className="title-frame" >
              <div className="title-frame-first">
              </div>
              <div className="title-frame-second" >
                <h1 className="vertical">
                  Tomomi Oki
                </h1>
              </div>
            </div>
            <p className="text-center pb-1 bold">
              Web Developer
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="frame" id="card2">
          <div className="title-frame">
            <div className="title-frame-first">
              <img id="tsubaki" data-aos="fade" data-aos-duration="1500" data-aos-anchor-placement="top-center" alt="tsubaki" src={tsubaki} />
            </div>
            <div className="title-frame-second" >
              <h3 className="vertical">
                About Me
              </h3>
            </div>
          </div>
          <p>Why, hello there.</p>
          <p>My name is Tomomi, born and bred Japanese living in Melbourne.
          </p>
          <p>
            This portfolio was originally created to showcase my skills that I've learnt in the first 1.5 month of studying at <a href="https://coderacademy.edu.au" target="_blank" rel="noopener noreferrer">Coder Academy</a>.
            It is maintained and updated occasionally ever since.
          </p>
          <p>Past profession: A survey programmer in marketing research, querying away SQL</p>
          <div className="py-2">
            <object type="image/svg+xml" data={heart} className="heart">Your browser does not support SVGs</object>
            <span>: Music, food, art and code</span>
          </div>
          <p>&nbsp;</p>
        </div>

        {/* card 3 */}
        <div className="frame" id="card3">
          <img id="hagi"
            data-aos="fade-up-left"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="900"
            alt="hagi" src={hagi}
          />

          <div className="title-frame">
            <div className="title-frame-first">
            </div>
            <div className="title-frame-second" >
              <h3 className="">
                Skills
              </h3>
            </div>
          </div>

          <div className="content">
            <ul>
              <li>HTML5</li>
              <li>CSS3 &amp; 4</li>
              <li>SASS/SCSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Angular</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Mongodb</li>
              <li>SQL</li>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
            </ul>
            <p className="bold py-2">Download CV</p>
            <div className="svg-wrapper clearfix">
              <a className="mr-4" href="https://github.com/okichan/portfolio-upgraded/raw/master/public/Tomomi_Oki_resume.docx">
                <svg id="word" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318.188 318.188"><g fill="#5e5e5e"><path d="M283.149 52.722L232.625 2.197A7.5 7.5 0 0 0 227.321 0H40.342a7.5 7.5 0 0 0-7.5 7.5v303.188a7.5 7.5 0 0 0 7.5 7.5h237.504a7.5 7.5 0 0 0 7.5-7.5V58.025c0-1.989-.79-3.896-2.197-5.303zm-48.328-27.115l24.918 24.919h-24.918V25.607zM47.842 15h171.98v10.263H47.842V15zm222.504 288.188H47.842V40.263h171.98v17.763a7.5 7.5 0 0 0 7.5 7.5h43.024v237.662z" /><path d="M106.89 233.392H90.284v47.979h15.522c7.985 0 14.183-2.166 18.591-6.498 4.408-4.332 6.613-10.501 6.613-18.509 0-7.438-2.096-13.127-6.285-17.065-4.189-3.938-10.134-5.907-17.835-5.907zm7.908 33.917c-1.837 2.287-4.725 3.43-8.663 3.43h-2.888v-26.877h3.773c3.545 0 6.187 1.061 7.926 3.183 1.739 2.123 2.609 5.382 2.609 9.78.001 4.703-.919 8.198-2.757 10.484zM161.235 232.637c-7.613 0-13.418 2.106-17.41 6.317-3.992 4.212-5.988 10.31-5.988 18.295 0 8.073 2.006 14.222 6.021 18.444 4.014 4.223 9.785 6.333 17.311 6.333 7.637 0 13.434-2.1 17.395-6.301 3.959-4.201 5.939-10.337 5.939-18.411 0-8.095-1.969-14.232-5.906-18.411-3.94-4.176-9.727-6.266-17.362-6.266zm7.237 35.213c-1.586 2.254-4.02 3.38-7.303 3.38-6.453 0-9.68-4.638-9.68-13.914 0-9.364 3.248-14.046 9.746-14.046 3.193 0 5.596 1.144 7.203 3.429 1.607 2.287 2.412 5.825 2.412 10.617.001 4.77-.792 8.281-2.378 10.534zM105.792 189.204h105.111a7.5 7.5 0 0 0 7.5-7.5V76.594a7.5 7.5 0 0 0-7.5-7.5H105.792a7.5 7.5 0 0 0-7.5 7.5v105.11a7.5 7.5 0 0 0 7.5 7.5zm7.499-105.11h90.112v14.031h-9.81l-13.978 35.15c-3.782 9.78-5.828 15.1-6.135 15.961a90.827 90.827 0 0 0 1.199-14.577V98.125H159.18l-15.453 35.612-4.337 10.702-1.845 4.797c.584-3.321.969-9.087 1.153-17.298l.461-33.813h-17.067l2.26 67.441h20.021l11.671-27.447c2.613-6.643 4.428-12.009 5.443-16.099-.4 5.197-.6 10.18-.6 14.946v28.6h21.265l21.25-48.925v57.563h-90.111v-90.11zM214.531 243.335c2.034 0 3.938.285 5.71.854a44.662 44.662 0 0 1 5.316 2.1l3.971-10.206c-4.726-2.253-9.681-3.38-14.866-3.38-4.748 0-8.877 1.012-12.389 3.036-3.512 2.024-6.202 4.918-8.073 8.68-1.87 3.763-2.806 8.128-2.806 13.094 0 7.942 1.931 14.013 5.792 18.214 3.861 4.201 9.413 6.301 16.655 6.301 5.054 0 9.583-.886 13.586-2.658v-10.961a61.73 61.73 0 0 1-6.005 2.133c-1.991.59-4.048.886-6.17.886-7.023 0-10.534-4.616-10.534-13.849 0-4.441.863-7.925 2.592-10.452 1.729-2.528 4.136-3.792 7.221-3.792z" /></g></svg>
              </a>
              <a href="https://github.com/okichan/portfolio-upgraded/raw/master/public/Tomomi_Oki_resume.pdf">
                <svg id="pdf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318.188 318.188"><g fill="#5e5e5e"><path d="M283.149 52.722L232.625 2.197A7.5 7.5 0 0 0 227.321 0H40.342a7.5 7.5 0 0 0-7.5 7.5v303.188a7.5 7.5 0 0 0 7.5 7.5h237.504a7.5 7.5 0 0 0 7.5-7.5V58.025c0-1.989-.79-3.896-2.197-5.303zm-48.328-27.115l24.918 24.919h-24.918V25.607zM47.842 15h171.98v10.263H47.842V15zm222.504 288.188H47.842V40.263h171.98v17.763a7.5 7.5 0 0 0 7.5 7.5h43.024v237.662z" /><path d="M201.704 147.048c-3.615-.024-7.177.154-10.693.354-1.296.087-2.579.199-3.861.31a93.594 93.594 0 0 1-3.813-4.202c-7.82-9.257-14.134-19.755-19.279-30.664 1.366-5.271 2.459-10.772 3.119-16.485 1.205-10.427 1.619-22.31-2.288-32.251-1.349-3.431-4.946-7.608-9.096-5.528-4.771 2.392-6.113 9.169-6.502 13.973-.313 3.883-.094 7.776.558 11.594.664 3.844 1.733 7.494 2.897 11.139a165.324 165.324 0 0 0 3.588 9.943 171.593 171.593 0 0 1-2.63 7.603c-2.152 5.643-4.479 11.004-6.717 16.161l-3.465 7.507c-3.576 7.855-7.458 15.566-11.814 23.02-10.163 3.585-19.283 7.741-26.857 12.625-4.063 2.625-7.652 5.476-10.641 8.603-2.822 2.952-5.69 6.783-5.941 11.024-.141 2.394.807 4.717 2.768 6.137 2.697 2.015 6.271 1.881 9.4 1.225 10.25-2.15 18.121-10.961 24.824-18.387 4.617-5.115 9.872-11.61 15.369-19.465l.037-.054c9.428-2.923 19.689-5.391 30.579-7.205 4.975-.825 10.082-1.5 15.291-1.974 3.663 3.431 7.621 6.555 11.939 9.164 3.363 2.069 6.94 3.816 10.684 5.119 3.786 1.237 7.595 2.247 11.528 2.886 1.986.284 4.017.413 6.092.335 4.631-.175 11.278-1.951 11.714-7.57.134-1.721-.237-3.229-.98-4.551-3.643-6.493-16.231-8.533-22.006-9.451-4.553-.723-9.2-.939-13.804-.935zm-75.06 20.697a170.827 170.827 0 0 1-6.232 9.041c-4.827 6.568-10.34 14.369-18.322 17.286-1.516.554-3.512 1.126-5.616 1.002-1.874-.11-3.722-.936-3.637-3.065.042-1.114.587-2.535 1.423-3.931.915-1.531 2.048-2.935 3.275-4.226 2.629-2.762 5.953-5.439 9.777-7.918 5.865-3.805 12.867-7.23 20.672-10.286-.449.71-.897 1.416-1.34 2.097zm27.222-84.26a38.169 38.169 0 0 1-.323-10.503 24.858 24.858 0 0 1 1.038-4.952c.428-1.33 1.352-4.576 2.826-4.993 2.43-.688 3.177 4.529 3.452 6.005 1.566 8.396.186 17.733-1.693 25.969-.299 1.31-.632 2.599-.973 3.883a121.219 121.219 0 0 1-1.648-4.821c-1.1-3.525-2.106-7.091-2.679-10.588zm16.683 66.28a236.508 236.508 0 0 0-25.979 5.708c.983-.275 5.475-8.788 6.477-10.555 4.721-8.315 8.583-17.042 11.358-26.197 4.9 9.691 10.847 18.962 18.153 27.214.673.749 1.357 1.489 2.053 2.22-4.094.441-8.123.978-12.062 1.61zm61.744 11.694c-.334 1.805-4.189 2.837-5.988 3.121-5.316.836-10.94.167-16.028-1.542-3.491-1.172-6.858-2.768-10.057-4.688-3.18-1.921-6.155-4.181-8.936-6.673 3.429-.206 6.9-.341 10.388-.275 3.488.035 7.003.211 10.475.664 6.511.726 13.807 2.961 18.932 7.186 1.009.833 1.331 1.569 1.214 2.207zM158.594 233.392h-16.606v47.979h15.523c7.985 0 14.183-2.166 18.591-6.498 4.408-4.332 6.613-10.501 6.613-18.509 0-7.438-2.096-13.127-6.285-17.065-4.19-3.938-10.135-5.907-17.836-5.907zm7.909 33.917c-1.838 2.287-4.726 3.43-8.664 3.43h-2.888v-26.877h3.773c3.545 0 6.187 1.061 7.926 3.183 1.739 2.123 2.609 5.382 2.609 9.78.001 4.703-.918 8.198-2.756 10.484zM129.78 237.363c-3.041-2.647-7.592-3.971-13.652-3.971H99.522v47.979h12.963v-15.917h3.643c5.819 0 10.309-1.46 13.472-4.381 3.161-2.92 4.742-7.061 4.742-12.421-.001-4.879-1.521-8.642-4.562-11.289zm-10.288 15.884c-1.149 1.094-2.697 1.641-4.644 1.641h-2.363v-11.026h3.348c3.588 0 5.382 1.619 5.382 4.857-.001 1.924-.575 3.434-1.723 4.528zM191.314 281.371h12.766v-18.017h14.374v-10.403H204.08v-9.156h15.589v-10.403h-28.355z" /></g></svg>
              </a>
              {/* <p>&nbsp;</p> */}
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className="frame" id="card4">
          <img src={fuji} id="fuji" data-aos="fade-down" data-aos-duration="1200" data-aos-easing="ease-in-out" data-aos-delay="" alt="fuji" />
          <img src={fujiR} id="fuji-r"
            data-aos="fade-down" data-aos-duration="1600" data-aos-easing="ease-in-out" data-aos-delay="500"
            alt="fuji right" />
          <div className="title-frame">
            <div className="title-frame-first">
            </div>
            <div className="title-frame-second" >
              <h3 className="vertical">
                Projects
              </h3>
            </div>
          </div>

          <div className="content mt-3">
            <svg id="react" className="mr-1 svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
              <g fill="#333">
                <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
                <circle cx="420.9" cy="296.5" r="45.7" />
                <path d="M520.5 78.1z" />
              </g>
            </svg>
            <h4 className="inline-header">Tanto Management System</h4>
            <ul>
              <li className="mr-1"><a href="https://mct-project-t3-demo.netlify.com/" target="_blank" rel="noopener noreferrer">Site</a></li>
              <li className="mr-1"><a href="https://github.com/okichan/major-project-term3" target="_blank" rel="noopener noreferrer">Repo</a></li>
              <li><a href="https://www.figma.com/file/ZxpbKR6v8zlqPtBJH6aW7u/Term-3-major-project-Copy" target="_blank" rel="noopener noreferrer">Wireframe</a></li>
            </ul>

            <svg id="ruby" className="mr-1" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 247 247">
              <path d="M246 84l-39-71c-2-2-4-4-7-4H47c-3 0-5 2-7 4L1 84c-2 3-1 6 1 8l116 143a8 8 0 0 0 1 1h1v1h2l1 1h1l1-1h2v-1h1a7 7 0 0 0 1-1L245 92c2-2 3-5 1-8zM138 24l22 56H87l22-56h29zm22 71l-36 111L87 95h73zm-89 0l33 99-81-99h48zm105 0h48l-81 99 33-99zm51-15h-51l-22-56h42l31 56zM51 24h42L71 80H20l31-56z" />
            </svg>
            <h4 className="inline-header">Wordsworth</h4>
            <ul>
              <li className="mr-1"><a href="http://wordsworth.herokuapp.com/" target="_blank" rel="noopener noreferrer">Site</a></li>
              <li className="mr-1"><a href="https://github.com/okichan/wordsworth" target="_blank" rel="noopener noreferrer">Repo</a></li>
              <li><a href="https://www.figma.com/file/sHidem4uBMaK1UZOQKVUwG/Wordsworth-Copy" target="_blank" rel="noopener noreferrer">Wireframe</a></li>
            </ul>

            <svg id="responsive" className="mr-1" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 512 512">
              <path d="M467 180h-86V32c0-16-14-30-30-30H30C13 2 0 16 0 32v433c0 16 13 29 30 29h300c8 10 20 16 33 16h104c25 0 45-20 45-45V224c0-24-20-44-45-44zM30 32h321v47H30V32zm289 433H30v-48h289v48zm0-241v163H30V109h321v72c-19 6-32 23-32 43zm163 241c0 8-7 15-15 15H363c-8 0-15-7-15-15v-1h134v1zm0-31H348V256h134v178zm0-208H348v-2c0-8 7-14 15-14h104c8 0 15 6 15 14v2z" />
              <path d="M246 209c-6-6-15-6-21 0l-46 46-10-10a15 15 0 0 0-22 20l20 22a15 15 0 0 0 22 0l57-57c6-5 6-15 0-21zM455 318c-5-5-15-5-21 0l-27 28-3-4a15 15 0 1 0-22 21l14 15a15 15 0 0 0 21 0l38-38c6-6 6-16 0-22z" />
            </svg>
            <h4 className="inline-header">Responsive website practice:
                Pseudo NGV Hokusai exhibition
            </h4>
            <ul>
              <li className="mr-1">
                <a href="https://car-park-attendant-navigator-15513.netlify.com/" target="_blank" rel="noopener noreferrer">
                  Site
                </a></li>
              <li><a href="https://www.figma.com/file/N8x0yhI3YZQ5KyqiCmJFDp5W/Responsive-Hokusai-NGV" target="_blank" rel="noopener noreferrer">Wireframe</a></li>
            </ul>

            <h4>The unofficial Radiohead fan site</h4>
            <ul>
              <li><a href="https://secretary-answers-11183.netlify.com/" target="_blank" rel="noopener noreferrer">Site</a></li>
            </ul>
          </div>
        </div>

        {/* card 5 */}
        <div className="frame" id="card5">
          <div className="title-frame">
            <div className="title-frame-first">
            </div>
            <div className="title-frame-second" >
              <h4 className="">
                Contact
              </h4>
            </div>
          </div>
          <div className="content">
            <a href="https://github.com/okichan" target="_blank" rel="noopener noreferrer">
              <svg id="octocat" className="svg" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 512 512">
                <g fill="#333" >
                  <path d="M436 147c5-16 8-32 8-48 0-22-5-43-15-62-20 0-38 3-54 11-15 7-33 19-53 34a380 380 0 0 0-168 1c-20-16-38-28-54-35-16-8-34-11-54-11-10 19-15 40-15 62 0 17 3 33 8 48-26 31-39 68-39 113 0 40 6 71 18 95a119 119 0 0 0 59 56 301 301 0 0 0 125 27 882 882 0 0 0 137-7c18-3 34-8 48-14 14-5 28-13 41-24 12-11 22-23 30-38 11-24 17-55 17-95 0-45-13-83-39-113zm-34 207c-6 13-14 23-23 30s-21 13-35 17-27 7-40 8c-13 2-27 2-42 2h-48c-16 0-30 0-43-2-13-1-26-4-40-8s-25-10-35-17c-9-7-17-17-23-30-6-12-9-27-9-43 0-23 7-43 20-59s31-24 53-24l56 6a294 294 0 0 0 89 0l56-6c22 0 40 8 53 24 14 16 20 36 20 59 0 16-3 31-9 43z" />
                  <path d="M167 266a27 27 0 0 0-42 0c-5 6-9 13-12 21a82 82 0 0 0 0 47c3 8 7 15 12 22a27 27 0 0 0 42 0c6-7 10-14 12-22a82 82 0 0 0 0-47c-2-8-6-15-12-21zM350 266a27 27 0 0 0-42 0c-6 6-10 13-12 21a82 82 0 0 0 0 47c2 8 6 15 12 22a27 27 0 0 0 42 0c5-7 9-14 12-22a82 82 0 0 0 0-47c-3-8-7-15-12-21z" />
                </g>
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/tomomi-oki-parsons/" target="_blank" rel="noopener noreferrer">
              <svg id="in" className="svg" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 512 512" >
                <path fill="#333" d="M430 262v159h-92V272c0-37-13-63-47-63-25 0-40 18-47 34-3 6-3 14-3 23v155h-92V143h92v40h-1 1c12-19 34-46 83-46 61 0 106 39 106 125zM52 10C21 10 0 30 0 57s20 48 51 48h1c32 0 52-21 52-48-1-27-20-47-52-47zM5 421h93V143H5v278z" />
              </svg>
            </a>
            
            <div className="tooltip-positioner">
              <a onClick={this.copyText} onMouseLeave={this.outFunc}>
                <svg id="email" className="svg" xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 129 129">
                  <path fill="#333" d="M7 111v2h1v1h2v1h108l1-1h2v-1h1v-1-1-92c0-3-2-4-4-4H10c-2 0-4 1-4 4v92zm12-5l31-36 12 9h5l12-9 31 36H19zm95-7L86 65l28-19v53zM15 23h99v13L65 70 15 36V23zm0 23l28 19-28 34V46z" />
                </svg>
              </a>
              <p className="tooltiptext" id="myTooltip">Copy email address</p>
            </div>
            <input id="addy" defaultValue="tomomioki@outlook.com" />
          </div>
        </div>
        <footer>
          Last update: 5 Mar 2018
        </footer>

</div>
    );
  }
}

export default App;
