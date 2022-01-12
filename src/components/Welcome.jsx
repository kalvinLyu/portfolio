import React from "react";
import { Container, Col } from "react-bootstrap";
import "./styles/styles.css";
import { useEffect, useRef } from "react";
import { init } from "ityped";

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
        <div className="welcomeWrapper" id="home">
            <Container className="m-0">
                <Col>
                    <div className="header">
                        <h2>Hello!</h2>
                        <h1>I'm <span ref={messageRef}></span></h1>
                        <h3>Computer Scientist</h3>
                    </div>
                </Col>
            </Container>
        </div>
    );
}

export default Welcome;