import React,{useEffect,useState} from 'react';
import { Text, View ,FlatList,Image, ActivityIndicator,TouchableOpacity} from 'react-native';
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
const ListFood = (props) => 
{
    const { navigation} = props
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [pageCurrent,setPageCurrent] = useState(1)
    const [foodCount,setFoodCount] = useState()
    const limit = 5
    const getData = ()=>{
        const URL = `http://192.168.3.102:3000/foods/getPageFoods?limit=${limit}&page=`+pageCurrent
        console.log(URL)
        fetch(URL)
        .then((res)=>res.json())
        .then((resJosn)=> {
            setData(data.concat(resJosn.resultFoods))
            setFoodCount(resJosn.foodcount)
            setIsLoading(false)
        })
    }
    useEffect(()=>{
        setIsLoading(true)
        getData()
    },[pageCurrent])

    const renderItem = ({item})=>{
        return(
            
            <TouchableOpacity key={item.id} 
                onPress={()=>navigation.navigate('AddFood')}
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
    renderFooter = ()=>(
        isLoading?
        <View style={styles.loader}>
            <ActivityIndicator size={"large"}/>
        </View>
        :
        null
        )
    
    handleLoadmore=()=>{
        if(pageCurrent*limit-1 <= foodCount)
        setPageCurrent(pageCurrent+1)
        setIsLoading(true)
    }    
    return(
    <View style={styles.container}>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item,index)=>item._id}
            ListFooterComponent={renderFooter}
            onEndReached={()=>{
                if(pageCurrent*limit-1 <= foodCount)
                handleLoadmore()
            }}
            onEndReachedThreshold={0}

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
