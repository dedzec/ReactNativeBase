import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '../config/DrawerContent';

import AppRoutes from './App';
import AnatomyExample from '../screens/Anatomy';
import HeaderRoutes from './Header';
import FooterRoutes from './Footer';
import AccordionRoutes from './Accordion';
import ActionSheetRoutes from './ActionSheet';
import BadgeExample from '../screens/Badge';
import ButtonsRoutes from './Buttons';
import CardRoutes from './Card';
import CheckboxExample from '../screens/Checkbox';
import DatePickerExample from '../screens/DatePicker';
import DeckSwiperRoutes from './DeckSwiper';
import FabsRoutes from './Fabs';
import FormRoutes from './Form';
import IconRoutes from './Icon';
import LayoutExample from '../screens/Layout';
import ListRoutes from './List';
import PickerRoutes from './Picker';
import RadioRoutes from './Radio';
import SearchBarExample from '../screens/SearchBar';
import SegmentRoutes from './Segment';
import SpinnerExample from '../screens/Spinner';
import TabsRoutes from './Tabs';
import ThumbnailExample from '../screens/Thumbnail';
import ToastRoutes from './Toast';
import TypographyExample from '../screens/Typography';
import ComponentsRoutes from './Components';
import ChatRoutes from './Chat';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={AppRoutes}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Anatomy" component={AnatomyExample} />
      <Drawer.Screen name="Header" component={HeaderRoutes} />
      <Drawer.Screen name="Footer" component={FooterRoutes} />
      <Drawer.Screen name="Accordion" component={AccordionRoutes} />
      <Drawer.Screen name="ActionSheet" component={ActionSheetRoutes} />
      <Drawer.Screen name="Badge" component={BadgeExample} />
      <Drawer.Screen name="Buttons" component={ButtonsRoutes} />
      <Drawer.Screen name="Card" component={CardRoutes} />
      <Drawer.Screen name="Checkbox" component={CheckboxExample} />
      <Drawer.Screen name="DatePicker" component={DatePickerExample} />
      <Drawer.Screen name="DeckSwiper" component={DeckSwiperRoutes} />
      <Drawer.Screen name="Fabs" component={FabsRoutes} />
      <Drawer.Screen name="Form" component={FormRoutes} />
      <Drawer.Screen name="Icon" component={IconRoutes} />
      <Drawer.Screen name="Layout" component={LayoutExample} />
      <Drawer.Screen name="List" component={ListRoutes} />
      <Drawer.Screen name="Picker" component={PickerRoutes} />
      <Drawer.Screen name="Radio" component={RadioRoutes} />
      <Drawer.Screen name="SearchBar" component={SearchBarExample} />
      <Drawer.Screen name="Segment" component={SegmentRoutes} />
      <Drawer.Screen name="Spinner" component={SpinnerExample} />
      <Drawer.Screen name="Tabs" component={TabsRoutes} />
      <Drawer.Screen name="Thumbnail" component={ThumbnailExample} />
      <Drawer.Screen name="Toast" component={ToastRoutes} />
      <Drawer.Screen name="Typography" component={TypographyExample} />
      <Drawer.Screen name="Components" component={ComponentsRoutes} />
      <Drawer.Screen name="Chat" component={ChatRoutes} />
    </Drawer.Navigator>
  );
};

export default Routes;
