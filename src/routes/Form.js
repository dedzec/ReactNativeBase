import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Form from '../screens/form';
import FormExample from '../screens/form/Form';
import FormFixedLabelExample from '../screens/form/FormFixedLabel';
import FormInlineLabelExample from '../screens/form/FormInlineLabel';
import FormFloatingLabelExample from '../screens/form/FormFloatingLabel';
import FormStackedLabelExample from '../screens/form/FormStackedLabel';
import FormPickerInputExample from '../screens/form/FormPickerInput';
import FormRegularTextboxExample from '../screens/form/FormRegularTextbox';
import FormUnderlinedTextboxExample from '../screens/form/FormUnderlinedTextbox';
import FormRoundedTextboxExample from '../screens/form/FormRoundedTextbox';
import FormIconTextboxExample from '../screens/form/FormIconTextbox';
import FormSuccessInputTextboxExample from '../screens/form/FormSuccessInputTextbox';
import FormErrorInputTextboxExample from '../screens/form/FormErrorInputTextbox';
import FormDisabledTextboxExample from '../screens/form/FormDisabledTextbox';
import FormTextAreaExample from '../screens/form/FormTextArea';

const Stack = createStackNavigator();

const FormRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Form"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Form"
        component={Form}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormBasic"
        component={FormExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormFixedLabel"
        component={FormFixedLabelExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormInlineLabel"
        component={FormInlineLabelExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormFloatingLabel"
        component={FormFloatingLabelExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormStackedLabel"
        component={FormStackedLabelExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormPickerInput"
        component={FormPickerInputExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormRegularTextbox"
        component={FormRegularTextboxExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormUnderlinedTextbox"
        component={FormUnderlinedTextboxExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormRoundedTextbox"
        component={FormRoundedTextboxExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormIconTextbox"
        component={FormIconTextboxExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormSuccessInputTextbox"
        component={FormSuccessInputTextboxExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormErrorInputTextbox"
        component={FormErrorInputTextboxExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormDisabledTextbox"
        component={FormDisabledTextboxExample}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="FormTextArea"
        component={FormTextAreaExample}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default FormRoutes;
