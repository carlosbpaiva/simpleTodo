import { call, put, takeEvery } from 'redux-saga/effects'
import rsf from '../rsf'

import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  loadUserData,
  types,
} from '../reducers/user.actions';

import { loadTodos } from '../reducers/todos.actions';

function * signupSaga (action) {
  try {
    const data = yield call(rsf.auth.createUserWithEmailAndPassword, action.email, action.password );
    yield put(loginSuccess(data.uid));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function * loginSaga (action) {
  try {
    const userInfo = yield call(rsf.auth.signInWithEmailAndPassword, action.email, action.password );
    yield put(loadUserData(userInfo.email, userInfo.uid));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* loadDataSaga(action) {
  try {
    const usersTodos = yield call(rsf.database.read, 'todos/' + action.userId);
    const items = [];
    for( var id in usersTodos ) {
      let{ title, text, completed, contact, image, } = usersTodos[id];
      items.push({ id, title, text, completed, contact, image, });
    }
    yield put(loginSuccess());
    yield put(loadTodos(items));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function * logoutSaga () {
  try {
    yield call(rsf.auth.signOut);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

export default function * loginRootSaga () {
  yield [
  takeEvery(types.SIGNUP.REQUEST, signupSaga),
  takeEvery(types.LOGIN.REQUEST, loginSaga),
  takeEvery(types.LOGOUT.REQUEST, logoutSaga),
  takeEvery(types.LOAD_USER_DATA, loadDataSaga),
  ];
}
