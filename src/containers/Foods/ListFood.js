import React,{useEffect,useState} from 'react';
import { Text, View ,FlatList,Image, ActivityIndicator,TouchableOpacity} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import {ScaledSheet} from 'react-native-size-matters'
import {
    FText ,
    TextInput,
    VectorIcon,
    Morph,
    HeartIcon,
    MoveIcon
} from '../../components'
import {FontSizes,Colors} from '../../theme'
import {foodApi} from '../../api/foodApi'
const ListFood = (props) => 
{
    const { navigation} = props
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [pageCurrent,setPageCurrent] = useState(1)
    const [foodCount,setFoodCount] = useState()
    const [refeshing,setRefeshing] = useState(false)
    const limit = 5
    const [maxPage,setMaxpage] = useState()
    const getData = ()=>{
        const params ={
            page:pageCurrent,
            limit:5
        }
        foodApi.loadFoods(params)
        .then((resJosn)=> {
            // console.log('resjson',resJosn)
            setData(data.concat(resJosn.resultFoods))
            setFoodCount()
            setIsLoading(false)
            setRefeshing(false)
            const maxPage = Math.ceil(resJosn.foodcount/5)
            setMaxpage(maxPage)

        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        setIsLoading(true)
        getData()
    },[pageCurrent])
    
    const renderItem = ({item})=>{
        return(
            
            <TouchableOpacity key={item.id} 
                // onPress={()=>navigation.navigate('AddFood')
                // }
                >
                    <Morph style={styles.itemContainer}>
                        <View style={styles.foodContainer}>
                            <Image style={styles.foodImg} source={{uri:item.url}}/>
                            <View style={styles.foodInfor}>
                                <FText 
                                size={FontSizes.FONT_15}
                                weight="400"
                                >{item.name}</FText>
                                <FText 
                                weight="300"
                                size={FontSizes.FONT_12}
                                color={Colors.buttonColorDark}
                                > Type: {item.type}</FText>
                                <FText 
                                weight="300"
                                size={FontSizes.FONT_12}
                                color={Colors.buttonColorDark}
                                >{item.price}$</FText>
                                
                                <FText 
                                weight="300"
                                size={FontSizes.FONT_12}
                                numberOfLines={2}
                                >{item.intro}</FText>     
                            </View>
                        </View>
                           
                        <MoveIcon size={20}/>
                        <HeartIcon size={25} style={styles.heart}/>
                    </Morph>
                </TouchableOpacity>
        )
    }
    const renderFooter = ()=>(
        isLoading?
        <View style={styles.loader}>
            <ActivityIndicator size={"large"}/>
        </View>
        :
        null
        )
    
     const handleLoadmore=()=>{
        setPageCurrent(pageCurrent+1)
        setIsLoading(true)
    }   
    const handleRefresh=()=>{
        setData([])
        setPageCurrent(1)
        setRefeshing(true)
    } 


    return(
    <View style={styles.container}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item,index)=>item._id}
            ListFooterComponent={renderFooter}
            onEndReached={()=>{
                // console.log('pageCurrent',pageCurrent)
                // console.log('maxPage',maxPage)
                if(pageCurrent+1 <= maxPage) handleLoadmore()

            }}
            onEndReachedThreshold={0}
            onRefresh={handleRefresh}
            refreshing={refeshing}

        />
    </View>
);
}

const styles = ScaledSheet.create({
    container:{
        flex:1
    },
    loader:{
        marginTop:10,
        alignItems:'center'
    },
    itemContainer:{
        width:'100%',
        height:'110@vs',
        marginVertical:5,
        borderRadius:10,
    },
    foodContainer:{
        flex:1,
        flexDirection:'row'
    },
    foodImg:{
        flex:3,
        width:'110@vs',
        height:'110@vs',
        borderRadius:10,

    },
    foodInfor:{
        flex:4,
        paddingHorizontal:'10@s',
        paddingVertical:"5@vs",
        justifyContent:'space-between'

    },
    heart:{
        position:'absolute',
        top:5,
        left:5
    }
})
export default ListFood;
