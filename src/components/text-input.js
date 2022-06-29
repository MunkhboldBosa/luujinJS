import React, {createRef, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import * as Colors from '../styles/colors';
import * as layout from '../constants/margin-padding-const';

const screenWidth = Dimensions.get('window').width;

export const CustomTextInput = props => {
  return (
    <TextInput
      mode="outlined"
      label={props.label}
      value={props.value}
      onChangeText={props.onChangeText}
      outlineColor={Colors.palette.inActiveGray}
      activeOutlineColor={Colors.palette.primary}
      placeholder={props.placeholder}
      style={[props.style, css.custom]}
      multiline={false}
      keyboardType={props.keyboardType ? props.keyboardType : 'default'}
      theme={{roundness: layout.margin[2]}}
      maxLength={props.maxLength}
      left={props.left}
    />
  );
};
const css = StyleSheet.create({
  custom: {
    width: screenWidth - 32,
    alignSelf: 'center',
    height: 44,
    backgroundColor: Colors.palette.white,
  },
});
