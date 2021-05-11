import React from 'react';
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

const ListHeaderExample = (props) => {
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
          <Subtitle>List Header</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content>
        <List>
          <ListItem itemHeader first>
            <Text>COMEDY</Text>
          </ListItem>
          <ListItem>
            <Text>Hangover</Text>
          </ListItem>
          <ListItem>
            <Text>Horrible Bosses</Text>
          </ListItem>
          <ListItem>
            <Text>Wedding Crashers</Text>
          </ListItem>
          <ListItem last>
            <Text>Cop Out</Text>
          </ListItem>

          <ListItem itemHeader>
            <Text>HORROR</Text>
          </ListItem>
          <ListItem>
            <Text>The Evil Dead</Text>
          </ListItem>
          <ListItem>
            <Text>Residential Evil</Text>
          </ListItem>
          <ListItem last>
            <Text>Conjuring</Text>
          </ListItem>

          <ListItem itemHeader>
            <Text>ACTION</Text>
          </ListItem>
          <ListItem>
            <Text>Terminator Genesis</Text>
          </ListItem>
          <ListItem>
            <Text>Fast And Furious</Text>
          </ListItem>
          <ListItem last>
            <Text>Top Gun</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(ListHeaderExample);
