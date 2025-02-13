import React from 'react';
import Navbar from "../../Components/Navbar/navbar";
import LanguageHelper from '../../Components/LanguageHelper/LanguageHelper';
import Footer from '../../Components/Footer/Footer';
 


import { useTranslation } from "react-i18next";
const privacyPolicy = () => {
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


