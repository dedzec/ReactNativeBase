import React from 'react';
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

const DeckSwiperExample = (props) => {
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
          <Subtitle>Basic</Subtitle>
        </Body>
        <Right />
      </Header>
      <View>
        <DeckSwiper
          dataSource={cards}
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
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(DeckSwiperExample);
