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

const ButtonDisabledExample = (props) => {
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
          <Subtitle>Disabled Button</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content>
        <Button disabled style={{ marginTop: 10 }}>
          <Text>Default</Text>
        </Button>
        <Button disabled bordered style={{ marginTop: 10 }}>
          <Text>Outline</Text>
        </Button>
        <Button disabled rounded style={{ marginTop: 10 }}>
          <Text>Rounded</Text>
        </Button>
        <Button disabled large style={{ marginTop: 10 }}>
          <Text>Custom</Text>
        </Button>
        <Button disabled iconRight style={{ marginTop: 10 }}>
          <Text>Icon Button</Text>
          <Icon name="home" type="MaterialIcons" style={{ color: '#fff' }} />
        </Button>
        <Button disabled block style={{ marginTop: 10 }}>
          <Text>Block</Text>
        </Button>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(ButtonDisabledExample);
