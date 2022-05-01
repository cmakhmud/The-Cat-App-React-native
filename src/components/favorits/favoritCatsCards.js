import { View, Text ,TouchableOpacity , Image } from "react-native";
import {styles} from './favoritCatCardscss';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { detailedContext } from '../../providers/catDetailedProvider';
import { contextCats } from "../../providers/catsProvider";
import { useContext } from "react";

export default function FavoritCatsCard({ item }) {

    const [favoritCats, setFavoritCats] = useContext(contextCats);
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

    const addCatsToFavorits = (item , cb) => {
        
        const favorites = Object.assign([], favoritCats)
        const index = favorites.findIndex(f => f.id === item.id);

        if (index === -1) {
            favorites.push(item);
            
        } else {
            favorites.splice(index, 1);
        }

        setFavoritCats(favorites)
    }

    return (
        <View style={styles.toucharea}>
            <TouchableOpacity onPress={()=>goToCatsDetailed(item)} style={styles.cardLeft}>
                <Image style={styles.image} source={{ url: `${item.image.url}` }}></Image>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>addCatsToFavorits(item)} style={styles.favIcon}>
               <AntDesign name="heart" size={35} color="black" />
            </TouchableOpacity>
        </View>
    )
}