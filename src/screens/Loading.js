import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { Spinner } from 'native-base';

const Loading = () => {
  return (
    <Modal transparent={true} animationType={'none'} visible={true}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          {/* <ActivityIndicator style={styles.circle} animating={true} /> */}
          <Spinner color="blue" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 50,
    width: 50,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  circle: {
    color: '#2962FF',
  },
});

export default Loading;
