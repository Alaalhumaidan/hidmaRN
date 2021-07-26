import React from 'react';
import { View, Image, Text } from 'react-native';
import { ListItem } from 'native-base';

const ProductItem = ({product}) => {
    return(
        <View>
        <ListItem>
            <Image 
            source= {{uri : product.image}} 
            style={{width: 100, height: 100}}>
            </Image>
            <Text>{product.name}</Text>
            </ListItem>
        </View>
    );
};

export default ProductItem;