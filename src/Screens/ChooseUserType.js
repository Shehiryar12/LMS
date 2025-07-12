import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SELECT_USER } from '../Utils/Strings'
import BgButton from '../Components/BgButton'

const ChooseUserType = () => {
  return (
    <View>
    

       <Image source={require("../images/Users.jpg")} style={styles.imagestyle}/>
       <Text style={styles.textuser}>{SELECT_USER}</Text>
       <BgButton/>
    </View>
  )
}

export default ChooseUserType

const styles = StyleSheet.create({
    imagestyle:{
        width:'100%',
    },
    textuser:{
        alignSelf:'center',
        fontSize:18,
        fontWeight:500,
    }
})