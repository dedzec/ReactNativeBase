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

const FormRegularTextboxExample = (props) => {
  const [state, setState] = useState({
    regular: '',
  });

  const infoForm = () => {
    Alert.alert(
      'TextBox',
      `TextBox: ${state.regular}\n`,
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
          <Subtitle>Regular Textbox</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Form style={{ marginTop: 20 }}>
          <Item regular>
            <Input
              placeholder="Regular Textbox"
              value={state.regular}
              onChangeText={(text) => {
                setState({ regular: text });
              }}
            />
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

export default connect(mapStateToProps)(FormRegularTextboxExample);
