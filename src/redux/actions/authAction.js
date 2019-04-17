import {AUTH_SIGN_UP, AUTH_SIGN_UP_SUCCESS, AUTH_SIGN_UP_FAILURE} from "../constants";


export const authSignUp = () => ({
  type: AUTH_SIGN_UP
});

export const authSignUpSuccess = (message) => ({
  type: AUTH_SIGN_UP_SUCCESS,
  payload: message
});

export const authSignUpError = (errorMessage) => ({
  type: AUTH_SIGN_UP_FAILURE,
  payload: errorMessage
});