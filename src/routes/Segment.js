import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Segment from '../screens/segment';
import SegmentExample from '../screens/segment/Segment';
import SegmentHeaderExample from '../screens/segment/SegmentHeader';
import SegmentIconExample from '../screens/segment/SegmentIcon';

const Stack = createStackNavigator();

const SegmentRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Segment"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Segment"
        component={Segment}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SegmentBasic"
        component={SegmentExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SegmentHeader"
        component={SegmentHeaderExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SegmentIcon"
        component={SegmentIconExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default SegmentRoutes;
