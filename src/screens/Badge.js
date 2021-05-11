import React from 'react';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import {
  Container,
  Header,
  Content,
  Badge,
  Left,
  Button,
  Icon,
  Title,
  Text,
  Body,
  Right,
} from 'native-base';

const BadgeExample = (props) => {
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
        <Badge style={{ margin: 10 }}>
          <Text>2</Text>
        </Badge>
        <Badge primary style={{ margin: 10 }}>
          <Text>2</Text>
        </Badge>
        <Badge success style={{ margin: 10 }}>
          <Text>2</Text>
        </Badge>
        <Badge info style={{ margin: 10 }}>
          <Text>2</Text>
        </Badge>
        <Badge warning style={{ margin: 10 }}>
          <Text>2</Text>
        </Badge>
        <Badge danger style={{ margin: 10 }}>
          <Text>2</Text>
        </Badge>
        <Badge primary style={{ margin: 10 }}>
          <Icon
            name="star"
            type="MaterialIcons"
            style={{ fontSize: 15, color: '#fff', lineHeight: 20 }}
          />
        </Badge>
        <Badge style={{ backgroundColor: 'black', margin: 10 }}>
          <Text style={{ color: 'white' }}>1866</Text>
        </Badge>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(BadgeExample);
