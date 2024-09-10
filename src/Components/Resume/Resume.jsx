import React, { useRef } from 'react';
import css from './Resume.module.css'
import Pin from '../Pinwand/Assets/Pin.svg';
import Resumebox from './Resumebox/Resumebox'


function Resume() {
    return (<div className={css.box}>
        <div className={css.headerwrap}>
            <p className={css.header}>Resume</p>
            <p className={css.headerunderline}>-------</p>
        </div>
        <hr className={css.middleline} />


        <hr className={css.line1} />
        <Pin className={css.pin1} />
        <p className={css.year1}>2020</p>
        <div className={css.rbcontainer1}>
            <Resumebox header="First start" text="first look in the Programming world through Youtube Creator Micheal
                    Reeves" undercomment="Small Codes in c#" />
        </div>

        <hr className={css.line2} />
        <Pin className={css.pin2} />
        <p className={css.year2}>2020</p>
        <div className={css.rbcontainer2} >
            <Resumebox header="First start" text="first look in the Programming world through Youtube Creator Micheal
                    Reeves" undercomment="Small Codes in c#" />
        </div>


        <hr className={css.line3} />
        <Pin className={css.pin3} />
        <p className={css.year3}>2022-today</p>
        <div className={css.rbcontainer3} >
            <Resumebox header="First start" text="first look in the Programming world through Youtube Creator Micheal
                    Reeves" undercomment="Small Codes in c#" />
        </div>
    </div>
    )

}

export default Resume;