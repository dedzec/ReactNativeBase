import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Card from '../screens/card';
import CardExample from '../screens/card/Card';
import CardHeaderFooterExample from '../screens/card/CardHeaderFooter';
import CardItemBorderedExample from '../screens/card/CardItemBordered';
import CardItemButtonExample from '../screens/card/CardItemButton';
import CardTransparentExample from '../screens/card/CardTransparent';
import CardListExample from '../screens/card/CardList';
import CardImageExample from '../screens/card/CardImage';
import CardShowcaseExample from '../screens/card/CardShowcase';

const Stack = createStackNavigator();

const CardRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Card"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Card"
        component={Card}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardBasic"
        component={CardExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardHeaderFooter"
        component={CardHeaderFooterExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardItemBordered"
        component={CardItemBorderedExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardItemButton"
        component={CardItemButtonExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardTransparent"
        component={CardTransparentExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardList"
        component={CardListExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardImage"
        component={CardImageExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardShowcase"
        component={CardShowcaseExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CardRoutes;
