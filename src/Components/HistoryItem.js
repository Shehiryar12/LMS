import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WHITE } from '../Utils/Colors'
import { moderateScale } from 'react-native-size-matters'

const HistoryItem = () => {
  return (
    <View style={{width:"90%",height:160,backgroundColor:WHITE,marginTop:20,alignSelf:'center',borderRadius:8,padding:10}}>
     
     <Text style={{fontWeight:600,fontSize:16}}>Course Detail:</Text>
     <Text style={{fontWeight:500,fontSize:14}}>Course Name:React Native</Text>
     <Text style={{fontWeight:500,fontSize:14}}>Price:Rs.4999</Text>
       <Text style={{fontWeight:600,fontSize:16,marginTop:10}}>Purchased By:</Text>
       <Text style={{fontWeight:500,fontSize:14}}>Name:Shehiryar</Text>
       <Text style={{fontWeight:500,fontSize:14}}>Email:shehiryar.ranglerz@gmail.com</Text>
       <Text style={{fontWeight:500,fontSize:14}}>Date:15-7-2025</Text>

      
    </View>
  )
}

export default HistoryItem

const styles = StyleSheet.create({})