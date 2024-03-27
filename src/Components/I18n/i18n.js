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
      "IntroHeader1": "Full stack Apprentice\nfrom ",
      "introHeader2": " Stuttgart",
      "IntroText": "A full stack apprentice with a great passion for developing new solutions and intensive projects in every area of development",
      //Introduction

      //About Me
      "AboutMeHeader": "About Me",
      "AboutMeText": "Hi, I am a 19 year old developer from the beautiful Swabian region. I've been programming and developing software solutions since I was 15. That's why I started an apprenticeship as an IT specialist in application development in 2022. My specialty is the backend, and I am also learning the frontend. My programming languages include C#, Python, html & css, Javascript and SQL",
      "AboutMeContact": "Have I sparked your interest? - Feel free to write to me!",
      //About Me

      //projects
      "ProjectIntro": "Here you can take a look at my Projects",
      //projects

      //ProjectTexts
      "ProjectHeaderP1":"Chat-App",
      "ProjectTextP1": "A WPF Chat App that is connected to a Grpc Service , Api and in the Backend  still bound to a SQL database.",
      "ProjectHeaderP2":"Edabit-Challenges",
      "ProjectTextP2":"A small collection of tasks from the website Edabit in the language C# and Python.",
      //ProjectTexts



      //LanguageHelper
      "LanguageHelperText": "mogsch ned mal mei webseid uf deutsch angucke ?! ",
      //LanguageHelper


      //Contact
      "ContactUnderline": "Feel free to contact me :)",
      "ContactMessage": "Message",
      "ContactSubmit": "Submit",
      "InfoLocation": "Stuttgart south-germany",
      "InfoTipp": "MY HOOD",
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
      "IntroHeader1": "Full stack Azubi\naus ",
      "introHeader2": " Stuttgart",
      "IntroText": "Ein Full-Stack-Azubi mit einer großen Leidenschaft für die Entwicklung neuer Lösungen und intensiver Projekte in allen Bereichen der Entwicklung",
      //Introduction

      //About Me
      "AboutMeHeader": "Über Mich",
      "AboutMeText": "Hi, ich bin ein 19 jähriger Entwickler aus dem schönen Schwabenland. Seitdem ich 15 bin beschäftige ich ich mit der Programmierung und Entwicklung von Software-Lösungen. Deshalb habe ich 2022 eine Ausbildung zum Fachinformatiker in der Anwendungsentwicklung begonnen. Mein Spezialgebiet ist das Backend, zusätzlich lerne ich das Frontend. Zu meinen Programmiersprachen zählen C#, Python , html & css , Javascript und SQL",
      "AboutMeContact": "Hab ich dein Interesse geweckt? - Schreib mir doch gerne!",
      //About Me

      //projects
      "ProjectIntro": "Hier können Sie einen Blick auf meine Projekte werfen",
      //projects

      //ProjectTexts
      "ProjectHeaderP1":"Chat-App",
      "ProjectTextP1": "Eine WPF Chat App die mit einem Grpc Service , Api verbunden ist und im Backend  noch an eine SQLdatenbank gebunden ist.",
      "ProjectHeaderP2":"Edabit-Challenges",
      "ProjectTextP2":"eine kleine Ansammlung aus aufgaben von der Website Edabit in der Sprache C# und Python.",
      //ProjectTexts


      //LanguageHelper
      "LanguageHelperText": "For my English Speaking Homies",
      //LanguageHelper

      //Contact
      "ContactUnderline": "Fühl dich frei, mich zu kontaktieren :)",
      "ContactMessage": "Nachricht",
      "ContactSubmit": "Schicken",
      "InfoLocation": "Stuttgart Baden-Württemberg",
      "InfoTipp": "MEINE HOOD",
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
