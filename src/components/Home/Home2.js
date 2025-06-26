import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
           <p className="home-about-body">
              What began as curiosity with a single line of code has grown into a deep passion for solving real-world problems through impactful tech products.
              <br />
              <br />
              I have a strong foundation in 
              <i>
                <b className="purple"> C++</b>
              </i>{" "}
              for algorithmic thinking and problem solving, and I actively use{" "}
              <i>
                <b className="purple"> JavaScript</b>
              </i>{" "}
              to build dynamic web applications.
              <br />
              <br />
              I'm passionate about developing scalable{" "}
              <i>
                <b className="purple">Web Technologies</b>
              </i>{" "}
              and crafting products that create real value. Whether it's full-stack platforms, Chrome extensions, or collaborative tools — I enjoy bringing ideas to life.
              <br />
              <br />
              I love working with technologies like{" "}
              <i>
                <b className="purple">React.js, Next.js, and Node.js</b>
              </i>{" "}
              to build modern and responsive applications. Recently, I've also been exploring AI-powered apps, CRDT-based editors, and real-time sync systems.
              <br />
              <br />
              My goal is simple — to keep learning, building, and sharing.
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
                  href="https://github.com/Ayush05dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Ayush05Bansal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayushbansal0520/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ayusshhh05"
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
