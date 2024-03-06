import React, { Component } from "react";
import stroke from '../../Assets/TextmarkerStroke.svg'
import Arrow from '../../Assets/Arrow3.svg'
import '../Main.css'
import './Introduction.css'

class Introduction extends Component {
    state = {}
    render() {
        return (<div className="pos">

                <p className="Consolas Name">Steven Kühnl</p>

                <h1 className="Segoe Header">Full stack Apprentice<br/>from Stuttgart</h1>

                <img src={stroke} className="StuttgartStroke" alt="a Stroke from a Textmaker under the Word Stuttgart" />


                <p className="Consolas Intro"
                >A full stack apprentice with a great passion for developing
                    new solutions and intensive projects in every area of development </p>

                <img src={Arrow}  className="Arrow" alt="a Arow pointing at text"  />
            </div>
        );
    }
}

export default Introduction;