import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  View,
  Left,
  Button,
  Icon,
  Title,
  Body,
  Text,
  Right,
} from 'native-base';
import Slider from 'react-native-slider';
import { ColorPicker } from 'react-native-color-picker';

const ColorPickes = (props) => {
  const [color, setColor] = useState('#0093ff');

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
          <Title>ColorPickes</Title>
        </Body>
        <Right />
      </Header>
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ marginTop: 50, marginBottom: -50 }}>
            Color selected: {color}
          </Text>
        </View>
        <ColorPicker
          defaultColor={color}
          // eslint-disable-next-line no-shadow
          onColorSelected={(color) => setColor(color)}
          style={{ flex: 1 }}
          sliderComponent={Slider}
        />
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(ColorPickes);
