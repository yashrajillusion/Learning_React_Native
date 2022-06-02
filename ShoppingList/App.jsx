import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Header } from "./Components/Header";
import { ListOfItem } from "./Components/ListeOfItem";
import { AddNewItem } from "./Components/NewItemAdding";

const data = ["Macbook", "Samsung", "Laptop", "Watch", "Alexa", "Jarvish"];
export default function App() {
  const [items, setItems] = useState(data);
  const addItem = (item) => {
    setItems([item, ...items]);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title="Shopping List" />
      <AddNewItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListOfItem item={item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor: "red",
    marginTop: 35,
    padding: 10,
  },
});
