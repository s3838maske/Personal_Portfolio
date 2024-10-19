import React from "react";
import Card from "../Components/Common/Card";
import Button from "../Components/Common/Button";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <p className="text-center section-title">About Me</p>
      <p>
        I am seeking a challenging career in the IT industry where I can
        contribute to the growth of the organization while thriving in a dynamic
        and supportive work environment. During my first year of college, I was
        introduced to various exciting fields, including development and
        emerging technologies. 
        <br />
        <br />
        Over the course of my studies in BSc IT, I have
        completed more than two years of rigorous academic work, culminating in
        the development of a final year project. This experience not only
        deepened my technical knowledge but also provided me with invaluable
        hands-on experience....
      </p>
      <br />
      <Link to={"about"}>
      <Button>More About Me..</Button>
      </Link>
    </Card>
  );
}

export default About;
