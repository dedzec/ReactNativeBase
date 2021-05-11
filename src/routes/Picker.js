import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Picker from '../screens/picker';
import PickerExample from '../screens/picker/Picker';
import PickerIconExample from '../screens/picker/PickerIcon';
import PickerIconStyleExample from '../screens/picker/PickerIconStyle';
import PickerPlaceholderExample from '../screens/picker/PickerPlaceholder';
import PickerPlaceholderNoteExample from '../screens/picker/PickerPlaceholderNote';
import PickerTextItemStyleExample from '../screens/picker/PickerTextItemStyle';
import PickerCustomBackButtonExample from '../screens/picker/PickerCustomBackButton';
import PickerCustomHeaderExample from '../screens/picker/PickerCustomHeader';
import PickerCustomHeaderStyleExample from '../screens/picker/PickerCustomHeaderStyle';

const Stack = createStackNavigator();

const PickerRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Picker"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Picker"
        component={Picker}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PickerBasic"
        component={PickerExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PickerIcon"
        component={PickerIconExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PickerIconStyle"
        component={PickerIconStyleExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PickerPlaceholder"
        component={PickerPlaceholderExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PickerPlaceholderNote"
        component={PickerPlaceholderNoteExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PickerTextItemStyle"
        component={PickerTextItemStyleExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PickerCustomBackButton"
        component={PickerCustomBackButtonExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PickerCustomHeader"
        component={PickerCustomHeaderExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PickerCustomHeaderStyle"
        component={PickerCustomHeaderStyleExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PickerRoutes;
