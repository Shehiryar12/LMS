import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LiveCourses from './bottomtab/LiveCourses';
import TutorProfile from './bottomtab/TutorProfile';
import CourseSell from './bottomtab/CourseSell';
import Addcourses from './bottomtab/Courses/Addcourses';


const Bottom = createBottomTabNavigator();

const TutorHome = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="LiveCourses" component={LiveCourses} options={{headerShown:false}}/>
      <Bottom.Screen name="CourseSell" component={CourseSell}/>
      <Bottom.Screen  name="TutorProfile" component={TutorProfile} />

       <Bottom.Screen  name="Addcourses" component={Addcourses} />
   
    </Bottom.Navigator>

  );
};

export default TutorHome;

const styles = StyleSheet.create({});
