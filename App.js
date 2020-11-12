// import React ,{useState,useEffect}from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';
// import io from "socket.io-client";
// const socket = io("http://localhost:3000")

// const App = ({
//     params,
// }) => {
//   const [txt,setTxt] = useState("")
//   const [txt2,setTxt2] = useState("")

//   useEffect(()=>{
//      socket.on("server send admin", msg => {
//         console.log("server send admin", msg);
//         setTxt(msg)
//       });
//   })
//   useEffect(()=>{
//      socket.on("server send user", msg => {
//         console.log("server send user", msg); 
//       // socket.emit("chat message", "tao la client");
//       setTxt2(msg)
//       });
//   })

//   const admin = ()=>{
//     socket.emit("admin send user", "resonse")
//   }

//   const user = ()=>{
//     socket.emit("user send admin", "noti")
//   }

//   return(
//     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        
//         <TouchableOpacity onPress={()=>admin()}>
//           <Text>ADmin</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={()=>user()}>
//           <Text>User</Text>
//         </TouchableOpacity>

//         <Text>server</Text>
//         <Text>{txt}</Text>


//         <Text>user nhan</Text>
//         <Text>{txt2}</Text>

       
//     </View>
// );
// }
// export default App;
