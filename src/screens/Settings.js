import React, { useState, useEffect } from 'react';
import { StyleSheet, Modal } from 'react-native';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Title,
  Text,
  Icon,
  Left,
  View,
  Body,
  Right,
  Separator,
} from 'native-base';

import { HEADER_THEME, LOCALE } from '../store/actions/actionTypes';

const colors = {
  indigo: {
    backgroundBar: '#3F51B5',
    color: '#fff',
    statusBarColor: '#303f9f',
    statusBarStyle: 'light-content',
  },
  red: {
    backgroundBar: '#f44336',
    color: '#fff',
    statusBarColor: '#d32f2f',
    statusBarStyle: 'light-content',
  },
  cyan: {
    backgroundBar: '#00bcd4',
    color: '#fff',
    statusBarColor: '#0097a7',
    statusBarStyle: 'light-content',
  },
  teal: {
    backgroundBar: '#009688',
    color: '#fff',
    statusBarColor: '#00796b',
    statusBarStyle: 'light-content',
  },
};

const Settings = (props) => {
  const route = useRoute();
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    i18n.changeLanguage(props.locale);
  }, [i18n, props.locale]);

  const settings = [
    {
      name: 'headerTheme',
      onPress: () => setModal(true),
      right: () => <Text>{props.headerTheme.backgroundBar}</Text>,
      icon: {
        name: 'palette',
        type: 'Entypo',
        color: '#f44336',
      },
    },
    {
      name: 'locale',
      right: () => menuLocale,
      icon: {
        name: 'translate',
        type: 'MaterialCommunityIcons',
        color: '#3F51B5',
      },
    },
  ];

  const setHeaderTheme = (theme) => {
    props.onToggleHeaderTheme(theme);
    setModal(false);
  };

  const modalThemes = (
    <Modal transparent={true} animationType={'none'} visible={modal}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.textHeader}>Headers Themes</Text>
          </View>
          <Button
            style={styles.headerIndigo}
            onPress={() => setHeaderTheme(colors.indigo)}
          />
          <Button
            style={styles.headerRed}
            onPress={() => setHeaderTheme(colors.red)}
          />
          <Button
            style={styles.headerCyan}
            onPress={() => setHeaderTheme(colors.cyan)}
          />
          <Button
            style={styles.headerTeal}
            onPress={() => setHeaderTheme(colors.teal)}
          />
        </View>
      </View>
    </Modal>
  );

  const menuLocale = (
    <Picker
      note
      mode="dropdown"
      style={{ width: 120 }}
      selectedValue={props.locale}
      onValueChange={(value) => props.onToggleLocale(value)}>
      <Picker.Item label="EN" value="en" />
      <Picker.Item label="PT" value="pt" />
    </Picker>
  );

  const listSettings = () => {
    return settings.map((setting, index) => (
      <ListItem icon key={index} onPress={setting.onPress}>
        <Left>
          <Button style={{ backgroundColor: setting.icon.color }}>
            <Icon active name={setting.icon.name} type={setting.icon.type} />
          </Button>
        </Left>
        <Body>
          <Text>{t(`settings.${setting.name}`)}</Text>
        </Body>
        <Right>{setting.right()}</Right>
      </ListItem>
    ));
  };

  return (
    <Container>
      <Header
        style={{ backgroundColor: props.headerTheme.backgroundBar }}
        androidStatusBarColor={props.headerTheme.statusBarColor}>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" type="MaterialIcons" />
          </Button>
        </Left>
        <Body>
          <Title>{route.name}</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Separator bordered noTopBorder />
        {listSettings()}
        {modalThemes}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 350,
    width: 350,
    borderRadius: 15,
    display: 'flex',
  },
  textHeader: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  headerIndigo: {
    marginTop: 10,
    marginLeft: 10,
    width: 325,
    height: 50,
    backgroundColor: colors.indigo.backgroundBar,
    borderColor: colors.indigo.statusBarColor,
    borderTopWidth: 20,
  },
  headerRed: {
    marginTop: 10,
    marginLeft: 10,
    width: 325,
    height: 50,
    backgroundColor: colors.red.backgroundBar,
    borderColor: colors.red.statusBarColor,
    borderTopWidth: 20,
  },
  headerCyan: {
    marginTop: 10,
    marginLeft: 10,
    width: 325,
    height: 50,
    backgroundColor: colors.cyan.backgroundBar,
    borderColor: colors.cyan.statusBarColor,
    borderTopWidth: 20,
  },
  headerTeal: {
    marginTop: 10,
    marginLeft: 10,
    width: 325,
    height: 50,
    backgroundColor: colors.teal.backgroundBar,
    borderColor: colors.teal.statusBarColor,
    borderTopWidth: 20,
  },
});

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  onToggleHeaderTheme: (theme) =>
    dispatch({ type: HEADER_THEME, theme: theme }),
  onToggleLocale: (locale) => dispatch({ type: LOCALE, locale: locale }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
