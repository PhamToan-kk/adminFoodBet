import React from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import Header from './Header'
import Order from './Order'
import {Colors} from '../../theme'
export const DetailOrder = (props) => 
{
    const{
        navigation,
        route
    } = props
    const {item} = route.params
    // console.log('itemm',item)
    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Header navigation={navigation} />
        </View>
        <View style={styles.listOrders}>
            <Order item={item} navigation={navigation} />
        </View>
    </View>
);

}
const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingTop:50,
        backgroundColor:Colors.Linear_white5
    },
    header:{
        flex:1,
        // backgroundColor:'white'
    },
    listOrders:{
        flex:7
    }
})
