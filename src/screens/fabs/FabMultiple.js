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
  Subtitle,
  Fab,
  Body,
  Right,
} from 'native-base';

const FabMultipleExample = (props) => {
  const [fab1, setFab1] = useState(false);
  const [fab2, setFab2] = useState(false);
  const [fab3, setFab3] = useState(false);
  const [fab4, setFab4] = useState(false);

  return (
    <Container>
      <Header
        style={{ backgroundColor: props.headerTheme.backgroundBar }}
        androidStatusBarColor={props.headerTheme.statusBarColor}>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Fab</Title>
          <Subtitle>Multiple FABs</Subtitle>
        </Body>
        <Right />
      </Header>
      <View style={{ flex: 1 }}>
        <Fab
          active={fab1}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => setFab1(!fab1)}>
          <Icon name="share" type="Entypo" />
          <Button style={{ backgroundColor: '#34A34F' }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: '#3B5998' }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: '#DD5144' }}>
            <Icon name="mail" />
          </Button>
        </Fab>
        <Fab
          active={fab2}
          direction="left"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="topRight"
          onPress={() => setFab2(!fab2)}>
          <Icon name="share" type="Entypo" />
          <Button style={{ backgroundColor: '#34A34F' }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: '#3B5998' }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: '#DD5144' }}>
            <Icon name="mail" />
          </Button>
        </Fab>
        <Fab
          active={fab3}
          direction="down"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="topLeft"
          onPress={() => setFab3(!fab3)}>
          <Icon name="share" type="Entypo" />
          <Button style={{ backgroundColor: '#34A34F' }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: '#3B5998' }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: '#DD5144' }}>
            <Icon name="mail" />
          </Button>
        </Fab>
        <Fab
          active={fab4}
          direction="right"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomLeft"
          onPress={() => setFab4(!fab4)}>
          <Icon name="share" type="Entypo" />
          <Button style={{ backgroundColor: '#34A34F' }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: '#3B5998' }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: '#DD5144' }}>
            <Icon name="mail" />
          </Button>
        </Fab>
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(FabMultipleExample);
