import React, {react} from 'react';
import {useTranslation} from "react-i18next";
import '../Main.css'
import './Contact.css'


function Contact() {


    const {t, i18n} = useTranslation();
    return (<div className="ContactWrapper">
    <h1 className="ContactHeader Segoe">Let's Talk ! :)</h1>
            <form className="Form">
                <div className="InputWrapper">
                    <input type="text" id="input" name="input"
                           className="InputContact Consolas" required/>
                    <label className="label Consolas" htmlFor="input">Name</label>
                    <span className="ContactSpan"/>
                </div>
                <div className="InputWrapper">
                    <input type="email" id="input" name="input"
                           className="InputContact Consolas" required/>
                    <label className="label Consolas" htmlFor="input">E-mail</label>
                    <span className="ContactSpan"/>
                </div>
                <div className="InputWrapper">
                    <input type="textarea" id="input" name="input"
                           className="InputContact Consolas" required/>
                    <label className="label Consolas" htmlFor="input">Nachricht</label>
                    <span className="ContactSpan"/>
                </div>
            </form>
        </div>
    )
        ;

}

//
// <div className="ContactWrapper">
//     <input type="text" id="input" name="input"
//            className="InputContact" required/>
//     <label className="label" htmlFor="input">Text</label>
//     <span className="ContactSpan"/>
// </div>
// <div className="ContactWrapper">
//     <input type="text" id="input" name="input"
//            className="InputContact" required/>
//     <label className="label" htmlFor="input">Text</label>
//     <span className="ContactSpan"/>
// </div>
export default Contact;