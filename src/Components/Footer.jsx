import React from "react";
import TitleBox from "./Common/TitleBox";

function Footer() {
  return (
      <footer className="footer-section container">
    <TitleBox>
        <div className="text-center">
          <p className="footer-top section-title">SHUBHAM..</p>
          <p className="footer-disc">
            I'm a web developer and designer based in India. I have a very deep
            passion to design stuff❤️This Website is made with the lot of love
            and passion.
          </p>
         
          <div className="social-link">
            <a
              href="http://www.linkedin.com/in/shubham-maske--"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.svg" alt="linkedin.svg" />
            </a>
            <a
              href="http://github.com/s3838maske"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Github.png" alt="github.png" />
            </a>
            <a
              href="https://wa.link/q3sjes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/whatsapp.png" alt="whatsapp.png" />
            </a>
            <a
              href="mailto:maskeshubham555@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/email.png" alt="email.png" />
            </a>
          </div>
          <span className="footer-disc"> © 2024 Shubham Maske</span>
        </div>
    </TitleBox>
      </footer>
  );
}

export default Footer;
