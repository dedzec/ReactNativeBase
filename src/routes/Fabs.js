import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Fabs from '../screens/fabs';
import FabExample from '../screens/fabs/Fab';
import FabMultipleExample from '../screens/fabs/FabMultiple';

const Stack = createStackNavigator();

const FabsRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Fabs"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Fabs"
        component={Fabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FabBasic"
        component={FabExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FabMultiple"
        component={FabMultipleExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FabsRoutes;
