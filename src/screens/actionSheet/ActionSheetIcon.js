import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  ActionSheet,
  Left,
  Button,
  Icon,
  Title,
  Subtitle,
  Body,
  Right,
  Root,
  Text,
} from 'native-base';

const BUTTONS = [
  {
    text: 'Option 0',
    icon: 'american-football',
    iconColor: '#2c8ef4',
  },
  {
    text: 'Option 1',
    icon: 'analytics',
    iconColor: '#f42ced',
  },
  {
    text: 'Option 2',
    icon: 'aperture',
    iconColor: '#ea943b',
  },
  {
    text: 'Delete',
    icon: 'trash',
    iconColor: '#fa213b',
  },
  {
    text: 'Cancel',
    icon: 'close',
    iconColor: '#25de5b',
  },
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const ActionSheetIconExample = (props) => {
  const [state, setState] = useState({});

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
          <Title>ActionSheet</Title>
          <Subtitle>Icon ActionSheet</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Root>
          <Button
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: 'Testing ActionSheetIcon',
                },
                (buttonIndex) => {
                  setState({ clicked: BUTTONS[buttonIndex] });
                  console.log(state);
                },
              )
            }>
            <Text>ActionSheet</Text>
          </Button>
        </Root>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(ActionSheetIconExample);
