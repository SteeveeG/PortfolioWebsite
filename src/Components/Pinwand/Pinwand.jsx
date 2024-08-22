import React from 'react'
import { useTranslation } from "react-i18next";
import css from './Pinwand.module.css'
import Pin from './Assets/Pin.svg';

function Pinwand(){
    const { t } = useTranslation();
     return (<div className={css.container}>
         <div className={css.headerwrap} >
            <p className={css.header}>Skills</p>
            <p className={css.headerunderline}>------</p>
         </div>
         <Pin  width="100" height="100" />




     </div>)
}

export default Pinwand