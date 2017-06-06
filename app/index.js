import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/RootReducer';
import AppContainer from './containers/AppContainer';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AppWithNavigationState from './navigators/AppNavigator';

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

export const App = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);
