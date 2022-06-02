import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export const AddNewItem = ({ addItem }) => {
  const [text, setText] = useState("");
  const handelInput = (value) => {
    setText(value);
  };
  return (
    <View>
      <TextInput
        value={text}
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={handelInput}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addItem(text);
          setText("");
        }}
      >
        <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: "#DDDDDD",
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});
