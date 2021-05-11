import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Content,
  Picker,
  ListItem,
  Title,
  Subtitle,
  Body,
  Text,
  Right,
} from 'native-base';

const PickerIconExample = (props) => {
  const [state, setState] = useState({
    selected: 'key1',
  });

  const onValueChange = (value) => {
    setState({
      selected: value,
    });
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
          <Title>Picker</Title>
          <Subtitle>Picker with Icon</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#4CDA64' }}>
              <Icon name="arrowdown" type="AntDesign" />
            </Button>
          </Left>
          <Body>
            <Text>Pick SIM</Text>
          </Body>
          <Right>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              selectedValue={state.selected}
              onValueChange={(value) => onValueChange(value)}>
              <Picker.Item label="TATA" value="key0" />
              <Picker.Item label="AIRTEL" value="key1" />
            </Picker>
          </Right>
        </ListItem>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(PickerIconExample);
