import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TutorProfile = () => {
  return (
    <View style={styles.container}>
      {/* <Text>TutorProfile</Text> */}
      <Image source={require("../../../images/userone.png")} style={styles.imagestyle}/>
      <Text style={styles.textone}>Shehiryar</Text>
      <Text style={styles.texttwo}>Shehiryar.ranglerz@gmail.com</Text>
    </View>
  )
}

export default TutorProfile

const styles = StyleSheet.create({
  container:{
            flex:1,
  },
  imagestyle:{
    width:100,
    height:100,
    alignSelf:'center',
    marginTop:20,
  },
  textone:{
    alignSelf:'center',
    fontSize:18,
    fontWeight:'500',
  },
  texttwo:{
     alignSelf:'center',
  },
})