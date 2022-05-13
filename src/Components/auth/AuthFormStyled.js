import styled from "styled-components";

export const AuthFormStyled = styled.div`
  width: 100%;
  min-height: calc(100vh - 140px);
  display: flex;
  justify-content: center;
  align-items: center;

  .authForm {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .authFormLabel,
  .authFormError {
    width: 100%;
    color: cornflowerblue;
  }

  .authFormLabel {
    text-indent: 10px;
  }

  .authFormInput {
    margin: 5px 0;
  }

  .authFormButton {
    margin-top: 25px;
    padding: 0 20px;
  }

  .error {
    margin: 10px 0;
    color: red;
    text-align: justify;
  }

  .message {
    text-align: center;
    color: green;
  }
`;
