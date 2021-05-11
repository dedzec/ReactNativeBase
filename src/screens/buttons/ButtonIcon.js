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

const ButtonIconExample = (props) => {
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
          <Subtitle>Icon Button</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content>
        <Button iconLeft light style={{ margin: 10 }}>
          <Icon name="arrow-back" type="MaterialIcons" />
          <Text>Back</Text>
        </Button>
        <Button iconRight light style={{ margin: 10 }}>
          <Text>Next</Text>
          <Icon name="arrow-forward" type="MaterialIcons" />
        </Button>
        <Button iconLeft style={{ margin: 10 }}>
          <Icon name="home" type="MaterialIcons" />
          <Text>Home</Text>
        </Button>
        <Button iconLeft primary transparent style={{ margin: 10 }}>
          <Icon name="public" type="MaterialIcons" />
          <Text>Pub</Text>
        </Button>
        <Button iconLeft dark style={{ margin: 10 }}>
          <Icon name="settings" type="MaterialIcons" />
          <Text>Settings</Text>
        </Button>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(ButtonIconExample);
