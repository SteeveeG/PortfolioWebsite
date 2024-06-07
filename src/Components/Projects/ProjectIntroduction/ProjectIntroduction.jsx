import React  from "react";
import '../../Main.css'
import ProjectIntroductionCss from './ProjectIntroduction.module.css'
import { useTranslation } from "react-i18next";


function ProjectIntroduction() {

    const { t } = useTranslation();
    



    return (<div className={ProjectIntroductionCss.Container} id="Projects">
            <h1 className={ProjectIntroductionCss.Text}>{t("ProjectIntro")}
                <span className={ProjectIntroductionCss.highlightcontainer}>
                    <span className={ProjectIntroductionCss.highlight}>{t("ProjectIntroProject")}
                    </span>
                </span>
            </h1>
        </div>
    );

}

export default ProjectIntroduction;
