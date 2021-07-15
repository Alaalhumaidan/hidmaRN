import { makeAutoObservable } from "mobx";
import instance from "./instance";


class ShopStore {
shops = [] ;
loading = true;
constructor(){
    makeAutoObservable(this);
}
fetchShops = async () => {
    try{
const response = await instance.get("/shops");
// here data is fetched 
this.shops = response.data;
this.loading= false;
    }catch(error){
    console.error("fetchShops: ", error);
}
};
}
const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;