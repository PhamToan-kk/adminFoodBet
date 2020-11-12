import React from 'react';
import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native';
import {Colors} from '../theme'
import { ScaledSheet, } from 'react-native-size-matters';
import { Morph} from './Morph'
import {FText} from './Text'
export const FButton = (props) => 
{
    const { style , onPress ,rest , title } = props

    const  ButtonStyles = StyleSheet.flatten([
        styles.container,
        style
    ])
    return(
        
            <TouchableOpacity  onPress={onPress} style={ButtonStyles} {...rest} >
                <Morph style={styles.contentView}>
                    <FText h3 semibold color={Colors.white}>{title}</FText>
                </Morph>
            </TouchableOpacity>
);
}


const styles = ScaledSheet.create({
    container:{
        width:'80%',
        height:'45@vs',
        alignSelf:'center',
        borderRadius:10
    
    },
    contentView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:Colors.red_fresh,
    }
})
