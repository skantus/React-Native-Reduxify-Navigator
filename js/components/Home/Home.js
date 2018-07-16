import React, { Component } from "react";
import { View, Button } from "react-native";
import { func } from "prop-types";
import style from "./style";

class Home extends Component {
  render() {
    const { goToDetails, goToProfile } = this.props;
    return (
      <View style={style.container}>
        <Button title="Go to Details" onPress={goToDetails} />
        <Button title="Go to Profile" onPress={goToProfile} />
      </View>
    );
  }
}

Home.propTypes = {
  goToDetails: func.isRequired,
  goToProfile: func.isRequired
};

export default Home;
