import React,{useEffect} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {AuthStackScreens,MainStackScreens} from './Stacks'
import {Provider} from 'react-redux'
import {store} from '../redux/store'
import {useSelector} from 'react-redux'
const AppNavigator = ({
}) => {
    // console.log('store',store.getState())
    const role = useSelector(state=>state.userInfo.role)   

    return(
        <NavigationContainer>
               {role == "admin" ?  <MainStackScreens/> : <AuthStackScreens/> }
        </NavigationContainer>
    
    )
};

export default AppNavigator;
