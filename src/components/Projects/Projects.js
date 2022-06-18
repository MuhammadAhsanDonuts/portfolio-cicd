import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crypto from "../../Assets/Projects/crypto.png";
import memo from "../../Assets/Projects/memo.png";
import amazon from "../../Assets/Projects/amazon.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Cryptoverse"
              description="Monitoring Cryptocurrencies hikes and tracking top 50 cryptocurrencies in the world. Used crypto-api form Rapid API & developed backend with Node.js. Credit goes to Javascript Mastery for teaching me this."
              link="https://github.com/MuhammadAhsanDonuts/Crypto-App/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon Scrapping"
              description="This is Amazon Scrapper API, you can bring out the products, reviws and all the details about the product from a single search. This is has been made with the help of rapid api baseurl, serving as a main part of this application. This is a practice project, which is still in development phase."
              link="https://github.com/MuhammadAhsanDonuts/amazon-api-scrapper"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memo}
              isBlog={false}
              title="Memo App"
              description="This is a memo-app which let's you save your memories, uploading pictures and adding captions, date and other stuff to will help you keep remembering your fading memories. This is also build with the help of Javascript Mastery. All these project are done in order to have my grasp over React concepts. This is a practice project, which is still in development phase "
              link="https://github.com/MuhammadAhsanDonuts/memoApp"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
