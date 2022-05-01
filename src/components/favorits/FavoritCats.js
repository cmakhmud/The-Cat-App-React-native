import { Text, View, Image, ScrollView } from "react-native";
import { useContext} from "react";
import { contextCats } from '../../providers/catsProvider';
import FavoritCatsCard from './favoritCatsCards';
import { styles } from "./favoritCatCardscss";

export default function FavoritCats() {

    const [favoritCats, setFavoritCats] = useContext(contextCats);

    return (
        <View style={styles.favoritCatView}>
            <ScrollView>
                {
                    favoritCats.map((cat , index)=>{
                        return <FavoritCatsCard key={index} item={cat} />
                    })
                }
            </ScrollView>
        </View>
    )
}