import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Left,
  Button,
  Icon,
  Title,
  Subtitle,
  Text,
  Body,
  Right,
} from 'native-base';

const FooterTabsIconTextExample = (props) => {
  const [state, setState] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
    tab4: false,
  });

  const toobleTab = (tab) => {
    switch (tab) {
      case 'tab1':
        setState({
          tab1: true,
          tab2: false,
          tab3: false,
          tab4: false,
        });
        break;
      case 'tab2':
        setState({
          tab1: false,
          tab2: true,
          tab3: false,
          tab4: false,
        });
        break;
      case 'tab3':
        setState({
          tab1: false,
          tab2: false,
          tab3: true,
          tab4: false,
        });
        break;
      case 'tab4':
        setState({
          tab1: false,
          tab2: false,
          tab3: false,
          tab4: true,
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
          <Title>Footer</Title>
          <Subtitle>Icon Footer with Text</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content />
      <Footer>
        <FooterTab>
          <Button
            style={{ backgroundColor: props.headerTheme.backgroundBar }}
            active={state.tab1}
            onPress={() => toobleTab('tab1')}>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button
            style={{ backgroundColor: props.headerTheme.backgroundBar }}
            active={state.tab2}
            onPress={() => toobleTab('tab2')}>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button
            style={{ backgroundColor: props.headerTheme.backgroundBar }}
            active={state.tab3}
            onPress={() => toobleTab('tab3')}>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button
            style={{ backgroundColor: props.headerTheme.backgroundBar }}
            active={state.tab4}
            onPress={() => toobleTab('tab4')}>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(FooterTabsIconTextExample);
