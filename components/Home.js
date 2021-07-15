import React from "react";
import { ImageBackground, Text, View } from "react-native";
import {HomeBackground, OverLayContainer,
    BottomStyling, ButtonStyling} from "../styles";

const Home = () => {
return (
<HomeBackground source={{uri:"https://kids.kiddle.co/images/1/10/Winniethepooh.png"}} style={{width:"100%", height:"100%", flex:1}}>
<OverLayContainer>
<View>
<Text style={{color:"pink", fontSize:"50px",textAlign:"center"}}> Hello World </Text>
<BottomStyling>
<ButtonStyling onPress={()=>alert("Take me to the SHOP")}>Click here to SKIP</ButtonStyling>
</BottomStyling>
</View>
</OverLayContainer>
</HomeBackground> 

)
};

export default Home;