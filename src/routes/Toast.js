import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Toast from '../screens/toast';
import ToastExample from '../screens/toast/Toast';
import ToastDurationExample from '../screens/toast/ToastDuration';
import ToastPositionExample from '../screens/toast/ToastPosition';
import ToastTypeExample from '../screens/toast/ToastType';
import ToastTextExample from '../screens/toast/ToastText';
import ToastButtonExample from '../screens/toast/ToastButton';

const Stack = createStackNavigator();

const ToastRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Toast"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Toast"
        component={Toast}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ToastBasic"
        component={ToastExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ToastDuration"
        component={ToastDurationExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ToastPosition"
        component={ToastPositionExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ToastType"
        component={ToastTypeExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ToastText"
        component={ToastTextExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ToastButton"
        component={ToastButtonExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ToastRoutes;
