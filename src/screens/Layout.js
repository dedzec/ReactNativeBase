import React from 'react';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Container,
  Header,
  Content,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
} from 'native-base';

const LayoutExample = (props) => {
  const route = useRoute();

  // const width = Dimensions.get('window').width; //full width
  const height = Dimensions.get('window').height; //full height

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
      <Content>
        <Grid style={{ height: height - 57 }}>
          <Col style={{ backgroundColor: '#635DB7' }} />
          <Col>
            <Row style={{ backgroundColor: '#00CE9F' }} />
            <Row style={{ backgroundColor: '#E621D7' }} />
          </Col>
        </Grid>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(LayoutExample);
