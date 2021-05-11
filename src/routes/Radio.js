import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Radio from '../screens/radio';
import RadioExample from '../screens/radio/Radio';
import RadioCustomExample from '../screens/radio/RadioCustom';

const Stack = createStackNavigator();

const RadioRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Radio"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Radio"
        component={Radio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RadioBasic"
        component={RadioExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RadioCustom"
        component={RadioCustomExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RadioRoutes;
