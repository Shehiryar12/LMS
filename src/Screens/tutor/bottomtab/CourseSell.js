import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters'
import { WHITE } from '../../../Utils/Colors'
import HistoryItem from '../../../Components/HistoryItem'


const CourseSell = () => {
  return (
    <View style={styles.container}>

      <View style={styles.gridview}>

        <View style={styles.gridcard}>
           <Text style={styles.heading}>Rs.50000</Text>
            <Text style={styles.title}>Sell</Text>
          </View> 

           <View style={styles.gridcard}>  
               <Text style={styles.heading}>10</Text>
               <Text style={styles.title}>Courses</Text>    
           </View>       
      </View>  
      <Text style={[styles.heading,{marginTop:90,marginLeft:10,}]}>{"History"}</Text> 
      <FlatList data={[1,1,1,1,1]} renderItem={()=>{
        return <HistoryItem/>
      }}/>  
    </View>

     
  )
}

export default CourseSell

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  gridview:{
     width:"90%",
     height:verticalScale(20),
     justifyContent:'space-between',
     alignSelf:'center',
     flexDirection:'row',
     marginTop:moderateScale(20),
    //  borderRadius:20,
    },

  gridcard:{
    width:"45%",
    height:"480%",
    backgroundColor:WHITE,
    elevation:5,
    borderRadius:6,
    // alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    // opacity:0.8,
  }, 

  heading:{
    fontSize:20,
    // opacity:0.8,
    fontWeight:600,
  },
  title:{
    fontSize:16,
    fontWeight:'500',
  },
 

})