import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { WHITE } from '../../../Utils/Colors'
import { useNavigation } from '@react-navigation/native'
import Addcourses from './Courses/Addcourses'

const LiveCourses = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.container} >
      <Text>LiveCourses</Text>
      <TouchableOpacity style={styles.addbtn} onPress={()=>{
            navigation.navigate('Addcourses')
      }}>
         
         <Image source={require('../../../images/plus.png')} style={styles.addicon}/>

      <Text  style={styles.addtext}>Add new courses</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LiveCourses

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  addbtn:{
     width:160,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',                       //learning
      bottom:verticalScale(20),                  //learning
      right:verticalScale(20),                  //learning
      backgroundColor:'orange',
      flexDirection:'row',
      borderRadius:30,
      
       
  },
  addicon:{
    // alignSelf:'center',
    height:20,
    width:20,
    // backgroundColor:'green'
  },
  addtext:{
    color:WHITE,
    fontWeight:'600',
    paddingLeft:7,
  }
})