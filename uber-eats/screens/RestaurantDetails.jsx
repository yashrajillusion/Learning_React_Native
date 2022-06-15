import { Text, View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../Components/RestaurantDetails/About";
import MenuItem from "../Components/RestaurantDetails/MenuItem";

export default function RestaurantDetail() {
  return (
    <View>
      <About />
      <Divider width={1.5} style={{ marginVertical: 20 }} />

      <MenuItem />
    </View>
  );
}
