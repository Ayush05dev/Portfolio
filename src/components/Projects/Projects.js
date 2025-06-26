import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leetgrow from "../../Assets/Projects/leetgrow.png";
import bloginder from "../../Assets/Projects/bloginder.webp";
import tubelook from "../../Assets/Projects/tubelook.png";
import makenote from "../../Assets/Projects/makenote.png";
// import suicide from "../../Assets/Projects/suicide.png";
import chitchat from "../../Assets/Projects/chitchat.png";

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
            imgPath={makenote} // Replace with your actual image import variable
            isBlog={false}
            title="Makenote"
            description="Built a real-time collaborative Notion-like editor using Next.js, TypeScript, Firestore, Liveblocks, and Yjs. Supports live cursors, /commands, image uploads, and multi-user editing with role-based access. Integrated AI features like document chat & translation via Cloudflare Workers for scalable, low-latency processing. Designed a persistent edge architecture for 10+ users in real-time sync."
            ghLink="https://github.com/Ayush05dev/makenote" 
            demoLink="https://makenote-chi.vercel.app/"
          />
        </Col>


        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={chitchat} // Replace with the actual image import
            isBlog={false}
            title="ChitChat"
            description="A real-time messaging app built with React.js, Node.js, MongoDB, and Socket.io. Features JWT-authenticated login/signup for secure access, live messaging with active user indicators, and efficient user search for instant connections. Smooth real-time chat experience powered by REST APIs and WebSockets."
            ghLink="https://github.com/Ayush05dev/Chit-Chat" 
            demoLink="https://chit-chat-s2op.onrender.com/" 
          />
      </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tubelook} 
              isBlog={false}
              title="TubeLook"
              description="A YouTube clone built with React.js, React-Redux, and Tailwind CSS. Integrated YouTube APIs to deliver dynamic search results, suggestions, and recommendations. Implemented Debouncing and Caching for faster search performance. Created N-level nested comment threads using recursion, enabling smooth replies and engaging discussions."
              ghLink="https://github.com/Ayush05dev/Youtube-clone" 
              demoLink="https://youtube-clone-six-opal-29.vercel.app/"
            />
        </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leetgrow} 
              isBlog={false}
              title="LeetGrow - AI Chrome Extension for LeetCode"
              description="LeetGrow is a powerful AI-based Chrome extension that enhances your LeetCode problem-solving experience. It adds an intelligent floating panel directly on the problem page, offering features like smart hints, edge test case generation, code analysis, and complete code generation. Built with draggable, resizable UI and dark mode compatibility, it's your coding companion for interviews and practice."
              ghLink="https://github.com/Ayush05dev/LeetGrow"
              
            />
          </Col>


          <Col md={4} className="project-card">
              <ProjectCard
                imgPath={bloginder} 
                isBlog={false}
                title="Bloginder - Full-Stack Blogging Platform"
                description="A dynamic full-stack blog-sharing platform where users can post their thoughts, delete their blogs, explore posts from others, save blogs they like, and engage via comments. Built with seamless user experience in mind, Bloginder enables real-time interactions and content curation with authentication and intuitive UI."
                ghLink="https://github.com/Ayush05dev/Bloginder_Site" 
                // demoLink="bloginder-site-t8bj.vercel.app/" // Replace with your deployed live link if any
              />
          </Col>


          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
