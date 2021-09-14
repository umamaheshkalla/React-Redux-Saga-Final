import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { mobileReducer } from "./reducers/mobile";
import { watchUser } from "./sagas/users.saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(mobileReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchUser);

export default store;
