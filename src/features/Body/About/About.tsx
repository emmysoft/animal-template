import React from "react";
import { Wrapper } from "./AboutStyle";
import dog from "../../../assets/dog.jpeg";

const About: React.FC = () => {
  return (
    <>
      <Wrapper>
        <div className="about-details">
          <h2 className="about-head">About Us</h2>
          <p className="about-us">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            doloremque nulla quo, exercitationem numquam possimus officia error
            vero explicabo rerum facilis, voluptatibus ipsa voluptas fugit.
            Voluptatibus illum laudantium delectus repellendus quia? Eum aliquid
            labore fugiat blanditiis placeat, quidem cumque ex?
          </p>
        </div>
        <img src={dog} alt="imag" className="image" />
      </Wrapper>
    </>
  );
};

export default About;
