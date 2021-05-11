import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Image, Dimensions } from 'react-native';
import Menu, { MenuItem } from 'react-native-material-menu';
import {
  Container,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  View,
  Content,
} from 'native-base';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const App = (props) => {
  const menu = useRef();

  const hideMenu = () => menu.current.hide();

  const showMenu = () => menu.current.show();

  const settins = () => {
    hideMenu();
    props.navigation.push('Settings');
  };

  const dependencies = () => {
    hideMenu();
    props.navigation.push('Dependencies');
  };

  const menuApp = (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Menu ref={menu}>
        <MenuItem onPress={settins}>Settings</MenuItem>
        <MenuItem onPress={dependencies}>Dependencies</MenuItem>
      </Menu>
    </View>
  );

  return (
    <Container>
      <Header
        style={{ backgroundColor: props.headerTheme.backgroundBar }}
        androidStatusBarColor={props.headerTheme.statusBarColor}>
        <Left>
          <Button transparent onPress={() => props.navigation.openDrawer()}>
            <Icon name="menu" type="MaterialIcons" />
          </Button>
        </Left>
        <Body>
          <Title>ReactNativeBase</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => showMenu()}>
            <Icon name="more-vert" type="MaterialIcons" />
            {menuApp}
          </Button>
        </Right>
      </Header>
      <Content>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
          }}>
          <Text>Welcome to App React Native</Text>
          <Text>Redux</Text>
          <Image
            source={require('../assets/react-redux.png')}
            style={{ width: width * 0.75, height: height / 3 }}
          />
          <Text>+</Text>
          <Text>Native Base</Text>
          <Image
            source={require('../assets/native-base.png')}
            style={{ width: width * 0.75, height: height / 3 }}
          />
        </View>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(App);
