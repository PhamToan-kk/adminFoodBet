import React,{useEffect} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {AuthStackScreens,MainStackScreens} from './Stacks'
import {Provider} from 'react-redux'

const AppNavigator = ({
}) => {
    useEffect(()=>{
    })
    const isSignIn = true
    
    return(
        <NavigationContainer>
               {isSignIn ?  <MainStackScreens/> : <AuthStackScreens/> }
        </NavigationContainer>
    
    )
};

export default AppNavigator;
