import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAnPqKQlv0HWLEZsMN794t7RbFSDsJsOJ8',
  authDomain: 'simple-todo-app-ttrn.firebaseapp.com',
  databaseURL: 'https://simple-todo-app-ttrn.firebaseio.com',
  projectId: 'simple-todo-app-ttrn',
  storageBucket: 'gs://simple-todo-app-ttrn.appspot.com'
});  

const rsf = new ReduxSagaFirebase(firebaseApp)

export default rsf
