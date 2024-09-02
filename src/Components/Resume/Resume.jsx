import React, { useRef } from 'react';
import css from './Resume.module.css'
import Pin from '../Pinwand/Assets/Pin.svg';

function Resume() {
    return (<div className={css.box}>
            <div className={css.headerwrap}>
                <p className={css.header}>Resume</p>
                <p className={css.headerunderline}>-------</p>
            </div>

            <hr className={css.line1}/>


            <hr className={css.line2}/>
            <Pin className={css.pin1}/>
            <p className={css.year1}>2020</p>
            <div className={css.resumebox}>
                <p className={css.resumeheader}>First start</p>
                <p className={css.resumetext1}>first look in the Programming world through Youtube Creator Micheal
                    Reeves</p>
                <p className={css.resumetext2}>Small Codes in c#</p>
            </div>

            <hr className={css.line2}/>
            <Pin className={css.pin1}/>
            <p className={css.year1}>2020</p>
            <div className={css.resumebox}>
                <p className={css.resumeheader}>First start</p>
                <p className={css.resumetext1}>first look in the Programming world through Youtube Creator Micheal
                    Reeves</p>
                <p className={css.resumetext2}>Small Codes in c#</p>
            </div>
        </div>
    )

}

export default Resume;