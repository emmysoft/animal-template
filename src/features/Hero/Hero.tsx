import React from "react";
import { Wrapper } from "./HeroStyle";

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <div className="first">
        <h3 className="first-head">We care for your dog</h3>
        <p className="first-para">
          We always try to provide your dog the best services.
        </p>
      </div>
    </Wrapper>
  );
};

export default Hero;
