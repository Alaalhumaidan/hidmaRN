import React from 'react';
import { View, Text } from 'react-native';

const ShopItem = ({shop}) => {
    return (
        <View>
            <Text>{shop.name}</Text>
        </View>
    );
};
export default ShopItem;