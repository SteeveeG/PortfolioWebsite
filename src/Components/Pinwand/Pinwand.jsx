import React from 'react'
import { useTranslation } from "react-i18next";
import css from './Pinwand.module.css'
import Pin from './Assets/Pin.svg';
import Csharplogo from './Assets/CSharp.svg';
import htmllogo from './Assets/Html.png';
import javascriptlogo from './Assets/JavaScript.png';
import csslogo from './Assets/Css.png';
import reactlogo from './Assets/React.png';

function Pinwand(){
    const { t } = useTranslation();
     return (<div className={css.container}>
         <div className={css.headerwrap}>
             <p className={css.header}>Skills</p>
             <p className={css.headerunderline}>------</p>
         </div>
         <Pin className={css.skillpin}/>
         <hr className={css.linetocsharp}/>
         <p className={css.desktopheader}>Desktop:</p>
         <Pin className={css.csharppin}/>
         <Csharplogo className={css.csharplogo}/>
         <div className={css.comments}>
             <div>
                 <p className={css.pro}>Pro</p>
                 <p className={css.smile}>;)</p>
             </div>
             <p className={css.arrowcsharp}>&lt;---- </p>
             <p className={css.fouryears}>+4 YEARS</p>
         </div>
         <p className={css.csharpsnippet}> var result = new List&lt;List&lt;int&gt;&gt;();<br/>
             GetCombination(list, new List&lt;int&gt;(),<br/> k, result); return result; </p>

         <p className={css.webheader}>Web:</p>

         <hr className={css.linetohtml}/>
         <Pin className={css.htmlpin}/>
         <img src={htmllogo} alt="htmllogo" className={css.htmllogo}/>
         <p className={css.htmlsnippet}>
             &lt;!DOCTYPE html&gt;<br/>
             &lt;html lang="en"&gt;<br/>
             &lt;head&gt;<br/>
             &lt;meta charset="UTF-8"&gt;<br/>
             &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br/>
             &lt;link rel="stylesheet" href="style.css"&gt;<br/>
             &lt;/head&gt;<br/>
             &lt;body&gt;<br/>
             &lt;p class=”Greetings”&gt;Hello World ! :)&lt;/p&gt;<br/>
             &lt;/body&gt;<br/>
             &lt;/html&gt;<br/>
         </p>

         <hr className={css.linetojavascript}/>
         <Pin className={css.javascriptpin}/>
         <img src={javascriptlogo} alt="javascriptlogo" className={css.javascriptlogo}/>
         <p className={css.javascriptsnippet}>useEffect(() => {'{'}<br/>
             function handleLanguageChange(lng) {'{'}<br/>
             document.body.classList.remove('en', 'de');<br/>
             document.body.classList.add(lng);<br/>
             {'}'}{'}'}
         </p>

         <hr className={css.linetocssfromhtml}/>
         <hr className={css.linetocssfromjavascript}/>
         <Pin className={css.csspin}/>
         <img src={csslogo} alt="csslogo" className={css.csslogo}/>


         {/*<hr className={css.linetoreact}/>*/}
         {/*<img src={reactlogo} alt="reactlogo" className={css.reactlogologo}/>*/}

     </div>)
}

export default Pinwand