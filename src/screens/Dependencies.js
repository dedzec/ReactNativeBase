import React from 'react';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import {
  Container,
  Header,
  Content,
  Button,
  ListItem,
  Title,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Separator,
} from 'native-base';

const packageJson = require('../../package.json');
const data = JSON.stringify(packageJson.dependencies).split(',');
const dataArray = [];
for (let i = 0; i < data.length; i++) {
  dataArray.push(data[i].split(':'));
}

const datas = [];
for (let i = 0; i < dataArray.length; i++) {
  datas.push({
    name: dataArray[i][0].replace('"', '').replace('"', '').replace('{', ''),
    version: dataArray[i][1].replace('"', '').replace('"', '').replace('}', ''),
  });
}

const Dependencies = (props) => {
  const route = useRoute();

  const listDependencies = () => {
    return datas.map((item, index) => (
      <ListItem icon key={index}>
        <Body>
          <Text>{item.name}</Text>
        </Body>
        <Right>
          <Text>{item.version}</Text>
        </Right>
      </ListItem>
    ));
  };

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
          <Title>{route.name}</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <Separator bordered noTopBorder />
        {listDependencies()}
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(Dependencies);
