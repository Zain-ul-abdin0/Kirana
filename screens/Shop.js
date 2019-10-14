import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import CartBack from "../components/CartBack";
import { Ionicons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import NewBack from "../components/NewBack";

import Constants from "expo-constants";

const DATA = [
  {
    id: "bd7acbeea-c1b1-4f6c2-aed5-3ad53abb28ba",
    product: "Beverages"
  },
  {
    id: "bd7acbtea-c1b1-4f6c2-aed5-3ad53abb28ba",
    product: "Bakery and Diary"
  },
  {
    id: "bd7acbeva-c1b1-4f6c2-aed5-3ad53abb28ba",
    product: "Fruit "
  },
  {
    id: "bd7acbea-aszsc1b1-4f6c2-aed5-3ad53abb28ba",
    product: "Eggs Meat and Fish"
  },

  {
    id: "bd57acbtea-c1b1-4f6c2-aed5-3ad53abb28ba",
    product: "Bakery and Diary"
  }
];

class Item extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.item}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{this.props.product}</Text>
            <Image
              source={require("../pics/arr.png")}
              style={{ height: 20, width: 20 }}
            />
          </View>
        </View>
      </View>
    );
  }
}
export class Shop extends Component {

  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
        <NewBack navigation={this.props.navigation}></NewBack>

        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item product={item.product} />}
          keyExtractor={item => item.id}
        />

        <View
          style={{
            height: 70,
            width: "100%",
            backgroundColor: "#27A3E3",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40
          }}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around"
              }}
            >
              <Image
                source={require("../pics/mainWhite.png")}
                style={{ height: 50, width: 50 }}
              />
              <Image
                source={require("../pics/3xprofile.png")}
                style={{ height: 50, width: 50 }}
              />
              <Image
                source={require("../pics/3xsupport.png")}
                style={{ height: 50, width: 50 }}
              />
              <Image
                source={require("../pics/3xstar.png")}
                style={{ height: 50, width: 50 }}
              />
              <Image
                source={require("../pics/3xstore.png")}
                style={{ height: 50, width: 50 }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Shop;

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
    height: 80
  },
  title: {
    fontSize: 14,
    color: "white"
  }
});
