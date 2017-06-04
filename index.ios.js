import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './app/reducers/root_reducer';
import AppContainer from './app/containers/AppContainer';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

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

// StackNavigator({
//   Home: { screen: Home },
//   ImageIndex: { screen: ImageIndex },
// });

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

AppRegistry.registerComponent('ImageSearcher', () => App);
