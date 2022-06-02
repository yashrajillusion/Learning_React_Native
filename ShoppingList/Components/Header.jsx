import { StyleSheet, Text, View } from "react-native";
export const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
Header.defaultProps = {
  title: "Shopping List",
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "darkslateblue",
  },
  text: {
    color: "white",
    fontSize: 23,
    textAlign: "center",
  },
});
