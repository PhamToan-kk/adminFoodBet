import React,{useEffect} from 'react';
import { Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters'
import {FText } from '../../components'
import {FontSizes,Colors} from '../../theme'
import  ListFood from './ListFood'
import Header from './Header'
export const Foods = (props) => 
{
    const {navigation} = props

    useFocusEffect(()=>{
        console.log('rerender food')
    })
    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Header navigation={navigation}/>
        </View>
        <View style={styles.listFoodContainer}>
            <ListFood navigation={navigation}/>
        </View>
    </View>
);
}


const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingTop:'40@vs',
        paddingHorizontal:10
    },
    header:{
        flex:1,
    },
    listFoodContainer:{
        flex:6,

    }
})
