import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { WHITE } from '../../Utils/Colors'

const Login = () => {
  return (
    <View style={styles.container}>

      <Image source={require("../../images/Loginone.jpg")} style={styles.imagestyle}/>
      <Text style={styles.User}>Create User With</Text>

      <TouchableOpacity style={styles.loginBtn}>
           <Image source={require("../../images/Google.png")} style={styles.googleimage}/>
           <Text style={styles.googletext}>Login With Google</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  imagestyle:{
    width:'100%',
  },
  User:{
        fontSize:16,
        fontWeight:600,
  },
  loginBtn:{
    width:'90%',
    height:50,
    backgroundColor:WHITE,
    elevation:6,
    marginVertical:10,
    alignSelf:'center',
     flexDirection:"row",
     alignItems:'center',
     justifyContent:'center',
  },
  googleimage:{
       
        width:'16',
        height:15, 
        // padding:10,
        // paddingLeft:10,
        marginLeft:4,     
  },
  googletext:{
    // marginLeft:5,
    paddingLeft:7,
    
  }

})