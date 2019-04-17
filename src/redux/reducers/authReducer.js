import {AUTH_SIGN_UP, AUTH_SIGN_UP_FAILURE, AUTH_SIGN_UP_SUCCESS} from "../constants";

const initialState = {
  responseMessage: {},
  error: {},
  isLoading: false
};

export default (state=initialState, action) => {
  switch (action.type) {
    case AUTH_SIGN_UP:
      return {...initialState, isLoading: true};
    case AUTH_SIGN_UP_SUCCESS:
      return {...initialState, responseMessage: action.payload, isLoading: false};
    case AUTH_SIGN_UP_FAILURE:
      return {...initialState, error: action.payload, isLoading: false};
    default:
      return state
  }
}
