import React from 'react';
import { Text, View ,Image,TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters'
import {FText,Morph} from '../../components'
import {FontSizes,Colors} from '../../theme'
import { Styles} from '../../styles'
import moment from 'moment'
const Header = ({
    navigation,
}) => 
{
return(
    <View style={styles.container}>
        <FText style={styles.rName}>List Food</FText>
        <View style={styles.belowHeader}>
            <TouchableOpacity style={styles.btn}
            onPress={()=>navigation.navigate('AddFood')}
            >
                    <FText size={FontSizes.FONT_15} weight="500" color={Colors.white} >ADD NEW FOOD</FText>
            </TouchableOpacity>
        </View>
        <Image style={styles.logo} source={require('../../assets/images/logo.png')} />

    </View>
);
}

const styles = ScaledSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink',
        borderRadius:10
    },
    rName:{
        fontSize:FontSizes.FONT_20,
        fontWeight:'800',
        color:Colors.red_fresh,
        textAlign:'center',
        flex:1
    },
    belowHeader:{
        flex:3,
        paddingHorizontal:10,
        justifyContent:'center'
    },
    btn:{
        width:'60%',
        height:50,
        backgroundColor:Colors.red_fresh,
        ...Styles.center_center,
        borderRadius:10
    },
    logo:{
        position: 'absolute',
        right:10,
        top:0,
        width:100,
        height:100
    }
 

})
export default Header;
