import axios from "axios";
import {signIn, setAuthError, setAuthLoading} from "./authActions";

export const signUpOperation = (user, navigate) => async (dispatch) => {
    dispatch(setAuthLoading());
    try {
        await axios
            .post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/sign-up`, {
                email: user.email,
                password: user.password,
            })
            .then(() => {
                navigate('/signin')
            });
    } catch (error) {
        await dispatch(setAuthError(error.response.data.error));
    } finally {
        dispatch(setAuthLoading());
    }
};

export const signInOperation = (user, navigate) => async (dispatch) => {
    dispatch(setAuthLoading());
    try {
        await axios
            .post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/sign-in`, {
                email: user.email,
                password: user.password,
            })
            .then(async (res) => {
                console.log(res.data)
                dispatch(
                    signIn(res.data)
                );
            }).then(()=> navigate('/'));
    } catch (error) {
        error.response
            ? await dispatch(setAuthError(error.response.data.error))
            : dispatch(setAuthError(error.message));
    } finally {
        dispatch(setAuthLoading());
    }
};

