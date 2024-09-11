import React from 'react'
import { useTranslation } from "react-i18next";
import css from './Pinwand.module.css'
import Pin from './Assets/Pin.svg';
import Csharplogo from './Assets/CSharp.svg';
import htmllogo from './Assets/Html.png';
import javascriptlogo from './Assets/JavaScript.png';
import csslogo from './Assets/Css.png';
import reactlogo from './Assets/React.png';
import Vitelogo from './Assets/Vite.svg';
import CplusplusLogo from './Assets/c++.svg';
import SqlLogo from './Assets/Sql.png';
import PythonLogo from './Assets/python.svg';

function Pinwand() {
    const { t } = useTranslation();
    return (<div className={css.container}>
        <div className={css.headerwrap}>
            <p className={css.header}>Skills</p>
            <p className={css.headerunderline}>------</p>
        </div>
        

        <Pin className={css.skillpin} />
        <hr className={css.linetocsharp} />
        <p className={css.desktopheader}>Desktop:</p>

        <div className={css.csharpcontainer}>
            <Pin className={css.csharppin} />
            <Csharplogo className={css.csharplogo} />
        
        <div className={css.comments}>
            <div>
                <p className={css.pro}>Pro</p>
                <p className={css.smile}>;)</p>
            </div>
            <p className={css.arrowcsharp}>&lt;---- </p>
            <p className={css.fouryears}>+4 YEARS</p>
        </div>
        <p className={css.csharpsnippet}> var result = new List&lt;List&lt;int&gt;&gt;();<br />
            GetCombination(list, new List&lt;int&gt;(),<br /> k, result); return result; </p>
            </div>

        <hr className={css.linetocplusplus} />
        <div className={css.cpluscpluscontainer}>
            <Pin className={css.cpluspluspin} />
            <CplusplusLogo className={css.cpluspluslogo} />
      
        <p className={css.cplusplussnippet}>
            cout &gt;&gt; "if you need help type help" &gt;&gt; endl;<br />
            do {'{'}<br />
            std::getline(std::cin, input);<br />
            if (input != "help") {'{'}<br />
            cout &gt;&gt; format(“Error”) &gt;&gt; endl;<br />
            {'}'}<br />
            else{'{'}<br />
            break;<br />
            {'}'}
        </p>
        </div>
        <p className={css.webheader}>Web:</p>

        <hr className={css.linetohtml} />
        <div className={css.htmlcontainer}>
            <Pin className={css.htmlpin} />
            <img src={htmllogo} alt="htmllogo" className={css.htmllogo} />
         
        <p className={css.htmlsnippet}>
            &lt;!DOCTYPE html&gt;<br />
            &lt;html lang="en"&gt;<br />
            &lt;head&gt;<br />
            &lt;meta charset="UTF-8"&gt;<br />
            &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br />
            &lt;link rel="stylesheet" href="style.css"&gt;<br />
            &lt;/head&gt;<br />
            &lt;body&gt;<br />
            &lt;p class=”Greetings”&gt;Hello World ! :)&lt;/p&gt;<br />
            &lt;/body&gt;<br />
            &lt;/html&gt;<br />
        </p>
        </div>
        <hr className={css.linetojavascript} />
        <div className={css.javascriptcontainer} >
            <Pin className={css.javascriptpin} />
            <img src={javascriptlogo} alt="javascriptlogo" className={css.javascriptlogo} />
        
        <p className={css.javascriptsnippet}>useEffect(() ={'>'} {'{'}<br />
            function handleLanguageChange(lng) {'{'}<br />
            document.body.classList.remove('en', 'de');<br />
            document.body.classList.add(lng);<br />
            {'}'}{'}'}
        </p>
        </div>
        <hr className={css.linetocssfromhtml} />
        <hr className={css.linetocssfromjavascript} />
        <div className={css.csscontainer}>
            <Pin className={css.csspin} />
            <img src={csslogo} alt="csslogo" className={css.csslogo} />
        
        <p className={css.csssnippet}>.Greetings{'{'}<br />
            font-size: 4em;<br />
            color: pink;<br />
            position: relative;<br />
            {'}'}</p>
            </div>

        <hr className={css.linetoreact} />
        <div className={css.reactcontainer}>
            <Pin className={css.reactpin} />
            <img src={reactlogo} alt="reactlogo" className={css.reactlogo} />
       

        <p className={css.reactsnippet}>import React from 'react'</p>
        </div>

        <hr className={css.linetovite} />
        <div className={css.vitecontainer}>
            <Pin className={css.vitepin} />
            <Vitelogo className={css.vitelogo} />
      
        <p className={css.vitesnippet}>
             // https://vitejs.dev/config/<br />
            export default defineConfig({'{'}<br />
            plugins: [react()],<br />
            {'}'})
        </p>
        </div>
        <hr className={css.linetosqlfromcsharp} />
        <hr className={css.linetosqlfromcplusplus} />
        <hr className={css.linetosqlfromjavascript} />
        <hr className={css.linetosqlfrompython} />
        <div className={css.sqlcontainer}>
            <Pin className={css.sqlpin} />
            <img src={SqlLogo} alt="SqlLogo" className={css.sqllogo} />
        
        <p className={css.sqlsnippet}>
            Select * from Players inner join Board on Board.GameID = 1<br />
            inner join Settings on Settings.GameID = 1<br />
            left join Game on Game.GameID =1 where Players.GameID = 1
        </p>
        </div>
        <div className={css.pythoncontainer}>
            <Pin className={css.pythonpin} />
            <PythonLogo className={css.pythonlogo} />
        
        <p className={css.pythonsnippet}> coordinates = ""<br />
            for y_points in range(9):<br />
            for i in range(4):<br />
            for number_index in range(2):<br />
            if maybe_pos[i][number_index + 1] == y_points:<br />
            coordinates += maybe_pos[i][0] + str(maybe_pos[i][number_index + 1]) + ", "<br />
            coordinates = coordinates[0:coordinates.__len__() - 2]<br />
            print(coordinates)</p>
            </div>
        <hr className={css.linetoresumefromcplusplus} />
        <hr className={css.linetoresumefromsql} />
        <hr className={css.linetoresumefrompython} />
        <Pin className={css.resumepin} />

    </div>)
}

export default Pinwand