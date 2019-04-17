import {put, takeEvery, call} from "redux-saga/effects";
import {SocialAuth} from "../../api/SocialAuth";
import {authSignUpSuccess, authSignUpError} from "../actions/authAction";
import {AUTH_SIGN_UP} from "../constants";

function* socialSignUp (){
  try{
    const response =  yield call(SocialAuth.socialSignUp('facebook'));
    console.log(response)
    put(authSignUpSuccess(response))
  }catch (error) {
    put(authSignUpError(error))
  }
}

export function* watchAuthSignUp() {
  yield takeEvery(AUTH_SIGN_UP, socialSignUp)
}
