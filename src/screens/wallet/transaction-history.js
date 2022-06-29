import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {MainBtn} from '../../components/button';
import WalletModal from './wallet-modal';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const screenWidth = Dimensions.get('window').width;

const TransactionHistory = props => {
  const empty = true;
  return (
    <View style={css.container}>
      {empty ? (
        <View style={css.emptyWrap}>
          <Image
            resizeMode="contain"
            source={require('../../images/emptybox.png')}
            style={css.img}
          />
          <Text style={css.title}>
            Одоогоор ямар нэгэн гүйлгээ хийгээгүй байна.
          </Text>
          <Text style={css.sub}>
            Мөнгө татах товчин дээр дарж гүйлээ хийх боломжтой.
          </Text>
        </View>
      ) : (
        <View style={css.history}></View>
      )}
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.palette.background,
    paddingHorizontal: layout.margin[3],
  },
  history: {
    width: screenWidth - 32,
    backgroundColor: Colors.palette.white,
    borderWidth: 0.5,
    borderColor: Colors.palette.borderInactive,
    borderRadius: layout.margin[2],
    alignSelf: 'center',
  },
  title: {
    color: '#2d2f40',
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: layout.margin[3],
  },
  sub: {
    color: Colors.palette.blackSixty,
    fontSize: 12,
    lineHeight: 16,
    marginTop: layout.margin[2],
  },
  img: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  emptyWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default TransactionHistory;
