import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Content,
  Segment,
  Text,
  Body,
  Right,
} from 'native-base';

const SegmentExample = (props) => {
  const [state, setState] = useState({
    seg: 2,
  });

  return (
    <Container>
      <Header
        hasSegment
        style={{ backgroundColor: props.headerTheme.backgroundBar }}
        androidStatusBarColor={props.headerTheme.statusBarColor}>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" type="MaterialIcons" />
          </Button>
        </Left>
        <Body>
          <Segment style={{ backgroundColor: props.headerTheme.backgroundBar }}>
            <Button
              active={state.seg === 1 ? true : false}
              first
              onPress={() => setState({ seg: 1 })}>
              <Text
                style={{
                  color:
                    state.seg === 1 ? props.headerTheme.backgroundBar : '#fff',
                }}>
                Puppies
              </Text>
            </Button>
            <Button
              last
              active={state.seg === 2 ? true : false}
              onPress={() => setState({ seg: 2 })}>
              <Text
                style={{
                  color:
                    state.seg === 2 ? props.headerTheme.backgroundBar : '#fff',
                }}>
                Cubs
              </Text>
            </Button>
          </Segment>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" type="Ionicons" />
          </Button>
        </Right>
      </Header>
      <Content padder>
        {state.seg === 1 && <Text>Puppies Selected</Text>}
        {state.seg === 2 && <Text>Cubs Selected</Text>}
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(SegmentExample);
