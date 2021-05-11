import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Left,
  Button,
  Title,
  Body,
  Right,
  Text,
} from 'native-base';

const HeaderTextExample = (props) => {
  return (
    <Container>
      <Header
        style={{ backgroundColor: props.headerTheme.backgroundBar }}
        androidStatusBarColor={props.headerTheme.statusBarColor}>
        <Left>
          <Button hasText transparent onPress={() => props.navigation.goBack()}>
            <Text>Back</Text>
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right>
          <Button hasText transparent>
            <Text>Cancel</Text>
          </Button>
        </Right>
      </Header>
      <Content padder>
        <Text>Header with Text Button</Text>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(HeaderTextExample);
