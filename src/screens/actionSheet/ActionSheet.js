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

const BUTTONS = ['Option 0', 'Option 1', 'Option 2', 'Delete', 'Cancel'];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

const ActionSheetExample = (props) => {
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
          <Subtitle>Basic</Subtitle>
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
                  title: 'Testing ActionSheet',
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

export default connect(mapStateToProps)(ActionSheetExample);
