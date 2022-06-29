import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
  Image,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import * as Colors from '../styles/colors';
import * as layout from '../constants/margin-padding-const';

const screenWidth = Dimensions.get('window').width;

export const BackButton = props => {
  const navigation = useNavigation();

  const css = StyleSheet.create({
    btnBody: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      width: 36,
      height: 32,
      backgroundColor: '#F5F5F6',
    },
  });
  return (
    <TouchableOpacity
      disabled={props.disabled && props.disabled}
      style={[css.btnBody, props.style]}
      onPress={props.onPress ? props.onPress : navigation.goBack()}>
      <Icons
        name={props.type === 'x' ? 'close' : 'arrow-left'}
        color={'#4a4f5f'}
        size={18}
      />
    </TouchableOpacity>
  );
};
