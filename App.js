import React from 'react';
import Splash from './src/components/splash/splash';
import Home from './src/components/home/home';
import FavoritCats from './src/components/favorits/FavoritCats';
import CatsDetailed from './src/components/detailed/catsdetailed';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import CatsContext from './src/providers/catsProvider';
import IsFavorite from './src/providers/isFavorit';
import CatDetailedContext from './src/providers/catDetailedProvider';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CatsContext>
      <CatDetailedContext>
        <IsFavorite>
          <NativeBaseProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Favorit Cats' component={FavoritCats} />
                <Stack.Screen name='Cats detailed' component={CatsDetailed} />
              </Stack.Navigator>
            </NavigationContainer>
          </NativeBaseProvider>
        </IsFavorite>
      </CatDetailedContext>
    </CatsContext>
  );
}