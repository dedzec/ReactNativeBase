import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import HeaderApp from '../screens/header';
import HeaderExample from '../screens/header/Header';
import HeaderTitleExample from '../screens/header/HeaderTitle';
import HeaderTitleSubtitleExample from '../screens/header/HeaderTitleSubtitle';
import HeaderIconExample from '../screens/header/HeaderIcon';
import HeaderTextExample from '../screens/header/HeaderText';
import HeaderIconButtonTextButtonExample from '../screens/header/HeaderIconButtonTextButton';
import HeaderIconTextButtonExample from '../screens/header/HeaderIconTextButton';
import HeaderMultipleIconExample from '../screens/header/HeaderMultipleIcon';
import HeaderSpanExample from '../screens/header/HeaderSpan';
import HeaderNoShadowExample from '../screens/header/HeaderNoShadow';
import HeaderNoLeftExample from '../screens/header/HeaderNoLeft';
import HeaderTransparentExample from '../screens/header/HeaderTransparent';

const Stack = createStackNavigator();

const HeaderRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Header"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Header"
        component={HeaderApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeaderBasic"
        component={HeaderExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeaderTitle"
        component={HeaderTitleExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeaderTitleSubtitle"
        component={HeaderTitleSubtitleExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeaderIcon"
        component={HeaderIconExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeaderText"
        component={HeaderTextExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeaderIconButtonTextButton"
        component={HeaderIconButtonTextButtonExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeaderIconTextButton"
        component={HeaderIconTextButtonExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeaderMultipleIcon"
        component={HeaderMultipleIconExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeaderSpan"
        component={HeaderSpanExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeaderNoShadow"
        component={HeaderNoShadowExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeaderNoLeft"
        component={HeaderNoLeftExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HeaderTransparent"
        component={HeaderTransparentExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HeaderRoutes;
