import {View, Image, Text} from 'react-native';
import React from 'react';
import { observer } from 'mobx-react';
import { Spinner } from 'native-base';
import shopStore from '../../stores/shopStore';
import productStore from '../../stores/productStore';
import ProductList from '../product/ProductList';

const ShopDetail = ({navigation, route}) => {
    const {shop} = route.params;
    if(shopStore.loading) return <Spinner/>;

    const products = shop.products.map((product)=>
    productStore.getProductById(product.id));
    return (
        <View>
            <Image source= {{uri : shop.image}} 
            style={{width: 100, height: 100}}>
            </Image>
            <Text>{shop.name}</Text>
            <ProductList products={products}/>
        </View>
    )
}

export default observer(ShopDetail);