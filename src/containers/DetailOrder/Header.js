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
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = (props) => 
{
    const{navigation} = props
    return(
    <View style={styles.container}>
        <FText style={styles.headerTitle}>Order Detail</FText>
        <TouchableOpacity
        onPress={()=>navigation.goBack()}
        >
            <Image style={styles.backimg} source={require('../../assets/icons/remove.png')} />
        </TouchableOpacity>
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
    backimg:{
        height:'40@s',
        width:'40@s',
        resizeMode:'contain'
    }
})

export default Header;
