import { FC } from "react";
import { Wrapper } from "./NavigationStyle";
import { ContactButton } from "../Button/index";
import { NavLink } from "react-router-dom";

const Navigation: FC = () => {
  return (
    <Wrapper>
      <div className="logo">
        <p className="logo-para">Dogs.com</p>
      </div>
      <div className="nav">
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
        <NavLink to="/" className="navlink">
          About
        </NavLink>
        <NavLink to="/" className="navlink">
          Trainers
        </NavLink>
      </div>
      <ContactButton to="/" className="button">
        Contact Us
      </ContactButton>
    </Wrapper>
  );
};

export default Navigation;
