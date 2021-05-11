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
    route: 'ListBasic',
  },
  {
    name: 'List Divider',
    route: 'ListDivider',
  },
  {
    name: 'List Header',
    route: 'ListHeader',
  },
  {
    name: 'ListItem Selected',
    route: 'ListItemSelected',
  },
  {
    name: 'ListItem NoIndent',
    route: 'ListItemNoIndent',
  },
  {
    name: 'List Icon',
    route: 'ListIcon',
  },
  {
    name: 'List Avatar',
    route: 'ListAvatar',
  },
  {
    name: 'List Thumbnail',
    route: 'ListThumbnail',
  },
  {
    name: 'List Separator',
    route: 'ListSeparator',
  },
];

const ListApp = (props) => {
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

export default connect(mapStateToProps)(ListApp);
