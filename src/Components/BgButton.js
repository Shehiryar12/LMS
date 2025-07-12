import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BgButton = ({ title, OnClick }) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={OnClick}>
        <Text style={styles.colortext}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BgButton

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#FF6931',
    width: '90%',
    height: 50,
    alignSelf: 'center',
    marginVertical: 16,
    borderRadius: 10,
  },
  colortext: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 16,
    marginVertical:11,
    fontWeight:500,
  }
})
