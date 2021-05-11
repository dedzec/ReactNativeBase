import React from 'react';
import {
  Container,
  Header,
  Content,
  Left,
  Button,
  Icon,
  Title,
  Body,
  Right,
  Text,
} from 'native-base';

const HeaderTransparentExample = (props) => {
  return (
    <Container style={{ backgroundColor: '#87cefa' }}>
      <Header transparent>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" type="MaterialIcons" />
          </Button>
        </Left>
        <Body>
          <Title>Transparent Header</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Text>Header with transparent prop</Text>
      </Content>
    </Container>
  );
};

export default HeaderTransparentExample;
