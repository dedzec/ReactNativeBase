import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Icons from '../screens/icon';
import AntDesignExample from '../screens/icon/AntDesign';
import EntypoExample from '../screens/icon/Entypo';
import EvilIconsExample from '../screens/icon/EvilIcons';
import FeatherExample from '../screens/icon/Feather';
import FontAwesomeExample from '../screens/icon/FontAwesome';
import FontAwesome5Example from '../screens/icon/FontAwesome5';
import FoundationExample from '../screens/icon/Foundation';
import IoniconsExample from '../screens/icon/Ionicons';
import MaterialCommunityIconsExample from '../screens/icon/MaterialCommunityIcons';
import MaterialIconsExample from '../screens/icon/MaterialIcons';
import OcticonsExample from '../screens/icon/Octicons';
import SimpleLineIconsExample from '../screens/icon/SimpleLineIcons';
import ZocialExample from '../screens/icon/Zocial';

const Stack = createStackNavigator();

const IconRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Icon"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Icon"
        component={Icons}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AntDesign"
        component={AntDesignExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Entypo"
        component={EntypoExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EvilIcons"
        component={EvilIconsExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Feather"
        component={FeatherExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FontAwesome"
        component={FontAwesomeExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FontAwesome5"
        component={FontAwesome5Example}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Foundation"
        component={FoundationExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Ionicons"
        component={IoniconsExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MaterialCommunityIcons"
        component={MaterialCommunityIconsExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MaterialIcons"
        component={MaterialIconsExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Octicons"
        component={OcticonsExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SimpleLineIcons"
        component={SimpleLineIconsExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Zocial"
        component={ZocialExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default IconRoutes;
