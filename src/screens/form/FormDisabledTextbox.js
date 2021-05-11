import React, { useState } from 'react';
import { connect } from 'react-redux';
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
} from 'native-base';

const FormDisabledTextboxExample = (props) => {
  const [state, setState] = useState({
    disabled: '',
  });

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
          <Subtitle>Disabled Textbox</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Form style={{ marginTop: 20 }}>
          <Item disabled>
            <Input
              disabled
              placeholder="Disabled Textbox"
              value={state.disabled}
              onChangeText={(text) => {
                setState({ disabled: text });
              }}
            />
            <Icon name="information-circle" type="Ionicons" />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(FormDisabledTextboxExample);
