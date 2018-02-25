import React, { Component } from 'react';
import './App.css';
import './assets/aos.css';
import girl from './assets/coder_girl.png';
import tsubaki from './assets/tsubaki.svg';
import hagi from './assets/hagi.png';
import AOS from 'aos'

class App extends Component {
   render() {
      AOS.init()
      return (
         <div className="App">
            <div className="frame" id="card1">
               <img id="coder_girl_img" data-aos="flip-left" data-aos-duration="1000" alt="coder girl" src={girl} />
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
                  <p className="text-center py-2 bold">
                     Web Developer
                  </p>
               </div>
            </div>

            {/* card 2 */}
            <div className="frame" id="card2">
               <div className="title-frame">
                  <div className="title-frame-first">
                     <img id="tsubaki" data-aos="flip-left" data-aos-duration="2000" data-aos-offset="100" alt="tsubaki" src={tsubaki} />
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
               <p>Past profession: A survey programmer in marketing research industry</p>
               <p>
                  <i className="fa fa-heart"></i>
                  : Music, food, art and code (especially front-end!)
               </p>
            </div>

            {/* card 3 */}
            <div className="frame" id="card3">
               <img id="hagi" data-aos="fade-left" data-aos-duration="2000" data-aos-offset="100" alt="hagi" src={hagi} />

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
                  <p>Download resume</p>
                  <a href="">
                     <i className="fa fa-file-word"></i>
                  </a>
                  <a href="">
                     <i className="fa fa-file-pdf"></i>
                  </a>
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
                  <h4>[React] Tanto Management System</h4>
                  <ul>
                     <li><a href="">Site</a></li>
                     <li><a href="">Repo</a></li>
                     <li><a href="">Wireframe</a></li>
                  </ul>

                  <h4>[Ruby on Rails] Wordsworth</h4>
                  <ul>
                     <li><a href="">Site</a></li>
                     <li><a href="">Repo</a></li>
                     <li><a href="">Wireframe</a></li>
                  </ul>

                  <h4>Responsive website practice:
                     Pseudo NGV Hokusai exhibition</h4>
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
