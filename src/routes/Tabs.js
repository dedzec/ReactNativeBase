import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Tabs from '../screens/tabs';
import TabsExample from '../screens/tabs/Tabs';
import TabsAdvancedExample from '../screens/tabs/TabsAdvanced';
import TabsScrollableExample from '../screens/tabs/TabsScrollable';

const Stack = createStackNavigator();

const TabsRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabsBasic"
        component={TabsExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabsAdvanced"
        component={TabsAdvancedExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabsScrollable"
        component={TabsScrollableExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TabsRoutes;
