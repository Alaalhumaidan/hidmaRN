
import {makeAutoObservable} from "mobx";

import instance from "./instance";

 class ProductStore{
     products = [];
    loading = true;
     constructor(){
         //for when data is updated, compnents will be re rendered
         makeAutoObservable(this);
     }
   
     fetchProducts = async () => {
        try{
    const response = await instance.get("/products");
    this.products = response.data;
    this.loading= false;
        }catch(error){
        console.error("fetchProducts: ", error);
    }
     };
// async a synchronous : it will make the request 

    getProductId = (productId)=>
    this.products.find((product)=>
    product.id === productId);   
}
    const productStore = new ProductStore();
    productStore.fetchProducts();
 
export default productStore;
