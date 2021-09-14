import { all, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

function* buyMobile() {
  yield put({ type: "BUY_MOBILE_SUCCESS" });
}

function* sellMobile() {
  yield put({ type: "SELL_MOBILE_SUCCESS" });
}

function* getAllUsers() {
  try {
    const users = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put({ type: "GET_ALL_USERS_SUCCESS", data: users.data });
  } catch (error) {
    yield put({ type: "GET_ALL_USERS_FAILURE", message: error.message });
  }
}

function* addUser({ payload }) {
  try {
    const users = yield call(
      axios.post,
      "https://jsonplaceholder.typicode.com/users",
      payload
    );
    yield put({ type: "ADD_USER_SUCCESS", data: users.data });
  } catch (error) {
    yield put({ type: "ADD_USER_FAILURE", message: error.message });
  }
}

function* getSingleUser({ id }) {
  try {
    const users = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    yield put({ type: "GET_SINGLE_USER_SUCCESS", data: users.data });
  } catch (error) {
    yield put({ type: "GET_SINGLE_USER_FAILURE", message: error.message });
  }
}

function* deleteUser({ id }) {
  try {
    const users = yield call(
      axios.delete,
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    yield put({ type: "DELETE_USER_SUCCESS", data: id });
  } catch (error) {
    yield put({ type: "DELETE_USER_FAILED", message: error.message });
  }
}

export function* watchUser() {
  yield all([
    takeLatest("BUY_MOBILE", buyMobile),
    takeLatest("SELL_MOBILE", sellMobile),
    takeLatest("GET_ALL_USERS", getAllUsers),
    takeLatest("ADD_USER", addUser),
    takeLatest("GET_SINGLE_USER", getSingleUser),
    takeLatest("DELETE_USER", deleteUser),
  ]);
}
