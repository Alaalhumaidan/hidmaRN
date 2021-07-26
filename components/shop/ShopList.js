import React from 'react';
import {View, Text} from "react-native";
// import {List} from "native-base";
import shopStore from '../../stores/shopStore';
import ShopItem from "./ShopItem";
import { observer } from 'mobx-react';

const ShopList = ({navigation}) => {

    if(shopStore.loading) return <Text>loadingg</Text>

    const shopList = shopStore.shops.map(shop=>
        <ShopItem shop={shop} key={shop.id} navigation={navigation} />)
        return <View>
        {shopList}
         </View>;
};

export default observer(ShopList);