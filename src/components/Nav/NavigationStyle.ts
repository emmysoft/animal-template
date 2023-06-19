import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  gap: 18rem;
  background-color: #abc6c4;
  z-index: 2;
  position: fixed; 
  width: 100%;
  box-shadow: #808080;

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    .logo-para {
      font-weight: 400;
      font-size: 1.5rem;
      color: #fff;
    }
  }

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;

    .navlink {
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 500;
      color: #fff;
    }
  }
  .button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 400;
    font-size: 1.2rem;
    padding: 0.9rem;
    color: #fff;
  }
`;
