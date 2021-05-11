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
  Body,
  Right,
  Text,
} from 'native-base';

const HeaderNoShadowExample = (props) => {
  return (
    <Container>
      <Header
        noShadow
        style={{ backgroundColor: props.headerTheme.backgroundBar }}
        androidStatusBarColor={props.headerTheme.statusBarColor}>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" type="MaterialIcons" />
          </Button>
        </Left>
        <Body>
          <Title>Header No Shadow</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" type="MaterialIcons" />
          </Button>
        </Right>
      </Header>
      <Content padder>
        <Text>Header with noShadow prop</Text>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(HeaderNoShadowExample);
