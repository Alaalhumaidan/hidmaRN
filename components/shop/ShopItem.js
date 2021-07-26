import React from 'react';
import { View, Text, Image } from 'react-native';
import {ListItem} from "native-base";

const ShopItem = ({shop, navigation}) => {
    return (
        <View>
         <ListItem onPress={()=> navigation.navigate("ShopDetail", {shop:shop})}>
            <Image source= {{uri : shop.image}} 
            style={{width: 100, height: 100}}>
            </Image>
            <Text>{shop.name}</Text>
        </ListItem>
        </View>
    );
};
export default ShopItem;