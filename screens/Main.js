import React, { Component } from "react";
import { Text, View,Image,ScrollView,Dimensions,StyleSheet } from "react-native";
import NewBack from "../components/NewBack";

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
export class Main extends Component {

  
  render() {
    return (
      <View style={{flex:1}}>
        <NewBack />

        <View style={{flex:1}}>
          <Text style={{ color: "orange", alignSelf: "center" }}>
            Become our monthly member to get discount
          </Text>


        <Image source={require('../pics/3xbanner1.png')} style={{ width:'100%',height:100}}/>

        <Image source={require('../pics/3xslider.png')} style={{ width:'100%',height:200,marginTop:5}}/>
        
            <Text style={{fontWeight:'bold'}}>Snacks & Branded Foods</Text>
       


        <ScrollView
        horizontal = {true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={true}
        >
        <View
        style={{
            backgroundColor:'white',
            
            flex:1,
            width:'50%',
            justifyContent:'center',
            alignItems:'center'
        }}
        
        >
        
        <View style={styles.item}> 
              <View style={{flex:1,flexDirection:'column',}}>
                <Image source={require('../pics/product.png')} style={{height:90,width:90}}/>
                <View style={{flex:1,}}>
                    <Text style={{fontSize:10,color:'#B4B4B4'}}>Seller Name BuyKrina</Text>
                    <Text style={{fontSize:12}}>Classic Elachi Rusk</Text>
                    <Text style={{fontSize:10,color:'#60CEFF',fontWeight:'bold'}}>$33</Text>
                    
                    <Text  style={{fontSize:10,color:'#B4B4B4'}}>300g</Text>
                    
                </View>
       
       <View style={{flex:1,justifyContent:'space-between',alignItems:'flex-end',left:20}}>
                
              <View style={{height:30,width:100,borderTopLeftRadius:10,backgroundColor:'orange',top:20}}>
              <View style={{justifyContent:'center',alignItems:'center',paddingTop:8}}>
<Text style={{color:'white'}}>Add+</Text>
</View>
<View style={{flex:1,flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>


</View>
</View>
</View>
              </View>

        </View>


        
        </View>

       

        <View
        style={{
            backgroundColor:'white',
            
            flex:1,
            width:'50%',
            justifyContent:'center',
            alignItems:'center'
        }}
        
        >
        
        <View style={styles.item}> 
              <View style={{flex:1,flexDirection:'column',}}>
                <Image source={require('../pics/product.png')} style={{height:90,width:90}}/>
                <View style={{flex:1,}}>
                    <Text style={{fontSize:10,color:'#B4B4B4'}}>Seller Name BuyKrina</Text>
                    <Text style={{fontSize:12}}>Classic Elachi Rusk</Text>
                    <Text style={{fontSize:10,color:'#60CEFF',fontWeight:'bold'}}>$33</Text>
                    
                    <Text  style={{fontSize:10,color:'#B4B4B4'}}>300g</Text>
                    
                </View>
       
       <View style={{flex:1,justifyContent:'space-between',alignItems:'flex-end',left:20}}>
                
              <View style={{height:30,width:100,borderTopLeftRadius:10,backgroundColor:'orange',top:20}}>
              <View style={{justifyContent:'center',alignItems:'center',paddingTop:8}}>
<Text style={{color:'white'}}>Add+</Text>
</View>
<View style={{flex:1,flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>


</View>
</View>
</View>
              </View>

        </View>


        
        </View>
        <View
        style={{
            backgroundColor:'white',
            
            flex:1,
            width:'50%',
            justifyContent:'center',
            alignItems:'center'
        }}
        
        >
        
        <View style={styles.item}> 
              <View style={{flex:1,flexDirection:'column',}}>
                <Image source={require('../pics/product.png')} style={{height:90,width:90}}/>
                <View style={{flex:1,}}>
                    <Text style={{fontSize:10,color:'#B4B4B4'}}>Seller Name BuyKrina</Text>
                    <Text style={{fontSize:12}}>Classic Elachi Rusk</Text>
                    <Text style={{fontSize:10,color:'#60CEFF',fontWeight:'bold'}}>$33</Text>
                    
                    <Text  style={{fontSize:10,color:'#B4B4B4'}}>300g</Text>
                    
                </View>
       
       <View style={{flex:1,justifyContent:'space-between',alignItems:'flex-end',left:20}}>
                
              <View style={{height:30,width:100,borderTopLeftRadius:10,backgroundColor:'orange',top:20}}>
              <View style={{justifyContent:'center',alignItems:'center',paddingTop:8}}>
<Text style={{color:'white'}}>Add+</Text>
</View>
<View style={{flex:1,flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>


</View>
</View>
</View>
              </View>

        </View>


        
        </View>
       

        <View
        style={{
            backgroundColor:'white',
            
            flex:1,
            width:'50%',
            justifyContent:'center',
            alignItems:'center'
        }}
        
        >
        
        <View style={styles.item}> 
              <View style={{flex:1,flexDirection:'column',}}>
                <Image source={require('../pics/product.png')} style={{height:90,width:90}}/>
                <View style={{flex:1,}}>
                    <Text style={{fontSize:10,color:'#B4B4B4'}}>Seller Name BuyKrina</Text>
                    <Text style={{fontSize:12}}>Classic Elachi Rusk</Text>
                    <Text style={{fontSize:10,color:'#60CEFF',fontWeight:'bold'}}>$33</Text>
                    
                    <Text  style={{fontSize:10,color:'#B4B4B4'}}>300g</Text>
                    
                </View>
       
       <View style={{flex:1,justifyContent:'space-between',alignItems:'flex-end',left:20}}>
                
              <View style={{height:30,width:100,borderTopLeftRadius:10,backgroundColor:'orange',top:20}}>
              <View style={{justifyContent:'center',alignItems:'center',paddingTop:8}}>
<Text style={{color:'white'}}>Add+</Text>
</View>
<View style={{flex:1,flexDirection:'row',alignItems:"center",justifyContent:'space-between'}}>


</View>
</View>
</View>
              </View>

        </View>


        
        </View>
         </ScrollView>


        
        
        </View>
      

      
    
        
      
      </View>
    );
  }
}

export default Main;

const styles= StyleSheet.create({
    item: {
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 190,
        width:190,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5
      },
      item1: {
          paddingTop:20,
        borderTopColor:'#F7F7F7',   
          borderWidth:1,
      borderColor:'#DCDCDC',
         height: 150
       },
})