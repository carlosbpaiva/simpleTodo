import { call, fork, put, take, takeEvery } from 'redux-saga/effects'

import {
  types,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  syncUser
} from '../reducers/user.actions'

import rsf from '../rsf'

function * loginSaga (action) {
  try {
    yield call(rsf.auth.signInWithEmailAndPassword, action.email, action.password );
    yield put(loginSuccess());
  } catch (error) {
    yield put(loginFailure('Some error occured:' + error));
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
    takeEvery(types.LOGIN.REQUEST, loginSaga),
    takeEvery(types.LOGOUT.REQUEST, logoutSaga)
  ];
}
