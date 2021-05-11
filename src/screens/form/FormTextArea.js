import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Textarea,
  Left,
  Button,
  Icon,
  Title,
  Subtitle,
  Body,
  Right,
  Text,
} from 'native-base';

const FormTextAreaExample = (props) => {
  const [state, setState] = useState({
    textarea: '',
  });

  const infoForm = () => {
    Alert.alert(
      'Textarea',
      `Textarea: ${state.textarea}\n`,
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
          <Subtitle>Textarea</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Form style={{ marginTop: 20 }}>
          <Textarea
            rowSpan={5}
            bordered
            placeholder="Textarea"
            value={state.textarea}
            onChangeText={(text) => {
              setState({ textarea: text });
            }}
          />
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

export default connect(mapStateToProps)(FormTextAreaExample);
