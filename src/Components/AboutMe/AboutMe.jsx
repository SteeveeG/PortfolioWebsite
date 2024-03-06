import React, { Component } from "react";
import './AboutMe.css'
import '../Main.css'

class AboutMe extends Component {
     state = {}

     render() {
          return (<div className="AboutMepos">

               <h1 className="Segoe AboutMeHeader">About Me</h1>

               <p className="Consolas Aboutmetext">Hi, I am a 19 year old  full Stack Apprentice 
               Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

          </div>

          );
     }
}

export default AboutMe;