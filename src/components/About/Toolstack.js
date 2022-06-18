import React from "react";
import { Col, Row } from "react-bootstrap";
import {DiNginx} from "react-icons/di"
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiRaspberrypi
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRaspberrypi />
      </Col>
    </Row>
  );
}

export default Toolstack;
