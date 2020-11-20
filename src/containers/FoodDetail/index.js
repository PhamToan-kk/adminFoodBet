import React, { useState } from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ScaledSheet, } from 'react-native-size-matters';
import {Colors,FontSizes} from '../../theme'
import { Styles } from '../../styles'
import {
    FText ,
    TextInput,
    VectorIcon,
    Morph,
    HeartIcon,

    MoveIcon,
} from '../../components'
import Header from './Header'
import FormUp from './FormUp'

export const FoodDetail = ({
    navigation,route
}) => 
{
    const {item} = route.params
return(
    <View  style={styles.container}>
        <View style={styles.header} >
            <Header navigation={navigation}/>
        </View>
        <View style={styles.form}>
            <FormUp item={item}/>
        </View>

    </View>
);
}
const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        paddingTop:50,
        backgroundColor:Colors.Linear_white5
    },
    header:{
        // width:'100%',
        // height:'50@vs',
        // ...Styles.row_between_center
        flex:1
    },
    form:{
        flex:9,
        // backgroundColor:'pink'
    }
    
})