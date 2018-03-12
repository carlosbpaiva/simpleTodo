import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './src/navigation/RootNavigation';
import LoginForm from './src/screens/LoginForm'; 
//import './Reactotron.config';

import Reactotron from 'reactotron-react-native'

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers';


Reactotron
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!

import * as firebase from 'firebase';


export default class App extends React.Component {

  state = {
    isLoadingComplete: false,
    hasLogin: true,
  };

  store = createStore(reducer);

  render() {
      return (
            <Provider store={this.store}>
              <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
                <RootNavigation />
              </View >
            </Provider> 
        )
    }

  componentWillMount(){
    firebase.initializeApp({
      apiKey: 'AIzaSyAnPqKQlv0HWLEZsMN794t7RbFSDsJsOJ8',
      authDomain: 'simple-todo-app-ttrn.firebaseapp.com',
      databaseURL: 'https://simple-todo-app-ttrn.firebaseio.com',
      projectId: 'simple-todo-app-ttrn',
      storageBucket: 'gs://simple-todo-app-ttrn.appspot.com'
    });                                                                                                                                                                                                                                                                                                            
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./src/assets/images/robot-dev.png'),
        require('./src/assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
