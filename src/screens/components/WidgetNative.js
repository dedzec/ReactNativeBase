import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, NativeModules } from 'react-native';
import {
  Container,
  Header,
  View,
  Text,
  Input,
  Item,
  Left,
  Button,
  Icon,
  Title,
  Body,
  Right,
} from 'native-base';

const SharedStorage = NativeModules.SharedStorage;

const WidgetNative = (props) => {
  const [state, setState] = useState('This is data from the React Native App');

  SharedStorage.set(JSON.stringify({ text: state }));

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
          <Title>WidgetNative</Title>
        </Body>
        <Right />
      </Header>
      <View style={styles.root}>
        <Text style={styles.text}>{state}</Text>
        <Item regular>
          <Input
            placeholder="Text SharedPreference"
            onChangeText={(text) => {
              setState(text);
            }}
          />
        </Item>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: 300,
    borderColor: '#333',
    borderWidth: 1,
  },
});

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(WidgetNative);
