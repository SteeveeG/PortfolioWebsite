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
      "AboutMeText": "My name is Steven, and I come from the Stuttgart area. From a young age, I discovered my passion for developing and programming. After gaining most of my programming experience through self-study, I decided in 2022 to start a training program as an IT Specialist in Application Development at \"TeamTechnik,\" a subsidiary of Dürr AG. My areas of expertise are full stack development, including both backend and frontend development. I am very familiar with the programming languages C#, Python, Html & Css, JavaScript and SQL.",
      //About Me

      //Pin Wall
      "FourYears":"+4 YEARS",
      //Pin Wall

      //Resume
      "Resume":"Resume",
      "ResumeUnderline":"-------",

      "HeaderBox1":"First start",
      "TextBox1":"first look in the Programming world through Youtube Creator Micheal Reeves",
      "UnderlineBox1":"Small Codes in c#",

      "HeaderBox2":"Learning Arduino & ESP",
      "TextBox2":"learn the Arduino coding language with Small Projects (esp Webserver, servo control etc.)",

      "HeaderBox3":"Starting an Apprentice",
      "TextBox3":"Starting an Apprentice as an Software Developor in the Company Teamtechnik",
      "UnderlineBox3":"in the Same Time Learning React and python with small Learning projects in my free Time",

      "2022Today": "2022-today",
      //Resume


      //projects
      "ProjectIntro": "Here you can take a look at my ",
      "ProjectIntroProject": "Projects",
      //projects

      //ProjectTexts
      "ProjectHeaderP1":"Chat-App",
      "ProjectTextP1": "A WPF chat app that uses both REST API and gRPC service for real-time communication and stores data in its own MS SQL database. Both the client and the server are developed entirely in C#.",
      "ProjectHeaderP2":"Edabit-Challenges",
      "ProjectTextP2":"A collection of coding challenges from the website Edabit for solving algorithmic problems. This allowed me to deepen my knowledge of C# and further develop my skills in Python.",
      
      "ProjectHeaderP3":"Tattoo Studio Website",
      "ProjectTextP3":"A website for a non-existent tattoo studio that I made in the React + Vite framework.",
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
      "AboutMeText": "Mein Name ist Steven und ich komme aus dem Raum Stuttgart. Bereits in jungen Jahren habe ich meine Leidenschaft für das Entwickeln und Programmieren entdeckt. Nachdem ich mir die Erfahrung für das Programmieren größtenteils selbst erarbeitet hatte, entschied ich mich 2022 dazu, eine Ausbildung als Fachinformatiker für Anwendungsentwicklung im Tochterunternehmen \"TeamTechnik\" der Dürr AG zu beginnen. Meine Fachgebiete sind das Full Stack, bestehend aus Backend- und Frontend-Entwicklung. Ich fühle mich in den Programmiersprachen C#, Phyton, Html & Css, Javascript und SQL sehr vertraut.\n",
      //About Me

      //Pin Wall
      "FourYears":"+4 JAHRE",
      //Pin Wall

      //Resume
      "Resume":"Lebenslauf",
      "ResumeUnderline":"----------",

      "HeaderBox1":"Erster start",
      "TextBox1":"erster Einblick in die Programmierwelt durch Youtube- Creator Micheal Reeves",
      "UnderlineBox1":"kleine Codes in c#",

      "HeaderBox2":"Arduino & ESP lernen",
      "TextBox2":"Erlernen der Arduino-Programmiersprache mit kleinen Projekten (esp Webserver, Servosteuerung etc.)",

      "HeaderBox3":"Beginn einer Ausbildung",
      "TextBox3":"Ausbildungsbeginn als Fachinformatiker für Softwareentwicklung bei der Firma Teamtechnik",
      "UnderlineBox3":"in der gleichen Zeit React und Python mit kleinen Lernprojekten in meiner freien Zeit erlernt",

      "2022Today": "2022-heute",
      //Resume

      //projects
      "ProjectIntro": "Hier siehst Du meine letzten ",
      "ProjectIntroProject": "Projekte",
      //projects

      //ProjectTexts
      "ProjectHeaderP1":"Chat-App", // die eine REST API und einen Grpc Service nutzt für Echtzeit-Kommunikatio
      "ProjectTextP1": "Eine WPF Chat-App, die für Echtzeit-Kommunikation sowohl REST API als auch Grpc Service nutzt und Daten in ihrer eigenen MS SQL-Datenbank speichert. Client sowie Server wurden vollständig in C# geschrieben.",
      "ProjectHeaderP2":"Edabit-Challenges",
      "ProjectTextP2":"Eine Ansammlung von Coding-Challenges der Website Edabit, zur Lösung von algorithmischen Problemen. Somit habe ich mein Wissen in C# vertieft und meine Fähigkeiten in Python weiter ausgebaut.",
     
      "ProjectHeaderP3":"Tattoo Studio Website",
      "ProjectTextP3":"Ein Website für ein nicht existierendes Tattoo-Studio, die ich mit dem React + Vite Framework erstellt habe.",
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