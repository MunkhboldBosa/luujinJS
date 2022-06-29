import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';

import {BackButton} from './back-button';

import * as Colors from '../styles/colors';
import * as layout from '../constants/margin-padding-const';

export default function Header(props) {
  const navigation = useNavigation();
  return (
    <Appbar mode="small" style={css.container}>
      <BackButton
        onPress={props.onPress ? props.onPress : () => navigation.goBack()}
        type={props.type}
      />
      <Appbar.Content
        title={props.title}
        titleStyle={{
          fontSize: 16,
          fontWeight: 'bold',
          color: Colors.palette.black,
        }}
        color={'#fff'}
      />
    </Appbar>
  );
}

const css = StyleSheet.create({
  container: {
    backgroundColor: Colors.palette.white,
    paddingHorizontal: layout.margin[3],
    shadowColor: Colors.palette.borderInactive,
    shadowOffset: {
      width: 0,
      height: 0.1,
    },
    shadowRadius: 1,
    shadowOpacity: 1.0,
  },
});
