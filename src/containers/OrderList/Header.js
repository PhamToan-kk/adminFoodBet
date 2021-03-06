import React from 'react';
import { Text, View ,Image} from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import {Colors,FontSizes} from '../../theme'
import { Styles } from '../../styles'
import {
    FText ,
    // TextInput,
    VectorIcon,
    Morph,
    HeartIcon,
    FTextInput,

    MoveIcon,
} from '../../components'

const Header = (props) => 
{
    return(
    <View style={styles.container}>
        <FText style={styles.headerTitle}>Orders</FText>
        <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
    </View>
);
}
const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        ...Styles.row_between_center
    },
    headerTitle:{
        fontSize:FontSizes.FONT_27,
        fontWeight:'700',
        color:Colors.red_fresh
    },
    logo:{
        height:'100%',
        width:'100@s',
        resizeMode:'contain'
    }
})

export default Header;
