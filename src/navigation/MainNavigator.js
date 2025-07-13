import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Splash from '../Screens/Splash';
import ChooseUserType from '../Screens/ChooseUserType';
import Login from '../Screens/Login/Login';
import TutorHome from '../Screens/tutor/TutorHome';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} screenOptions={{ headerShown: false }}/>
        <Stack.Screen name="ChooseUserType" component={ChooseUserType}  screenOptions={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login}  screenOptions={{ headerShown: false }}/>
        <Stack.Screen name="TutorHome" component={TutorHome} screenOptions={{ headerShown: false }}/>
        

         
         
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
