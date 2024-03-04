import React, {Component} from "react";
import './Nav.css'

class Navbar extends Component {
    state = {}

    render() {
        return (
            <nav className="g nav">
                <a className="g logo " href="/home">Steven Kühnl</a>
                <input type="checkbox" id="toggle_button"/>
                <label htmlFor="toggle_button" className="toggle_button">

                    <span className="bar" ></span>
                    <span className="bar" ></span>
                    <span className="bar" ></span>
                </label>
                <ul className="navul navula">
                    <li className="navli"><a className="navula Consolas" href="/home">About</a></li>
                    <li className="navli"><a className="navula Consolas" href="#">Projects</a></li>
                    <li className="navli"><a className="navula Consolas" href="#">Contact</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;