
import React, { Component } from "react";
import './Project.css'
import img from "../../Assets/CodeProjektBeispiel.png"


class Project extends Component {
    state = {}
    render() {
        return (<li className="ProjectPos">
                <div className="Wrapper">
                     <img src={img} alt="project" className="ProjectPic"/>
                </div>
        </li>



        );
    }
}

export default Project;