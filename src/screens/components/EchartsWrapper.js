import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { ECharts } from 'react-native-echarts-wrapper';
import {
  Container,
  Header,
  Left,
  View,
  Button,
  Icon,
  Title,
  Body,
  Right,
} from 'native-base';

const EchartsWrapper = (props) => {
  useEffect(() => {
    initChart();
  }, []);

  const initChart = () => {
    return {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
        },
      ],
    };
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
          <Title>EchartsWrapper</Title>
        </Body>
        <Right />
      </Header>
      <View style={styles.chartContainer}>
        <ECharts
          option={initChart()}
          backgroundColor="rgba(93, 169, 81, 0.3)"
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  headerTheme: state.headerTheme,
});

export default connect(mapStateToProps)(EchartsWrapper);
