import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mahanyasa Keesara </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently employed as an intern at PTC India.
            <br />
            I have pursuing B.Tech in Mechatronics Engineering at SRM IST Chennai
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Mobile Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Boxing
            </li>
          </ul>

          <p style={{ color: "rgb(62,144,100)" }}>
            "Strive to build things that are diffcult to make!"{" "}
          </p>
          <footer className="blockquote-footer">Mahanyasa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
