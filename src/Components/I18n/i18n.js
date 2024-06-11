import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {

      // Navbar
      "About": "About",
      "Projects": "Projects",
      "Contact": "Contact",
      // Navbar

      //Introduction
      "IntroHeader1": "Full stack Developer from ",
      "introHeader2": "Stuttgart",
       //Introduction

      //About Me
      "AboutMeHeader": "About Me",
      "AboutMeText": "My name is Steven and I come from the Stutgart area. I discovered my passion for development and programming at a young age. After gaining most of my programming experience myself, I decided to start an apprenticeship as an IT specialist for application development at the subsidiary “TeamTechnik” of Dürr AG in 2022. My areas of expertise are the full stack consisting of backend and frontend development. I feel very comfortable in the programming languages C#, Phyton, Html, css, Javascript and SQL.",
      //About Me

      //projects
      "ProjectIntro": "Here you can take a look at my ",
      "ProjectIntroProject": "Projects",
      //projects

      //ProjectTexts
      "ProjectHeaderP1":"Chat-App",
      "ProjectTextP1": "A WPF chat app that uses a REST API and Grpc service for real-time communication and has its own MS SQL database for storage, client and server all written in C#.",
      "ProjectHeaderP2":"Edabit-Challenges",
      "ProjectTextP2":"A collection of coding challenges from the website Edabit, to solve algorithmic problems and thus deepened my knowledge in C# and further developed my skills in Python.",
      //ProjectTexts



      //LanguageHelper
      "LanguageHelperText": "mogsch ned mal mei webseid uf deutsch angucke ?! ",
      //LanguageHelper


      //Contact
      "ContactUnderline": "Feel free to contact me :)",
      "ContactMessage": "Message",
      "ContactSubmit": "Submit",
      "InfoLocation": "Marbach am Neckar south-germany",
      "InfoTipp":"My hood",
      "ErrorEmailSend" :"Service is currently not available, please write an e-mail here: kuehnl.st@gmail.com :)"
      //Contact

    },
  },
  de: {
    translation: {
      // Navbar
      "About": "Über Mich",
      "Projects": "Projekte",
      "Contact": "Kontakt",
      // Navbar

      //Introduction
      "IntroHeader1": "Full Stack Entwickler\naus ",
      "introHeader2": " Stuttgart",
      //Introduction

      //About Me
      "AboutMeHeader": "Über Mich",
      "AboutMeText": "Mein Name ist Steven und ich komme aus dem Raum Stutgart. Bereits in meinen jungen jahren habe ich meine Leidenschaft für das Entwickeln und Programmieren endeckt. Nachdem ich mir die Erfahung für das Programmieren größtenteils selbst erarbeitet hatte, entschied ich mich 2022 dazu eine Lehre als Fachinformatiker für Anwendungsentwicklungen bei dem Tochterunternehmen \"TeamTechnik\" der Dürr AG, zu beginnen. Meine Fachgebiete sind das Fullstack bestehend aus Backend und Frontend Entwicklung. Ich fühle mich in den Programmiersprachen C#, Phyton, Html, css, Javascript und SQL sehr wohl.\n",
      //About Me

      //projects
      "ProjectIntro": "Hier siehst du meine letzten ",
      "ProjectIntroProject": "Projekte",
      //projects

      //ProjectTexts
      "ProjectHeaderP1":"Chat-App",
      "ProjectTextP1": "Eine WPF Chat App die eine REST API und Grpc Service nutzt für Echtzeit-Kommunikation und zum Speichern ihre eigene MS SQL-Datenbank hat, Client sowie Server wurde alles in C# geschrieben.",
      "ProjectHeaderP2":"Edabit-Challenges",
      "ProjectTextP2":"Eine Ansammlung von Coding-Challenges von der Website Edabit, zur Lösung von Algorithmische Probleme und habe somit mein Wissen in c# vertieft und meine Fähigkeiten in Python weiter ausgebaut.",
      //ProjectTexts


      //LanguageHelper
      "LanguageHelperText": "For my English Speaking Homies",
      //LanguageHelper

      //Contact
      "ContactUnderline": "Fühl dich frei, mich zu kontaktieren :)",
      "ContactMessage": "Nachricht",
      "ContactSubmit": "Schicken",
      "InfoLocation": "Marbach am Neckar Baden-Württemberg",
      "InfoTipp":"My hood",
      "ErrorEmailSend" :"Service ist grade nicht verfügbar, bitte hier eine E-mail schreiben: kuehnl.st@gmail.com :)"
      //Contact

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