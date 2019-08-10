import React from "react";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <div className="aboutMe">
      <h1>About Me</h1>
      <p>
        My name is Lex and I have have a passion for building web applications.
        Although I prefer the backend of the stack I have experience in both
        frontend and backend development. I work primarily with NodeJs and have
        been using Express to build my APIs. When I am not coding, I enjoy
        playing boardgames and reading and mentoring. Feel free to contact me if
        you have any questions about my work.
      </p>
    </div>
  );
};

export default AboutMe;
