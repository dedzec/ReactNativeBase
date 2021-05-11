import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Accordion from '../screens/accordion';
import AccordionExample from '../screens/accordion/Accordion';
import AccordionIconExample from '../screens/accordion/AccordionIcon';
import AccordionIconStyleExample from '../screens/accordion/AccordionIconStyle';
import AccordionHeaderContentStyle from '../screens/accordion/AccordionHeaderContentStyle';
import AccordionCustomHeaderContent from '../screens/accordion/AccordionCustomHeaderContent';

const Stack = createStackNavigator();

const AccordionRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Accordion"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Accordion"
        component={Accordion}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccordionBasic"
        component={AccordionExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccordionIcon"
        component={AccordionIconExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccordionStyle"
        component={AccordionIconStyleExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccordionHeaderContent"
        component={AccordionHeaderContentStyle}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AccordionCustom"
        component={AccordionCustomHeaderContent}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccordionRoutes;
