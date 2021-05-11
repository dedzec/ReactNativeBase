import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Buttons from '../screens/buttons';
import ButtonExample from '../screens/buttons/Button';
import ButtonTransparentExample from '../screens/buttons/ButtonTransparent';
import ButtonOutlineExample from '../screens/buttons/ButtonOutline';
import ButtonRoundedExample from '../screens/buttons/ButtonRounded';
import ButtonBlockExample from '../screens/buttons/ButtonBlock';
import ButtonFullExample from '../screens/buttons/ButtonFull';
import ButtonIconExample from '../screens/buttons/ButtonIcon';
import ButtonSizeExample from '../screens/buttons/ButtonSize';
import ButtonDisabledExample from '../screens/buttons/ButtonDisabled';

const Stack = createStackNavigator();

const ButtonsRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Buttons"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Buttons"
        component={Buttons}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ButtonBasic"
        component={ButtonExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ButtonTransparent"
        component={ButtonTransparentExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ButtonOutline"
        component={ButtonOutlineExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ButtonRounded"
        component={ButtonRoundedExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ButtonBlock"
        component={ButtonBlockExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ButtonFull"
        component={ButtonFullExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ButtonIcon"
        component={ButtonIconExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ButtonSize"
        component={ButtonSizeExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ButtonDisabled"
        component={ButtonDisabledExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ButtonsRoutes;
