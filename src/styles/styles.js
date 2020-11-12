import { View, Text ,StyleSheet,Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window')

export const Styles = StyleSheet.create({
    // the long of width, height screen
    width:width,
    height:height,
    


    //Normal View (flex-direction = column)
    center_center:{
        justifyContent:'center',
        alignItems:'center'
    },
    between_center:{
        justifyContent:'space-between',
        alignItems:'center'
    },
    start_center:{
        justifyContent:'flex-start',
        alignItems:'center'
    },
    end_center:{
        justifyContent:'flex-end',
        alignItems:'center'
    },
    around_center:{
        justifyContent:'space-around',
        alignItems:'center'
    },





    // flex-direction = row + justifycontent + alignItem

    row_center_center:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    row_start_center:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    row_end_center:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    row_between_center:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    row_between_start:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start'
    },
    row_around_center:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },




})



