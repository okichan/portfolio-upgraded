import React, { Component } from 'react';
import AOS from 'aos'
import './App.css';
import './assets/aos.css';
import girl from './assets/coder_girl.png';
import tsubaki from './assets/tsubaki.svg';
import hagi from './assets/hagi.png';
import heart from './assets/heart.svg'

class App extends Component {
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
            This portfolio was originally created to showcase my skills that I've learnt in the first 1.5 month of studying at <a href="https://coderacademy.edu.au" target="_blank">Coder Academy</a>.
            It is maintained and updated occasionally ever since.
</p>
          <p>Past profession: A survey programmer in marketing research, querying away SQL</p>
          <div className="svg-wrapper">
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
              <li>Ruby &amp; Ruby on Rails</li>
            </ul>
            <p className="bold">Download CV</p>
            <div class="svg-wrapper">
              <a href="https://github.com/okichan/portfolio-upgraded/raw/master/public/Tomomi_Oki_resume.docx">
                <svg id="word" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318.188 318.188"><g fill="#5e5e5e"><path d="M283.149 52.722L232.625 2.197A7.5 7.5 0 0 0 227.321 0H40.342a7.5 7.5 0 0 0-7.5 7.5v303.188a7.5 7.5 0 0 0 7.5 7.5h237.504a7.5 7.5 0 0 0 7.5-7.5V58.025c0-1.989-.79-3.896-2.197-5.303zm-48.328-27.115l24.918 24.919h-24.918V25.607zM47.842 15h171.98v10.263H47.842V15zm222.504 288.188H47.842V40.263h171.98v17.763a7.5 7.5 0 0 0 7.5 7.5h43.024v237.662z"/><path d="M106.89 233.392H90.284v47.979h15.522c7.985 0 14.183-2.166 18.591-6.498 4.408-4.332 6.613-10.501 6.613-18.509 0-7.438-2.096-13.127-6.285-17.065-4.189-3.938-10.134-5.907-17.835-5.907zm7.908 33.917c-1.837 2.287-4.725 3.43-8.663 3.43h-2.888v-26.877h3.773c3.545 0 6.187 1.061 7.926 3.183 1.739 2.123 2.609 5.382 2.609 9.78.001 4.703-.919 8.198-2.757 10.484zM161.235 232.637c-7.613 0-13.418 2.106-17.41 6.317-3.992 4.212-5.988 10.31-5.988 18.295 0 8.073 2.006 14.222 6.021 18.444 4.014 4.223 9.785 6.333 17.311 6.333 7.637 0 13.434-2.1 17.395-6.301 3.959-4.201 5.939-10.337 5.939-18.411 0-8.095-1.969-14.232-5.906-18.411-3.94-4.176-9.727-6.266-17.362-6.266zm7.237 35.213c-1.586 2.254-4.02 3.38-7.303 3.38-6.453 0-9.68-4.638-9.68-13.914 0-9.364 3.248-14.046 9.746-14.046 3.193 0 5.596 1.144 7.203 3.429 1.607 2.287 2.412 5.825 2.412 10.617.001 4.77-.792 8.281-2.378 10.534zM105.792 189.204h105.111a7.5 7.5 0 0 0 7.5-7.5V76.594a7.5 7.5 0 0 0-7.5-7.5H105.792a7.5 7.5 0 0 0-7.5 7.5v105.11a7.5 7.5 0 0 0 7.5 7.5zm7.499-105.11h90.112v14.031h-9.81l-13.978 35.15c-3.782 9.78-5.828 15.1-6.135 15.961a90.827 90.827 0 0 0 1.199-14.577V98.125H159.18l-15.453 35.612-4.337 10.702-1.845 4.797c.584-3.321.969-9.087 1.153-17.298l.461-33.813h-17.067l2.26 67.441h20.021l11.671-27.447c2.613-6.643 4.428-12.009 5.443-16.099-.4 5.197-.6 10.18-.6 14.946v28.6h21.265l21.25-48.925v57.563h-90.111v-90.11zM214.531 243.335c2.034 0 3.938.285 5.71.854a44.662 44.662 0 0 1 5.316 2.1l3.971-10.206c-4.726-2.253-9.681-3.38-14.866-3.38-4.748 0-8.877 1.012-12.389 3.036-3.512 2.024-6.202 4.918-8.073 8.68-1.87 3.763-2.806 8.128-2.806 13.094 0 7.942 1.931 14.013 5.792 18.214 3.861 4.201 9.413 6.301 16.655 6.301 5.054 0 9.583-.886 13.586-2.658v-10.961a61.73 61.73 0 0 1-6.005 2.133c-1.991.59-4.048.886-6.17.886-7.023 0-10.534-4.616-10.534-13.849 0-4.441.863-7.925 2.592-10.452 1.729-2.528 4.136-3.792 7.221-3.792z"/></g></svg>
              </a>
              <a href="https://github.com/okichan/portfolio-upgraded/raw/master/public/Tomomi_Oki_resume.pdf">
                <svg id="pdf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 318.188 318.188"><g fill="#5e5e5e"><path d="M283.149 52.722L232.625 2.197A7.5 7.5 0 0 0 227.321 0H40.342a7.5 7.5 0 0 0-7.5 7.5v303.188a7.5 7.5 0 0 0 7.5 7.5h237.504a7.5 7.5 0 0 0 7.5-7.5V58.025c0-1.989-.79-3.896-2.197-5.303zm-48.328-27.115l24.918 24.919h-24.918V25.607zM47.842 15h171.98v10.263H47.842V15zm222.504 288.188H47.842V40.263h171.98v17.763a7.5 7.5 0 0 0 7.5 7.5h43.024v237.662z"/><path d="M201.704 147.048c-3.615-.024-7.177.154-10.693.354-1.296.087-2.579.199-3.861.31a93.594 93.594 0 0 1-3.813-4.202c-7.82-9.257-14.134-19.755-19.279-30.664 1.366-5.271 2.459-10.772 3.119-16.485 1.205-10.427 1.619-22.31-2.288-32.251-1.349-3.431-4.946-7.608-9.096-5.528-4.771 2.392-6.113 9.169-6.502 13.973-.313 3.883-.094 7.776.558 11.594.664 3.844 1.733 7.494 2.897 11.139a165.324 165.324 0 0 0 3.588 9.943 171.593 171.593 0 0 1-2.63 7.603c-2.152 5.643-4.479 11.004-6.717 16.161l-3.465 7.507c-3.576 7.855-7.458 15.566-11.814 23.02-10.163 3.585-19.283 7.741-26.857 12.625-4.063 2.625-7.652 5.476-10.641 8.603-2.822 2.952-5.69 6.783-5.941 11.024-.141 2.394.807 4.717 2.768 6.137 2.697 2.015 6.271 1.881 9.4 1.225 10.25-2.15 18.121-10.961 24.824-18.387 4.617-5.115 9.872-11.61 15.369-19.465l.037-.054c9.428-2.923 19.689-5.391 30.579-7.205 4.975-.825 10.082-1.5 15.291-1.974 3.663 3.431 7.621 6.555 11.939 9.164 3.363 2.069 6.94 3.816 10.684 5.119 3.786 1.237 7.595 2.247 11.528 2.886 1.986.284 4.017.413 6.092.335 4.631-.175 11.278-1.951 11.714-7.57.134-1.721-.237-3.229-.98-4.551-3.643-6.493-16.231-8.533-22.006-9.451-4.553-.723-9.2-.939-13.804-.935zm-75.06 20.697a170.827 170.827 0 0 1-6.232 9.041c-4.827 6.568-10.34 14.369-18.322 17.286-1.516.554-3.512 1.126-5.616 1.002-1.874-.11-3.722-.936-3.637-3.065.042-1.114.587-2.535 1.423-3.931.915-1.531 2.048-2.935 3.275-4.226 2.629-2.762 5.953-5.439 9.777-7.918 5.865-3.805 12.867-7.23 20.672-10.286-.449.71-.897 1.416-1.34 2.097zm27.222-84.26a38.169 38.169 0 0 1-.323-10.503 24.858 24.858 0 0 1 1.038-4.952c.428-1.33 1.352-4.576 2.826-4.993 2.43-.688 3.177 4.529 3.452 6.005 1.566 8.396.186 17.733-1.693 25.969-.299 1.31-.632 2.599-.973 3.883a121.219 121.219 0 0 1-1.648-4.821c-1.1-3.525-2.106-7.091-2.679-10.588zm16.683 66.28a236.508 236.508 0 0 0-25.979 5.708c.983-.275 5.475-8.788 6.477-10.555 4.721-8.315 8.583-17.042 11.358-26.197 4.9 9.691 10.847 18.962 18.153 27.214.673.749 1.357 1.489 2.053 2.22-4.094.441-8.123.978-12.062 1.61zm61.744 11.694c-.334 1.805-4.189 2.837-5.988 3.121-5.316.836-10.94.167-16.028-1.542-3.491-1.172-6.858-2.768-10.057-4.688-3.18-1.921-6.155-4.181-8.936-6.673 3.429-.206 6.9-.341 10.388-.275 3.488.035 7.003.211 10.475.664 6.511.726 13.807 2.961 18.932 7.186 1.009.833 1.331 1.569 1.214 2.207zM158.594 233.392h-16.606v47.979h15.523c7.985 0 14.183-2.166 18.591-6.498 4.408-4.332 6.613-10.501 6.613-18.509 0-7.438-2.096-13.127-6.285-17.065-4.19-3.938-10.135-5.907-17.836-5.907zm7.909 33.917c-1.838 2.287-4.726 3.43-8.664 3.43h-2.888v-26.877h3.773c3.545 0 6.187 1.061 7.926 3.183 1.739 2.123 2.609 5.382 2.609 9.78.001 4.703-.918 8.198-2.756 10.484zM129.78 237.363c-3.041-2.647-7.592-3.971-13.652-3.971H99.522v47.979h12.963v-15.917h3.643c5.819 0 10.309-1.46 13.472-4.381 3.161-2.92 4.742-7.061 4.742-12.421-.001-4.879-1.521-8.642-4.562-11.289zm-10.288 15.884c-1.149 1.094-2.697 1.641-4.644 1.641h-2.363v-11.026h3.348c3.588 0 5.382 1.619 5.382 4.857-.001 1.924-.575 3.434-1.723 4.528zM191.314 281.371h12.766v-18.017h14.374v-10.403H204.08v-9.156h15.589v-10.403h-28.355z"/></g></svg>
              </a>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className="frame" id="card4">
          <div className="title-frame">
            <div className="title-frame-first">
            </div>
            <div className="title-frame-second" >
              <h3 className="vertical">
                Projects
              </h3>
            </div>
          </div>

          <div className="content">
            <h4>Tanto Management System</h4>
            <small>React / Node</small>
            <ul>
              <li><a href="">Site</a></li>
              <li><a href="">Repo</a></li>
              <li><a href="">Wireframe</a></li>
            </ul>

            <h4>Wordsworth</h4>
            <small>Ruby on Rails</small>
            <ul>
              <li><a href="">Site</a></li>
              <li><a href="">Repo</a></li>
              <li><a href="">Wireframe</a></li>
            </ul>

            <h4>Responsive website practice:
                Pseudo NGV Hokusai exhibition
            </h4>
            <ul>
              <li><a href="">Repo</a></li>
              <li><a href="">Wireframe</a></li>
            </ul>

            <h4>The unofficial Radiohead fan site</h4>
            <ul>
              <li><a href="">Site</a></li>
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
        </div>
        Last updated on: 22 Feb 2018
</div>
    );
  }
}

export default App;
