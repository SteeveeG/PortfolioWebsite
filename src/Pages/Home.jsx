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
function Home() {
    const { t } = useTranslation();
    return (
        <div className={HomeCss.background}>
            <Navbar />
            <LanguageHelper />
            <Introduction />
            <AboutMe />
            <PinWall/>
            <div className={HomeCss.Container}>
                <ProjectIntroduction />
                <Comments
                    commentdivName="Comment1"
                    comment='Console.WriteLine("Hello Wolrd !");'
                    fontfam='Farmhouse Children' />
                <Project header={t("ProjectHeaderP1")} description={t("ProjectTextP1")} img={imgChat} link="https://github.com/SteeveeG/ChatApp/tree/main" showSecondLink={false} />
                <Comments commentdivName="Comment2" comment='Console.WriteLine("Hello Wolrd !");' fontfam='Farmhouse Children' />
                <Project header={t("ProjectHeaderP2")} description={t("ProjectTextP2")} img={imgEdabit}
                    link="https://github.com/SteeveeG/EdabitChallenges/tree/main" showSecondLink={false} />

                <Project header={t("ProjectHeaderP3")} description={t("ProjectTextP3")} img={imgTattoo}
                    link="https://github.com/SteeveeG/tattoostudio" showSecondLink={true} link2="https://yourtattoostudio.netlify.app/" />

                <Comments commentdivName="Comment3" comment='Console.WriteLine("Hello Wolrd !");' fontfam='Farmhouse Children' />
            </div>
            <Contact />
            <Footer />
        </div>

    )
}
export default Home;


