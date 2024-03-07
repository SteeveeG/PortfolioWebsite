import LanguageDetector from "i18next-browser-languagedetector";
import global_de from "../../Translation/De/global.json"
import global_en from "../../Translation/En/global.json"
import i18n from 'i18next';
import { initReactI18next } from "react-i18next"

i18n.use(LanguageDetector).use(initReactI18next).init({
     debug: true,
     lng: "en",
     resources: {
          de: {
               AboutMe: {
                    Intro: "Hi, ich bin ein 19 jähriger Full stack Azubi Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
               },
          },
          en: {
               AboutMe: {
                    Intro: "Hi, I am a 19 year old  full Stack Apprentice Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet"
               },
          }
     }
});