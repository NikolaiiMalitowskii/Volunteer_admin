import React from "react";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().email("invalidEmail").required("emailRequired"),

  password: yup
    .string()
    .required("passwordRequired")
    .min(6, "passwordMin")
    .max(16, "passwordMax")
    .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/, "passwordMatches"),
});

const funcMessage = (errorMessage) => {
  return <span className='errorMessage'>{errorMessage}</span>;
};

export { funcMessage, validationSchema };

const ErrorValidation = ({ touched, message }) => {
  return <>{!touched ? message && <div>{message}</div> : <div>&nbsp;</div>}</>;
};

export default ErrorValidation;
