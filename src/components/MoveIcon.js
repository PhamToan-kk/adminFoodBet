import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import {VectorIcon} from './VectorIcon'
import {Morph} from './Morph'
import {Colors} from '../theme'
export const MoveIcon = (props) => 
{
    const { size, style } = props
    const HeartIconStyle= StyleSheet.flatten([
        styles.container,
        size && {width:size,height:size}

    ])
    return(
    <View style={HeartIconStyle}>
       <Morph style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <VectorIcon 
                Ionicons
                name ="paper-plane-sharp"
                size={size? (2*size)/3 : 16}
                color = {Colors.red_fresh}
            />
       </Morph>
    </View>
);}


const styles = ScaledSheet.create({
    container:{
        position:'absolute',
        top:5,
        right:5,
        width:'25@s',
        height:'25@s',
        borderRadius:999,
        backgroundColor:Colors.Linear_white5,
        justifyContent:'center',
        alignItems:'center'
    }
})
 
