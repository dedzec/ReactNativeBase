import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Left,
  Button,
  Icon,
  Title,
  Subtitle,
  Text,
  Body,
  Right,
} from 'native-base';

const CardExample = (props) => {
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
          <Title>Card</Title>
          <Subtitle>Basic</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>
                This is just a basic card with some text to boot. Like it? Keep
                Scrolling...
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(CardExample);
