import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
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

const ListItemSelectedExample = (props) => {
  const [state, setState] = useState({
    datas: datas,
    selected: 'Simon Mignolet',
  });

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
          <Subtitle>ListItem Selected</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content>
        <List>
          {state.datas.map((item, index) => (
            <ListItem
              key={index}
              selected={state.selected === item}
              onPress={() => setState({ ...state, selected: item })}>
              <Left>
                <Text>{item}</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
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

export default connect(mapStateToProps)(ListItemSelectedExample);
