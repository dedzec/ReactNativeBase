import React, { useState } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { Alert } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
  Container,
  Header,
  Content,
  Left,
  Button,
  Icon,
  Text,
  Body,
  Input,
  Item,
  Title,
  Right,
  Subtitle,
} from 'native-base';

import Zocial from './icons/Zocial';

const ZocialExample = (props) => {
  const Icons = Zocial;
  const [iconFilter, setIconFilter] = useState('');

  const infoIcon = (icon) => {
    Alert.alert(
      icon.type,
      icon.name,
      [
        {
          text: 'Close',
          onPress: () => console.log('Close Pressed'),
          style: 'Close',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  };

  const filterIcon = (icon) => {
    for (let i = 0; i < iconFilter.length; i++) {
      if (icon[i] !== iconFilter[i].toLowerCase()) {
        return false;
      }
    }
    return true;
  };

  const colIcons = () => {
    let cols = [];
    for (let i = 0; i < Icons.length; i++) {
      if (iconFilter !== '') {
        if (filterIcon(Icons[i].name) === true) {
          cols.push(Icons[i]);
        }
      } else {
        cols.push(Icons[i]);
      }
    }
    return cols;
  };

  const rowIcons = (cols) => {
    let rows = [];
    let row = [];
    let col = 1;
    for (let i = 0; i < cols.length; i++) {
      row.push(cols[i]);
      if (i !== cols.length - 1) {
        // Não é final do array
        if (col % 4 === 0) {
          rows.push(
            <Row key={i}>
              {row.map((icon, index) => (
                <Col
                  key={`${i}${index}`}
                  style={styles.col}
                  onPress={() => infoIcon(icon)}>
                  <Icon name={icon.name} type={icon.type} />
                  <Text>
                    {icon.name.length > 10
                      ? `${icon.name.substr(0, 8)}...`
                      : icon.name}
                  </Text>
                </Col>
              ))}
            </Row>,
          );
          row = [];
        }
      } else {
        // É final do array
        rows.push(
          <Row key={i}>
            {row.map((icon, index) => (
              <Col
                key={`${i}${index}`}
                style={styles.col}
                onPress={() => infoIcon(icon)}>
                <Icon name={icon.name} type={icon.type} />
                <Text>
                  {icon.name.length > 10
                    ? `${icon.name.substr(0, 8)}...`
                    : icon.name}
                </Text>
              </Col>
            ))}
          </Row>,
        );
      }
      col++;
    }
    return rows;
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
          <Title>Icon</Title>
          <Subtitle>Zocial</Subtitle>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Item rounded>
          <Input
            placeholder="Search Icon"
            value={iconFilter}
            onChangeText={(text) => {
              setIconFilter(text);
            }}
          />
          <Button
            transparent
            onPress={() => {
              setIconFilter('');
            }}>
            <Icon name="close" type="MaterialIcons" style={{ color: 'red' }} />
          </Button>
        </Item>
        <Grid style={styles.root}>{rowIcons(colIcons())}</Grid>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  col: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(ZocialExample);
