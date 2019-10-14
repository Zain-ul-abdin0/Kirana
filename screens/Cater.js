import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import {
  Container,
  Header,
  Content,
  ListItem,
  Radio,
  Right
} from "native-base";

import Constants from "expo-constants";
import CartBack from "../components/CartBack";
import NewBack from "../components/NewBack";
import Final from "../components/Final";
import BackBtn from "../components/BackBtn";

const DATA = [
  {
    id: "bd7acbea-c1b1-4f6c2-aed5-3ad53abb28ba",
    name: "Harold Wolfe",
    add1: "65 Letha Camp Apt. 20",
    add2: "French Southern Territories",
    add3: "Montserrat",
    add4: "Massachussets",
    check: false,
    no: "305-944-3361"
  },
  {
    id: "bd7ac4bea-c1b1-4f6c2-aed5-3ad53abb28ba",
    name: "Harold Wolfe",
    add1: "65 Letha Camp Apt. 20",
    add2: "French Southern Territories",
    add3: "Montserrat",
    add4: "Massachussets",
    check: false,
    no: "305-944-3361"
  },
  {
    id: "bd7acbea2-c1b1-4f6c2-aed5-3ad53abb28ba",
    name: "Harold Wolfe",
    add1: "65 Letha Camp Apt. 20",
    add2: "French Southern Territories",
    add3: "Montserrat",
    add4: "Massachussets",
    check: false,
    zain: true,
    no: "305-944-3361"
  }
];

class Item extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.item}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image
              source={require("../pics/product.png")}
              style={{ height: 100, width: 100 }}
            />
            <View style={{ flex: 1, justifyContent: "space-around" }}>
              <Text style={{ fontSize: 10, color: "#B4B4B4" }}>
                Seller Name BuyKrina
              </Text>
              <Text style={{ fontSize: 12 }}>Classic Elachi Rusk</Text>
              <Text
                style={{ fontSize: 10, color: "#60CEFF", fontWeight: "bold" }}
              >
                $33
              </Text>

              <Text style={{ fontSize: 10, color: "#B4B4B4" }}>300g</Text>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "flex-end",
                left: 20
              }}
            >
              <Image
                source={require("../pics/cross.png")}
                style={{ height: 15, width: 15, right: 10 }}
              />

              <View
                style={{
                  height: 30,
                  width: 100,
                  borderWidth: 2,
                  borderTopLeftRadius: 10,
                  borderColor: "orange",
                  top: 20
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <Text style={{ color: "orange", fontSize: 30, right: -10 }}>
                    -
                  </Text>
                  <Text style={{ color: "orange", fontSize: 20 }}>2</Text>
                  <Text style={{ color: "orange", fontSize: 20, left: -5 }}>
                    +
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {this.props.zain ? (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10
            }}
          >
            <Text
              style={{ color: "#60CEFF", fontWeight: "bold", paddingLeft: 20 }}
            >
              Rs 192
            </Text>
            <View
              style={{
                height: 30,
                width: 120,
                backgroundColor: "#F17F39",
                borderRadius: 10
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "white" }}>Checkout</Text>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}
export class Carter extends Component {
 
  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
        <Final title="Cart" navigation={this.props.navigation}></Final>

        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ color: "orange", padding: 10 }}>Total 4 items</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              name={item.name}
              add2={item.add2}
              add3={item.add3}
              add4={item.add4}
              zain={item.zain}
              add1={item.add1}
              no={item.no}
              check={item.check}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default Carter;

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
    height: 120,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  item1: {
    paddingTop: 20,
    borderTopColor: "#F7F7F7",
    borderWidth: 1,
    borderColor: "#DCDCDC",
    height: 150
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black"
  },
  title2: {
    paddingTop: 5,
    color: "#919191"
  }
});
