import React from "react";
import BgText from "../Components/Common/BgText";
import TitleBox from "../Components/Common/TitleBox";
import { useNavigate, useParams } from "react-router-dom";
import { listOfProject } from "../ProjectData";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <button className="primary-btn" onClick={() => navigate(-1)}>
          <ion-icon name="arrow-back-outline"></ion-icon>
          Back
        </button>

        <div className="details-container">
          <div className="left-container">
            <img
              src={listOfProject[id].image.src}
              alt={listOfProject[id].image.alt}
              width="100%"
            />
          </div>
          <div className="right-container">
            <p className="project-heading"> {listOfProject[id].heading} </p>
            <p className="project-sub-heading">
              {listOfProject[id].subHeading}
            </p>
            <p className="project-discription">
              {listOfProject[id].description}
            </p>
            <br />
             <span style={{fontWeight:"600",color:"white"}}>Tech Stack</span>
            <div>
              <span className="stack-img">
                {listOfProject[id].techStack.map((value) => {
                  return (
                    <>
                      <img src={value.src} alt={value.alt} key={value.alt} />
                    </>
                  );
                })}
              </span>
            </div>
            <div className="btn-box">
              <a href={listOfProject[id].demoLink} target="_blank" rel="noopener noreferrer">
              <button className="secondary-btn">
                <ion-icon name="laptop-outline"></ion-icon> Demo
              </button>
              </a>
              <a href={listOfProject[id].gitRepo} target="_blank" rel="noopener noreferrer">
              <button className="secondary-btn">
                <ion-icon name="logo-github"></ion-icon> GitHub
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetails;
