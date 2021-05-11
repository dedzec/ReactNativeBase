import React, { useRef } from 'react';
import { connect } from 'react-redux';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {
  Container,
  Header,
  Content,
  Left,
  Button,
  Icon,
  Title,
  Text,
  Body,
  View,
  Right,
} from 'native-base';

const MaterialMenu = (props) => {
  const menu = useRef();

  const hideMenu = () => menu.current.hide();

  const showMenu = () => menu.current.show();

  const menuApp = (
    <View>
      <Menu ref={menu}>
        <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
        <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
        <MenuItem onPress={hideMenu} disabled>
          Menu item 3
        </MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
      </Menu>
    </View>
  );

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
          <Title>MaterialMenu</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Button primary onPress={() => showMenu()}>
          <Text>Open Menu</Text>
        </Button>
        {menuApp}
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(MaterialMenu);
