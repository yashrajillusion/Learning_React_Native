import { SafeAreaView, StyleSheet, Image, Text, View } from "react-native";

export const HomeSreen = () => {
  //3pn 28w
  return (
    <SafeAreaView>
      <View>
        <Image
          style={sytyles.logo}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
      </View>
    </SafeAreaView>
  );
};
const sytyles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
