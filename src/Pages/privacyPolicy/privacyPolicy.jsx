import React from 'react';
import Navbar from "../Components/Navbar/navbar";
import Introduction from "../Components/Introduction/Introduction";
import LanguageHelper from '../Components/LanguageHelper/LanguageHelper';
import Project from "../Components/Projects/Project";
import ProjectIntroduction from "../Components/Projects/ProjectIntroduction/ProjectIntroduction";
import AboutMe from "../Components/AboutMe/AboutMe";
import Contact from "../Components/Contact/Contact";
import Footer from '../Components/Footer/Footer';
import Comments from '../Components/Comments/Comments';
import HomeCss from "./Home.module.css"
import imgChat from "../Components/Projects/Assets/ChatWindow.png"
import imgEdabit from "../Components/Projects/Assets/Edabit.png"
import imgTattoo from "../Components/Projects/Assets/TattooStudio.png"
import PinWall from "../Components/PinWall/PinWall";


import { useTranslation } from "react-i18next";
function privacyPolicy() {
    const { t } = useTranslation();
    return (
        <div >
            <Navbar />
            <LanguageHelper />
            <div style={{height: '400px'}}></div>


            <Footer />
        </div>

    )
}
export default privacyPolicy;


