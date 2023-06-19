import styled, { keyframes } from "styled-components";
import cutedog from "../../assets/cutedog.jpg";

const slideIn = keyframes`
from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

export const Wrapper = styled.div`
  background-image: url(${cutedog});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;

  .first {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 150px;
    padding: 6rem;
    animation: ${slideIn} 2s;

    .first-head {
      font-weight: 700;
      font-size: 5rem;
      color: #000;
      text-align: left;
      width: 500px;
      height: 150px;
      text-transform: capitalize;
      color: #fff;
      margin-top: 40px;
    }
    .first-para {
      width: 420px;
      height: 100px;
      font-weight: 300;
      font-size: 1.5rem;
      text-align: left;
      color: #fff;
    }
  }
`;
