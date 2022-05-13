import { createAction } from "@reduxjs/toolkit";

const signIn = createAction("@auth/signIn");
const signUp = createAction("@auth/signUp");
const signOut = createAction("@auth/signOut");
const setAuthError = createAction("@auth/setError");
const resetAuthError = createAction("@auth/resetError");
const setAuthLoading = createAction("@auth/setLoading");

export {
  signIn,
  signUp,
  signOut,
  setAuthError,
  resetAuthError,
  setAuthLoading,
};
