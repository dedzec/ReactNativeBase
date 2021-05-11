import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Chat from '../screens/chat';
import Room from '../screens/chat/Room';

const Stack = createStackNavigator();

const ChatRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Chat"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Room"
        component={Room}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ChatRoutes;
