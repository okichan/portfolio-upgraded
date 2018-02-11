import React, { Component } from 'react';
import './assets/tomomi.svg'
import './App.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <div className="frame" id="card1">
               <div className="title-frame bg-paleblue">
                  <div className="title-frame-inner bg-default" >
                     <img src="tomomi.svg" />      
                     <span className="bold test rotate-90" id="myname">
                        Tomomi Oki
                     </span>
                  </div>
                  <p className="text-center bold py-1">
                     Web Developer
                  </p>
               </div>
            </div>

            <div className="frame" id="card2">
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
