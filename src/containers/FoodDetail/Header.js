import React from 'react';
import { Text, View ,TouchableOpacity} from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import {Colors,FontSizes} from '../../theme'
import { Styles } from '../../styles'
import {
    FText ,
  
} from '../../components'
const Header = ({
    navigation
}) => (
    <View style={styles.header}>
            <FText style={styles.title}>FOOD DETAIL</FText>
            <TouchableOpacity 
            style={styles.backBtn}
            onPress={()=>navigation.goBack()}
            >
                <FText size={FontSizes.FONT_13} weight="400" color={Colors.red_fresh} >Cancel</FText>
            </TouchableOpacity>
     </View>
);


const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        paddingTop:50,
        backgroundColor:Colors.Linear_white5
    },
    header:{
        width:'100%',
        height:'50@vs',
        ...Styles.row_between_center
    },
    title:{
        fontSize:FontSizes.FONT_17,
        fontWeight:'600',
        color:Colors.red_fresh

    },
    backBtn:{
        width:'50@s',
        height:'30@s',
        backgroundColor:Colors.white,
        ...Styles.center_center,
        borderRadius:10,
        borderColor:Colors.Cornflower_Blue,
        borderWidth:1

    }
})

export default Header;
