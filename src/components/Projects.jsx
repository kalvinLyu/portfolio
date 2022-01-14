import React from "react";
import { Container, Col, Card, Button } from "react-bootstrap";

function Projects() {
    return(
        <div className="projectsWrapper" id="projects">
            <Container className="">
                <Col>
                    <div className="subHeader">
                        <h1>My Projects</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et dignissim nulla, laoreet imperdiet urna. Ut sed nibh gravida, varius justo eu, placerat nunc. Etiam fringilla felis nulla, sed tincidunt quam blandit in. Proin nec aliquam augue. Suspendisse consequat nec arcu a tempus. Suspendisse placerat tellus libero, in pellentesque neque tincidunt at. Maecenas et neque vitae lacus vulputate facilisis et vitae augue. Nunc ac volutpat diam. Aenean imperdiet elit at ex eleifend, faucibus pharetra orci ornare. Praesent sagittis semper purus, eu vestibulum urna. Phasellus quis mi tempor, porttitor felis id, porttitor massa.</p>
                        <Card style={{ width: "20rem" }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text style={{ color: "black"}}>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Container>
        </div>
    );
}

export default Projects;