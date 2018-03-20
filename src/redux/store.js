import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';
import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'

import reducers from './reducers/user'
import rootSaga from './sagas'

const middlewares = [];
const enhancers = [];

Reactotron.useReactNative({
  asyncStorage: { ignore: ['secret'] }
})

// add some more plugins for redux & redux-saga
Reactotron.use(reduxPlugin())
Reactotron.use(sagaPlugin())

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

if (__DEV__) {
	enhancers.push(composeWithDevTools(applyMiddleware(...middlewares)))
} else {
	enhancers.push(applyMiddleware(...middlewares));
}

const getCreateStore = __DEV__ ? Reactotron.createStore : createStore;
const store = getCreateStore(reducers, compose(...enhancers));

sagaMiddleware.run(rootSaga);

export default store
