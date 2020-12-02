import React ,{useEffect}from 'react';
import { Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {ms, ScaledSheet} from 'react-native-size-matters'
import Header from './Header'
import Figures from './Figures'
import PriceAndDiscount from './PriceAndDiscount'
import {FText } from '../../components'
import {FontSizes,Colors} from '../../theme'

import { ScrollView } from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {actGetOrderNoActive,actInscreaseCountOrder} from '../../redux/actions';
import useSocket from 'use-socket.io-client';


export const Home = ({
    params,
}) => {
  const dispatch = useDispatch();
  const getListNotActiveOrder = () => {
    dispatch(actGetOrderNoActive());
  };

  useEffect(() => {
    getListNotActiveOrder();
  });
  const [socket] = useSocket("ws://localhost:3000");
    socket.connect();
    useEffect(()=>{
        // socket.on("server_send_order_admin",(msg)=>{
            socket.emit('admin_send','tao la admin')
            socket.on('server_send_order_admin',(msg)=>{
                dispatch(actInscreaseCountOrder())
            })
        // });   
     })
    return(
    <View style={styles.container}>
        <View style={{flex:1}}>
            <Header/>
        </View>
        <View style={{flex:1}}>
            <FText style={{flex:1,marginTop:5}} size={FontSizes.FONT_15} weight="500" color={Colors.red_fresh}>Figures in this month</FText>
            <View style={{flex:6}}>
                 <Figures/>
            </View>
        </View>
        <View style={{flex:2}}>
            <PriceAndDiscount/>
        </View>
       
    </View>
);}


const styles= ScaledSheet.create({
    container:{
        paddingTop:'40@vs',
        paddingHorizontal:12,
        flex:1
    }
})
