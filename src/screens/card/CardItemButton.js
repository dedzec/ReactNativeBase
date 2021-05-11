import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
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

const CardItemButtonExample = (props) => {
  const renderAlert = (text) => {
    Alert.alert(
      'Alert',
      text,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  };

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
          <Subtitle>CardItem Button</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Card>
          <CardItem
            header
            button
            onPress={() => renderAlert('This is Card Header')}>
            <Text style={{ fontWeight: 'bold' }}>NativeBase</Text>
          </CardItem>
          <CardItem button onPress={() => renderAlert('This is Card Body')}>
            <Body>
              <Text>Click on any carditem</Text>
            </Body>
          </CardItem>
          <CardItem
            footer
            button
            onPress={() => renderAlert('This is Card Footer')}>
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

export default connect(mapStateToProps)(CardItemButtonExample);
