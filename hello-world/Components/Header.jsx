import { Image, StyleSheet, Text, View } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Image
        source={{
          uri: "https://res.cloudinary.com/yasherosion/image/upload/v1652427746/Chat-user/Yash_resume_photo_faat5i.png",
        }}
        style={styles.img}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});
