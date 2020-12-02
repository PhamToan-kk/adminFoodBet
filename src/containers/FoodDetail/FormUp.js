import React ,{useState}from 'react';
import { Text, View ,Image,TextInput,StyleSheet,Alert} from 'react-native';
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
import RNPickerSelect from 'react-native-picker-select';

import ImagePicker from 'react-native-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {foodApi } from '../../api/foodApi'
const defaultUp = "http://res.cloudinary.com/toankk2255/image/upload/v1605259721/mcbgpx6yudn6joimjfcb.jpg"

const typeValue = 
[
    { label: 'sushi', value: "sushi" },
    { label: 'fruit', value: 'fruit' },
    { label: 'icecream', value: "icecream" },
    { label: 'fastfood', value: "fastfood" },
    { label: 'protein', value: "protein" },
    { label: 'barbecue', value: "barbecue" },


]


const FormUp = (props) => 

{
    
    
    const {item} = props
    console.log('item',item)
    const [_id,setId] = useState(item._id)

    const [name,setName] = useState(item.name)
    const [type,setType] = useState(item.type)
    const [price,setPrice] = useState(item.price.toString())
    const [intro,setIntro] = useState(item.intro)
    const [components,setComponents] = useState(item.components)
    const [imageUrl,setImageUrl] = useState(item.url)
    const placeholder = {
        label: type,
        value: type,
    };

    const chooseFile = () => {
        var options = {
          title: 'Select Image',
          customButtons: [
            { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
          ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            let source = response;
            
            setImageUrl(source)
          }
        });
      };
    const updateFood = ()=>{
        if(!name || !type || !price || !intro || !components) {
            alert('you have fill out all fields')
        }else{
            foodApi.updateFood(_id,name,type,price,defaultUp,intro,components)
            .then((data)=>{
                // console.log('data',data)
                Alert.alert(
                    "Notification",
                    "Update food successful",
                    [
                    
                    { text: "OK", }
                    ],
                    { cancelable: false }
                );           
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
    const deleteFood = ()=>{
        foodApi.deleteFood(_id)
        .then((data)=>{
            // console.log('data',data)
            Alert.alert(
                "Notification",
                "Delete food successful",
                [
                
                { text: "OK", }
                ],
                { cancelable: false }
            );    
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
    <View style={styles.container}>
        <View style={styles.imgView}>
            <TouchableOpacity  onPress={chooseFile}>
            {
                imageUrl !=  item.url ?
                <Image source={{uri:imageUrl.uri}} style={styles.img} />
                :
                <Image source={{uri:imageUrl}} style={styles.img} />

            }
            </TouchableOpacity>
        </View>
        <View style={styles.inpuForm}>
                    <FTextInput
                    autoCapitalize={'none'}
                    placeholder="food name"
                    value={name}
                    style={styles.input}
                    onChangeText={(txt)=>setName(txt)}

                    leftComponent = {
                        <VectorIcon Ionicons name="fast-food-outline" size={25} color={Colors.red_fresh}/>
                    }
                    />
                    <RNPickerSelect
                        onValueChange={(value) => setType(value)}
                        items={typeValue}
                        style={{
                            ...pickerSelectStyles,
                            iconContainer: styles.iconContainer,
                            placeholder: styles.placeholder,
                            }}
                        placeholder={placeholder}
    
                        />
                    <FTextInput
                    autoCapitalize={'none'}
                    placeholder="price"
                    value={price}
                    style={styles.input}
                    onChangeText={(txt)=>setPrice(txt)}

                    leftComponent = {
                        <VectorIcon Ionicons name="ios-pricetags-outline" size={25} color={Colors.red_fresh}/>
                    }
                    keyboardType="number-pad"
                    />
                    <FTextInput
                    autoCapitalize={'none'}
                    placeholder="introduction"
                    value={intro}
                    style={styles.input}
                    onChangeText={(txt)=>setIntro(txt)}

                    leftComponent = {
                        <VectorIcon AntDesign name="notification" size={25} color={Colors.red_fresh}/>
                    }
                    />
                    <FTextInput
                    autoCapitalize={'none'}
                    placeholder="components"
                    value={components}
                    style={[styles.input,{height:100}]}
                    onChangeText={(txt)=>setComponents(txt)}
                    multiline={true}
                    numberOfLines={2}
                    leftComponent = {
                        <VectorIcon MaterialIcons name="settings-input-component" size={25} color={Colors.red_fresh}/>
                    }
                    />

                    <TouchableOpacity style={styles.btn} onPress={deleteFood}>
                        <FText size={FontSizes.FONT_17} weight="500" color={Colors.white}>DELETE FOOD</FText>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={updateFood}>
                        <FText size={FontSizes.FONT_17} weight="500" color={Colors.white}>UPDATE FOOD</FText>
                    </TouchableOpacity>
        </View>
    </View>
);
}

const styles = ScaledSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red'
    },
    img:{
        width:"220@s",
        height:"160@s",
        resizeMode:"contain",
        borderRadius:10
    },
    imgView:{
        flex:1,
        backgroundColor:Colors.white,
        ...Styles.center_center,
        // backgroundColor:'pink'
    },
    inpuForm:{
        flex:3,
        paddingTop:15
    },
    input:{
        backgroundColor:'rgb(255,255,255)',
        alignSelf:'center'
     },
     placeholder: {
        color: Colors.lightGreen,
        fontSize: 15,
        fontWeight: 'bold',
    },
    iconContainer: {
        top: 20,
        right: 10,
    },
    btn:{
        width:'85%',
        height:'50@s',
        backgroundColor:Colors.red_fresh,
        marginTop:20,
        alignSelf:'center',
        borderRadius:10,
        ...Styles.center_center
    }
})
const pickerSelectStyles = ScaledSheet.create({
    inputIOS: {
      width:'85%',
      height:'50@s',
      fontWeight:'500', 
      fontSize: 16,
      paddingVertical: 5,
      paddingHorizontal: 5,
      color: Colors.greenLight,
      paddingRight: 5, // to ensure the text is never behind the icon,
      alignSelf:'center',
      borderWidth:1,
      borderColor: Colors.Cornflower_Blue,
      borderRadius:10,
      backgroundColor:'transparent',
      marginVertical:5
    },

  });
export default FormUp;
