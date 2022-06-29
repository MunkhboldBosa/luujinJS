import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const ProgressScreen = () => {
  return (
    <View style={css.container}>
      <Text>ProgressScreen</Text>
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.palette.background,
  },
});

export default ProgressScreen;
