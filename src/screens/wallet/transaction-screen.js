import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/header';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const TransactionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={css.container}>
      <Header
        type="x"
        onPress={() => navigation.navigate('Main')}
        title="Мөнгө татах"
      />
      <Text>Transaction</Text>
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.palette.background,
  },
});

export default TransactionScreen;
