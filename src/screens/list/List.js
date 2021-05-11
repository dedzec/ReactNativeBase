import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Title,
  Subtitle,
  Body,
  Right,
} from 'native-base';

const datas = [
  'Simon Mignolet',
  'Nathaniel Clyne',
  'Dejan Lovren',
  'Mama Sakho',
  'Alberto Moreno',
  'Emre Can',
  'Joe Allen',
  'Phil Coutinho',
];

const ListExample = (props) => {
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
          <Title>List</Title>
          <Subtitle>Basic</Subtitle>
        </Body>
        <Right />
      </Header>
      <List
        dataArray={datas}
        keyExtractor={(data, index) => index.toString()}
        renderRow={(data, index) => (
          <ListItem key={index}>
            <Left>
              <Text>{data}</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" type="MaterialIcons" />
            </Right>
          </ListItem>
        )}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(ListExample);
