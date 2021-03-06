import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC4D55o2ewoc0rlorFAWJ7aGirEZ3RSCxw',
      authDomain: 'udemy-manager-60344.firebaseapp.com',
      databaseURL: 'https://udemy-manager-60344.firebaseio.com',
      storageBucket: 'udemy-manager-60344.appspot.com',
      messagingSenderId: '319660636870'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
