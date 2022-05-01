import { StyleSheet } from "react-native";

export const splashCss = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    splashImage:{
        width:200,
        height:200,
        borderRadius:50
    },
    splashText:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20
    },
    splashTouchableOp:{
        backgroundColor:'#9CDCFE',
        marginTop:20,
        width:200,
        borderRadius:5,
        height:25,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
   
})