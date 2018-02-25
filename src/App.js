import React, { Component } from 'react';
import './App.css';
import './assets/aos.css';
import girl from './assets/coder_girl.png';
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

            <div className="frame" id="card2" data-aos="fade-right" data-aos-duration="1500">
               <div className="title-frame">
                  text
               </div>
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
         </div>
      );
   }
}

export default App;
