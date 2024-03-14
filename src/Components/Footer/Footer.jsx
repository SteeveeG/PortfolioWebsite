import ReactDOM from 'react-dom/client';
import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
 
import FooteCss from './Footer.module.css'


function Footer() {
    const { t, i18n } = useTranslation();
   
    return (
        <footer className={FooteCss.FooterContainer}>
            <div className={FooteCss.Container}> 
            <li><a href="#" className={FooteCss.LinkText}>About</a></li>
            <li><a href="#" className={FooteCss.LinkText}>Projects</a></li>
            <li><a href="#" className={FooteCss.LinkText}>Contact</a></li>
            </div>
            <div className={FooteCss.Name}>
                <p>Steven Kühnl</p>
            </div>
            <div className={FooteCss.Copyright}>
                <p>Copyright © 2024 Steven Kühnl</p>
            </div>

               
        </footer>)
}

export default Footer
