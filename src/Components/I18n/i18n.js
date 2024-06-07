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
      "IntroHeader1": "Full stack Apprentice from ",
      "introHeader2": "Stuttgart",
      "IntroText": "A full stack apprentice with a great passion for developing new solutions and intensive projects in every area of development",
      //Introduction

      //About Me
      "AboutMeHeader": "About Me",
      "AboutMeText": "Hi, I am a 19 year old developer from the beautiful Swabian region. I've been programming and developing software solutions since I was 15. That's why I started an apprenticeship as an IT specialist in application development in 2022. My specialty is the backend, and I am also learning the frontend. My programming languages include C#, Python, html & css, Javascript and SQL",
      "AboutMeContact": "Have I sparked your interest? - Feel free to write to me!",
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
      "IntroHeader1": "Full stack Azubi aus ",
      "introHeader2": "Stuttgart",
      "IntroText": "Ein Full-Stack-Azubi mit einer großen Leidenschaft für die Entwicklung neuer Lösungen und intensiver Projekte in allen Bereichen der Entwicklung",
      //Introduction

      //About Me
      "AboutMeHeader": "Über Mich",
      "AboutMeText": "Hi, ich bin ein 19 jähriger Entwickler aus dem schönen Schwabenland. Seitdem ich 15 bin beschäftige ich ich mit der Programmierung und Entwicklung von Software-Lösungen. Deshalb habe ich 2022 eine Ausbildung zum Fachinformatiker in der Anwendungsentwicklung begonnen. Mein Spezialgebiet ist das Backend, zusätzlich lerne ich das Frontend. Zu meinen Programmiersprachen zählen C#, Python , html & css , Javascript und SQL",
      "AboutMeContact": "Hab ich dein Interesse geweckt? - Schreib mir doch gerne!",
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
