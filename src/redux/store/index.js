import {createStore, applyMiddleware} from "redux";
import rootReducers from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import  createSagaMiddleware from "redux-saga"
import rootSagas from "../middleware"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSagas);
export default store;
