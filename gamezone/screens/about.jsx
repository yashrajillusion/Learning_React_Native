import { Button, StyleSheet, Text, View } from "react-native";

export default function About({ navigation }) {
  return (
    <View style={style.container}>
      <Text>About Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate("review");
        }}
        title="go review"
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
