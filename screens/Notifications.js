// import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from "native-base";
import Main from "../screens/Main";
import Dummy from "./Dummy";

// export default class Notification extends Component {
//   render() {
//     return (
//       <Container>

//          <Tabs style={{marginTop:25}}>
//           <Tab
//           heading="OFFERS" tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'orange'}} activeTabStyle={{backgroundColor: 'orange'}} activeTextStyle={{color: 'white', fontWeight: 'normal'}}
//           >
//            <Dummy/>
//           </Tab>
//           <Tab heading="Tab1"
//                     heading="ALERTS" tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'orange'}} activeTabStyle={{backgroundColor: 'orange'}} activeTextStyle={{color: 'white', fontWeight: 'normal'}}

//           >
//            <Dummy/>
//           </Tab>
//         </Tabs>
//       </Container>
//     );
//   }
// }

import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";
import CartBack from "../components/CartBack";
import { Ionicons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
import NewBack from "../components/NewBack";

import Constants from "expo-constants";
import BackBtn from "../components/BackBtn";

const DATA = [
  {
    id: "bd7acbeea-c1b1-4f6c2-aed5-3ad53abb28ba",
    product: "Him rendered may attendeddid now preference unpleasing"
  },
  {
    id: "bd7acbtea-c1b1-4f6c2-aed5-3ad53abb28ba",
    product: "Him rendered may attendeddid now preference unpleasing"
  },
  {
    id: "bd7acbeva-c1b1-4f6c2-aed5-3ad53abb28ba",
    product: "Him rendered may attendeddid now preference unpleasing"
  },
  {
    id: "bd7acbea-aszsc1b1-4f6c2-aed5-3ad53abb28ba",
    product: "Him rendered may attendeddid now preference unpleasing"
  },

  {
    id: "bd57acbtea-c1b1-4f6c2-aed5-3ad53abb28ba",
    product: "Him rendered may attendeddid now preference unpleasing"
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
            <Image
              source={require("../pics/3xbell_ic.png")}
              style={{ height: 20, width: 20, marginRight: 20 }}
            />

            <Text>{this.props.product}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export class Notifications extends Component {
 
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#F7F7F7" }}>
        <Container>
          <Tabs style={{ marginTop: 25 }}>
            <Tab
              heading="OFFERS"
              tabStyle={{ backgroundColor: "white" }}
              textStyle={{ color: "orange" }}
              activeTabStyle={{ backgroundColor: "orange" }}
              activeTextStyle={{ color: "white", fontWeight: "normal" }}
            >
              <Dummy />
            </Tab>
            <Tab
              heading="Tab1"
              heading="ALERTS"
              tabStyle={{ backgroundColor: "white" }}
              textStyle={{ color: "orange" }}
              activeTabStyle={{ backgroundColor: "orange" }}
              activeTextStyle={{ color: "white", fontWeight: "normal" }}
            >
              <Dummy />
            </Tab>
          </Tabs>
        </Container>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item product={item.product} />}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

export default Notifications;

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
