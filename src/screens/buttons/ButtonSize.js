import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Left,
  Button,
  Icon,
  Title,
  Subtitle,
  Text,
  Body,
  Right,
} from 'native-base';

const ButtonSizeExample = (props) => {
  return (
    <Container>
      <Header
        style={{ backgroundColor: props.headerTheme.backgroundBar }}
        androidStatusBarColor={props.headerTheme.statusBarColor}>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Buttons</Title>
          <Subtitle>Button Size</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content>
        <Button small primary style={{ margin: 10 }}>
          <Text>Default Small</Text>
        </Button>
        <Button success style={{ margin: 10 }}>
          <Text>Success Default</Text>
        </Button>
        <Button large dark style={{ margin: 10 }}>
          <Text>Dark Large</Text>
        </Button>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(ButtonSizeExample);
