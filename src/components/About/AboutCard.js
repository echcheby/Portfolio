import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ech-chebaby Mohamed </span>
            from <span className="purple"> from Kénitra, Morocco.</span>
            <br />
            I hold a Master’s degree in Business Intelligence and a Bachelor’s degree in Software Development, both from the Faculty of Sciences and Techniques.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving real-world problems through software
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies and frameworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Building clean and secure web applications
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Technology is best when it brings people together"{" "}
          </p>
          <footer className="blockquote-footer">Mohamed Ech-chebaby</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
