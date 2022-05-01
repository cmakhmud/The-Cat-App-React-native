import '../../images/cat.jpeg';
import {View , Image , Text , TouchableOpacity} from 'react-native';
import {splashCss} from './splash.css';
import { NavigationAction } from '@react-navigation/native';
import { useState } from 'react';
export default function Splash({navigation}){

    const [favori , setFavori] = useState()

    const goToHome =()=>{
        navigation.navigate('Home')
    }
    return(
        <View style={splashCss.container}>
            <Text style={splashCss.splashText}>Welcome to our cat aplication ...</Text>
            <Image style={splashCss.splashImage} source={require('../../images/cat.jpeg')}/>
            <TouchableOpacity onPress = {goToHome}style={splashCss.splashTouchableOp}><Text >Click here to go to home page</Text></TouchableOpacity>
        </View>
    )
}