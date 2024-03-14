import React, { Component } from "react";
import '../Main.css'
import ProjectCss from './Project.module.css'
import img from "../../Assets/Png/CodeProjektBeispiel.png"
import GithubLogo from "./Assets/github-mark.svg"



class Project extends Component {
    state = {}
    render() {

        const { header, description, link } = this.props;
        return (
            <div className={ProjectCss.Container}>
                <div className={ProjectCss.Wrapper}>
                    <img className={ProjectCss.Img} src={img} />
                    <div className={ProjectCss.Description}>
                        <div className={ProjectCss.TextContainer}>
                            <h1 className={ProjectCss.Header}>
                                {header}
                            </h1>
                            <p className={ProjectCss.Text}>
                                {description}
                            </p>
                            <a href={link}>
                                <img src={GithubLogo} className={ProjectCss.GithubLogo} alt="githublogo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Project;
