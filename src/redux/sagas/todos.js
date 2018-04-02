import { call, fork, put, take, takeEvery, select } from 'redux-saga/effects'
import rsf from '../rsf'

import {  addTodo, types } from '../reducers/todos.actions'

function* insertTodo( action ) {
	const user = yield select( state => state.user);
	const {title, text, completed, contact, image} = action;
	const newId = yield call(rsf.database.create, 'todos/' + user.userId, {
		title,
		text,
		completed,
		contact,
		image,
	} );
	yield put(addTodo(newId, title, text, completed, contact, image));
}

function* updateTodo( action ) {
	const user = yield select( state => state.user);
	const {id, title, text, completed, contact, image} = action;
	yield call(rsf.database.update,
		'todos/' + user.userId + '/' + id, {
		title,
		text,
		completed,
		contact,
		image,
	} );	
}

function* toggleTodo( action ) {
	const user = yield select( state => state.user);
	const {id, completed} = action;
	yield call(rsf.database.patch,
		'todos/' + user.userId + '/' + id, {
		completed,
	} );	
}

function* removeTodo( action ) {
	const user = yield select( state => state.user);
	yield call(rsf.database.delete,	'todos/' + user.userId + '/' + action.id);	
}

export default function * todosRootSaga () {
  yield [
    takeEvery(types.INSERT_TODO, insertTodo),
    takeEvery(types.UPDATE_TODO, updateTodo),
    takeEvery(types.TOGGLE_TODO, toggleTodo),
    takeEvery(types.REMOVE_TODO, removeTodo),
  ];
}
