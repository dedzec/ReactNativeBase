import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Modal, TouchableOpacity } from 'react-native';
import {
  GiftedChat,
  InputToolbar,
  Bubble,
  Send,
} from 'react-native-gifted-chat';
import { useRoute } from '@react-navigation/native';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Title,
  View,
  Body,
  Thumbnail,
  Right,
} from 'native-base';

import { data } from '../../api/data_message';

const Room = (props) => {
  const route = useRoute();
  const [messages, setMessages] = useState([]);
  const [modal, setModal] = useState(false);
  const user = data[route.params.userId - 1];

  useEffect(() => {
    setMessages(user.messages);
  }, [user]);

  const onSend = useCallback((_messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, _messages),
    );
  }, []);

  const modalImage = (
    <Modal
      transparent={true}
      animationType="slide"
      visible={modal}
      onRequestClose={() => setModal(false)}>
      <TouchableOpacity
        style={styles.modalContainer}
        onPress={() => {
          setModal(false);
        }}>
        <View style={styles.activityIndicatorWrapper}>
          <Thumbnail
            square
            source={user.img}
            style={{ width: 350, height: 350 }}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );

  const IconImage = (
    <View style={{ flexDirection: 'row', marginLeft: -10 }}>
      <Icon
        name="arrow-back"
        type="MaterialIcons"
        style={{ color: '#fff', fontSize: 25, marginTop: 5 }}
      />
      <Thumbnail
        circular
        small
        source={user.img}
        style={{ width: 35, height: 35 }}
      />
    </View>
  );

  const customtInputToolbar = (input) => {
    return (
      <InputToolbar
        {...input}
        containerStyle={{
          backgroundColor: 'white',
          borderTopColor: '#E8E8E8',
          borderTopWidth: 1,
          padding: 2,
        }}
      />
    );
  };

  const renderBubble = (bubble) => {
    return (
      <Bubble
        {...bubble}
        wrapperStyle={{
          right: {
            backgroundColor: props.headerTheme.backgroundBar,
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  };

  const renderSend = (send) => {
    return (
      <Send {...send}>
        <View
          style={[
            styles.sendingContainer,
            { backgroundColor: props.headerTheme.backgroundBar },
          ]}>
          <Icon
            name="send"
            type="Feather"
            style={{ fontSize: 32, color: '#fff' }}
          />
        </View>
      </Send>
    );
  };

  return (
    <Container>
      <Header
        style={{ backgroundColor: props.headerTheme.backgroundBar }}
        androidStatusBarColor={props.headerTheme.statusBarColor}>
        <Left>
          <Button
            large
            transparent
            onPress={() => props.navigation.goBack()}
            style={{ marginLeft: -5 }}>
            {IconImage}
          </Button>
        </Left>
        <Body>
          <Title>{user.name}</Title>
        </Body>
        <Right />
      </Header>

      <GiftedChat
        messages={messages}
        onSend={(_messages) => onSend(_messages)}
        user={{
          _id: 1, // sent messages should have same user._id
        }}
        placeholder="Type your message here..."
        renderInputToolbar={(input) => customtInputToolbar(input)}
        renderBubble={(bubble) => renderBubble(bubble)}
        renderSend={(send) => renderSend(send)}
        onPressAvatar={() => setModal(true)}
        renderUsernameOnMessage={true}
        scrollToBottom
        alwaysShowSend
      />
      {modalImage}
    </Container>
  );
};

const styles = StyleSheet.create({
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 350,
    width: 350,
    borderRadius: 15,
    display: 'flex',
  },
});

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(Room);
