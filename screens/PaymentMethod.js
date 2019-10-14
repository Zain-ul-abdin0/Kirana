import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet, Image } from "react-native";
import BackBtn from "../components/BackBtn";
import {
  Container,
  Header,
  Content,
  ListItem,
  Radio,
  Right
} from "native-base";

export class PaymentMethod extends Component {

  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
        <BackBtn title="Payment Options" />
        <View style={styles.item}>
          <View
            style={{
              alignItems: "center",
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text>Cash on Delivery</Text>

            <Radio
              style={{ marginRight: 20 }}
              color={"#c9c9c9"}
              selectedColor={"#f0ad4e"}
              selected={true}
            />
          </View>
        </View>

        <View style={styles.item}>
          <View
            style={{
              alignItems: "center",
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text>Pay online</Text>

            <Radio
              style={{ marginRight: 20 }}
              color={"#c9c9c9"}
              selectedColor={"#f0ad4e"}
              selected={false}
            />
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text style={{ top: 20, color: "#39C4FF" }}>192</Text>
          <View
            style={{
              width: 100,
              height: 30,
              backgroundColor: "orange",
              marginLeft: 250,
              marginBottom: 10,
              borderRadius: 10
            }}
          >
            <Text
              style={{ color: "white", textAlign: "center", paddingTop: 5 }}
            >
              Confirm
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default PaymentMethod;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginVertical: 8,
    padding: 20,

    marginHorizontal: 16,
    height: 100
  },

  item1: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    width: 100,
    height: 60
  }
});
