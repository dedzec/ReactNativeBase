import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Picker,
  Left,
  Button,
  Icon,
  Title,
  Subtitle,
  Body,
  Right,
} from 'native-base';

const FormPickerInputExample = (props) => {
  const [state, setState] = useState({
    selected2: undefined,
  });

  const onValueChange2 = (value) => {
    setState({
      selected2: value,
    });
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
          <Subtitle>Picker Input</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content>
        <Form style={{ marginTop: 20 }}>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Select your SIM"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor="#007aff"
              selectedValue={state.selected2}
              onValueChange={(value) => onValueChange2(value)}>
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(FormPickerInputExample);
