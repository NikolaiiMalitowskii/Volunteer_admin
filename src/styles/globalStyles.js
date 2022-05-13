import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  button {
    color: #ffffff;
    background-color: #5F86BE;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border: none;
    border-radius: 50pc;
    outline: none;
    cursor: pointer;
    padding: 0 24px;
    height: 25px;
  }

  button:hover {
    background-color: #36366C;
  }

  label {
    color: #dbd7d8;
    font-size: 12px;
    line-height: 20px;
  }

  ul {
    list-style: none;
  }

  input, select {
    color: #111111;
    border: 1px solid #5F86BE;
    height: 25px;
    border-radius: 50pc;
    outline: none;
    padding: 0 10px;
    height: 25px;
    width: 100%;
  }

  input::-webkit-input-placeholder {
    color: #dbd7d8;
  }

  input::-moz-placeholder {
    color: #dbd7d8;
  }

  input:-moz-placeholder {
    color: #dbd7d8;
  }

  input:-ms-input-placeholder {
    color: #dbd7d8;
  }

  input::-webkit-input-placeholder {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  input::-moz-placeholder {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  input:-moz-placeholder {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  input:-ms-input-placeholder {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  input:focus::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  input:focus::-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  input:focus:-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  input:focus:-ms-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;