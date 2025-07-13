import { Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { verticalScale } from 'react-native-size-matters'
import { TextInput } from 'react-native-gesture-handler'

const CustomInput = ({KeyboardType,placeholder}) => {
  const [isFocused,setisFocused]=useState(false)
  return (
    <View style={styles.container}> 
   
       <TextInput
        onBlur={()=>{
          setisFocused(false)
        }}
        onSubmitEditing={()=>{
           setisFocused(false) 
        }} 
        keyboardType={KeyboardType}
        placeholder={placeholder}
        
      
        onFocus={() => setisFocused(true)} />
      

    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  container:{
    width: "90%",
    height: verticalScale(50),
    borderWidth:1,
    alignSelf:'center', 
    marginVertical:15,
    borderRadius:8,
    borderColor:'orange',
  }

})