import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';

export const OrderList = (prosp) => 
{

    return(
    <View style={styles.container}>
        <View style={styles.header}>

        </View>
        <View style={styles.listOrders}>
            
        </View>
    </View>
)
}
 
const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingTop:50
    },
    header:{
        flex:1,
        backgroundColor:'pink'
    },
    listOrders:{
        flex:7
    }
})