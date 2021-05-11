import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Tabs,
  Tab,
  Title,
  Subtitle,
  Body,
  Right,
} from 'native-base';
import TabOne from './_tabOne';
import TabTwo from './_tabTwo';
import TabThree from './_tabThree';

const TabsExample = (props) => {
  return (
    <Container>
      <Header
        hasTabs
        style={{ backgroundColor: props.headerTheme.backgroundBar }}
        androidStatusBarColor={props.headerTheme.statusBarColor}>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" type="MaterialIcons" />
          </Button>
        </Left>
        <Body>
          <Title>Tabs</Title>
          <Subtitle>Basic</Subtitle>
        </Body>
        <Right />
      </Header>
      <Tabs>
        <Tab
          heading="Tab1"
          tabStyle={{ backgroundColor: props.headerTheme.backgroundBar }}
          activeTabStyle={{ backgroundColor: props.headerTheme.backgroundBar }}>
          <TabOne />
        </Tab>
        <Tab
          heading="Tab2"
          tabStyle={{ backgroundColor: props.headerTheme.backgroundBar }}
          activeTabStyle={{ backgroundColor: props.headerTheme.backgroundBar }}>
          <TabTwo />
        </Tab>
        <Tab
          heading="Tab3"
          tabStyle={{ backgroundColor: props.headerTheme.backgroundBar }}
          activeTabStyle={{ backgroundColor: props.headerTheme.backgroundBar }}>
          <TabThree />
        </Tab>
      </Tabs>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(TabsExample);
