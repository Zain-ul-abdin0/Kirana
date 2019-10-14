import React from "react";
import { View, Text, TouchableOpacity,SafeAreaView ,TextInput,Image} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CartBack(props) {
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: 150,
        
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
      <View style={{ flex: 1, flexDirection: "row",marginTop:30 }}>
        <View style={{  marginLeft: 10 }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Ionicons name="ios-arrow-back" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent:'space-between',marginBottom:20 }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" ,right:10}}>
            {props.title}
          </Text>


<View style={{width:'95%',height:35,backgroundColor:'#B4B4B4',borderRadius:20,marginRight:10}}>

<View style={{flex:1,paddingLeft:15,flexDirection:'row',alignItems:'center'}}>
<    Image source={require('../pics/search.png')} style ={{height:15,width:15}}/>
<Text style={{color:'white',paddingLeft:10}}>Search</Text>
</View>

</View>
        </View>

      </View>
    </SafeAreaView>
  );
}
