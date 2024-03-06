import React from "react"
import Introduction from "../Components/Introduction/Introduction";
import Navbar from "../Components/Navbar/navbar";
import Project from "../Components/Projects/Project";
import ProjectIntroduction from "../Components/Projects/ProjectIntroduction/ProjectIntroduction";
import AboutMe from "../Components/AboutMe/AboutMe";
import "./Home.css"

export default function Home() {
    return (
        <div className="background">
            <Navbar />
            <Introduction />            
            <AboutMe/>
            <div className="Container">
                <ProjectIntroduction /> 
                <Project header="Die Überschrift" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et" link="#" />
                <Project header="Die Überschrift" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et" link="#" />
                <Project header="Die Überschrift" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et" link="#" />
            </div>
        </div>
    )
}



