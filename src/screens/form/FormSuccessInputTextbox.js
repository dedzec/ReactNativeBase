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

const FormSuccessInputTextboxExample = (props) => {
  const [state, setState] = useState({
    success: '',
  });

  const infoForm = () => {
    Alert.alert(
      'TextBox',
      `TextBox: ${state.success}\n`,
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
          <Subtitle>Success Input Textbox</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Form style={{ marginTop: 20 }}>
          <Item success>
            <Input
              placeholder="Textbox with Success Input"
              value={state.success}
              onChangeText={(text) => {
                setState({ success: text });
              }}
            />
            <Icon name="checkmark-circle" type="Ionicons" />
          </Item>
          <Button full onPress={() => infoForm()} style={{ marginTop: 20 }}>
            <Text>Submit</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(FormSuccessInputTextboxExample);
