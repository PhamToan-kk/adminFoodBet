import React,{useState,useEffect} from 'react';
import { Text, View ,TouchableOpacity,ImageBackground, Button,Image, KeyboardAvoidingView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScaledSheet, } from 'react-native-size-matters';
import { withFormik,Formik } from 'formik'
import * as Yup from 'yup'
import { Styles } from '../../styles'

import {
    FText ,
    VectorIcon,
    Morph,
    HeartIcon,
    MoveIcon,
    FTextInput
} from '../../components'

import {Colors, FontSizes} from '../../theme'

import SignInForm from './SignInForm'

export const Login = (props) => 
{
    const [username,setUsername] = useState()
    const [password,setUserPassword] = useState()
    const {
        navigation
    } = props

    return(
    <View style={styles.container}>
        <ImageBackground 
        style={styles.imgBackground}
        source={require('../../assets/images/background.png')}
        >
            <LinearGradient
            colors={[Colors.backGroundLogin1, Colors.backGroundLogin2,Colors.backGroundLogin3]} style={styles.linearView} 
            >
            <KeyboardAvoidingView 
            style={styles.keyboradAvoidingView}
            >
                <FText h1 style={styles.headerTitle}>SignIn</FText>
                <Image source={require('../../assets/images/logo.png')}
                     style={styles.logoImg}
                />
                <SignInForm username={username} password={password}/>
            </KeyboardAvoidingView>
            </LinearGradient>
        </ImageBackground>
    </View>
);

}



const styles = ScaledSheet.create({
    container:{
        flex:1,
    },
    keyboradAvoidingView:{
        flex:1,paddingTop:50
    },
    headerTitle:{
        fontWeight:'500',
        color:Colors.Sapphire,
        marginLeft:'7.5%'
    },
    imgBackground:{
        flex:1,
        width: '100%',
        height:'100%'
    },
    logoImg:{
        width:200,height:200,alignSelf:'center',marginTop:30
    },
    linearView:{
        flex:1
    },
    bottomTxt:{
        position:'absolute',
        bottom:100,
        alignSelf:'center',
        color:Colors.Sapphire
    }
})

 
