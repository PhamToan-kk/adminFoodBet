import React from 'react';
import { Text, View } from 'react-native';
import {Provider} from 'react-redux'
import {store} from '../redux/store'
import AppNavigator from './MainNavigation'

const MainApp = ({
    params,
}) => (
    <Provider store = {store}>
        <AppNavigator/>
    </Provider>
);

export default MainApp;
