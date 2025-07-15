import { Keyboard, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { verticalScale } from 'react-native-size-matters'
import { TextInput } from 'react-native-gesture-handler'

const CustomInput = ({KeyboardType,placeholder,maxLength}) => {
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
      maxLength={maxLength}
      multiline={true}
    //  height={29}

   
        
      
       />
      

    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  container:{
    width: "90%",
    // height: verticalScale(47),
    borderWidth:1,
    alignSelf:'center', 
    marginVertical:15,
    borderRadius:8,
    borderColor:'orange',
  },
    input: {
    flex: 1,
    // padding: 20,
    textAlignVertical: 'top', // for multiline
  },

})