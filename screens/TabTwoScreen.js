import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import Profile from "./Profile";
import { Button } from "native-base";

export default function TabTwoScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>                              
        <Button style={styles.buttonDesign}>Logout</Button>
        <Profile/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,  
  },
  
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft:20,
  },
  buttonDesign: {
    marginLeft:300,
    backgroundColor:"#332D37",
    width: 100,
    height: 40,
    borderRadius: 20,
  }
});
