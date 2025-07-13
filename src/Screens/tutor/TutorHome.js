import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LiveCourses from './bottomtab/LiveCourses';
import TutorProfile from './bottomtab/TutorProfile';
import CourseSell from './bottomtab/CourseSell';



const Bottom = createBottomTabNavigator();

const TutorHome = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Courses" component={LiveCourses} options={{tabBarIcon:({size})=>{
        return <Image source={require("../../images/book.png")} style={{width:size,height:size}}/>
      }}}/>
      <Bottom.Screen name="CourseSell" component={CourseSell} options={{tabBarIcon:({size})=>{
        return <Image source={require("../../images/History.png")} style={{width:size,height:size}}/>
      }}}/>
      <Bottom.Screen  name="Profile" component={TutorProfile}  options={{tabBarIcon:({size})=>{
        return <Image source={require("../../images/Profile.png")} style={{width:size,height:size}}/>
      }}}/>

   
    </Bottom.Navigator>

  );
};

export default TutorHome;

const styles = StyleSheet.create({});
