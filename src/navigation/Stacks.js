import React, {useEffect, useState} from 'react';
import {AddFood, Login, DetailOrder, FoodDetail} from '../containers';
import {createStackNavigator} from '@react-navigation/stack';
import {TabsNavigator} from './Tabs';
const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();
import {useDispatch} from 'react-redux';
import useSocket from 'use-socket.io-client';

export const AuthStackScreens = ({navigation}) => {
  return (
    <AuthStack.Navigator headerMode={'none'}>
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export const MainStackScreens = () => {
    const {dispatch} = useDispatch()
    
  return (
    <MainStack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen component={TabsNavigator} name={'Tabs'} />
      <MainStack.Screen component={AddFood} name={'AddFood'} />
      <MainStack.Screen component={DetailOrder} name={'DetailOrder'} />
      <MainStack.Screen component={FoodDetail} name={'FoodDetail'} />
    </MainStack.Navigator>
  );
};
