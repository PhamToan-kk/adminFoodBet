import React,{useEffect} from 'react';
import { Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters'
import {FText } from '../../components'
import {FontSizes,Colors} from '../../theme'
import  ListFood from './ListFood'
export const Foods = (props) => 
{
    const {navigation} = props

    useFocusEffect(()=>{
        console.log('rerender food')
    })
    return(
    <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.listFoodContainer}>
            <ListFood/>
        </View>
    </View>
);
}


const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingTop:'40@vs'
    },
    header:{
        flex:1,
        backgroundColor:'pink'
    },
    listFoodContainer:{
        flex:6,

    }
})
