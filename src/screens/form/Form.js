import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Left,
  Button,
  Icon,
  Title,
  Subtitle,
  Body,
  Right,
  Text,
} from 'native-base';

const FormExample = (props) => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const infoForm = () => {
    Alert.alert(
      'Sign In',
      `Usename: ${state.username}\nPassword: ${state.password}`,
      [
        {
          text: 'Close',
          onPress: () => console.log('Close Pressed'),
          style: 'Close',
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
          <Title>Form</Title>
          <Subtitle>Basic</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content>
        <Form style={{ marginTop: 20 }}>
          <Item>
            <Input
              placeholder="Username"
              value={state.username}
              onChangeText={(text) => {
                setState({ ...state, username: text });
              }}
            />
          </Item>
          <Item last>
            <Input
              placeholder="Password"
              secureTextEntry={true}
              value={state.password}
              onChangeText={(text) => {
                setState({ ...state, password: text });
              }}
            />
          </Item>
          <Button full onPress={() => infoForm()} style={{ marginTop: 20 }}>
            <Text>Sing In</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(FormExample);
