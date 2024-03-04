import React from "react"
import Introduction from "../Components/Introduction/Introduction";
import Navbar from "../Components/Navbar/navbar";
import Project from "../Components/Projects/Project";
import "./Home.css"
export default function Home() {
    return (
        <div className="background">
            <Navbar/>
            <Introduction/>
            <Project/>
        </div>
    )
}



