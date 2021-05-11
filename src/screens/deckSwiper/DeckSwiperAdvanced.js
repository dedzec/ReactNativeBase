import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import {
  Container,
  Header,
  View,
  DeckSwiper,
  Title,
  Subtitle,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Right,
  Body,
  Icon,
  Button,
} from 'native-base';

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../../../assets/swiper-1.png'),
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: require('../../../assets/swiper-2.png'),
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: require('../../../assets/swiper-3.png'),
  },
  {
    text: 'Card Four',
    name: 'Four',
    image: require('../../../assets/swiper-4.png'),
  },
];

const DeckSwiperAdvancedExample = (props) => {
  const [deckSwiper, setDeckSwiper] = useState(null);

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
          <Title>DeckSwiper</Title>
          <Subtitle>Advanced Deck Swiper</Subtitle>
        </Body>
        <Right />
      </Header>
      <View>
        <DeckSwiper
          ref={(c) => setDeckSwiper(c)}
          dataSource={cards}
          looping={false}
          renderEmpty={() => (
            <View style={{ alignSelf: 'center' }}>
              <Text>Over</Text>
            </View>
          )}
          renderItem={(item) => (
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={item.image} />
                  <Body>
                    <Text>{item.text}</Text>
                    <Text note>NativeBase</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={item.image} />
              </CardItem>
              <CardItem>
                <Icon name="heart" style={{ color: '#ED4A6A' }} />
                <Text>{item.name}</Text>
              </CardItem>
            </Card>
          )}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          position: 'absolute',
          bottom: 50,
          left: 0,
          right: 0,
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <Button iconLeft onPress={() => deckSwiper._root.swipeLeft()}>
          <Icon name="arrow-back" />
          <Text>Swipe Left</Text>
        </Button>
        <Button iconRight onPress={() => deckSwiper._root.swipeRight()}>
          <Icon name="arrow-forward" />
          <Text>Swipe Right</Text>
        </Button>
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(DeckSwiperAdvancedExample);
