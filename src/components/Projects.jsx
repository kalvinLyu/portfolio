import React from "react";
import { Container, Col } from "react-bootstrap";

function Projects() {
    return(
        <div className="projectsWrapper" id="projects">
            <Container className="">
                <Col>
                    <div className="subHeader">
                        <h1>My Projects</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et dignissim nulla, laoreet imperdiet urna. Ut sed nibh gravida, varius justo eu, placerat nunc. Etiam fringilla felis nulla, sed tincidunt quam blandit in. Proin nec aliquam augue. Suspendisse consequat nec arcu a tempus. Suspendisse placerat tellus libero, in pellentesque neque tincidunt at. Maecenas et neque vitae lacus vulputate facilisis et vitae augue. Nunc ac volutpat diam. Aenean imperdiet elit at ex eleifend, faucibus pharetra orci ornare. Praesent sagittis semper purus, eu vestibulum urna. Phasellus quis mi tempor, porttitor felis id, porttitor massa.</p>
                        <p>Proin et sem eros. Sed viverra lacus ac laoreet condimentum. Etiam sed est nec purus interdum porta. Maecenas imperdiet faucibus porta. Nunc lobortis sodales est, in dapibus odio auctor vitae. Mauris quis malesuada sapien. Donec tempus ante mi, eget condimentum lacus tincidunt at. Pellentesque ut feugiat massa. Etiam sagittis luctus varius.</p>
                    </div>
                </Col>
            </Container>
        </div>
    );
}

export default Projects;