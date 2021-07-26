import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
export default RootNavigator = () => {
    return(
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
      headerStyle:{
        backgroundColor:"#90d4ed",
      },
      headerTintColor: "white",
      headerTitleStyle:{
        fontWeight: "bold",
        // fontStyle: 'Century Gothic', monospace,
      }
    }}>
      <Stack.Screen name="Home" component={Home}
      options={{
        headerShown:false,
      }}/>
      <Stack.Screen name="ShopList" component={ShopList}
      options={{title:"Choose a Shop",
      }}/>
      <Stack.Screen name="ShopDetail" component={ShopDetail}
      options={({route})=>{
      const {shop} = route.params;
      return{
        title: shop.name
      };
      }}/>
    </Stack.Navigator>
    )
};
