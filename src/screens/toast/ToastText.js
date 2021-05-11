import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Left,
  Button,
  Icon,
  Title,
  Subtitle,
  Toast,
  Text,
  Body,
  Right,
  Root,
} from 'native-base';

/**
 * For Toast to work, you need to wrap your topmost component inside <Root> from native-base.
 */

const ToastTextExample = (props) => {
  return (
    <Root>
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
            <Title>Toast</Title>
            <Subtitle>Toast text style</Subtitle>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Button
            onPress={() =>
              Toast.show({
                text: 'Wrong password!',
                textStyle: { color: 'yellow' },
                buttonText: 'Okay',
              })
            }>
            <Text>Toast</Text>
          </Button>
        </Content>
      </Container>
    </Root>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(ToastTextExample);
