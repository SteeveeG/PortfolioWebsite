import React, { Component } from "react";
import '../../Main.css'
import ProjectIntroductionCss from './ProjectIntroduction.module.css'
import TextmarkerCirclesvg from '../../../Assets/Svg/TextMarkerCircle.svg'
import { useTranslation } from "react-i18next";


function ProjectIntroduction() {

    const { t, i18n } = useTranslation();
    
    const TextmarkerCircle = document.body.className === 'de'? ProjectIntroductionCss.deTextmarkerCircle : ProjectIntroductionCss.enTextmarkerCircle;

    return (<div className={ProjectIntroductionCss.Container} id="Projects">
        <img src={TextmarkerCirclesvg} 
        className={TextmarkerCircle}
         alt="a Textmarker Circle " />
        <h1 className={ProjectIntroductionCss.Text}>{t("ProjectIntro")}</h1>
    </div>
    );

}

export default ProjectIntroduction;
