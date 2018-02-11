import React, { Component } from 'react';
import './App.css';

class App extends Component {
   render() {
      return (
         <div className="App">
            <div className="frame" id="card1">
               <div className="title-frame bg-paleblue" >
                  <div id="card1-inner-frame" >
                     <h1 className="bold rotate-90 py-3 text-center" id="myname">
                        Tomomi Oki
                     </h1>
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
