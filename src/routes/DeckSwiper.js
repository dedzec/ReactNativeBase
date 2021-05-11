import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import DeckSwiper from '../screens/deckSwiper';
import DeckSwiperExample from '../screens/deckSwiper/DeckSwiper';
import DeckSwiperAdvancedExample from '../screens/deckSwiper/DeckSwiperAdvanced';

const Stack = createStackNavigator();

const DeckSwiperRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="DeckSwiper"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="DeckSwiper"
        component={DeckSwiper}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeckSwiperBasic"
        component={DeckSwiperExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeckSwiperAdvanced"
        component={DeckSwiperAdvancedExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default DeckSwiperRoutes;
