import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Item,
  Button,
  Icon,
  Input,
  Text,
} from 'native-base';

const SearchBarExample = (props) => {
  return (
    <Container>
      <Header
        searchBar
        rounded
        style={{ backgroundColor: props.headerTheme.backgroundBar }}
        androidStatusBarColor={props.headerTheme.statusBarColor}>
        <Item>
          <Icon name="ios-search" type="Ionicons" />
          <Input placeholder="Search" />
          <Icon name="ios-people" type="Ionicons" />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
      <Content padder>
        <Button full onPress={() => props.navigation.openDrawer()}>
          <Text>Back</Text>
        </Button>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(SearchBarExample);
