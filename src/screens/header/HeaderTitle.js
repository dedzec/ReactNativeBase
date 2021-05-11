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

const HeaderTitleExample = (props) => {
  return (
    <Container>
      <Header
        style={{ backgroundColor: props.headerTheme.backgroundBar }}
        androidStatusBarColor={props.headerTheme.statusBarColor}>
        <Left />
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Button onPress={() => props.navigation.goBack()}>
          <Text>Back</Text>
        </Button>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(HeaderTitleExample);
