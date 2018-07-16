import React, { Component } from "react";
import AppNavigator from "./components/AppNavigator";

import { createStore, applyMiddleware, combineReducers } from "redux";

import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer
} from "react-navigation-redux-helpers";

import { Provider, connect } from "react-redux";

const navReducer = createNavigationReducer(AppNavigator);

const appReducer = combineReducers({
  nav: navReducer
});

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = state => ({
  state: state.nav
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(appReducer, applyMiddleware(middleware));

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
