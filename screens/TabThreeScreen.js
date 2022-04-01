import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import Profile from "./Profile";

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setting</Text>
      <View
        style={styles.separator}
        lightColor="#000000"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
