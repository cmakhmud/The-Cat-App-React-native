import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderWidth:2,
        borderRadius:100,
        resizeMode:'contain'
    },
    toucharea: {
        display: 'flex',
        height:120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginVertical:10,
        borderWidth: 2,
        borderColor:'black',
        borderRadius:10,
        padding:15,
        shadowOpacity:1,
        shadowColor:'grey'
    },
    cardLeft: {
        width: '50%',
        display: 'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    text: {
        fontSize: 15,
        margin:20
    },
    favIcon:{
        width: 50,
        height: 50 ,
        display:'flex' , 
        justifyContent:'center', 
        alignItems:'center'
    }
})