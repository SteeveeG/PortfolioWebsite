import React, { react } from 'react';
import { useTranslation } from "react-i18next";
import emailLogo from "../../Assets/Svg/email-8-svgrepo-com.svg"
import locationLogo from "../../Assets/Svg/location-pin-alt-1-svgrepo-com(1).svg"
import Arrow from "../../Assets/Svg/WhiteArrow.svg"
import ContactCss from './Contact.module.css'



function Contact() {
 
   
    const { t, i18n } = useTranslation();
    return (<div className={ContactCss.Contact}>
            <form className={ContactCss.ContactForm}>
                <h1 className={ContactCss.ContactHeader}>Let's Talk !</h1>
                <p className={ContactCss.UnderLine}>{t("ContactUnderline")}</p>
                <div className={ContactCss.InputWrapper}>
                    <input type="text" id="input" name="input"
                        className={ContactCss.Input} required />
                    <label className={ContactCss.label} htmlFor="input">Name</label>
                    <span className={ContactCss.Span} />
                </div>
                <div className={ContactCss.InputWrapper}>
                    <input type="text" id="input" name="input"
                          className={ContactCss.Input} required />
                    <label className={ContactCss.label}  htmlFor="input">E-mail</label>
                    <span className={ContactCss.Span} />
                </div>
                <div className={ContactCss.MessageContact}>
                    <textarea type="textarea" id="input" name="input"
                        className={ContactCss.MessageInput} required />
                    <label className={ContactCss.label} htmlFor="input">{t("ContactMessage")}</label>
                    <span className={ContactCss.Span} />
                </div>  
                <button className={ContactCss.Submit}>{t("ContactSubmit")}</button>
            </form>
            <form className={ContactCss.Info}>
                <h5 className={ContactCss.InfoHeader}>Info</h5>
                <div className={ContactCss.EmailContainer}>
                    <img src={emailLogo} className={ContactCss.EmailLogo} alt="email Logo" />
                    <p className={ContactCss.Email}>email@example.com</p>
                </div>
                <div className={ContactCss.LocationContainer}>
                    <img src={locationLogo} className={ContactCss.LocationLogo} alt="Location Logo" />
                    <p className={ContactCss.Location}>{t("InfoLocation")}</p>
                </div>
                <p className={ContactCss.LocationTipp}>{t("InfoTipp")}</p>
                <img src={Arrow} className={ContactCss.ArrowContact} alt="" />
            </form>                                                                         
    </div>
    )
        ;

}
export default Contact;