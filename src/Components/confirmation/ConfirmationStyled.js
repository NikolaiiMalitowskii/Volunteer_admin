import styled from "styled-components";

export const ConfirmationStyled = styled.div`
  min-width: 320px;
  height: 120px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  
  .confirmationHeader {
    height: 40px;
    width: 100%;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    color: cornflowerblue;
    text-transform: uppercase;
    border-radius: 6px 6px 0  0;
  }
  .confirmationHeaderIconContainer {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .confirmationHeaderIcon {
    width: 100%;
    height: 100%;
    fill: cornflowerblue;
  }


  .confirmationBody {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
    padding: 10px 0;
  }

  .confirmationButtonContainer {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .confirmationCancel {
    width: 110px;
    border-radius: 14px 0 0 14px;
    border-right: 1px solid white;

    &:hover {
      background-color: #5f73a1;
      cursor: pointer;
    }
  }

  .confirmationAgree {
    width: 110px;
    border-radius: 0 14px 14px 0;

    &:hover {
      background-color: #5f73a1;
      cursor: pointer;
    }
  }

`