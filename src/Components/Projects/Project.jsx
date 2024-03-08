import React, { Component } from "react";
import '../Main.css'
import './Project.css'
import img from "../../Assets/Png/CodeProjektBeispiel.png"
import GithubLogo from "./Assets/github-mark.svg"



class Project extends Component {
    state = {}
    render() {

        const { header, description, link } = this.props;
        return (

            <div className="ProjectWrapper">
                <div className="Projectdiv">
                    <img className="ProjectImg" src={img} />
                    <div className="ProjectDescription">
                        <div className="ProjectDescriptionWrapper">
                            <h1 className="Segoe ProjectHeader">
                                {header}
                            </h1>
                            <p className="Consolas ProjectText">
                                {description}
                            </p>
                            <a href={link}>
                                <img src={GithubLogo} className="GithubLogo" alt="githublogo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Project;
