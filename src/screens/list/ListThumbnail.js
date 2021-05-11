import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  List,
  ListItem,
  Thumbnail,
  Text,
  Title,
  Subtitle,
  Body,
  Right,
} from 'native-base';

const sankhadeep = require('../../../assets/contacts/sankhadeep.png');
const supriya = require('../../../assets/contacts/supriya.png');
const himanshu = require('../../../assets/contacts/himanshu.png');
const shweta = require('../../../assets/contacts/shweta.png');
const shruti = require('../../../assets/contacts/shruti.png');
const shivraj = require('../../../assets/contacts/shivraj.png');
const datas = [
  {
    img: sankhadeep,
    text: 'Sankhadeep',
    note: 'Its time to build a difference . .',
  },
  {
    img: supriya,
    text: 'Supriya',
    note: 'One needs courage to be happy and smiling all time . . ',
  },
  {
    img: shivraj,
    text: 'Shivraj',
    note: 'Time changes everything . .',
  },
  {
    img: shruti,
    text: 'Shruti',
    note: 'The biggest risk is a missed opportunity !!',
  },
  {
    img: himanshu,
    text: 'Himanshu',
    note: 'Live a life style that matchs your vision',
  },
  {
    img: shweta,
    text: 'Shweta',
    note: 'Failure is temporary, giving up makes it permanent',
  },
];

const ListThumbnailExample = (props) => {
  return (
    <Container>
      <Header
        style={{ backgroundColor: props.headerTheme.backgroundBar }}
        androidStatusBarColor={props.headerTheme.statusBarColor}>
        <Left>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" type="MaterialIcons" />
          </Button>
        </Left>
        <Body>
          <Title>List</Title>
          <Subtitle>List Thumbnail</Subtitle>
        </Body>
        <Right />
      </Header>
      <List
        dataArray={datas}
        keyExtractor={(data, index) => index.toString()}
        renderRow={(data) => (
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={data.img} />
            </Left>
            <Body>
              <Text>{data.text}</Text>
              <Text numberOfLines={1} note>
                {data.note}
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        )}
      />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(ListThumbnailExample);
