function* getTodo() {
  const firstTodo = yield call(rsf.database.read, 'todos/1');
  yield put(gotTodo(firstTodo));
}
