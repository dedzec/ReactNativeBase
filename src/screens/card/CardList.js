import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Left,
  Button,
  Icon,
  Title,
  Subtitle,
  Text,
  Body,
  Right,
} from 'native-base';

const list = [
  {
    text: 'Google Plus',
    icon: 'googleplus',
    type: 'AntDesign',
    color: 'red',
  },
  {
    text: 'facebook',
    icon: 'facebook-square',
    type: 'AntDesign',
    color: 'blue',
  },
  {
    text: 'Twitter',
    icon: 'twitter',
    type: 'AntDesign',
    color: '#03a9f4',
  },
  {
    text: 'Reddit',
    icon: 'reddit',
    type: 'Zocial',
    color: '#FA8204',
  },
  {
    text: 'YouTube',
    icon: 'youtube',
    type: 'AntDesign',
    color: 'red',
  },
];

const CardListExample = (props) => {
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
          <Title>Card</Title>
          <Subtitle>Card List</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text style={{ fontWeight: 'bold' }}>Social Applications</Text>
          </CardItem>
          {list.map((item, index) => (
            <CardItem key={index}>
              <Icon
                name={item.icon}
                type={item.type}
                style={{ color: item.color }}
              />
              <Body>
                <Text style={{ marginLeft: 5 }}>{item.text}</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" type="MaterialIcons" />
              </Right>
            </CardItem>
          ))}
        </Card>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(CardListExample);
