import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LiveCourses from './bottomtab/LiveCourses';
import TutorProfile from './bottomtab/TutorProfile';
import CourseSell from './bottomtab/CourseSell';
const Bottom=createBottomTabNavigator()


const TutorHome = () => {
  
  return (
               <Bottom.Navigator>
                                     <Bottom.Screen name='LiveCourses' component={LiveCourses}/>
                                     <Bottom.Screen name='CourseSell' component={CourseSell}/>
                                     <Bottom.Screen name='Tutor' component={TutorProfile}/>
                                                      
                                     {/* </Bottom.Screen> */}
               </Bottom.Navigator>
  );
};

export default TutorHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
