import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput ,
  Platform,
  TouchableOpacity,
  Text,
  useWindowDimensions,
} from 'react-native';
import {VectorIcon} from './VectorIcon';
// import {Morph} from './Morph';
import { ScaledSheet, } from 'react-native-size-matters';

import {Colors,FontSizes} from '../theme';


const Eyes = (props) => {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        style={{position: 'absolute', right: 10, alignItems: 'center'}}>
        <VectorIcon
          Feather
          name={props.secureTextEntry ? 'eye-off' : 'eye'}
          size={15}
          color={Colors.dodgerBlue}
        />
      </TouchableOpacity>
    );
  };
  

export const FTextInput = (props) => 
{
    const { 
        style,
        keyboardType,
        password,
        placeholder,
        rightComponent,
        leftComponent,
        onChangeText,
        numberOfLines,
        autoFocus = false,
        selectTextOnFocus,
        showBorderBottom = false,
        editable,
        multiline,
        onBlur,
        fontSize,
        autoCapitalize,
        rest
    } = props
    const [secureTextEntry, setSecureTextEntry] = useState(password);

    return(
    <View style={[styles.container,style]}>
        {leftComponent && <View style={{marginHorizontal:5}}>{leftComponent}</View>}
        <TextInput
            keyboardType={keyboardType}
            placeholder={placeholder}
            placeholderTextColor={Colors.gray}
            onBlur= {onBlur}
            secureTextEntry={secureTextEntry}
            style={styles.input}
            editable={editable}
            numberOfLines={numberOfLines}
            selectTextOnFocus={selectTextOnFocus}
            onChangeText={onChangeText}
            fontSize={fontSize ? fontSize: FontSizes.FONT_15}
            color={Colors.lightGreen}
            autoCapitalize={autoCapitalize}
        />
        {password && (
        <Eyes
          onPress={() => setSecureTextEntry(!secureTextEntry)}
          secureTextEntry={secureTextEntry}
        />
        )}
        {rightComponent && (
            <View style={{marginLeft: 5}}>{rightComponent()}</View>
        )}
    </View>
);
}


const styles = ScaledSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        width:'85%',
        height:'50@s',
        borderWidth:1,
        borderColor: Colors.Cornflower_Blue,
        borderRadius:10,
        backgroundColor:'transparent',
        marginVertical:5
    },
    input:{
        width:'75%',
        height:'100%',
    }
})

 
