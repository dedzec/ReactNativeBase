import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import List from '../screens/list';
import ListExample from '../screens/list/List';
import ListDividerExample from '../screens/list/ListDivider';
import ListHeaderExample from '../screens/list/ListHeader';
import ListItemSelectedExample from '../screens/list/ListItemSelected';
import ListItemNoIndentExample from '../screens/list/ListItemNoIndent';
import ListIconExample from '../screens/list/ListIcon';
import ListAvatarExample from '../screens/list/ListAvatar';
import ListThumbnailExample from '../screens/list/ListThumbnail';
import ListSeparatorExample from '../screens/list/ListSeparator';

const Stack = createStackNavigator();

const ListRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="List"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="List"
        component={List}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListBasic"
        component={ListExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListDivider"
        component={ListDividerExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListHeader"
        component={ListHeaderExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListItemSelected"
        component={ListItemSelectedExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListItemNoIndent"
        component={ListItemNoIndentExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListIcon"
        component={ListIconExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListAvatar"
        component={ListAvatarExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListThumbnail"
        component={ListThumbnailExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListSeparator"
        component={ListSeparatorExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ListRoutes;
