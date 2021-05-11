import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Accordion,
  Left,
  Button,
  Icon,
  Title,
  Subtitle,
  Body,
  Right,
  View,
  Text,
} from 'native-base';
import { lorem } from '../../api/data';

const dataArray = [
  { title: 'First Element', content: lorem },
  { title: 'Second Element', content: lorem },
  { title: 'Third Element', content: lorem },
];

const AccordionCustomHeaderContent = (props) => {
  const renderHeader = (item, expanded) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#A9DAD6',
        }}>
        <Text style={{ fontWeight: '600' }}> {item.title}</Text>
        {expanded ? (
          <Icon style={{ fontSize: 18 }} name="remove-circle" />
        ) : (
          <Icon style={{ fontSize: 18 }} name="add-circle" />
        )}
      </View>
    );
  };

  const renderContent = (item) => {
    return (
      <Text
        style={{
          backgroundColor: '#e3f1f1',
          padding: 10,
          fontStyle: 'italic',
        }}>
        {item.content}
      </Text>
    );
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
          <Title>Accordion</Title>
          <Subtitle>Custom Header and Content</Subtitle>
        </Body>
        <Right />
      </Header>
      <View style={{ margin: 10 }}>
        <Accordion
          dataArray={dataArray}
          animation={true}
          expanded={true}
          renderHeader={renderHeader}
          renderContent={renderContent}
        />
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(AccordionCustomHeaderContent);
