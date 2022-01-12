import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./styles/styles.css"
import {navlinks} from "./NavLinks.jsx"

function Nav() {
    return(
        <div className="navWrapper">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Kalvin Lyu</Navbar.Brand>
                    <Nav className="me-auto">
                        {navlinks.map(nav => (
                        <Nav.Link href={nav.link} >{nav.text}</Nav.Link>
                ))}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Nav;