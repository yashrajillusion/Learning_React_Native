import { Button, StyleSheet, Text, View } from "react-native";

export default function Review({ navigation }) {
  return (
    <View style={style.container}>
      <Text>Review Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate("home");
        }}
        title="Home"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 24,
  },
});
