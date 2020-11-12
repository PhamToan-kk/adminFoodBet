import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import {VectorIcon} from './VectorIcon'
import {Morph} from './Morph'
import {Colors} from '../theme'
export const HeartIcon = (props) => 
{
    const { size, style } = props
    const HeartIconStyle= StyleSheet.flatten([
        styles.container,
        size && {width:size,height:size},
        style

    ])
    return(
    <View style={HeartIconStyle}>
        <VectorIcon 
        FontAwesome
        name ="heart"
        size={size? (2*size)/3 : 16}
        color = {Colors.red_fresh}
    />
    </View>
);}


const styles = ScaledSheet.create({
    container:{
        position:'absolute',
        top:10,
        right:10,
        width:'25@s',
        height:'25@s',
        borderRadius:999,
        backgroundColor:Colors.Linear_white5,
        justifyContent:'center',
        alignItems:'center'
    }
})
 
