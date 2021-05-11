import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Components from '../screens/components';
import SwipeList from '../screens/components/SwipeList';
import Sliders from '../screens/components/Sliders';
import MaterialMenu from '../screens/components/MaterialMenu';
import EchartsWrapper from '../screens/components//EchartsWrapper';
import ColorPickes from '../screens/components/ColorPickes';
import WidgetNative from '../screens/components/WidgetNative';

const Stack = createStackNavigator();

const ComponentsRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Components"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Components"
        component={Components}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SwipeList"
        component={SwipeList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sliders"
        component={Sliders}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MaterialMenu"
        component={MaterialMenu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EchartsWrapper"
        component={EchartsWrapper}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ColorPickes"
        component={ColorPickes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WidgetNative"
        component={WidgetNative}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ComponentsRoutes;
