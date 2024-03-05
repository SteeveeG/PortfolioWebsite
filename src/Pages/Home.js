import React from "react"
import Introduction from "../Components/Introduction/Introduction";
import Navbar from "../Components/Navbar/navbar";
import Project from "../Components/Projects/Project";
import ProjectIntroduction from "../Components/Projects/ProjectIntroduction/ProjectIntroduction";
import "./Home.css"
export default function Home() {
    return (
        <div className="background">
            <Navbar />
            <Introduction />
            <ProjectIntroduction />
            <div className="Container">
                <Project header="Die Überschrift" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et" link="#" />
                <Project header="Die Überschrift" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et" link="#" />
                <Project header="Die Überschrift" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et" link="#" />
            </div>
        </div>
    )
}



