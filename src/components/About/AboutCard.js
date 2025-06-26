import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayush Bansal </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />
            I'm currently pursuing a B.Tech in Computer Science and Engineering at the National Institute of Technology, Kurukshetra.
            <br />
            I'm passionate about solving real-world problems through code, and I enjoy exploring areas like web development, data structures, and AI tools.
            <br />
            <br />
            Beyond academics and tech, I also love engaging in a few hobbies that help me stay creative and refreshed:
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li> 
          </ul> */}

          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎮 Playing strategy and action games
            </li>
            <li className="about-activity">
              <ImPointRight /> 🌍 Travelling to new places & exploring cultures
            </li>
            <li className="about-activity">
              <ImPointRight /> 📖 Reading about tech, startups, and innovation
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference and grow with every challenge!"{" "}
          </p>
          <footer className="blockquote-footer">Ayush</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
