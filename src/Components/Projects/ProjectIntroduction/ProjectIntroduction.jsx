import React, { Component } from "react";
import '../../Main.css'
import './ProjectIntroduction.css'
import TextmarkerCircle from '../../../Assets/Svg/TextMarkerCircle.svg'
import { useTranslation } from "react-i18next";


function ProjectIntroduction() {

    const { t, i18n } = useTranslation();

    return (<div className="ProjectIntroPos">
        <img src={TextmarkerCircle} className="TextmarkerCircle" alt="a Textmarker Circle " />
        <h1 className="Consolas ProjectIntroText">{t("ProjectIntro")}</h1>
    </div>
    );

}

export default ProjectIntroduction;
