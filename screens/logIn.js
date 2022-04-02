import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio, Center } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, borderWidth, flex, flexDirection, marginTop, width } from 'styled-system';
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


function Login() {
    const navigation = useNavigation();
  return (


    <View style={styles.container}>
      
      <View style={styles.boxStyle}>
        <Box 
          onPress={() => navigation.navigate("#")}  // for navigation 
          style={{height:100, width:100}} 
          shadow={3}
          _light={{
            backgroundColor: "gray.50",
          }}
          _dark={{
            backgroundColor: "gray.700",
          }}
        >
        <AspectRatio ratio={1 / 1}>
          <Image
            roundedTop="lg"
            
            source={{
              uri: "https://toppng.com/uploads/preview/security-camera-icon-surveillance-camera-icon-white-115534382998iy9sd0qnm.png",
            }}
            alt="image"
          />
        </AspectRatio>
        </Box>
      </View>

      <View style={styles.Middle}>
        <Text style={styles.NameText}>OpenCamera</Text>
      </View>
      

      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Sign-in</Text>
      </View>
      
      <View >
        <Text style={styles.text3}>Home Server: matrix.org</Text>
      </View>
      

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
      <Text style={styles.text4}>Username</Text>
        <View style={styles.emailInput}>
          <Input 
            InputLeftElement={
              
              <Icon
                as={<FontAwesome5 name="user-secret" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            placeholder="Username or Email"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}

          />
        </View>
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
      <Text style={styles.text4}>Password</Text>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            secureTextEntry={true}
            placeholder="Password"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>

      {/* Button */}
      <View style={styles.buttonStyle2}>
        <Button onPress={() => navigation.navigate("Root")} style={styles.buttonDesign}>
            Sign in
        </Button>
      </View>

      <View style={styles.text2}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")} ><Text style={styles.signupText}> Sign-up!</Text></TouchableOpacity>
      </View>
     
      <StatusBar style="auto" />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
     
        <Login />
      
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2E91C',
  },
  LoginText: {
    marginTop:30,
    fontSize:30,
    fontWeight:'bold',
  },
  
  NameText: {
    marginTop:10,
    fontSize:20,
    fontWeight:'bold',
    alignItems:'center',
    color: "#332D37"
  },
  Middle:{
    alignItems:'center',
    justifyContent:'center',
  },
  text2:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:20,
  },
  text3:{
    flexDirection:'row',
    marginLeft:15,
    paddingTop:20,
    fontWeight:'bold',
    color:"#332D37",
  },

  text4:{
    flexDirection:'row',
    marginLeft:5,
    fontWeight:'bold',
    color:"black",
  },

  signupText:{
    fontWeight:'bold',
    color:"red"
  },
  emailField:{
    marginTop:30,
    marginLeft:15
  },
  emailInput:{
    marginTop:10,
    marginRight:5,
    backgroundColor:'white',
  },
  buttonStyle:{
    marginTop:30,
    marginLeft:15,
    marginRight:15
  },
  buttonStyleX:{
    marginTop:12,
    marginLeft:15,
    marginRight:15
  },
  buttonStyle2:{
    marginTop:30,
    alignItems:'center',
    justifyContent:'center',
    fontWeight:'bold',
  },
  buttonDesign:{
    flexDirection:'row',
    backgroundColor:"#332D37",
    width: 100,
    height: 40,
    borderRadius: 20,   
    alignContent: "center",
    alignItems: 'center',
    justifyContent:'center',
    fontWeight:'bold',
  
    
  },
  lineStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    alignItems:'center'
  },
  imageStyle:{
    width:80,
    height:80,
    marginLeft:20,
  },
  boxStyle:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    justifyContent:'space-around',
    
  },
});