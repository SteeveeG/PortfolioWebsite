import React, { useEffect, useState } from 'react';
import IntroductionCss from './Introduction.module.css'
import stroke from '../../Assets/Svg/TextmarkerStroke.svg'
import Arrow from '../../Assets/Svg/Arrow3.svg'
import '../Main.css'
import { useTranslation } from "react-i18next";
import i18next from "../I18n/i18n";




function Introduction() {
    const { t, i18n } = useTranslation();


    const StuttgartStroke = document.body.className === 'de' ? IntroductionCss.deStuttgartStroke : IntroductionCss.enStuttgartStroke;


    return (<div className={IntroductionCss.pos}>
        <p className={IntroductionCss.Name}>Steven Kühnl</p>

        <h1 className={IntroductionCss.Header} >{t("IntroHeader1")}
            <span className={IntroductionCss.highlightcontainer}>
                <span className={IntroductionCss.highlight} >{t("introHeader2")}
             </span>
        </span>
            </h1>

        {/* <h1>Hello <span className={IntroductionCss.highlightcontainer}>
            <span className={IntroductionCss.highlight} >World</span></span> !</h1> */}

        {/* <img src={stroke} className={StuttgartStroke} alt="a Stroke from a Textmaker under the Word Stuttgart" /> */}

        <p className={IntroductionCss.Intro}>{t("IntroText")}</p>

        <img src={Arrow} className={IntroductionCss.Arrow} alt="a Arow pointing at text" />
    </div>
    );

}

export default Introduction;