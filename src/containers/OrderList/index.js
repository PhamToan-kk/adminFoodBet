import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import { Colors } from '../../theme';
import Header from './Header'
import ListOrders from './ListOrder'
export const OrderList = (props) => 
{
    const {navigation} = props
    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Header/>
        </View>
        <View style={styles.listOrders}>
            <ListOrders navigation={navigation}/>
        </View>
    </View>
)
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