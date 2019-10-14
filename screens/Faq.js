import React, { Component } from "react";
import { Text, View } from "react-native";
import BackBtn from "../components/BackBtn";

export class Faq extends Component {

  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <BackBtn title="FAQ" />

        <View
          style={{
            flex: 1,
            marginLeft: 20,
            marginTop: 20,
            flexWrap: "wrap",
            flexGrow: 0.4
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Installation</Text>

          <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 20,
                backgroundColor: "#39C4FF",
                marginTop: 5
              }}
            ></View>
            <Text
              style={{ color: "#39C4FF", fontWeight: "bold", fontSize: 12 }}
            >
              {" "}
              How can I install and upgrade Dummy Content
            </Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 20,
                backgroundColor: "#39C4FF",
                marginTop: 5
              }}
            ></View>
            <Text
              style={{ color: "#39C4FF", fontWeight: "bold", fontSize: 12 }}
            >
              {" "}
              Dummy Content wont install
            </Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 20,
                backgroundColor: "#39C4FF",
                marginTop: 5
              }}
            ></View>
            <Text
              style={{ color: "#39C4FF", fontWeight: "bold", fontSize: 12 }}
            >
              {" "}
              How can I uninstall and upgrade Dummy Content
            </Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 20,
                backgroundColor: "#39C4FF",
                marginTop: 5
              }}
            ></View>
            <Text
              style={{ color: "#39C4FF", fontWeight: "bold", fontSize: 12 }}
            >
              {" "}
              What are the minimum requirments?
            </Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 50,
                backgroundColor: "#39C4FF",
                marginTop: 5
              }}
            ></View>
            <Text
              style={{ color: "#39C4FF", fontWeight: "bold", fontSize: 12 }}
            >
              {" "}
              How can I install and upgrade Dummy Content
            </Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row", marginTop: 10 }}>
            <View
              style={{
                height: 8,
                width: 8,
                borderRadius: 20,
                backgroundColor: "#39C4FF",
                marginTop: 5
              }}
            ></View>
            <Text
              style={{ color: "#39C4FF", fontWeight: "bold", fontSize: 12 }}
            >
              {" "}
              Dummy Content ?{" "}
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            paddingTop: 30,
            paddingLeft: 20
          }}
        >
          Licensing
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginTop: 10,
            flexGrow: 0.5
          }}
        >
          <View
            style={{
              height: 8,
              width: 8,
              borderRadius: 20,
              backgroundColor: "#39C4FF",
              marginTop: 5,
              marginLeft: 20
            }}
          ></View>
          <Text style={{ color: "#39C4FF", fontWeight: "bold", fontSize: 12 }}>
            {" "}
            Under What License are regular labs extends ?{" "}
          </Text>
        </View>
      </View>
    );
  }
}

export default Faq;
