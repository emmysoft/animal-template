import React from "react";
import { Wrapper } from "./FormStyle";

const Form: React.FC = () => {
  return (
    <>
      <Wrapper>
        <h2 className="header">Contact Us</h2>
        <div className="detail-input">
          <div className="fullname">
            <label className="full-name">Your Name</label>
            <input placeholder="Full Name" className="username-input" />
          </div>
          <div className="email">
            <label className="email-name">Your Email</label>
            <input placeholder="email" className="email-input" />
          </div>
        </div>
        <div className="text-msg">
          <textarea placeholder="text here" className="text-area" />
        </div>
      </Wrapper>
    </>
  );
};

export default Form;
