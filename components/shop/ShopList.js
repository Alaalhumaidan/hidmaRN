import React from 'react';
import {View} from "react-native";
import shopStore from '../../stores/shopStore';
import ShopItem from "./ShopItem";


const ShopList = () => {
    const shopList = shopStore.shops.map(shop=>
        <ShopItem shop={shop} key={shop.id}/>)
        return <View>
            {shopList}
        </View>;
};

export default ShopList;