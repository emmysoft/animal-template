import React from "react";
import { Wrapper } from "./FooterStyle";

const Footer: React.FC = () => {
  return (
    <>
      <Wrapper>
        <p className="footer-content">Copyright &copy 2023</p>
        <p className="maker">Developed By Emmysoft</p>
      </Wrapper>
    </>
  );
};

export default Footer;
