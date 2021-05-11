import React from 'react';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import {
  Container,
  Header,
  Content,
  Left,
  Button,
  List,
  ListItem,
  Text,
  Icon,
  Body,
  Title,
  Right,
} from 'native-base';

const DeckSwiper = (props) => {
  const route = useRoute();

  return (
    <Container>
      <Header
        style={{ backgroundColor: props.headerTheme.backgroundBar }}
        androidStatusBarColor={props.headerTheme.statusBarColor}>
        <Left>
          <Button transparent onPress={() => props.navigation.openDrawer()}>
            <Icon name="menu" type="MaterialIcons" />
          </Button>
        </Left>
        <Body>
          <Title>{route.name}</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <List>
          <ListItem onPress={() => props.navigation.push('DeckSwiperBasic')}>
            <Body>
              <Text>Basic</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" type="MaterialIcons" />
            </Right>
          </ListItem>
          <ListItem onPress={() => props.navigation.push('DeckSwiperAdvanced')}>
            <Body>
              <Text>Advanced Deck Swiper</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" type="MaterialIcons" />
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(DeckSwiper);
