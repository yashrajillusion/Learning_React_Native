import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { HomeSreen } from "./Compents/HomeSreen";
export default function App() {
  return (
    <View style={styles.container}>
      <HomeSreen />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    marginLeft: 10,
  },
});
