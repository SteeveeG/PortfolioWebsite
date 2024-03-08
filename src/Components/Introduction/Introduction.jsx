import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import stroke from '../../Assets/Svg/TextmarkerStroke.svg'
import Arrow from '../../Assets/Svg/Arrow3.svg'
import '../Main.css'
import './Introduction.css'
 

function Introduction() {


    const { t, i18n } = useTranslation();
    return (<div className="pos">

 
        <p className="Consolas Name">Steven Kühnl</p>

        <h1 className="Segoe Header">{t("IntroHeader")}</h1>

        <img src={stroke} className="StuttgartStroke" alt="a Stroke from a Textmaker under the Word Stuttgart" />

        <p className="Consolas Intro">{t("IntroText")}</p>

        <img src={Arrow} className="Arrow" alt="a Arow pointing at text" />
    </div>
    );

}

export default Introduction;