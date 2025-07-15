import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WHITE } from '../../Utils/Colors'
import BorderButton from '../BorderButton'
import { useNavigation } from '@react-navigation/native'
import AppChapter from './AppChapter'

const Courseview = () => {
    const navigation=useNavigation()
  return (
    <View style={styles.container}>
         <View style={styles.innerContainer}>
             <Text style={styles.textone}>CourseView</Text>
             <Image source={require('../../images/code.png')} style={styles.imagestyle}/>
       
             <BorderButton title={"App Chapters"} OnClick={()=>{
               navigation.navigate("AppChapter")
             }}/>
             
          </View>    
    </View>
  )
}

export default Courseview

const styles = StyleSheet.create({
 container:{
       flex:1,
    //    backgroundColor:'red'
 },

   innerContainer:{
         backgroundColor:WHITE,
         elevation:15,
         height:55,
       
    },
    textone:{
        fontSize:18,
        fontWeight:500,
        marginTop:16,
        marginLeft:33,
    },
    imagestyle:{
        // height:100,
        // resizeMode:"stretch",
      
        // marginTop:30,
        // marginVertical:16,
        width:"100%",
        height:150,
        marginTop:15,
    },
    texttwo:{ 
        fontWeight:800,      
    }
})