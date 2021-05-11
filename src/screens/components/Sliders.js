import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Content,
  Left,
  Button,
  Icon,
  Title,
  Text,
  Body,
  Right,
} from 'native-base';
import Slider from 'react-native-slider';

const Sliders = (props) => {
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
          <Title>Slider</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Text>Default style</Text>
        <Slider />
        <Text>Min, max and custom tints</Text>
        <Slider
          minimumValue={-10}
          maximumValue={42}
          minimumTrackTintColor="#1fb28a"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="#1a9274"
        />
        <Text>Custom style</Text>
        <Slider
          trackStyle={iosStyles.track}
          thumbStyle={iosStyles.thumb}
          minimumTrackTintColor="#1073ff"
          maximumTrackTintColor="#b7b7b7"
        />
        <Text>Custom style #2</Text>
        <Slider
          trackStyle={customStyles2.track}
          thumbStyle={customStyles2.thumb}
          minimumTrackTintColor="#30a935"
        />
        <Text>Custom style #3</Text>
        <Slider
          trackStyle={customStyles3.track}
          thumbStyle={customStyles3.thumb}
          minimumTrackTintColor="#eecba8"
        />
        <Text>Custom style #4</Text>
        <Slider
          trackStyle={customStyles4.track}
          thumbStyle={customStyles4.thumb}
          minimumTrackTintColor="#d14ba6"
        />
        <Text>Custom style #5</Text>
        <Slider
          trackStyle={customStyles5.track}
          thumbStyle={customStyles5.thumb}
          minimumTrackTintColor="#ec4c46"
        />
        <Text>Custom style #6</Text>
        <Slider
          trackStyle={customStyles6.track}
          thumbStyle={customStyles6.thumb}
          minimumTrackTintColor="#e6a954"
        />
        <Text>Custom style #7</Text>
        <Slider
          trackStyle={customStyles7.track}
          thumbStyle={customStyles7.thumb}
          minimumTrackTintColor="#2f2f2f"
        />
      </Content>
    </Container>
  );
};

const iosStyles = StyleSheet.create({
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
});

const customStyles2 = StyleSheet.create({
  track: {
    height: 4,
    borderRadius: 2,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    borderColor: '#30a935',
    borderWidth: 2,
  },
});

const customStyles3 = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#d0d0d0',
  },
  thumb: {
    width: 10,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#eb6e1b',
  },
});

const customStyles4 = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.15,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#f8a1d6',
    borderColor: '#a4126e',
    borderWidth: 5,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35,
  },
});

const customStyles5 = StyleSheet.create({
  track: {
    height: 18,
    borderRadius: 1,
    backgroundColor: '#d5d8e8',
  },
  thumb: {
    width: 20,
    height: 30,
    borderRadius: 1,
    backgroundColor: '#838486',
  },
});

const customStyles6 = StyleSheet.create({
  track: {
    height: 14,
    borderRadius: 2,
    backgroundColor: 'white',
    borderColor: '#9a9a9a',
    borderWidth: 1,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 2,
    backgroundColor: '#eaeaea',
    borderColor: '#9a9a9a',
    borderWidth: 1,
  },
});

const customStyles7 = StyleSheet.create({
  track: {
    height: 1,
    backgroundColor: '#303030',
  },
  thumb: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(150, 150, 150, 0.3)',
    borderColor: 'rgba(150, 150, 150, 0.6)',
    borderWidth: 14,
    borderRadius: 15,
  },
});

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(Sliders);
