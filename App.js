import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store.js'
import './src/config/ReactotronConfig';
import Main from './src';

export default class App extends React.Component {
  render() {
    return (
		<Provider store={ store }>
			<Main />
		</Provider>
    );
  }
}