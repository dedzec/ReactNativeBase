import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import ActionSheet from '../screens/actionSheet';
import ActionSheetExample from '../screens/actionSheet/ActionSheet';
import ActionSheetIconExample from '../screens/actionSheet/ActionSheetIcon';

const Stack = createStackNavigator();

const ActionSheetRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="ActionSheet"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="ActionSheet"
        component={ActionSheet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActionSheetBasic"
        component={ActionSheetExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActionSheetIcon"
        component={ActionSheetIconExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ActionSheetRoutes;
