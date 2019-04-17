import { all } from 'redux-saga/effects'
import {watchAuthSignUp} from "./AuthSaga";

export default function* () {
  yield all([
    watchAuthSignUp(),
  ])
}