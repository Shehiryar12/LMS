import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BorderButton = ({ title, OnClick }) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={OnClick}>
        <Text style={styles.colortext}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BorderButton

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "white",
    width: '90%',
    height: 50,
    alignSelf: 'center',
    marginVertical: 16,
    borderRadius: 10,
    borderWidth:1,
     borderColor:'#FF6931',
    
  },
  colortext: {
    alignSelf: 'center',
    fontSize: 16,
    marginVertical:11,
    fontWeight:500,
    color:'#FF6931',
  }
}) 
