import React from 'react';
import { Text, View ,Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters'
import {FText,Morph} from '../../components'
import {FontSizes,Colors} from '../../theme'
import { Styles} from '../../styles'
import moment from 'moment'
const Header = ({
    params,
}) => 
{
const time = moment().format('LL')
return(
    <View style={styles.container}>
        <FText style={styles.rName}>Home</FText>
        <Morph style={styles.welcomeBox}>
           <View style={styles.boxContainer}>
                <View style={styles.welcomeTitle}>
                    <FText size={FontSizes.FONT_20} weight="400" color="white">{time}</FText>
                    <FText size={FontSizes.FONT_24} weight="500" color="white">
                        Welcome Mr Manager !
                    </FText>
                </View>
                <View style={styles.logo}>
                    <Image style={{width:'90%',height:'90%'}} source={require('../../assets/images/logo.png')} />
                </View>
           </View>
        </Morph>
    </View>
);
}

const styles = ScaledSheet.create({
    container:{
        flex:1
    },
    rName:{
        fontSize:FontSizes.FONT_20,
        fontWeight:'800',
        color:Colors.red_fresh,
        textAlign:'center',
        flex:1
    },
    welcomeBox:{
        width:'100%',
        height:"100@vs",
        backgroundColor:Colors.red_fresh_opacity,
        flex:4,
    },
    boxContainer:{
        flex:1,
        // backgroundColor:'red',
        flexDirection:'row'
    },
    welcomeTitle:{
        flex:3,
        paddingHorizontal:10,
        paddingTop:10,
    },
    logo:{
        flex:2,
        ...Styles.center_center
    }

})
export default Header;
