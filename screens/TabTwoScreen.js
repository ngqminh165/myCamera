import { StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ListImageCamera from "../components/ListImageCamera";
import { Text, View } from "../components/Themed";
import Profile from "./Profile";
import { Button } from "native-base";

export default function TabTwoScreen() {
  return (
    <>
    <View style={styles.container}>
      <Ionicons style={styles.icon} name="videocam-outline" size={24} color="#52575D"></Ionicons>
      
      <Text style={styles.title}>Profile</Text>                              
      <Button style={styles.buttonDesign}>Logout</Button>
     
      
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      
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
  title2: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight:20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  icon: {
    marginLeft:40
  },
  buttonDesign: {
    marginTop:-45,
    marginLeft:300,
    backgroundColor:"#332D37",
    width: 100,
    height: 40,
    borderRadius: 20,  
    
  }
});
