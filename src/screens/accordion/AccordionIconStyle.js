import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  View,
  Accordion,
  Left,
  Button,
  Icon,
  Title,
  Subtitle,
  Body,
  Right,
} from 'native-base';
import { lorem } from '../../api/data';

const dataArray = [
  { title: 'First Element', content: lorem },
  { title: 'Second Element', content: lorem },
  { title: 'Third Element', content: lorem },
];

const AccordionIconStyleExample = (props) => {
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
          <Subtitle>Icon Style</Subtitle>
        </Body>
        <Right />
      </Header>
      <View style={{ margin: 10 }}>
        <Accordion
          dataArray={dataArray}
          icon="add"
          expandedIcon="remove"
          iconStyle={{ color: 'green' }}
          expandedIconStyle={{ color: 'red' }}
        />
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(AccordionIconStyleExample);
