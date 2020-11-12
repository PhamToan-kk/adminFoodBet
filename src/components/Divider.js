import React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import {Colors} from '../theme'
export const Divider = ({
    style,
}) => (
    <View style={[styles.container,style]}>
     
    </View>
);


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:1,
        backgroundColor:Colors.special_gray_opacity
    }
})


 
