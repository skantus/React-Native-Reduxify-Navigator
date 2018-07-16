import React from "react";
import { createStackNavigator } from "react-navigation";

import Home from "components/Home";
import Details from "components/Details";
import Profile from "components/Profile";

/* eslint-disable */
const withNavigation = Component => ({ navigation: { navigate, goBack } }) => (
  <Component navigateTo={routeName => navigate(routeName)} goBack={goBack} />
);

const RootStack = createStackNavigator({
  Home: {
    screen: withNavigation(({ navigateTo }) => (
      <Home
        goToDetails={() => navigateTo("Details")}
        goToProfile={() => navigateTo("Profile")}
      />
    )),
    navigationOptions: { title: "Home" }
  },
  Details: {
    screen: Details,
    navigationOptions: { title: "Details" }
  },
  Profile: {
    screen: Profile,
    navigationOptions: { title: "Profile" }
  }
});

export default RootStack;
