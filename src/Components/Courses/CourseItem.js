import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { WHITE } from '../../Utils/Colors'
import { useNavigation } from '@react-navigation/native'
import Courseview from './Courseview'

const CourseItem = (item) => {
  const navigation=useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={() =>{
      navigation.navigate("Courseview")
    }} >
    
    <Image source={(require("../../images/place.png"))} style={{width:'100%', height:"72%",borderRadius:8}}/>
    <Text style={{fontWeight:'600', fontSize:16,marginLeft:3,}}>React Native Components</Text>
     <Text style={{ fontSize:14, marginLeft:3}}>Two types of component are available in react native</Text>
    
     
    </TouchableOpacity>
  )
}

export default CourseItem

const styles = StyleSheet.create({

    container:{
     width:'90%',
     height:270,
     backgroundColor:WHITE,
     elevation:5,
     alignSelf:'center',
     marginTop:moderateScale(20),
     borderRadius:8,
   
    },
})
