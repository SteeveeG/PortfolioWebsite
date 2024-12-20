import React  from 'react';
import IntroductionCss from './Introduction.module.css'
import Arrow from '../../Assets/Svg/Arrow3.svg'
import '../Main.css'
import { useTranslation } from "react-i18next";



function Introduction() {
    const { t } = useTranslation();


    return (<div className={IntroductionCss.pos}>
        <p className={IntroductionCss.Name}>Steven Kühnl</p>

        <h1 className={IntroductionCss.Header} >{t("IntroHeader1")}
            <span className={IntroductionCss.highlightcontainer}>
                <span className={IntroductionCss.highlight} >{t("introHeader2")}
             </span>
        </span>
            </h1>

 

        <Arrow  className={IntroductionCss.Arrow} alt="a Arow pointing at text" />
 
    </div>
    );

}

export default Introduction;