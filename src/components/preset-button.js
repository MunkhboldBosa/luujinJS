import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleSheet, Dimensions, Text} from 'react-native';
import * as Colors from '../styles/colors';
import * as layout from '../constants/margin-padding-const';

const screenWidth = Dimensions.get('window').width;

export const PresetBtn = props => {
  const css = StyleSheet.create({
    btnBody: {
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: layout.margin[2],
      width: screenWidth - 32,
      backgroundColor: Colors.palette.white,
      height: 44,
      borderWidth: 2,
      borderColor: Colors.palette.borderInactive,
    },
    btnText: {
      color: Colors.palette.black,
      fontSize: 16,
      fontWeight: 'bold',
      lineHeight: layout.margin[5],
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
