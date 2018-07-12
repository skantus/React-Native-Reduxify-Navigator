import { createStackNavigator } from "react-navigation";

import Home from "components/Home";
import Details from "components/Details";
import Profile from "components/Profile";

const RootStack = createStackNavigator({
  Home,
  Details,
  Profile
});

export default RootStack;
