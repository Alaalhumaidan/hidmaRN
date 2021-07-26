import React from 'react';
import {View} from "react-native";
import { List, Spinner } from 'native-base';
import ProductItem from "./ProductItem";
import productStore from '../../stores/productStore';
const ProductList = ({products}) => {
    if(productStore.loading) return <Spinner/>
    const productList = products.map (product =>
         <ProductItem product={product} key={product.id}/>)
    return (
        <View>
    <List>
    {productList}
    </List>
        </View>
    );
};

export default ProductList;