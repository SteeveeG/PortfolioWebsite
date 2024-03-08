import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar
      "NavAbout": "About",
      "NavProjects": "Projects",
      "NavContact": "Contact",
      // Navbar

      //Introduction
      "IntroHeader": "Full stack Apprentice\nfrom Stuttgart",
      "IntroText": "A full stack apprentice with a great passion for developing new solutions and intensive projects in every area of development",
      //Introduction

      //About Me
      "AboutMeHeader": "About Me",
      "AboutMeText": "hi, I am a 19 year old full stack apprentice Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
      //About Me

      //projects
      "ProjectIntro": "Here you can take a look at my Projects",
      //projects


      //LanguageHelper
      "LanguageHelperText": "For my English Homies"
      //LanguageHelper

    },
  },
  de: {
    translation: {
      // Navbar
      "NavAbout": "Über Mich",
      "NavProjects": "Projekte",
      "NavContact": "Kontakt",
      // Navbar

      //Introduction
      "IntroHeader": "Full stack Azubi\naus Stuttgart",
      "IntroText": "Ein Full-Stack-Azubi mit einer großen Leidenschaft für die Entwicklung neuer Lösungen und intensiver Projekte in allen Bereichen der Entwicklung",
      //Introduction

      //About Me
      "AboutMeHeader": "Über Mich",
      "AboutMeText": "Hi , ich bin ein 19 jähriger full stack azubi Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet",
      //About Me

      //projects
      "ProjectIntro": "Hier können Sie einen Blick auf meine Projekte werfen",
      //projects

      //LanguageHelper
      "LanguageHelperText": "Für meine Deutschen Homeboys"
      //LanguageHelper


    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
