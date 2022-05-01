import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './catsDetailedcss';
import '../../images/heartIcon.png'
import { contextCats } from '../../providers/catsProvider';
import { useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function CatsDetailedCard({ item }) {

    const [favoritCats, setFavoritCats] = useContext(contextCats)

    const addCatsToFavorits = (item, cb) => {

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
        <View style={styles.viewDetailed}>
            <View style={styles.imageDesc}>
                <View style={styles.header}>
                    <View style={styles.logoIconWrapper}>
                        <Text style={styles.logo}>{item.name}</Text>
                        <TouchableOpacity onPress={() => addCatsToFavorits(item)}>
                            <AntDesign name="heart" size={35} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Image style={styles.image} source={{ url: `${item.image.url}` }} />
                    </View>
                </View>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.origin}><Text style={{ fontWeight: 'bold' , fontSize:20 }}>Origin :</Text> {item.origin}</Text>
                <Text style={styles.origin}><Text style={{ fontWeight: 'bold' , fontSize:20}}>Wikipedia Url :</Text> {item.wikipedia_url}</Text>
                <Text style={styles.origin}><Text style={{ fontWeight: 'bold' , fontSize:20}}>Life Span :</Text> {item.life_span}</Text>
                <Text style={styles.origin}><Text style={{ fontWeight: 'bold' , fontSize:20}}>Dog Friendly :</Text> {item.dog_friendly}</Text>
            </View>
        </View>

    )
}