import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Button,
  Icon,
  Title,
  Subtitle,
  Text,
  Body,
  Right,
} from 'native-base';

const CardShowcaseExample = (props) => {
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
          <Subtitle>Card Showcase</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail source={require('../../../assets/native-base.png')} />
              <Body>
                <Text>NativeBase</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={require('../../../assets/img12.jpg')}
                style={{ height: 200, width: 350, flex: 1 }}
              />
              <Text>
                NativeBase is a free amd source framework that enable developers
                to build high-quality mobile apps using React Native iOS and
                Android apps with a fusion of ES6. NativeBase builds a layer on
                top of React Native that provides you with basic set of
                components for mobile application development.
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: 'blue' }}>
                <Icon active name="github" type="AntDesign" />
                <Text>1,926 stars</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(CardShowcaseExample);
