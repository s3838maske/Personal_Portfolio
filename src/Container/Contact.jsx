import React from "react";
import Card from "../Components/Common/Card";
import Button from "../Components/Common/Button";

function Contact() {
  return (
    <>
      <Card>
        <div className="flex">
          <div className="left-box">
            <h1 className="section-title">Get In Touch</h1>
            <p>
              If you are interested in my work or want to provide feedback about
              this website, I am open to exchanging ideas .
            </p>
          </div>
          <div className="right-box">
            <form action="">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />

              <label htmlFor="name">Email</label>
              <input type="email" name="email" id="email" />

              <label htmlFor="message">Message</label>
              <textarea rows={6} name="message" id="message"></textarea>

              <Button>Send</Button>
            </form>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Contact;
