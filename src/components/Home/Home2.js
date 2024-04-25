import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle />
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Welcome to my official portfolio website, where I'm excited to share my journey in Mechatronics and 
              Computer Science Engineering with you.  
              This platform is a showcase of the projects and accomplishments that have shaped my career and 
              passion in these two fascinating fields.
              <br />
              <br />
              <i>
                <b className="purple">  Whether you're a fellow enthusiast, a potential collaborator, or just someone curious to learn more,
               I hope you'll find inspiration as you explore my work. </b>
              </i>
              <br />
              <br />
              Whether you're a fellow enthusiast, a potential collaborator, or just someone curious to learn more,
               I hope you'll find inspiration as you explore my work. I am a highly skilled and innovative Mechatronics Engineer with a passion for integrating 
               mechanical, electrical, and computer engineering principles to develop cutting-edge systems and technologies. With a solid background in engineering 
               and a keen problem-solving mindset, I excels in designing, prototyping, and optimizing complex mechatronic systems.
               <br />
               <br />
              <i>
                <b className="purple">I am a skilled and dynamic Computer 
               Science Engineer with a deep understanding of computer systems, programming languages, and software development. With a strong academic background and 
               practical experience.</b>
              </i>
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Mahanyasa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:Mahanyask@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mahanyasa-keesara-0188081bb/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_mk_2711_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
