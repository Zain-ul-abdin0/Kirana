import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import BackBtn from "../components/BackBtn";
import { Ionicons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";

import Constants from "expo-constants";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Edit Profile",
    title2: "Change Password",
    title3: "Account",
    check: true
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Notifications",
    title2: "App notifications",
    title3: "Notifications",
    check: false
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Privacy policy",
    title2: "FAQ",
    title3: "More",
    check: true
  }
];

class Item extends Component {
  state = {
    isOnDefaultToggleSwitch: true,
    isOnLargeToggleSwitch: false,
    isOnBlueToggleSwitch: false
  };

  onToggle(isOn) {
    console.log("Changed to " + isOn);
  }
  render() {
    return (
      <View>
        <Text
          style={
            (styles.title, { color: "orange", padding: 10, paddingLeft: 30 })
          }
        >
          {this.props.title3}
        </Text>

        <View style={styles.item}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={styles.title}>{this.props.title}</Text>
            {this.props.check ? (
              <Ionicons name="ios-arrow-forward" size={28} color="grey" />
            ) : (
              <ToggleSwitch onColor="#2196F3" />
            )}
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              top: 10
            }}
          >
            <Text style={styles.title}>{this.props.title2}</Text>
            {this.props.check ? (
              <Ionicons name="ios-arrow-forward" size={28} color="grey" />
            ) : (
              <ToggleSwitch
                onColor="#2196F3"
                isOn={this.state.isOnBlueToggleSwitch}
                onToggle={isOnBlueToggleSwitch => {
                  this.setState({ isOnBlueToggleSwitch });
                  this.onToggle(isOnBlueToggleSwitch);
                }}
              />
            )}
          </View>
        </View>
      </View>
    );
  }
}
export class Settings extends Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
        <BackBtn title="Settings" navigation={this.props.navigation}></BackBtn>

        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              title2={item.title2}
              check={item.check}
              title3={item.title3}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  item: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 100
  },
  title: {
    fontSize: 14,
    color: "grey"
  }
});
