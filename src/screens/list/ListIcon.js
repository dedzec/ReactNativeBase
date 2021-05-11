import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Platform } from 'react-native';
import {
  Container,
  Header,
  Content,
  Left,
  Button,
  Icon,
  ListItem,
  Text,
  Title,
  Subtitle,
  Switch,
  Body,
  Item,
  Right,
  Radio,
  Badge,
  Picker,
  Separator,
} from 'native-base';

const ListIconExample = (props) => {
  const [state, setState] = useState({
    selectedItem: undefined,
    selected: 'key1',
    results: {
      items: [],
    },
  });

  const onValueChange = (value) => {
    setState({
      selected1: value,
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
          <Title>List</Title>
          <Subtitle>List Icon</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content>
        <Separator bordered noTopBorder />
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#FF9501' }}>
              <Icon active name="airplane" />
            </Button>
          </Left>
          <Body>
            <Text>Airplane Mode</Text>
          </Body>
          <Right>
            <Switch value={false} trackColor="#50B948" />
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#007AFF' }}>
              <Icon active name="wifi" />
            </Button>
          </Left>
          <Body>
            <Text>Wi-Fi</Text>
          </Body>
          <Right>
            <Text>GeekyAnts</Text>
            {Platform.OS === 'ios' && <Icon active name="arrow-forward" />}
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#007AFF' }}>
              <Icon active name="bluetooth" />
            </Button>
          </Left>
          <Body>
            <Text>Bluetooth</Text>
          </Body>
          <Right>
            <Text>On</Text>
            {Platform.OS === 'ios' && <Icon active name="arrow-forward" />}
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#4CDA64' }}>
              <Icon active name="phone-portrait" />
            </Button>
          </Left>
          <Body>
            <Text>Mobile Data</Text>
          </Body>
          <Right>
            <Radio selected />
          </Right>
        </ListItem>
        <ListItem icon last>
          <Left>
            <Button style={{ backgroundColor: '#4CDA64' }}>
              <Icon active name="link" />
            </Button>
          </Left>
          <Body>
            <Text>Personal Hotspot</Text>
          </Body>
          <Right>
            <Text>Off</Text>
            {Platform.OS === 'ios' && <Icon active name="arrow-forward" />}
          </Right>
        </ListItem>

        <Separator bordered />

        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#FD3C2D' }}>
              <Icon active name="notifications" />
            </Button>
          </Left>
          <Body>
            <Text>Notifications</Text>
          </Body>
          <Right>
            {Platform.OS === 'ios' && <Icon active name="arrow-forward" />}
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#8F8E93' }}>
              <Icon active name="switch" type="Entypo" />
            </Button>
          </Left>
          <Body>
            <Text>Control Center</Text>
          </Body>
          <Right>
            {Platform.OS === 'ios' && <Icon active name="arrow-forward" />}
          </Right>
        </ListItem>
        <ListItem icon last>
          <Left>
            <Button style={{ backgroundColor: '#5855D6' }}>
              <Icon active name="moon" />
            </Button>
          </Left>
          <Body>
            <Text>Do Not Disturb</Text>
          </Body>
          <Right>
            <Text>Yes</Text>
          </Right>
        </ListItem>
        <Separator bordered />
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
              <Item label="TATA" value="key0" />
              <Item label="AIRTEL" value="key1" />
            </Picker>
          </Right>
        </ListItem>
        <ListItem icon>
          <Left>
            <Button style={{ backgroundColor: '#8F8E93' }}>
              <Icon active name="cog" type="Entypo" />
            </Button>
          </Left>
          <Body>
            <Text>Software Update</Text>
          </Body>
          <Right>
            <Badge style={{ backgroundColor: '#FD3C2D' }}>
              <Text>2</Text>
            </Badge>
          </Right>
        </ListItem>
        <ListItem last icon>
          <Left>
            <Button style={{ backgroundColor: '#007AFF' }}>
              <Icon active name="hand" type="Entypo" />
            </Button>
          </Left>
          <Body>
            <Text>Privacy</Text>
          </Body>
          <Right>
            {Platform.OS === 'ios' && (
              <Icon active name="arrow-forward" type="Ionicons" />
            )}
          </Right>
        </ListItem>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(ListIconExample);
