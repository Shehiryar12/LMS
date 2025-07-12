import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { THEME_COLOR } from '../Utils/Colors'
import { SPLASH_LINE } from '../Utils/Strings'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const navigation=useNavigation();
  useEffect(()=>{
   setTimeout(()=>{
         navigation.navigate("ChooseUserType")
   },3000)
  },[])
  return (
    <View style={styles.container}>
  
      <Image source={require('../images/degree.png')} styles={styles.logo}/>
      <Text style={styles.textone}>{SPLASH_LINE}</Text>
      
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:THEME_COLOR
  },

  textone:{
    fontSize:14,
    fontWeight:600,
    
    
  }

  // logo:{
  //   width:50,
  //   height:30, 
  // },
})