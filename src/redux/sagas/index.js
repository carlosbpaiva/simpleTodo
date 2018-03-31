import user from './user';
import todos from './todos';

export default function * rootSaga () {
  yield [
    user(),
    todos()
  ]
}
