import React from "react";
import TitleBox from "../Components/Common/TitleBox";
import Button from "../Components/Common/Button";

function AboutPage() {
  return (
    <>
    <section className="section">

      <div className="container">
        <TitleBox>
          <h1 className="text-center section-title">About</h1>
        </TitleBox>
        <TitleBox>
          <div className="flex">
            <div className="about-left">
              <img src="profile.jpg" alt="profile.png" />
            </div>
            <div className="about-right">
              <p>
                I'm Shubham, I am driven to secure a challenging role in the IT
                industry where I can leverage my skills to contribute to the
                organization's growth and thrive in a dynamic, supportive
                environment. During my undergraduate studies in{" "}
                <span className="highlight"> BSc IT</span>, I was introduced to
                various exciting fields, including development and emerging
                technologies. Over the course of my studies, I completed
                rigorous academic work, culminating in the development of a
                final year project. This experience not only deepened my
                technical knowledge but also provided me with invaluable
                hands-on experience.{" "}
                <span className="highlight">
                  {" "}
                  I bring a wealth of experience in Web Design and agile scrum
                  methodologies, ensuring smooth integrations between design and
                  development.
                </span>{" "}
                My journey in IT has significantly shaped my skills in web
                development, teamwork, and the application of critical thinking,
                and I have learned how to approach and solve complex problems
                using strategic and innovative solutions. I possess proficiency
                in a range of technical skills,
                <span className="highlight">
                  HTML, CSS, SCSS, VS Code, GIT & GitHub also GitLab, Firebase,
                  JavaScript, and React, Redux, Tailwind Css, Material UI etc..
                </span>{" "}
                As a motivated and skilled IT professional, I bring a strong
                academic foundation, hands-on experience, and a range of
                technical skills to the table. I am confident in my ability to
                approach complex problems with strategic and innovative
                solutions, and{" "}
                <span className="highlight">
                  I am excited to contribute to a dynamic organization.
                </span>
                <br /><br /><br />
                <a href="Shubham-Maske-Frontend-Developer.pdf" download={true}>
                  {" "}
                  <Button>
                    {" "}
                    <img src="Vector.png" alt="download-file.png" /> Download CV
                  </Button>
                </a>
              </p>
            </div>
          </div>
        </TitleBox>
      </div>

      <div className="container">
        <TitleBox>
          <h3>Key Skills</h3>
          <br />
          <div>
            <marquee  direction="left" behavior="alternate" scrollamount="2" scrolldelay="10" loop="true"  width="100%">
            <img src="image 13.png" alt="react.png" />
            <img src="image 13.png" alt="react.png" />
            <img src="image 13.png" alt="react.png" />
            <img src="image 13.png" alt="react.png" />
            <img src="image 13.png" alt="react.png" />
            <img src="image 13.png" alt="react.png" />
            <img src="image 13.png" alt="react.png" />
            <img src="image 13.png" alt="react.png" />
            <img src="image 13.png" alt="react.png" />
            <img src="image 13.png" alt="react.png" />
            <img src="image 13.png" alt="react.png" />
            <img src="image 13.png" alt="react.png" />
            </marquee>
          </div>
        </TitleBox>
      </div>
    </section>

    </>
  );
}

export default AboutPage;
