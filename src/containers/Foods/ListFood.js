import React,{useEffect,useState} from 'react';
import { Text, View ,FlatList,Image, ActivityIndicator} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters'
import {FText } from '../../components'
import {FontSizes,Colors} from '../../theme'
const ListFood = (props) => 
{
    const [data,setData] = useState([])
    const [loading,setIsLoading] = useState(false)
    const getData = ()=>{
        const URL = "https://jsonplaceholder.typicode.com/photos?_limit=5&_page=1"
        fetch(URL)
        .then((res)=>res.json())
        .then((resJosn)=> setData(resJosn))
    }
    useEffect(()=>{
        getData()
    },[])

    const renderItem = ({item})=>{
        return(
            <View style={{marginTop:10}}>
                <Image style={{width:'100%',height:200}} source={{uri:item.url}}/>
                <Text>item.title</Text>
                <Text>item.id</Text>

            </View>
        )
    }
    renderFooter = ()=>{
        return(<View style={styles.loader}>
            <ActivityIndicator size={"large"}/>
        </View>)
    }
    return(
    <View style={styles.container}>
        <Text>componentName</Text>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item,index)=>item.id.toString()}
            ListFooterComponent={renderFooter}
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
    }
})
export default ListFood;
