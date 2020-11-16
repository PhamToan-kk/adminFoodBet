import React,{useState,useEffect} from 'react';
import { 
    View ,
    TouchableOpacity,
    ImageBackground,
     Image, 
     KeyboardAvoidingView
    
} from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import { withFormik,Formik } from 'formik'
import * as Yup from 'yup'
import { Styles } from '../../styles'
import {useSelector,useDispatch} from 'react-redux'
// import {actSignIn} from '../../redux/actions'
import {
    FText ,
    VectorIcon,
    Morph,
    HeartIcon,
    MoveIcon,
    FTextInput
} from '../../components'

import {Colors, FontSizes} from '../../theme'
import {actSignIn} from '../../redux/actions'

const SignInForm = ()=>

{
    const dispatch = useDispatch()
    const signIn = (username,password)=>{
            dispatch(actSignIn(username,password))
        
    }
    return(
    <Formik
                initialValues={{ username: "",password:""}}
                validationSchema={SignInschema}
                onSubmit={(values,actions) => {
                // actions.resetForm()
                    signIn(values.username,values.password)
               
                }
                }
            >
                {({ handleChange, handleBlur, handleSubmit, values ,errors,touched}) => (
                <View style={{justifyContent:'center',marginTop:5}}>
                    <FTextInput
                    autoCapitalize={'none'}
                    placeholder="username"

                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    style={styles.input}
                    leftComponent = {
                        <VectorIcon AntDesign name="user" size={25} color={Colors.red_fresh}/>
                    }
                    />
                    <FText style={styles.txtErr}>{touched.password && errors.username}</FText>
                    <FTextInput
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="password"
                    autoCapitalize={'none'}
                    style={styles.input}
                    password
                    leftComponent = {
                        <VectorIcon AntDesign name="lock" size={25} color={Colors.red_fresh}/>
                    }
                    />
                    <FText style={styles.txtErr}>{touched.password && errors.password}</FText>

                    <TouchableOpacity
                    style={styles.btn}
                    onPress={handleSubmit}
                    >
                        <FText 
                        h2 semibold color={Colors.white}
                        >Sign In</FText>
                    </TouchableOpacity>
                </View>
                )}
            </Formik>
)
}

const SignInschema = Yup.object({
    username:Yup.string()
    .required('Username is required')
    ,
    password:Yup.string()
    .required('Password is required')
    
  
  })

  const styles = ScaledSheet.create({
   
    input:{
       backgroundColor:'rgba(255,255,255,0.1)',
       alignSelf:'center'
    },
    txtErr:{
        fontSize:FontSizes.FONT_13,
        color:Colors.red,
        fontWeight:'500',
        marginLeft:'50@s'
    },
    btn:{
        width:'85%',
        height:'50@s',
        backgroundColor:Colors.red_fresh,
        borderRadius:10,
        ...Styles.center_center,
        alignSelf:'center',
        marginTop:50
    },
   
})

export default SignInForm