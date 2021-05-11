import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Left,
  Button,
  Icon,
  Title,
  Text,
  Body,
  Right,
} from 'native-base';

const CheckBoxExample = (props) => {
  const route = useRoute();
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);
  const [checkBox4, setCheckBox4] = useState(false);

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
        <ListItem onPress={() => setCheckBox1(!checkBox1)}>
          <CheckBox checked={checkBox1} />
          <Body>
            <Text>Lunch Break</Text>
          </Body>
        </ListItem>
        <ListItem onPress={() => setCheckBox2(!checkBox2)}>
          <CheckBox checked={checkBox2} color="red" />
          <Body>
            <Text>Daily Stand Up</Text>
          </Body>
        </ListItem>
        <ListItem onPress={() => setCheckBox3(!checkBox3)}>
          <CheckBox checked={checkBox3} color="green" />
          <Body>
            <Text>Finish list Screen</Text>
          </Body>
        </ListItem>
        <ListItem onPress={() => setCheckBox4(!checkBox4)}>
          <CheckBox checked={checkBox4} color="#000" />
          <Body>
            <Text>Discussion with Client</Text>
          </Body>
        </ListItem>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(CheckBoxExample);
