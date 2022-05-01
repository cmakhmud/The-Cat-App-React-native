import { View } from 'react-native'
import { useContext } from 'react';
import { detailedContext } from '../../providers/catDetailedProvider';
import '../../images/heartIcon.png';
import CatsDetailedCard from './catsDetailedCard';

export default function CatsDetailed() {

    const [catDetailed, setCatDetailed] = useContext(detailedContext)

    return (
        <View>
            {
                catDetailed.map((cat, index) => {
                    return (
                        <CatsDetailedCard key={index} item={cat} />
                    )
                })
            }
        </View>)
}