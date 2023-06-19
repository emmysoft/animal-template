import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-bottom: 40px;

  .header {
    font-weight: 700;
    font-size: 24px;
    color: #000;
  }

  .detail-input {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;

    .fullname {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 5px;

      .full-name {
        font-weight: 400;
        font-size: 24px;
        color: #abc6c4;
      }
      .username-input {
        width: 270px;
        border: 2px solid #abc6c4;
        padding: 24px;
        border-radius: 10px;
      }
    }
    .email {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 5px;

      .email-name {
        font-weight: 400;
        font-size: 24px;
        color: #abc6c4;
      }
      .email-input {
        width: 270px;
        border: 2px solid #abc6c4;
        padding: 24px;
        border-radius: 10px;
      }
    }
  }
  .text-msg {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .text-area {
      width: 540px;
      height: 150px;
      padding: 30px;
      border: 2px solid #abc6c4;
      border-radius: 10px;
    }
  }
`;
