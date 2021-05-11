import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Content,
  Form,
  Title,
  Subtitle,
  Body,
  Right,
} from 'native-base';

const PickerExample = (props) => {
  const [state, setState] = useState({
    selected: 'key1',
  });

  const onValueChange = (value) => {
    setState({
      selected: value,
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
          <Title>Picker</Title>
          <Subtitle>Basic</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Form>
          <Picker
            note
            mode="dropdown"
            style={{ width: 120 }}
            selectedValue={state.selected}
            onValueChange={(value) => onValueChange(value)}>
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Form>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(PickerExample);
