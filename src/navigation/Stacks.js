import React, {useState} from 'react';
import {
   AddFood,
   Login

  } from '../containers';
  import {createStackNavigator} from '@react-navigation/stack';

  import {TabsNavigator} from './Tabs'
  const AuthStack = createStackNavigator();
  const MainStack = createStackNavigator()

  export const AuthStackScreens = ({navigation}) => {
    return (
      <AuthStack.Navigator
      headerMode={'none'}
      >
        <AuthStack.Screen name="Login" component={Login} />
  
      </AuthStack.Navigator>
    );
  };


  export const MainStackScreens = ()=>{
    return(
        <MainStack.Navigator
        initialRouteName="Main"
        screenOptions={{
            headerShown:false
        }}
        >
            <MainStack.Screen component={TabsNavigator} name={'Tabs'}/>
            <MainStack.Screen component={AddFood} name={'AddFood'} />     
        </MainStack.Navigator>
    )
}
  