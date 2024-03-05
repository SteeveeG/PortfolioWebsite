import React, { Component } from "react";
import '../Main.css'
import './Introduction.css'

class Introduction extends Component {
    state = {}
    render() {
        return (<div className="pos">

                <p className="Consolas Name">Steven Kühnl</p>

                <h1 className="Segoe Header">Full stack Apprentice<br/>from Stuttgart</h1>

                <p className="Consolas Intro"
                >A full stack apprentice with a great passion for developing
                    new solutions and intensive projects in every area of development </p>

            </div>
        );
    }
}

export default Introduction;