import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Title,
  Body,
  Right,
  List,
  ListItem,
  Thumbnail,
  Text,
} from 'native-base';

import { data } from '../../api/data_message';

const Chat = (props) => {
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
          <Title>Chat</Title>
        </Body>
        <Right />
      </Header>
      <List
        dataArray={data}
        keyExtractor={(item, index) => index.toString()}
        renderRow={(item) => {
          const date = item.messages[0].createdAt;
          return (
            <ListItem
              avatar
              onPress={() =>
                props.navigation.push('Room', { userId: item.id - 1 })
              }>
              <Left>
                <Thumbnail source={item.img} />
              </Left>
              <Body style={{ marginTop: 5 }}>
                <Text>{item.name}</Text>
                <Text numberOfLines={1} note>
                  {item.messages[0].text}
                </Text>
              </Body>
              <Right>
                <Text note>{`${('0' + date.getHours()).slice(-2)}:${(
                  '0' + date.getMinutes()
                ).slice(-2)}`}</Text>
              </Right>
            </ListItem>
          );
        }}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(Chat);
