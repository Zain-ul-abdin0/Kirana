import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import BackBtn from "../components/BackBtn";
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
  }
];

class Item extends Component {
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.item}>
          <View style={{ flex: 1, marginLeft: 20 }}>
            <Text style={styles.title}>{this.props.name}</Text>
            <Text style={styles.title2}>{this.props.add1}</Text>
            <Text style={styles.title2}>{this.props.add2}</Text>
            <Text style={styles.title2}>{this.props.add3}</Text>
            <Text style={styles.title2}>{this.props.add4}</Text>
          </View>
        </View>

        <View style={{ height: 40, width: "100%", backgroundColor: "white" }}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ paddingLeft: 20, color: "grey" }}>
              Choose delivery slot for this address
            </Text>
          </View>
        </View>

        <View
          style={{ width: "100%", height: 100, backgroundColor: "#C6C6C6" }}
        >
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#F57C35",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ paddingBottom: 10, color: "white" }}>Thu</Text>
                <Text style={{ color: "white" }}>15 Apr</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: "column", paddingLeft: 30 }}>
              <Text style={{ paddingBottom: 10, color: "white" }}>Thu</Text>
              <Text style={{ color: "white" }}>15 Apr</Text>
            </View>

            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ paddingBottom: 10, color: "white" }}>Thu</Text>
              <Text style={{ color: "white" }}>15 Apr</Text>
            </View>

            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ paddingBottom: 10, color: "white" }}>Thu</Text>
              <Text style={{ color: "white" }}>15 Apr</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            flexGrow: 0.5,
            marginTop: 30
          }}
        >
          <Text style={([styles.title], { paddingLeft: 20, color: "grey" })}>
            8am to 11am
          </Text>

          <Radio
            style={{ marginRight: 20 }}
            color={"#c9c9c9"}
            selectedColor={"#f0ad4e"}
            selected={true}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            flexGrow: 0.5,
            marginTop: 30
          }}
        >
          <Text style={([styles.title], { paddingLeft: 20, color: "black" })}>
            2am to 9pm
          </Text>

          <Radio
            style={{ marginRight: 20 }}
            color={"#c9c9c9"}
            selectedColor={"#f0ad4e"}
            selected={false}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            flexGrow: 0.5,
            marginTop: 30
          }}
        >
          <Text style={([styles.title], { paddingLeft: 20, color: "grey" })}>
            4am to 8am
          </Text>

          <Radio
            style={{ marginRight: 20 }}
            color={"#c9c9c9"}
            selectedColor={"#f0ad4e"}
            selected={true}
          />
        </View>

        <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
          <View
            style={{
              height: 40,
              width: "80%",
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
              <Text style={{ color: "white" }}>Proceed Payment</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export class ChooseAddress extends Component {

  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
        <BackBtn
          title="Change Address"
          navigation={this.props.navigation}
        ></BackBtn>

        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item
              name={item.name}
              add2={item.add2}
              add3={item.add3}
              add4={item.add4}
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

export default ChooseAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  item: {
    borderTopColor: "#F7F7F7",
    borderWidth: 1,
    borderColor: "#DCDCDC",
    marginTop: 10,
    height: 150
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
