import React from 'react';
import { Text, View } from 'react-native';
import {Colors,FontSizes} from '../../theme'
import { Styles } from '../../styles'
import {
    FText ,
    VectorIcon,
    Morph,
    HeartIcon,
    FTextInput,
    MoveIcon,
} from '../../components'
import { ScaledSheet, } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {OrderApi} from '../../api/orderApi'
const Order = (props) => 
{
    const {item,navigation} = props
    const activeOrder = (ordername)=>{
        OrderApi.activeOrder(ordername)
        .then(()=>{
            alert('active order successful')
        })
    }
    const RenderListFood = ()=>(
        <View style={{marginTop:10,       }}>
            <FText style={styles.normalInfo}>List Food :</FText>
            {item.order.map((food,index)=>(
                <View style={styles.rowFood} key={index}>
                    <FText style={styles.insideRow}>{food.namefood} :</FText>
                    <FText style={styles.insideRow}>{food.amount} x {food.price} $</FText>

                </View>
            ))}
            <FText style={styles.normalInfo}>ShipCost: {item.shipcost}</FText>

        </View>
    )
    return(
    <View style={styles.container}>
        <FText style={styles.orderName}>Order {item.name}</FText>
        <FText style={styles.normalInfo}>Customer :
            <FText size={FontSizes.FONT_18} weight={"500"}>{item.customername}</FText>
        </FText>
        <FText style={styles.normalInfo}>Address: {item.address}</FText>
        <FText style={styles.normalInfo}>Phone: {item.phone}</FText>
        <FText style={styles.normalInfo}>Time: {item.time}</FText>
        <RenderListFood/>
        <View style={styles.seperateView}/>
        <FText style={styles.normalInfo}>Total: {item.paymenttotal} $</FText>
        {
            item.isactive? 
            null:
            <TouchableOpacity style={styles.btn}
            onPress={
                ()=>activeOrder(item.name)
            }
            >
                <FText style={styles.btnTitle}>Active Order</FText>
            </TouchableOpacity>
        }
    </View>
);
}


const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingTop:'10@s',
        paddingHorizontal:10,
    },
    orderName:{
        fontSize:FontSizes.FONT_18,
        fontWeight:'500'
    },
    normalInfo :{
        fontSize:FontSizes.FONT_18,
        fontWeight:'300'
    },
    rowFood:{
        flexDirection:'row'
    },
    insideRow:{
        fontSize:FontSizes.FONT_18
    },
    seperateView:{
        width: '100%',
        height:1,
        backgroundColor:Colors.gray
    },
    btn:{
        marginTop:30,
        borderRadius:10,
        width:'85%',
        height:'50@s',
        alignSelf:'center',
        backgroundColor:Colors.red_fresh,
        ...Styles.center_center
    },
    btnTitle:{
        fontSize:FontSizes.FONT_18,
        fontWeight:'500',
        color:Colors.white
    }

})
export default Order;
