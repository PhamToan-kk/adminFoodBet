import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import {Colors} from '../theme'
import { ScaledSheet, } from 'react-native-size-matters';
import { Morph} from './Morph'
import {VectorIcon} from './VectorIcon'


export const ReturnButton = (props) => 
{
    const {
        style,
        event
    } = props
    return(
    <TouchableOpacity style={[styles.container,style]} onPress={event}>
        <VectorIcon MaterialIcons name="keyboard-backspace" size={20} color={Colors.white}/>
    </TouchableOpacity>
    );

}

const styles = ScaledSheet.create({
    container:{
        position:'absolute',
        top:10,
        left:10,
        width:'30@s',
        height:'30@s',
        borderRadius:'25@s',
        backgroundColor:Colors.red_fresh,
        justifyContent:'center',
        alignItems:'center',
     
    }
})