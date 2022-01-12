import React from "react";
import { Container, Col } from "react-bootstrap";
import "./styles/styles.css";
import { useEffect, useRef } from "react";
import { init } from "ityped";
import ArrowDropDownCircle from '@mui/icons-material/ArrowDropDownCircle';

function Welcome() {
    const messageRef = useRef();

    useEffect(() => {
        init(messageRef.current, {
          showCursor: false,
          typeSpeed: 400,
          backDelay: 1500,
          backSpeed: 50,
          strings: ["Kalvin Lyu"]
        });
    }, []);

    return(
        <div className="welcomeWrapper">
            <Container className="px-10 m-0">
                <Col>
                    <div className="welcomeMessage">
                        <h2>Hello!</h2>
                        <h1>I'm <span ref={messageRef}></span></h1>
                        <h3>Computer Scientist</h3>
                    </div>
                </Col>
            </Container>
            <div><ArrowDropDownCircle /></div>
        </div>
    );
}

export default Welcome;