import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Content,
  Picker,
  Title,
  Subtitle,
  Form,
  Body,
  Right,
} from 'native-base';

const PickerCustomBackButtonExample = (props) => {
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
          <Subtitle>Picker with Custom Back Button (iOS Only)</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Form>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" type="Feather" />}
            headerBackButtonText="Baaack!"
            style={{ width: undefined }}
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

export default connect(mapStateToProps)(PickerCustomBackButtonExample);
