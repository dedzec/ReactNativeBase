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

const FabsExample = (props) => {
  const [fab, setFab] = useState(false);

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
          <Subtitle>Basic</Subtitle>
        </Body>
        <Right />
      </Header>
      <View style={{ flex: 1 }}>
        <Fab
          active={fab}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => setFab(!fab)}>
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

export default connect(mapStateToProps)(FabsExample);
