import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, moderateVerticalScale, verticalScale } from 'react-native-size-matters'
import CustomInput from '../CustomInput'
import BgButton from '../BgButton'


const AppChapter = () => {
  const [isActive,setIsActive]=useState(true)
  return (
  <ScrollView>
    
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.bannerview}>
            
             <Image source={require("../../images/plus.png")} style={styles.imagestyle}/> 
                <Text style={styles.addtext}>Add courses Description</Text> 
      </TouchableOpacity>
      
      
     <View style={styles.coursetitle}>
      <CustomInput KeyboardType="default" placeholder={"Enter Course Title"} maxLength={11} />
     </View>
       <CustomInput  KeyboardType="default" placeholder={"Enter Chapter Description"} />
     

       <View style={styles.isactive}>
        <Text>Course is Active:</Text>
        <Switch value={isActive} onValueChange={value =>{
          setIsActive(value)
        }}/>
       </View>
       
       <View>
         <BgButton title={"Upload Course"}/>
       </View>
      
    </View>

    </ScrollView>
  )
}

export default AppChapter

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    bannerview:{
      width:'90%',
      height:verticalScale(180 ),
      borderWidth:1,
      marginTop:moderateVerticalScale(20),
      borderRadius: moderateScale(20),
      alignSelf:'center',
      alignItems:'center',
      justifyContent:'center',
    },
    imagestyle:{
      width:20,
      height:20,
    },
    addtext:{
      fontSize:18,
      fontWeight:600,
    },
    isactive:{

      width:'90%',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginHorizontal:17,
      marginVertical:10,
    },

    coursetitle:{
        // height:verticalScale(10)
    }
    
})