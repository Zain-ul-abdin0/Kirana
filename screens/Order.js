import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import BackBtn from "../components/BackBtn";
import { Ionicons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";

import Constants from "expo-constants";

const DATA = [
  {
    id: "bd7acbea-c1b1-4f6c2-aed5-3ad53abb28ba",
    order: "Order 12091",
    date: "02 Dec 2019",
    text: "Pending",
    count: "6 ITEMS",
    text2: "Total",
    price: "$23",
    color: "#B4B4B4",

    color2: "#249EDF",
    color3: "#AEAEAE",
    check: true
  },
  {
    id: "bd7acbea-cf1b1-46c2-aed5-3ad53abb28ba",
    order: "Order 12091",
    date: "02 Dec 2019",
    text: "Pending",
    count: "6 ITEMS",
    text2: "Total",
    price: "$23",
    color: "#27A3E3",

    color2: "#249EDF",
    color3: "#AEAEAE",
    check: false
  },
  {
    id: "bd7acbea-fc1b1-46c2-aed5-3ad53abb28ba",
    order: "Order 12091",
    date: "02 Dec 2019",
    text: "Pending",
    count: "6 ITEMS",
    text2: "Total",
    price: "$23",
    color: "#B4B4B4",

    color2: "#249EDF",
    color3: "#AEAEAE",
    check: true
  },
  {
    id: "bd7acbea-c1b1-46cd2-aed5-3ad53abb28ba",
    order: "Order 12091",
    date: "02 Dec 2019",
    text: "Pending",
    count: "6 ITEMS",
    text2: "Total",
    price: "$23",
    color: "#27A3E3",
    color2: "#249EDF",
    color3: "#AEAEAE",
    check: false
  }
];

class Item extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={[styles.item, { backgroundColor: this.props.color }]}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={styles.title}>{this.props.order}</Text>
            <View
              style={{
                backgroundColor: "#D8D8D8",
                width: 110,
                left: 20,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                alignItems: "center"
              }}
            >
              <Text style={styles.title}>{this.props.text}</Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Image
                source={require("../pics/time.png")}
                style={{ height: 20, width: 20, resizeMode: "contain" }}
              />
              <Text style={[styles.title, { paddingLeft: 10 }]}>
                {this.props.date}
              </Text>
            </View>
            <Text style={styles.title}>{this.props.count}</Text>
          </View>

          {this.props.check ? (
            <View
              style={{
                borderWidth: 1,
                width: "100%",
                top: 10,
                borderColor: this.props.color3
              }}
            ></View>
          ) : (
            <View
              style={{
                borderWidth: 1,
                width: "100%",
                top: 10,
                borderColor: this.props.color2
              }}
            ></View>
          )}

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20
            }}
          >
            <Text style={styles.title}>{this.props.text}</Text>
            <Text style={styles.title}>{this.props.price}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export class Order extends Component {

  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
        <BackBtn
          title="Order History"
          navigation={this.props.navigation}
        ></BackBtn>

        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              color={item.color}
              color2={item.color2}
              color3={item.color3}
              check={item.check}
              order={item.order}
              date={item.date}
              text={item.text}
              count={item.count}
              text2={item.text2}
              price={item.price}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default Order;

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
    height: 150
  },
  title: {
    fontSize: 14,
    color: "white"
  }
});
