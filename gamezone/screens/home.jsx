import { Button, StyleSheet, Text, View } from "react-native";
import { globalstyle } from "../styles/global";

export default function Home({ navigation }) {
  return (
    <View style={globalstyle.container}>
      <Text>Home Screen Y</Text>
      <Button
        onPress={() => {
          navigation.navigate("about");
        }}
        title="Go about"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
