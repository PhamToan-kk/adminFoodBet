import React ,{useState,useEffect}from 'react';
import { 
    View ,
    FlatList,
    TouchableOpacity ,
    ActivityIndicator,
    Image} from 'react-native';
import { ScaledSheet, } from 'react-native-size-matters';
import {Colors,FontSizes} from '../../theme'
import { Styles } from '../../styles'
import {
    FText ,
    VectorIcon,
    Morph,
    HeartIcon,
    FTextInput,
    MoveIcon,
} from '../../components'
import { OrderApi } from '../../api/orderApi'
import { useSelector,useDispatch} from 'react-redux'
import {ReadedAllOrders} from '../../redux/actions'
const ListOrders = (props) => 
{
    const dispatch = useDispatch()
    const { navigation} = props
    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [pageCurrent,setPageCurrent] = useState(1)
    const limit = 5
    const [maxPage,setMaxpage] = useState()
    const [refeshing,setRefeshing] = useState(false)

    const getData = ()=>{
        const params ={
            page:pageCurrent,
            limit:5
        }
        OrderApi.loadOrders(params)
        .then((resJosn)=> {
            setData(data.concat(resJosn.resultOrders))
            setIsLoading(false)
            setRefeshing(false)
            const maxPage = Math.ceil(resJosn.orderCount/5)
            setMaxpage(maxPage)

        })
        .catch(err=>console.log(err))
    }

    const handleRefresh=()=>{
        setData([])
        setRefeshing(true)
        setPageCurrent(1)
    } 

    useEffect(()=>{
        navigation.addListener('focus', () => {
            console.log('rerendrerrrrr')
            setData([])
            setPageCurrent(1)
            dispatch(ReadedAllOrders())
        });
        setIsLoading(true)
        getData()
    },[pageCurrent])
    const handleLoadmore=()=>{
        setIsLoading(true)
        setPageCurrent(pageCurrent+1)
    } 

    const renderItem = ({item})=>(
        <TouchableOpacity 
        style={[styles.orderItem,{backgroundColor:item.isactive?'white':Colors.blueNoti}]}
        onPress={()=>navigation.navigate('DetailOrder',{item:item})}
        >
            <View style={styles.leftItem}>
                <View style={styles.imgView}>
                    <Image style={styles.img} source={require('../../assets/icons/orderIcon.png')}/>
                </View>
            </View>
            <View style={styles.rightItem}>
                <FText style={styles.orderName}>Order {item.name}</FText>
                <FText>Customer: {item.customername}</FText>
                <FText>Cost: {item.paymenttotal}</FText>
                <FText>Active: {item.isactive ? "done":"no"}</FText>
                <FText>{item.time}</FText>
                <MoveIcon/>
            </View>
            {
                item.feedback?
                <FText style={styles.fb}>Feedback</FText>
                :
                null
            }

        </TouchableOpacity>
    )
    const renderFooter = ()=>(
        isLoading?
        <View style={styles.loader}>
            <ActivityIndicator size={"large"}/>
        </View>
        :
        null
        )
    return(
    <View style={styles.container}>
        <FlatList
            // inverted
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
            initialScrollIndex={0}
            ItemSeparatorComponent={()=> (<View style={{height:3,backgroundColor:'white'}}/>)}
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
    orderItem:{
        width:'100%',
        height:'100@s',
        // backgroundColor:Colors.red_fresh_opacity,
        flexDirection:'row'
    },
    leftItem:{
        flex:1,
        ...Styles.center_center
    },
    rightItem:{
        flex:2,
        paddingHorizontal:10,
        paddingTop:10
    },
    img:{
        width:'50@s',
        height:'50@s',
        borderRadius:999,
        resizeMode:'contain'
    },  
    loader:{
        marginTop:10,
        alignItems:'center'
    },
    imgView:{
        width:'90@s',
        height:'90@s',
        backgroundColor:'white',
        ...Styles.center_center,
        borderRadius:99
    },
    orderName:{
        fontSize:FontSizes.FONT_15,
        fontWeight:'300'
    },
    fb:{
        position:'absolute',
        bottom:20,
        right: 10,
        color:Colors.lightGreen
    }
})

export default ListOrders;
