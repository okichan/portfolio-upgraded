import React, { Component } from 'react';
import './App.css';
import './assets/aos.css';
import girl from './assets/coder_girl.png';
import tsubaki from './assets/tsubaki.svg';
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
                     <div className="title-frame-left">
                     </div>
                     <div className="title-frame-right" >
                        <h1 className="">
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
                  <div className="title-frame-left">
                     <img id="tsubaki" data-aos="flip-left" data-aos-duration="2000" data-aos-offset="100" alt="tsubaki" src={tsubaki} />
                  </div>
                  <div className="title-frame-right" >
                     <h3 className="">
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
               <ul>
                  <li>
                     Past profession: A survey programmer in marketing research industry
                  </li>
                  <li>
                     <i className="fa fa-heart"></i>
                     : Music, food, art and code (especially front-end!)
                  </li>
               </ul>
            </div>

            <div className="frame" id="card3">
               <div className="title-frame">
                  text
               </div>
            </div>

            <div className="frame" id="card4">
               <div className="title-frame">
                  text
               </div>
            </div>

            <div className="frame" id="card5">
               <div className="title-frame">
                  text
               </div>
            </div>
            Last updated on: Feb 2018
         </div>
      );
   }
}

export default App;
