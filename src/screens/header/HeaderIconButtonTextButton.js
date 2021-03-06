import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Icon,
  Left,
  Button,
  Title,
  Body,
  Right,
  Text,
} from 'native-base';

const HeaderIconButtonTextButtonExample = (props) => {
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
          <Title>Header</Title>
        </Body>
        <Right>
          <Button transparent>
            <Text>Cancel</Text>
          </Button>
        </Right>
      </Header>
      <Content padder>
        <Text>Header with Icon Button and Text Button</Text>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(HeaderIconButtonTextButtonExample);
