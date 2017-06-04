import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './app/reducers/root_reducer';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
  return createStore(rootReducer, initialState, enhancer);
}

const store = configureStore({});

class ImageSearcher extends Component {
  render() {
    return (
      <View>
        <Text>IMAGE SEARCHER IS WORKING</Text>
      </View>
    );
  }
}

const App = () => (
  <Provider store={store}>
    <ImageSearcher />
  </Provider>
);

AppRegistry.registerComponent('ImageSearcher', () => App);
