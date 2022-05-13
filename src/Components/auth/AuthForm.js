import React, {useContext} from "react";
import {AuthFormStyled} from "./AuthFormStyled";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Formik, Form, Field} from "formik";
import {validationSchema} from "./validation/Validator";
import {signInOperation, signUpOperation} from "../../redux/auth/authOperations";
import {resetAuthError} from "../../redux/auth/authActions";

const AuthForm = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const authError = useSelector((state) => state.auth.authError);
    const navigate = useNavigate();

    return (
        <AuthFormStyled>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    if (location.pathname === "/signup") {
                        dispatch(signUpOperation(values, navigate));
                    } else {
                        dispatch(signInOperation(values, navigate));
                    }
                }}>
                {({values, errors, touched, handleBlur}) => (
                    <Form className='authForm'>
                        <label className='authFormLabel'>
                            Email
                            <Field
                                type='text'
                                name='email'
                                placeholder='Andrii@gmail.com'
                                value={values.email}
                                onInput={() => {
                                    authError && dispatch(resetAuthError());
                                }}
                                className={
                                    !values.email.length && touched.email && errors.email
                                        ? "invalidInput"
                                        : "authFormInput"
                                }
                            />
                            {errors.email && touched.email ? (
                                <p className='error'>Error</p>
                            ) : null}
                            {authError && (
                                <p className='error'>Error</p>
                            )}
                        </label>
                        <label className='authFormLabel'>
                            Password
                            <Field
                                type='password'
                                name='password'
                                value={values.password}
                                placeholder='Qwerty123'
                                onBlur={handleBlur}
                                onInput={() => {
                                    authError && dispatch(resetAuthError());
                                }}
                                className={
                                    !values.password.length && touched.password && errors.password
                                        ? "invalidInput"
                                        : "authFormInput"
                                }
                            />
                            {errors.password && touched.password ? (
                                <p className='error'>
                                    Error
                                </p>
                            ) : null}
                        </label>
                        {location.pathname === "/signin" ? (
                            <button type='submit' className='authFormButton'>
                                Sign In
                            </button>
                        ) : (
                            <button type='submit' className='authFormButton'>
                                Sign Up
                            </button>
                        )}
                    </Form>
                )}
            </Formik>
        </AuthFormStyled>
    );
};

export default AuthForm;
