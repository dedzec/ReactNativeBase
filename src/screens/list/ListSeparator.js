import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Content,
  Separator,
  ListItem,
  Text,
  Title,
  Subtitle,
  Body,
  Right,
} from 'native-base';

const ListSeparatorExample = (props) => {
  return (
    <Container style={{ backgroundColor: '#FFF' }}>
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
          <Subtitle>List Separator</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content>
        <Separator bordered>
          <Text>MIDFIELD</Text>
        </Separator>
        <ListItem>
          <Text>Caroline Aaron</Text>
        </ListItem>
        <ListItem>
          <Text>Urbino Cendre</Text>
        </ListItem>
        <ListItem last>
          <Text>Lee Allen</Text>
        </ListItem>

        <Separator bordered>
          <Text>MIDFIELD</Text>
        </Separator>
        <ListItem>
          <Text>Caroline Aaron</Text>
        </ListItem>
        <ListItem>
          <Text>Urbino Cendre</Text>
        </ListItem>
        <ListItem last>
          <Text>Lee Allen</Text>
        </ListItem>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(ListSeparatorExample);
