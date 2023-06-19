import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background-color: #fff;
  padding: 50px;

  .about-details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 15px;

    .about-head {
      font-weight: 700;
      font-size: 24px;
    }

    .about-us {
      justify-content: flex-start;
      font-weight: 400;
      font-size: 20px;
      color: #abc6c4;
      width: 400px;
    }
  }

  .image {
    width: 40%;
    border-radius: 10px;
    justify-content: flex-end;
  }
`;
