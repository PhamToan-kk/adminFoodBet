// import React from 'react';
// import { Text, View ,StyleSheet} from 'react-native';
// import {Colors} from '../constants'
// const Block = (props) => 
// {
//     const {
//         flex,
//         row,
//         column,
//         center,
//         middle,
//         left,
//         right,
//         top,
//         bottom,
//         card,
//         shadow,
//         color,
//         space,
//         padding,
//         margin,
//         animated,
//         wrap,
//         style,
//         children,
//         ...rest
//     } = props

//     const blockStyles = [
//     //   styles.block,
//     styles.block,
//     flex && { flex },
//     flex === false && { flex: 0 }, // reset / disable flex
//     row && styles.row,
//     column && styles.column,
//     direct_Center && styles.center, // justifycontent
//     per_direct_Center && styles.middle, // (perpendicular)alignItem
//     left && styles.left,
//     right && styles.right,
//     top && styles.top,
//     bottom && styles.bottom,
//     // margin && { ...this.handleMargins() },
//     // padding && { ...this.handlePaddings() },
//     card && styles.card,
//     shadow && styles.shadow,
//     space && { justifyContent: `space-${space}` },
//     wrap && { flexWrap: "wrap" },
//     color && styles[color], // predefined styles colors for backgroundColor
//     color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
//     style // rewrite predefined styles
//       ];
//     // return(
//     <View style={blockStyles} {...props}>
//         {children}
//     </View>
// );}

// const styles = StyleSheet.create({
//     row: {
//       flexDirection: "row"
//     },
//     column: {
//       flexDirection: "column"
//     },
//     card: {
//       borderRadius: 10
//     },
//     center: {
//         justifyContent: "center"
//     },
//     middle: {
//         alignItems: "center"
//     },
//     left: {
//       justifyContent: "flex-start"
//     },
//     right: {
//       justifyContent: "flex-end"
//     },
//     top: {
//       justifyContent: "flex-start"
//     },
//     bottom: {
//       justifyContent: "flex-end"
//     },
//     shadow: {
//       shadowColor: Colors.black,
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.1,
//       shadowRadius: 13,
//       elevation: 2
//     },
   
//   });
  

// export default componentName;
