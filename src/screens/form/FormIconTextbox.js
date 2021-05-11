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

const FormIconTextboxExample = (props) => {
  const [state, setState] = useState({
    texBox1: '',
    texBox2: '',
  });

  const infoForm = () => {
    Alert.alert(
      'TextBox',
      `TextBox1: ${state.texBox1}\nTextBox2: ${state.texBox2}`,
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
          <Subtitle>Icon Textbox</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Form style={{ marginTop: 20 }}>
          <Item>
            <Icon active name="home" type="MaterialIcons" />
            <Input
              placeholder="Icon Textbox"
              value={state.texBox1}
              onChangeText={(text) => {
                setState({ ...state, texBox1: text });
              }}
            />
          </Item>
          <Item>
            <Input
              placeholder="Icon Alignment in Textbox"
              value={state.texBox2}
              onChangeText={(text) => {
                setState({ ...state, texBox2: text });
              }}
            />
            <Icon active name="swap" type="Entypo" />
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

export default connect(mapStateToProps)(FormIconTextboxExample);
