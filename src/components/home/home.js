import React from 'react'
import { Text, View, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { useState, useEffect , useContext } from 'react';
import CatsCard from './catsCard';
import catAPi from '../../apis/cats';
import { homeStyle } from './homecss';
import '../../images/heartIcon.png';
import '../../images/searchButton.png';
import {contextCats} from '../../providers/catsProvider';

export default function Home({ navigation }) {

    const [cats, setCats] = useState();
    const [favoritCats, setFavoritCats] = useContext(contextCats)
    const [catsForSearch,setCatsForSearch] = useState(cats)
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(()=>{
        getCatsFromApi()
    },[])

    function getCatsFromApi() {
        catAPi.get('breeds?limit=20')
            .then(function (response) {
                setCatsForSearch(response.data)
                setCats(response.data)
            })
    }
    if (!cats) {
        return null
    }
  
    const goToFavorit = () => {
        navigation.navigate('Favorit Cats')
    }

    function searchCats() {
        let filtercats = cats.filter(
            (cat) => {
                return cat.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
            })
        setCatsForSearch(filtercats)
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
        <View style={homeStyle.homeView}>
            <View style={homeStyle.iconLogoWrapper}>
                <Text style={homeStyle.homeLogo}>Cat Breeds</Text>
                <TouchableOpacity onPress={goToFavorit}><Image style={homeStyle.heartIcon} source={require('../../images/heartIcon.png')} /></TouchableOpacity>
            </View>
            <View style={homeStyle.searchInputIconWrapper}>
                <TextInput onChangeText={setSearchQuery} value={searchQuery} style={homeStyle.homeSearchCat} placeholder='Search' />
                <TouchableOpacity onPress={searchCats} style={homeStyle.searchCatOpacity}>
                    <Image style={homeStyle.homeSearchButton} source={require('../../images/searchButton.png')} />
                </TouchableOpacity>
            </View>
            <ScrollView>
                {catsForSearch.map((cat , catIndex) => {
                    return <CatsCard addCatsToFavorits={addCatsToFavorits} index={catIndex} key={catIndex} item={cat} />
                })}
            </ScrollView>
        </View>
    )
}