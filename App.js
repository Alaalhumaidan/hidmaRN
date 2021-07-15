import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './components/Home';
import ShopList from './components/shop/ShopList';
import { ThemeProvider } from 'styled-components';

const theme = {
  mainColor: "#293241",
  backgroundColor: "#e0fbfc",
  pink: "#f283a2",
  red: "red",
};

export default function App() {
  return (
<ThemeProvider theme={theme}>
      <View style={styles.container}>
        {/* <Home/> */}
        <ShopList/>
      </View>
</ThemeProvider>

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