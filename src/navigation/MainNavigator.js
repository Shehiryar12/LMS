import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../Screens/Splash'
import ChooseUserType from '../Screens/ChooseUserType'
import Login from '../Screens/Login/Login'
const Stack=createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
                 
        <Stack.Navigator>
                         <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
                         <Stack.Screen name="ChooseUserType" component={ChooseUserType} options={{headerShown:false}} />
                         <Stack.Screen name="Login" component={Login} options={{headerShown:false}} /> 
  
                         

        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})