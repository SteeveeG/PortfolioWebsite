import React, { react } from 'react';
import { useTranslation } from "react-i18next";
import emailLogo from "../../Assets/Svg/email-8-svgrepo-com.svg"
import locationLogo from "../../Assets/Svg/location-pin-alt-1-svgrepo-com(1).svg"
import Arrow from "../../Assets/Svg/WhiteArrow.svg"
import '../Main.css'
import './Contact.css'



function Contact() {

    const { t, i18n } = useTranslation();
    return (<div className="ContactWrapper">
 
            <form className="ContactForm">
                <h1 className="ContactHeader Segoe">Let's Talk !</h1>
                <p className="ContactUnderLine Consolas">Feel free to contact me :)</p>
                <div className="InputWrapper">
                    <input type="text" id="input" name="input"
                        className="InputContact Consolas" required />
                    <label className="label Consolas" htmlFor="input">Name</label>
                    <span className="ContactSpan" />
                </div>
                <div className="InputWrapper">
                    <input type="text" id="input" name="input"
                        className="InputContact Consolas" required />
                    <label className="label Consolas" htmlFor="input">E-mail</label>
                    <span className="ContactSpan" />
                </div>
                <div className="MessageContact">
                    <textarea type="textarea" id="input" name="input"
                        className="MessageInput Consolas" required />
                    <label className="label Consolas" htmlFor="input">Nachricht</label>
                    <span className="ContactSpan  " />
                </div>

                <button className="Submit Consolas">
                    Submit
                </button>
            </form>
            <form className="InfoForm">
                <h5 className="InfoHeader Segoe">Info</h5>
                <div className="EmailContainer">
                    <img src={emailLogo} className="EmailLogo" alt="email Logo" />
                    <p className="Email Consolas">email@example.com</p>
                </div>
                <div className="LocationContainer">
                    <img src={locationLogo} className="LocationLogo" alt="Location Logo" />
                    <p className="Location Consolas">Stuttgart, baden-württemberg</p>
                </div>
                <p className="LocationTipp ">MY HOOD</p>
                <img src={Arrow} className="ArrowContact" alt="" />
            </form>
   
    </div>
    )
        ;

}
export default Contact;