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
    route: 'HeaderBasic',
  },
  {
    name: 'Header with only title',
    route: 'HeaderTitle',
  },
  {
    name: 'Header with Title and Subtitle',
    route: 'HeaderTitleSubtitle',
  },
  {
    name: 'Header with Icon Buttons',
    route: 'HeaderIcon',
  },
  {
    name: 'Header with Text Buttons',
    route: 'HeaderText',
  },
  {
    name: 'Header with Icon Button and Text Button',
    route: 'HeaderIconButtonTextButton',
  },
  {
    name: 'Header with Icon and Text Button',
    route: 'HeaderIconTextButton',
  },
  {
    name: 'Header with Multiple Icon Buttons',
    route: 'HeaderMultipleIcon',
  },
  {
    name: 'Header Span',
    route: 'HeaderSpan',
  },
  {
    name: 'Header NoShadow',
    route: 'HeaderNoShadow',
  },
  {
    name: 'Header NoLeft',
    route: 'HeaderNoLeft',
  },
  {
    name: 'Header Transparent',
    route: 'HeaderTransparent',
  },
];

const HeaderApp = (props) => {
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

export default connect(mapStateToProps)(HeaderApp);
