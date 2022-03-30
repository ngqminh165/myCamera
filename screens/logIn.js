import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { alignContent, flex, flexDirection, marginTop, width } from 'styled-system';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


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
              uri: "https://hdclipartall.com/images/security-camera-clipart-video-surveillance-sign-cctv-camera-vector-art-illustration-612x543.jpg",
            }}
            alt="image"
          />
        </AspectRatio>
        </Box>
      </View>

      <View style={styles.Middle}>
        <Text style={styles.NameText}>Open Camera</Text>
      </View>
      

      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Sign in</Text>
      </View>
      <View style={styles.text2}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")} ><Text style={styles.signupText}> Sign up</Text></TouchableOpacity>
      </View>
      <View >
        <Text style={styles.text3}>Home Server</Text>
        <Text style={styles.text4}>matrix.org</Text>
        <Text style={styles.text4}>Join millions for free on the largest public server</Text>
      </View>
      

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        
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
      <View style={styles.buttonStyle}>
        <Button onPress={() => navigation.navigate("Root")} style={styles.buttonDesign}>
            Sign in
        </Button>
      </View>

      {/* Line
      <View style={styles.lineStyle}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View> */}

      

      {/* Box */}
      {/* <View style={styles.boxStyle}>
      <Box 
        onPress={() => navigation.navigate("#")}  // for navigation 
        style={{height:80, width:80}} 
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
              uri: "https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Box 
        onPress={() => navigation.navigate("#")}  // for navigation
        style={styles.imageStyle}
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
              uri: "https://www.transparentpng.com/thumb/facebook-logo-png/photo-facebook-logo-png-hd-25.png",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Box 
        onPress={() => navigation.navigate("#")}  // for navigation
        style={styles.imageStyle}
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
              uri: "https://www.transparentpng.com/thumb/twitter/bird-twitter-socialmedia-icons-png-5.png",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Box 
        onPress={() => navigation.navigate("#")}  // for navigation
        style={styles.imageStyle}
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
              uri: "https://www.transparentpng.com/thumb/apple-logo/RRgURB-apple-logo-clipart-hd.png",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      </View> */}
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
    backgroundColor: '#fff',
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
    color: "#026efd"
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
    color:"#026efd",
  },

  text4:{
    flexDirection:'row',
    marginLeft:15,
    paddingTop:10,
  },

  signupText:{
    fontWeight:'bold',
    color:"#026efd"
  },
  emailField:{
    marginTop:30,
    marginLeft:15
  },
  emailInput:{
    marginTop:10,
    marginRight:5
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
  buttonDesign:{
    backgroundColor:'#026efd'
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
    justifyContent:'space-around'
  },
});