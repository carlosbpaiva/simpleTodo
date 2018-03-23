import { call, fork, put, take, takeEvery, select } from 'redux-saga/effects'

import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from '../reducers/user.actions'

import rsf from '../rsf'

function * loginSaga (action) {
  try {
    const user = yield select( state => state.user);
    if( ! action.email ) {
      throw new Error('Please input your email address ');
    }
    if( ! action.password ) {
      throw new Error('Please input your password');
    }
    yield call(rsf.auth.signInWithEmailAndPassword, action.email, action.password );
    yield put(loginSuccess());
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
    takeEvery('LOGIN.REQUEST', loginSaga),
    takeEvery('LOGOUT.REQUEST', logoutSaga)
  ];
}
