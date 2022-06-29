import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Dimensions, Text} from 'react-native';
import * as Colors from '../styles/colors';
import * as layout from '../constants/margin-padding-const';

const screenWidth = Dimensions.get('window').width;

export const MainBtn = props => {
  const css = StyleSheet.create({
    btnBody: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: layout.margin[2],
      width: screenWidth - 32,
      backgroundColor: props.disabled
        ? Colors.palette.disabledBtn
        : Colors.palette.primary,
      height: 44,
    },
    btnText: {
      color: props.disabled
        ? Colors.palette.disabledBtnText
        : Colors.palette.white,
      fontSize: 16,
      fontWeight: '600',
    },
  });
  return (
    <TouchableOpacity
      disabled={props.disabled && props.disabled}
      style={[css.btnBody, props.style]}
      onPress={props.onPress}>
      <Text style={[css.btnText, props.textStyle]}>{props.text}</Text>
    </TouchableOpacity>
  );
};
