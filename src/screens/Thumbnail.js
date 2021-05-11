import React from 'react';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import {
  Container,
  Header,
  Content,
  View,
  Thumbnail,
  Left,
  Button,
  Icon,
  Title,
  Text,
  Body,
  Right,
} from 'native-base';

const logo = require('../../assets/native-base.png');
const cover = require('../../assets/img12.jpg');

const ThumbnailExample = (props) => {
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
      <Content padder>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ marginBottom: 10 }}>Square Thumbnail</Text>
          <Thumbnail square small source={cover} style={{ marginBottom: 10 }} />
          <Thumbnail square source={cover} style={{ marginBottom: 10 }} />
          <Thumbnail square large source={cover} style={{ marginBottom: 35 }} />

          <Text style={{ marginBottom: 10 }}>Circular Thumbnail</Text>
          <Thumbnail small source={logo} style={{ marginBottom: 10 }} />
          <Thumbnail source={logo} style={{ marginBottom: 10 }} />
          <Thumbnail large source={logo} style={{ marginBottom: 35 }} />
        </View>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(ThumbnailExample);
