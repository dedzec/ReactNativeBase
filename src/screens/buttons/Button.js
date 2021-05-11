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

const ButtonExample = (props) => {
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
          <Subtitle>Basic</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content>
        <Button light style={{ margin: 10 }}>
          <Text>Light</Text>
        </Button>
        <Button primary style={{ margin: 10 }}>
          <Text>Primary</Text>
        </Button>
        <Button success style={{ margin: 10 }}>
          <Text>Success</Text>
        </Button>
        <Button info style={{ margin: 10 }}>
          <Text>Info</Text>
        </Button>
        <Button warning style={{ margin: 10 }}>
          <Text>Warning</Text>
        </Button>
        <Button danger style={{ margin: 10 }}>
          <Text>Danger</Text>
        </Button>
        <Button dark style={{ margin: 10 }}>
          <Text>Dark</Text>
        </Button>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(ButtonExample);
