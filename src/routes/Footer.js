import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Footer from '../screens/footer';
import FooterTabsExample from '../screens/footer/Footer';
import FooterTabsIconExample from '../screens/footer/FooterIcon';
import FooterTabsIconTextExample from '../screens/footer/FooterIconText';
import FooterTabsBadgeExample from '../screens/footer/FooterTabsBadge';

const Stack = createStackNavigator();

const FooterRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Footer"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Footer"
        component={Footer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FooterTabsBasic"
        component={FooterTabsExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FooterTabsIcon"
        component={FooterTabsIconExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FooterTabsIconText"
        component={FooterTabsIconTextExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FooterTabsBadge"
        component={FooterTabsBadgeExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FooterRoutes;
