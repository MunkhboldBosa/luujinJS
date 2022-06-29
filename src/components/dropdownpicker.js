import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import * as Colors from '../styles/colors';
import * as layout from '../constants/margin-padding-const';

const screenWidth = Dimensions.get('window').width;

const CustomDropdownPicker = props => {
  const css = StyleSheet.create({
    dropdown: {
      alignSelf: 'center',
      width: screenWidth - 32,
      height: 44,
      borderColor: Colors.palette.borderInactive,
      borderWidth: 2,
      borderRadius: layout.margin[2],
      paddingHorizontal: 12,
      marginTop: layout.margin[2],
    },
    placeholderStyle: {
      fontSize: 16,
      color: Colors.palette.inActiveGray,
    },
    selectedTextStyle: {
      fontSize: 16,
      color: Colors.palette.black,
      lineHeight: layout.margin[5],
    },
  });
  return (
    <Dropdown
      style={[css.dropdown, props.style]}
      placeholderStyle={css.placeholderStyle}
      selectedTextStyle={css.selectedTextStyle}
      containerStyle={{
        borderRadius: layout.margin[2],
      }}
      showsVerticalScrollIndicator={false}
      data={props.data}
      search={false}
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder={props.placeholder ? props.placeholder : 'Сонгоно уу?'}
      value={props.value}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onChange={item => props.onChange(item)}
    />
  );
};

export default CustomDropdownPicker;
