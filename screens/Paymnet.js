import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet, Image } from "react-native";
import BackBtn from "../components/BackBtn";

export class Paymnet extends Component {

  
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
        <BackBtn title="Payment " />
        <Text style={{ color: "orange", paddingLeft: 20, paddingTop: 20 }}>
          Name
        </Text>
        <View style={styles.item}>
          <TextInput placeholder="Trevro Parsons" />
        </View>
        <Text style={{ color: "orange", paddingLeft: 20, paddingTop: 20 }}>
          Card Number
        </Text>
        <View style={styles.item}>
          <TextInput placeholder="1234       4567        7869        7890" />
        </View>

        <Text style={{ color: "orange", paddingLeft: 20, paddingTop: 20 }}>
          Expiration Date
        </Text>

        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>Month</Text>
              <View style={[styles.item1]}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <TextInput placeholder="12"></TextInput>

                  <Image
                    source={require("../pics/3xarrow.png")}
                    style={{ width: 15, height: 10, marginTop: 8 }}
                  />
                </View>
              </View>
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>YEAR</Text>
              <View style={[styles.item1]}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <TextInput placeholder="7"></TextInput>

                  <Image
                    source={require("../pics/3xarrow.png")}
                    style={{ width: 15, height: 10, marginTop: 8 }}
                  />
                </View>
              </View>
            </View>

            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>CVV</Text>
              <View style={[styles.item1]}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <TextInput placeholder="457"></TextInput>

                  <Image
                    source={require("../pics/3xarrow.png")}
                    style={{ width: 15, height: 10, marginTop: 8 }}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{ flex: 1, marginBottom: 150 }}>
            <Text style={{ color: "orange", paddingLeft: 20, paddingTop: 20 }}>
              Address
            </Text>
            <View style={styles.item}>
              <TextInput placeholder="20 Lacy Viadaf Apt 23432" />
            </View>
          </View>
        </View>

        <View
          style={{
            height: 50,
            width: "80%",
            backgroundColor: "#27A0E2",
            bottom: 50,
            alignSelf: "center",
            borderRadius: 10
          }}
        >
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <Text style={{ color: "white" }}>Confirm Payment</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Paymnet;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginVertical: 8,
    padding: 20,

    marginHorizontal: 16,
    height: 60
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
