import React from 'react';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import {
  Container,
  Header,
  Content,
  Left,
  Button,
  List,
  ListItem,
  Text,
  Icon,
  Body,
  Title,
  Right,
} from 'native-base';

const routes = [
  {
    name: 'Basic',
    route: 'PickerBasic',
  },
  {
    name: 'Picker with Icon',
    route: 'PickerIcon',
  },
  {
    name: 'Picker with Icon Style (iOS Only)',
    route: 'PickerIconStyle',
  },
  {
    name: 'Placeholder Picker (iOS Only)',
    route: 'PickerPlaceholder',
  },
  {
    name: 'Placeholder Picker without note (iOS Only)',
    route: 'PickerPlaceholderNote',
  },
  {
    name: 'Picker Text and Item Text Style (iOS Only)',
    route: 'PickerTextItemStyle',
  },
  {
    name: 'Picker with Custom Back Button (iOS Only)',
    route: 'PickerCustomBackButton',
  },
  {
    name: 'Picker with Custom Header (iOS Only)',
    route: 'PickerCustomHeader',
  },
  {
    name: 'Picker with Custom Header Style (iOS Only)',
    route: 'PickerCustomHeaderStyle',
  },
];

const Picker = (props) => {
  const route = useRoute();

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
          <Title>{route.name}</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <List>
          {routes.map((item, index) => (
            <ListItem
              key={index}
              onPress={() => props.navigation.push(item.route)}>
              <Body>
                <Text>{item.name}</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" type="MaterialIcons" />
              </Right>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(Picker);
