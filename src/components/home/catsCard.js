import { Text, TouchableOpacity, Image, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { styles } from './catsCardcss';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import { detailedContext } from '../../providers/catDetailedProvider';

export default function CatsCard({ item , addCatsToFavorits}) {

    const [catDetailed , setCatDetailed]= useContext(detailedContext)

    const navigation = useNavigation()

    const goToCatsDetailed = (item , cb) => {
        navigation.navigate('Cats detailed')
            
        const detaile = Object.assign([],catDetailed);
        const index = detaile.findIndex(f => f.id === item.id);

        if(index===-1){
            detaile.pop()
            detaile.push(item)
            setCatDetailed(detaile);
        }
    }


    return (

        <View style={styles.toucharea}>
            <TouchableOpacity onPress={()=>{goToCatsDetailed(item)}} style={styles.cardLeft}>
                <Image style={styles.image} source={{ url: `${item.image.url}` }}></Image>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.favIcon} onPress={() => {
                addCatsToFavorits(item)
            }}>
                <AntDesign name="heart" size={35} color="black" />
            </TouchableOpacity>
        </View>
    )
}
