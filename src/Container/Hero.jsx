import React from "react";
import BgText from "../Components/Common/BgText";

function Hero() {
  return (
    <>
      <section className="hero-section">
        <BgText />
        <div className="hero-text text-center">
          <p className="title">Hey There I'm</p>
          <p className="heading">SHUBHAM</p>
          <p className="sub-title">
            "Innovative Frontend Developer & Web Development Expert"
            <br /> Looking for a Challenge
          </p>
          <div>
            <a
              href="http://www.linkedin.com/in/shubham-maske--"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="linkedin.svg" alt="linkedin.svg" />
            </a>
            <a
              href="http://github.com/s3838maske"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="Github.png" alt="github.png" />
            </a>
            <a
              href="https://wa.link/q3sjes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="whatsapp.png" alt="whatsapp.png" />
            </a>
            <a
              href="mailto:maskeshubham555@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="email.png" alt="email.png" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
