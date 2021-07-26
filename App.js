
import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './components/Home';
import ShopList from './components/shop/ShopList';
import { ThemeProvider } from 'styled-components';
import ShopDetail from "./components/shop/ShopDetail";
import { NativeBaseProvider } from 'native-base';
//navigation
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from "./components/Navigation/index";

const theme = {
  mainColor: "#293241",
  backgroundColor: "#e0fbfc",
  pink: "#f283a2",
  red: "red",
};

//stack bara 

export default function App() {
  return (
<NativeBaseProvider>
<ThemeProvider theme={theme}>
  <NavigationContainer>
   <RootNavigator/>
  </NavigationContainer>
</ThemeProvider>
</NativeBaseProvider>

  );
}
// export const Example = () => {
//   return (
//     <Box
//       bg="primary.400"
//       p={4}
//       _text={{
//         fontSize: "md",
//         fontWeight: "bold",
//         color: "white",
//       }}
//     >
//       This is a Box
//     </Box>
//   )
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});