import { StatusBar } from "expo-status-bar";
import Home from "./screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./screens/about";
import Review from "./screens/review";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="about" component={About} />
        <Stack.Screen name="review" component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
