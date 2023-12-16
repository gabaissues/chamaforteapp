import { NavigationContainer } from '@react-navigation/native'
import TabRoutes from './tab.routes'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from '../pages/Login'

const Stack = createNativeStackNavigator()

export default function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" component={LoginPage} />
        <Stack.Screen name="initial" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}