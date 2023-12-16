import React from "react";

import LoginPage from "./src/pages/Login";
import InitialPage from "./src/pages/Initial";
import OrderPage from './src/pages/Order'
import PiecesPage from "./src/pages/Pieces";
import DonePage from './src/pages/Done/index';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Routes from "./src/routes";

const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <Routes />
  )
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator initialRouteName="initial">
//         <Tab.Screen options={{ headerShown: false }} name="login" component={LoginPage} />
//         <Tab.Screen options={{ headerShown: false }} name="initial" component={InitialPage} />
//         <Tab.Screen options={{ headerShown: false }} name="order" component={OrderPage} />
//         <Tab.Screen options={{ headerShown: false }} name="pieces" component={PiecesPage} />
//         <Tab.Screen options={{ headerShown: false }} name="done" component={DonePage} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
