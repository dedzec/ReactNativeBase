import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Tabs,
  TabHeading,
  Tab,
  Title,
  Text,
  Subtitle,
  Body,
  Right,
} from 'native-base';
import TabOne from './_tabOne';
import TabTwo from './_tabTwo';
import TabThree from './_tabThree';

const TabsAdvancedExample = (props) => {
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
          <Subtitle>Advanced Tabs</Subtitle>
        </Body>
        <Right />
      </Header>
      <Tabs style={{ elevation: 3 }}>
        <Tab
          heading={
            <TabHeading
              style={{ backgroundColor: props.headerTheme.backgroundBar }}>
              <Icon name="camera" type="Ionicons" />
              <Text>Camera</Text>
            </TabHeading>
          }>
          <TabOne />
        </Tab>
        <Tab
          heading={
            <TabHeading
              style={{ backgroundColor: props.headerTheme.backgroundBar }}>
              <Text>No Icon</Text>
            </TabHeading>
          }>
          <TabTwo />
        </Tab>
        <Tab
          heading={
            <TabHeading
              style={{ backgroundColor: props.headerTheme.backgroundBar }}>
              <Icon name="apps" type="Ionicons" />
            </TabHeading>
          }>
          <TabThree />
        </Tab>
      </Tabs>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(TabsAdvancedExample);
