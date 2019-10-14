import React from "react";
import { View, Text, TouchableOpacity,SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BackBtn(props) {
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: 80,
        
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        backgroundColor:'white',
        borderColor: "white",
        borderWidth: 1,
        elevation: 4,
        shadowOffset: { width: 15, height: 25 },
        shadowColor: "grey",
        shadowOpacity: 1.5,
        shadowRadius: 10
      }}
    >
      <View style={{ flex: 1, flexDirection: "row",marginTop:10 }}>
        <View style={{ justifyContent: "center", marginLeft: 10 }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Ionicons name="ios-arrow-back" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" ,right:10}}>
            {props.title}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
