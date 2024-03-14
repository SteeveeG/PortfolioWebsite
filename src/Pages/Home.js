import React, { useState, useEffect } from 'react';
import Navbar from "../Components/Navbar/navbar";
import Introduction from "../Components/Introduction/Introduction";
import LanguageHelper from '../Components/LanguageHelper/LanguageHelper';
import Project from "../Components/Projects/Project";
import ProjectIntroduction from "../Components/Projects/ProjectIntroduction/ProjectIntroduction";
import AboutMe from "../Components/AboutMe/AboutMe";
import Contact from "../Components/Contact/Contact";
import Footer from '../Components/Footer/Footer';
import "./Home.css"
import i18next from 'i18next';

function Home() {
    useEffect(() => {
        function handleLanguageChange(lng) {

            document.body.classList.remove('en', 'de');
            document.body.classList.add(lng);
        }

        i18next.on('languageChanged', handleLanguageChange);

        return () => {
            i18next.off('languageChanged', handleLanguageChange);
        };
    }, []);

    const [lang, setLang] = useState('en');

    const changeLanguage = (lng) => {
        setLang(lng);
        i18next.changeLanguage(lng);
    }

    useEffect(() => {
        changeLanguage(lang);
    }, [lang]);


    return (
        <div className="background">
            <Navbar />
          <LanguageHelper/>
              <Introduction />
                  <AboutMe />
          <div className="Container">
                <ProjectIntroduction />
                <Project header="Die Überschrift" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et" link="#" />
                 <Project header="Die Überschrift" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et" link="#" />
                <Project header="Die Überschrift" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et" link="#" />  
              </div>
              <Contact/>
            <Footer/>
        </div>
        
    )
}
export default Home;


