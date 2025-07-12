import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const BgButton = (title,OnClick) => {
  return (
    <View>
      <Text>BgButton</Text>

      <TouchableOpacity style={styles.btn} onPress={OnClick}>
            <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BgButton

const styles = StyleSheet.create({
        btn:{
              backgroundColor:'#FF6931',
              width:'80%',
              justifyContent:'center',
              alignItems:"center",

        },

        title:{
            fontWeight:600,
        }
    
},)