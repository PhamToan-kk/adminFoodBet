import React from 'react';
import { Text, View,Dimensions,Image } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters'
import {FText,Morph} from '../../components'
import {FontSizes,Colors} from '../../theme'
import {Styles} from '../../styles'
const {width,height} = Dimensions.get('window')
const Figures = ({
    params,
}) => 
{
return(
    <View style={styles.container}>
        <Morph style={styles.figuresStyle}>
            <View style={styles.figuresContainer}>
                <View style={styles.headerFigures}>
                    <Image style={{width:50,height:50}} source={require('../../assets/icons/order.png')}/>
                    <FText align="center" size={FontSizes.FONT_15} weight="500" color={Colors.red_fresh} >Orders count</FText>
                </View>
                <FText style={styles.value}>
                        450 Orders
                </FText>
                <FText style={styles.target}>
                        45% target 
                </FText>
            </View>
        </Morph>
        <Morph style={styles.figuresStyle}>
            <View style={styles.figuresContainer}>
                <View style={styles.headerFigures}>
                        <Image style={{width:50,height:50}} source={require('../../assets/icons/sumoney.png')}/>
                        <FText align="center" size={FontSizes.FONT_15} weight="500" color={Colors.red_fresh} >Total Money</FText>
                    </View>
                    <FText style={styles.value}>
                            4500 $
                    </FText>
                    <FText style={styles.target}>
                            45% target 
                    </FText>
                </View>
        </Morph>
    </View>
);}


const styles = ScaledSheet.create({
    container:{
        flex:1,
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:"space-between"
    },
    figuresStyle:{
        height:'100%',
        width:(width-40)/2,
        backgroundColor:Colors.Linear_white1
    },
    figuresContainer:{
        flex:1,
    },
    headerFigures:{
        // flexDirection:'row',
        flex:2,
        padding:10,
        ...Styles.row_between_center
    },
    value:{
        flex:1.5,
        fontSize:FontSizes.FONT_15,
        fontWeight:'400',
        textAlign:'center',
        color:Colors.lightGreen
    
        
    },
    target:{
        flex:1.5,
        fontSize:FontSizes.FONT_15,
        fontWeight:'400',
        textAlign:'center',
        color:Colors.lightGreen

    },




})
export default Figures;
