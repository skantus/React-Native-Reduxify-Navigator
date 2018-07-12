import React from "react";
import { View, Button } from "react-native";
import { shape } from "prop-types";
import style from "./style";

class Home extends React.Component {
  render() {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <View style={style.container}>
        <Button title="Go to Details" onPress={() => navigate("Details")} />
        <Button title="Go to Profile" onPress={() => navigate("Profile")} />
      </View>
    );
  }
}

Home.propTypes = {
  navigation: shape({}).isRequired
};

export default Home;
