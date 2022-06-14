import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HeaderTabs() {
  return (
    <SafeAreaView>
      <HeaderButton text="Delivery" />
      <HeaderButton text="Pickup" />
    </SafeAreaView>
  );
}

const HeaderButton = ({ text }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  text: {
    color: "white",
    fontSize: 15,
  },
});
