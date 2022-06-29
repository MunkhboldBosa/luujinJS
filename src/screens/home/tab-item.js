import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  StyleSheet,
} from 'react-native';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const screenWidth = Dimensions.get('window').width;

const TabItem = ({state, descriptors, navigation, position}) => {
  const css = StyleSheet.create({
    container: {
      alignSelf: 'center',
      width: screenWidth - 32,
      flexDirection: 'row',
      backgroundColor: Colors.palette.disabledBtn,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: layout.margin[2],
      margin: layout.margin[2],
      height: 33,
      marginVertical: layout.margin[3],
    },
    touchWrap: {
      paddingVertical: 2,
      paddingHorizontal: 2,
      borderRadius: layout.margin[2],
    },
    textWrap: {
      flex: 1,
      width: (screenWidth - 40) / 2,
      borderRadius: layout.margin[2],
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontWeight: 'bold',
      fontSize: 14,
    },
  });

  return (
    <View style={css.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const bgColor = isFocused
          ? Colors.palette.white
          : Colors.palette.disabledBtn;
        const textColor = isFocused
          ? Colors.palette.black76
          : Colors.palette.blackSixty;
        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={css.touchWrap}>
            <View style={[css.textWrap, {backgroundColor: bgColor}]}>
              <Text style={[css.text, {color: textColor}]}>{label}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabItem;
