import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ams from "../../Assets/Projects/ams.gif";
import amsa from "../../Assets/Projects/amsa.gif";
import esa from "../../Assets/Projects/esa.gif";
import jrw from "../../Assets/Projects/jrw.gif";
import lpo from "../../Assets/Projects/lpo.gif";
import lwcb from "../../Assets/Projects/lwcb.gif";
import prds from "../../Assets/Projects/prds.gif";
import pbw from "../../Assets/Projects/pbw.gif";
import ppw1 from "../../Assets/Projects/ppw1.gif";
import ppw2 from "../../Assets/Projects/ppw2.gif";
import rta from "../../Assets/Projects/rta.gif";
import rtw from "../../Assets/Projects/rtw.gif";
import shap from "../../Assets/Projects/shap.gif";


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
              imgPath={esa}
              isBlog={false}
              title="Exact Stock App"
              description="With the world being attracted towards
              the internet and as much as 50% of the
              world has joined the internet. The
              stock market depends on the world
              news a lot and we are trying to simplify
              it related to the stock market news."
              ghLink="https://github.com/Mahanyasa/Exact-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rta}
              isBlog={false}
              title="Roverz Tourism App"
              description="With tourism being a booming industry,
              we need to look out and develop the
              less populated and unpopular places
              which have a good chance of hearing.
              This technique can reduce the burden
              on the more populated areas of
              tourism."
              ghLink="https://github.com/Mahanyasa/Roverz-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rtw}
              isBlog={false}
              title="Roverz Tourism Website"
              description="With tourism being a booming industry,
              we need to look out and develop the
              less populated and unpopular places
              which have a good chance of hearing.
              This technique can reduce the burden
              on the more populated areas of
              tourism."
              ghLink="https://github.com/Mahanyasa/Roverz-Database"
              demoLink="https://roverz.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ppw1}
              isBlog={false}
              title="Personal Portfolio 1.0"
              description="A portfolio website is a digital showcase where individuals or businesses display their work and skills. It features a clean design, 
              showcases projects effectively, and includes a brief bio and contact information. 
              With a responsive layout, it ensures accessibility across devices, making it a 
              powerful tool for professional presentation."
              ghLink="https://github.com/Mahanyasa/Mahanyasa-Personal-Portfolio"
              demoLink="https://mk-1-0.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ppw2}
              isBlog={false}
              title="Personal Portfolio 2.0"
              description="
              A portfolio website is a succinct digital showcase for individuals or businesses, highlighting their work and skills. 
              With a clean design and engaging layout, it serves as a dynamic representation of expertise. Contact details and a clear call to action enhance 
              user interaction, making it a powerful tool for professional visibility."
              ghLink="https://github.com/Mahanyasa/Mahanyasa-Personal-Portfolio-2.0"
              demoLink="https://mk-2-0.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pbw}
              isBlog={false}
              title="Personal Blogging Website"
              description="To learn to make a website was my
              dream when being an early teenager,
              the same from around 2015 to 2017.
              This initiative got me started on coding
              and deploying my projects onto github
              and many other platforms."
              ghLink="https://github.com/Mahanyasa/Blog-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jrw}
              isBlog={false}
              title="Jee Rank Website"
              description="With competitive exams getting
              difficult every year. Each student has
              the right to know their rank. The jee
              rank website is an effort to help
              students know an estimate of their
              rank. This technique can help students
              prepare well for the next session of the
              Jee Mains exam and score better in
              their upcoming exams."
              ghLink="https://github.com/Mahanyasa/Jee-Rank-HTML-and-CSS-Website"
              demoLink="https://jeerank.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prds}
              isBlog={false}
              title="Pay Roll Distribution Website"
              description="With the count of industries
              automating and increasing every day, a
              payroll distribution system will help
              Companies pay their employees with
              This project is intended to be an opensource project for many small
              industries or companies that cannot
              afford to develop their payroll."
              ghLink="https://github.com/Mahanyasa/Pay-Roll-Project" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lwcb}
              isBlog={false}
              title="Lone Wolf Chat Bot"
              description="Lone Wolf Chat Bot
              An AI chatbot for Android apps uses
              natural language processing to
              communicate with users, provide
              personalized experiences, and offer
              customer support."
              ghLink="https://github.com/Mahanyasa/Lone-Wolf-Chat-Bot" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ams}
              isBlog={false}
              title="Attendance Monitoring System"
              description="Using RFID ID Cards we made a RFID
              based attendance monitoring system
              and linked it to an algorithm of Data
              Analysis to understand every members
              amd teams analysis." 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amsa}
              isBlog={false}
              title="Attendance Monitoring System Analysis"
              description="Using RFID ID Cards we made a RFID
              based attendance monitoring system
              and linked it to an algorithm of Data
              Analysis to understand every members
              amd teams analysis."
              ghLink="https://github.com/Mahanyasa/AMS-Data-Analysis-ML" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shap}
              isBlog={false}
              title="Smart Home Automation Project"
              description="I have used relays to switch on and off
              lights with an external app and the
              switch board and made it like an extra
              add on switch board in which one has
              to pick the switch socket and regulator
              and so on we made the same kind 4
              switch 2 switch 8 switch and 1 switch
              boxes are present."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lpo}
              isBlog={false}
              title="Login Page"
              description="A Test for future projects!!!"
              ghLink="https://github.com/Mahanyasa/Login-Page" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
