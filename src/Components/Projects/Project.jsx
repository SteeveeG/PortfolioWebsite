import React, { Component } from "react";
import '../Main.css'
import ProjectCss from './Project.module.css'
 
import GithubLogo from "./Assets/github-mark.png"
import LiveDemo from "./Assets/global-17.png"


class Project extends Component {
    state = {}
    render() {
        const { header, description, link, img, showSecondLink , link2 } = this.props;
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
                            <a href={link} target="_blank" >
                                <img src={GithubLogo} className={ProjectCss.GithubLogo} alt="githublogo" />
                            </a>
                            {showSecondLink && 
                            <a className={ProjectCss.LiveDemoLink} href={link2} target="_blank" title="Live Demo">
                                    <img src={LiveDemo} className={ProjectCss.GithubLogo} alt="githublogo" />
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Project;
