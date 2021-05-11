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
  ScrollableTab,
  Title,
  Subtitle,
  Body,
  Right,
} from 'native-base';
import TabOne from './_tabOne';
import TabTwo from './_tabTwo';
import TabThree from './_tabThree';
import TabFour from './_tabFour';
import TabFive from './_tabFive';

const TabsScrollableExample = (props) => {
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
          <Subtitle>Scrollable Tabs</Subtitle>
        </Body>
        <Right />
      </Header>
      <Tabs renderTabBar={() => <ScrollableTab />}>
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
        <Tab
          heading="Tab4"
          tabStyle={{ backgroundColor: props.headerTheme.backgroundBar }}
          activeTabStyle={{ backgroundColor: props.headerTheme.backgroundBar }}>
          <TabFour />
        </Tab>
        <Tab
          heading="Tab5"
          tabStyle={{ backgroundColor: props.headerTheme.backgroundBar }}
          activeTabStyle={{ backgroundColor: props.headerTheme.backgroundBar }}>
          <TabFive />
        </Tab>
      </Tabs>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(TabsScrollableExample);
