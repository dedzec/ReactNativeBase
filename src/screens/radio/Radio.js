import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Radio,
  Left,
  Button,
  Icon,
  ListItem,
  Title,
  Subtitle,
  Text,
  Body,
  Right,
} from 'native-base';

const RadioExample = (props) => {
  const [state, setState] = useState({
    radio1: true,
    radio2: false,
    radio3: false,
    radio4: false,
  });

  const toobleRadio = (tab) => {
    switch (tab) {
      case 'radio1':
        setState({
          radio1: true,
          radio2: false,
          radio3: false,
          radio4: false,
        });
        break;
      case 'radio2':
        setState({
          radio1: false,
          radio2: true,
          radio3: false,
          radio4: false,
        });
        break;
      case 'radio3':
        setState({
          radio1: false,
          radio2: false,
          radio3: true,
          radio4: false,
        });
        break;
      case 'radio4':
        setState({
          radio1: false,
          radio2: false,
          radio3: false,
          radio4: true,
        });
        break;
    }
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
          <Title>Radio</Title>
          <Subtitle>Basic</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content>
        <ListItem selected={state.radio1} onPress={() => toobleRadio('radio1')}>
          <Left>
            <Text>Lunch Break</Text>
          </Left>
          <Right>
            <Radio
              selected={state.radio1}
              onPress={() => toobleRadio('radio1')}
            />
          </Right>
        </ListItem>
        <ListItem selected={state.radio2} onPress={() => toobleRadio('radio2')}>
          <Left>
            <Text>Daily Stand Up</Text>
          </Left>
          <Right>
            <Radio
              selected={state.radio2}
              onPress={() => toobleRadio('radio2')}
            />
          </Right>
        </ListItem>
        <ListItem selected={state.radio3} onPress={() => toobleRadio('radio3')}>
          <Left>
            <Text>Finish List Screen</Text>
          </Left>
          <Right>
            <Radio
              selected={state.radio3}
              onPress={() => toobleRadio('radio3')}
            />
          </Right>
        </ListItem>
        <ListItem selected={state.radio4} onPress={() => toobleRadio('radio4')}>
          <Left>
            <Text>Discussion with Client</Text>
          </Left>
          <Right>
            <Radio
              selected={state.radio4}
              onPress={() => toobleRadio('radio4')}
            />
          </Right>
        </ListItem>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(RadioExample);
