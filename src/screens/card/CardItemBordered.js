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

const CardItemBorderedExample = (props) => {
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
          <Subtitle>CardItem Bordered</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text style={{ fontWeight: 'bold' }}>NativeBase</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>
                NativeBase is free and open source framework that enable
                developers to build high-quality mobile apps using React Native
                iOS and Android apps with a fusion of ES6.
              </Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>
                NativeBase builds a layer on top of React Native that provides
                you with basic set of components for mobile application
                development.
              </Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>
                Get on the mobile fast track with NativeBase, the
                fastest-growing plaform and tool set for iOS and Android
                developement.
              </Text>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Text style={{ fontWeight: 'bold' }}>GeekyAnts</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(CardItemBorderedExample);
