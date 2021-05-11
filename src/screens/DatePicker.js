import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import {
  Container,
  Header,
  Content,
  DatePicker,
  Left,
  Button,
  Icon,
  Title,
  Text,
  Body,
  Right,
} from 'native-base';

const DatePickerExample = (props) => {
  const route = useRoute();
  const [date, setDate] = useState({ chosenDate: new Date() });

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
        <DatePicker
          defaultDate={new Date(2020, 1, 1)}
          minimumDate={new Date(1990, 1, 1)}
          maximumDate={new Date(2033, 12, 31)}
          locale={'en'}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={'fade'}
          androidMode={'default'}
          placeHolderText="Select date"
          textStyle={{ color: 'green' }}
          placeHolderTextStyle={{ color: '#d3d3d3' }}
          onDateChange={(newDate) => setDate({ chosenDate: newDate })}
          disabled={false}
        />
        <Text>Date: {date.chosenDate.toString().substr(4, 12)}</Text>
      </Content>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(DatePickerExample);
