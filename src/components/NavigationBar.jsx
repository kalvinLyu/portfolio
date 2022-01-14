import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./styles/styles.css"
import {navlinks} from "./NavLinks.jsx"

function NavigationBar() {
    return(
        <div className="navWrapper">
                <div><h2>Kalvin Lyu</h2></div>
                <div className="navLinks">
                    <li>
                        {navlinks.map(nav => (
                            <a href={nav.link} key={nav.text}>{nav.text}</a>
                        ))}
                    </li>
                </div>
        </div>
    );
}

export default NavigationBar;