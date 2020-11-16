import React,{useState,useEffect} from 'react';
import { Text, View ,StyleSheet,TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters'
import {FText,Morph} from '../../components'
import {FontSizes,Colors} from '../../theme'
import {Styles} from '../../styles'
import RNPickerSelect from 'react-native-picker-select';
import { OtherInfoApi} from '../../api/otherInfoApi'

const discountValue = 
                        [
                            { label: '5%', value: 5 },
                            { label: '10%', value: 10 },
                            { label: '15%', value: 15 },
                        ]

const shipCostValue = 
                        [
                            { label: '1$/km', value: 1 },
                            { label: '1.5$/km', value: 1.5 },
                            { label: '2$/km', value: 2 },
                        ]
const PriceAndDiscount = (props) => {
  
    const [readyDiscount,setReadyDiscount] = useState()
    const [readyShipcost,setReadyShipcost] = useState()

    const [discount,setDiscount] = useState()
    const [shipcost,setShipCost] = useState()
    useEffect(()=>{
        OtherInfoApi.getOtherInfo()
        .then(res=>{
            setDiscount(res.discountpercent)
            setShipCost(res.shipprice)
        })
    },[])

    const setChangeDiscount = ()=>{
        if(!readyDiscount) { return }
        setDiscount(readyDiscount)
        OtherInfoApi.updateOtherInfo(readyDiscount,shipcost)
        .then(
            ()=>alert('update successful',discount)
        )        
    }
    const setChangeShipCost = ()=>{
        if(!readyShipcost) return
        setShipCost(readyShipcost)
        OtherInfoApi.updateOtherInfo(discount,readyShipcost)  
        .then(
            ()=>alert('update successful')
        )           

    }

    return(
    <View style={styles.container}>
       <View style={styles.box}>
            <FText size={FontSizes.FONT_15} weight="500" color={Colors.red_fresh} style={styles.boxTitle}>Set Discount with order</FText>
            <View style={styles.boxContainer}>
                <View style={styles.leftBox}>
                    <View style={styles.circle}>
                        <View style={styles.insideCircle} >
                            <FText style={styles.value}>{discount}%</FText>
                        </View>
                    </View>
                </View>
                <View style={styles.rightBox}>
                    <View style={styles.dropdown}>
                        <RNPickerSelect
                        onValueChange={(value) => setReadyDiscount(value)}
                        items={discountValue}
                        style={{
                            ...pickerSelectStyles,
                            iconContainer: styles.iconContainer,
                            placeholder: styles.placeholder,
                            }}
                        />
                    </View>
                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.btn} onPress={setChangeDiscount}>
                            <FText size={FontSizes.FONT_15} weight="500" color="white">Set Discount</FText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
       </View>
       <View style={styles.box}>
            <FText size={FontSizes.FONT_15} weight="500" color={Colors.red_fresh} style={styles.boxTitle}>Set ship cost</FText>
            <View style={styles.boxContainer}>
                <View style={styles.leftBox}>
                    <View style={styles.circle}>
                        <View style={styles.insideCircle} >
                            <FText style={styles.value}>{shipcost}/km</FText>
                        </View>
                    </View>
                </View>
                <View style={styles.rightBox}>
                    <View style={styles.dropdown}>
                        <RNPickerSelect
                        onValueChange={(value) => setReadyShipcost(value)}
                        items={shipCostValue}
                        style={{
                            ...pickerSelectStyles,
                            iconContainer: styles.iconContainer,
                            placeholder: styles.placeholder,
                            }}
                        />
                    </View>
                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.btn} onPress={setChangeShipCost}>
                            <FText size={FontSizes.FONT_15} weight="500" color="white">Set ShipCost</FText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
       </View>
       
    </View>
);
}

const styles = ScaledSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
    },
    box:{
        width:'100%',
        height:'45%',
        borderRadius:10,
        padding:10,
        backgroundColor:'white'

    },
    boxTitle:{
        flex:1
    },
    boxContainer:{
        flex:5,
        flexDirection:'row'
    },
    leftBox:{
        flex:2
    },
    rightBox:{
        flex:3,
        // backgroundColor:'yellow'
    },
    circle:{
        width:'100@s',
        height:'100@s',
        borderRadius:999,
        backgroundColor:Colors.red_fresh,
        ...Styles.center_center
    },
    insideCircle:{
        width:'80@s',
        height:'80@s',
        borderRadius:999,
        backgroundColor:Colors.white,
        ...Styles.center_center
    },
    value:{
        fontSize:17,
        fontWeight:'700',
        color:Colors.lightGreen
    },
    dropdown:{
        flex:1,
        ...Styles.center_center
    },
    btnView:{
        flex:1,
        ...Styles.center_center,

    },
    placeholder: {
        color: Colors.lightGreen,
        fontSize: 12,
        fontWeight: 'bold',
    },
    iconContainer: {
        top: 20,
        right: 10,
    },
    btn:{
        width:'100%',
        height:'40@vs',
        backgroundColor:Colors.red_fresh,
        ...Styles.center_center,
        borderRadius:10
    }
})
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      width:'100%',
      height:'90%',
      fontWeight:'500', 
      fontSize: 16,
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderWidth: 0.5,
      borderColor: 'gray',
      borderRadius: 4,
      color: Colors.greenLight,
      paddingRight: 5, // to ensure the text is never behind the icon
    },

  });
export default PriceAndDiscount;
