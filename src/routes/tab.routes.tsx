import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import InitialPage from "../pages/Initial";
import OrderPage from "../pages/Order";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DonePage from "../pages/Done";
import DebtPage from "../pages/Debt";
import PiecesPage from "../pages/Pieces";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

interface IconProps {
  focused: boolean;
  color: string;
  size: number;
}

export default function InitialRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="inicio"
        initialParams={{ excludeFromTabs: true }}
        component={TabsRoutes}
      />
      <Stack.Screen name="order" component={OrderPage} />
      <Stack.Screen name="pieces" component={PiecesPage} />
      <Stack.Screen name="done" component={DonePage} />
    </Stack.Navigator>
  );
}

const TabsRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#111111",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ size, color }: IconProps) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
        name="initial"
        component={InitialPage}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Contas",
          tabBarIcon: ({ size, color }: IconProps) => (
            <Feather name="dollar-sign" size={size} color={color} />
          ),
        }}
        name="debt"
        component={DebtPage}
      />
    </Tab.Navigator>
  );
};
