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

const HeaderMultipleIconExample = (props) => {
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
            <Icon name="search" type="MaterialIcons" />
          </Button>
          <Button transparent>
            <Icon name="heart" type="Ionicons" />
          </Button>
          <Button transparent>
            <Icon name="more-vert" type="MaterialIcons" />
          </Button>
        </Right>
      </Header>
      <Content padder>
        <Text>Header with Multiple Icon Buttons</Text>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(HeaderMultipleIconExample);
