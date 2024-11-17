import React, { useRef } from 'react';
import { useTranslation } from "react-i18next";
import emailLogo from "../../Assets/png/email-8-svgrepo-com.png"
import locationLogo from "../../Assets/png/location-pin-alt-1-svgrepo-com(1).png"
import Arrow from "../../Assets/png/WhiteArrow.png"
import ContactCss from './Contact.module.css'
import emailjs from '@emailjs/browser';



function Contact() {

    const inputRefName = useRef(null);
    const inputRefEmail = useRef(null);
    const inputRefMessage = useRef(null);
    const { t } = useTranslation();
    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_APP_SERVICE_ID ,import.meta.env.VITE_APP_TEMPLATE_ID, form.current, {
                publicKey: import.meta.env.VITE_APP_PUPLICKEY,})
            .then(
                () => {
                    inputRefName.current.value = "";
                    inputRefEmail.current.value = "";
                    inputRefMessage.current.value = "";
                },
                (error) => {
                    alert(t('ErrorEmailSend'))
                }
            );

    };


    return (<div className={ContactCss.Contact} id='Contact'>
            <form ref={form} className={ContactCss.ContactForm}>
                <h1 className={ContactCss.ContactHeader}>Let's Talk !</h1>
                <p className={ContactCss.UnderLine}>{t("ContactUnderline")}</p>
                <div className={ContactCss.InputWrapper}>
                    <input type="text" id="from_name" name="from_name"
                           ref={inputRefName}
                           className={ContactCss.Input} required/>
                    <label className={ContactCss.label} htmlFor="from_name">Name</label>
                    <span className={ContactCss.Span}/>
                </div>
                <div className={ContactCss.InputWrapper}>
                    <input type="text" id="from_Email" name="from_Email"
                           className={ContactCss.Input} required ref={inputRefEmail}/>
                    <label className={ContactCss.label} htmlFor="from_Email">E-mail</label>
                    <span className={ContactCss.Span}/>
                </div>
                <div className={ContactCss.MessageContact}>
                <textarea type="textarea" id="message" name="message" ref={inputRefMessage}
                          className={ContactCss.MessageInput} required/>

                    <label className={ContactCss.label} htmlFor="message">{t("ContactMessage")}</label>
                    <span className={ContactCss.Span}/>
                </div>
                <input type="button"  onClick={sendEmail}  className={ContactCss.Submit} value={t("ContactSubmit")}/>
            </form>
            <form className={ContactCss.Info}>
                <h5 className={ContactCss.InfoHeader}>Info</h5>
                <div className={ContactCss.EmailContainer}>
                    <img src={emailLogo} className={ContactCss.EmailLogo} alt="email Logo"/>
                    <p className={ContactCss.Email}>email@example.com</p>
                </div>
                <div className={ContactCss.LocationContainer}>
                    <img src={locationLogo} className={ContactCss.LocationLogo} alt="Location Logo"/>
                    <p className={ContactCss.Location}>{t("InfoLocation")}</p>
                </div>
                <p className={ContactCss.LocationTipp}>{t("InfoTipp")}</p>
                <img src={Arrow} className={ContactCss.ArrowContact} alt=""/>
            </form>
        </div>
    )
        ;

}

export default Contact;