import React, { Component } from "react";
import '../../Main.css'
import './ProjectIntroduction.css'
import TextmarkerCircle from '../../../Assets/TextMarkerCircle.svg'


class ProjectIntroduction extends Component {
    state = {}
    render() {
        return (<div className="ProjectIntroPos">
            <img src={TextmarkerCircle} className="TextmarkerCircle"  alt="a Textmarker Circle " />
            <h1 className="Consolas ProjectIntroText">Here you can take a look at my Projects</h1>




        </div>       
        );
    }
}

export default ProjectIntroduction;
