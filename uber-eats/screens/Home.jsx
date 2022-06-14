import { SafeAreaView, StatusBar, Text, View } from "react-native";
import SearchBar from "../Components/Search";
import HeaderTabs from "../Components/HeaderTabs";
export default function Home() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#eee",
        borderWidth: 2,
        borderColor: "red",
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}
