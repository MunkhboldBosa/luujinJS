/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {ProviderContext} from '../provider/provider-context';

//local
import * as Colors from '../styles/colors';
import * as layout from '../constants/margin-padding-const';

//screens

import DrawerNavigator from './drawer-navigator';
import WalletTab from '../screens/wallet/wallet-top-tab';
import NewsScreen from '../screens/news/news-screen';
import SuccessTab from '../screens/success/success-top-tab';

//icons

const Tab = createBottomTabNavigator();
const screenWidth = Dimensions.get('window').width;
const star = require('../icons/star.png');

export default function TabNavigator(props) {
  const provider = useContext(ProviderContext);

  useEffect(() => {
    provider.setStarCount(23);
  }, [provider]);

  const HeaderRight = () => {
    return (
      <View style={css.pbl}>
        <TouchableOpacity style={css.pblWrap}>
          <Image source={star} style={css.img} resizeMode="contain" />
          <Text style={css.count}>{provider && provider.starCount}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = focused
                ? require('../icons/home-filled.png')
                : require('../icons/home-outline.png');
              color = focused
                ? (color = Colors.palette.primary)
                : (color = Colors.palette.inActiveGray);
              break;
            case 'News':
              iconName = focused
                ? require('../icons/news-filled.png')
                : require('../icons/news-outline.png');
              color = focused
                ? (color = Colors.palette.primary)
                : (color = Colors.palette.inActiveGray);
              break;
            case 'SuccessTab':
              iconName = focused
                ? require('../icons/trophy-filled.png')
                : require('../icons/trophy-outline.png');
              color = focused
                ? (color = Colors.palette.primary)
                : (color = Colors.palette.inActiveGray);
              break;
            case 'Wallet':
              iconName = focused
                ? require('../icons/wallet-filled.png')
                : require('../icons/wallet-outline.png');
              color = focused
                ? (color = Colors.palette.primary)
                : (color = Colors.palette.inActiveGray);
              break;
            default:
              break;
          }
          return (
            <Image
              resizeMode="contain"
              source={iconName}
              color={color}
              style={css.img}
            />
          );
        },
        tabBarStyle: {paddingVertical: layout.margin[2]},
        tabBarActiveTintColor: Colors.palette.primary,
        tabBarInactiveTintColor: Colors.palette.inActiveGray,
        headerTitleAlign: 'center',
      })}>
      <Tab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{tabBarLabel: 'Нүүр', headerShown: false}}
      />

      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarLabel: 'Мэдээ',
          title: 'Мэдээ',
          headerTitleStyle: css.titleStyle,
        }}
      />

      <Tab.Screen
        name="SuccessTab"
        component={SuccessTab}
        options={{
          tabBarLabel: 'Амжилт',
          title: 'Амжилт',
          headerTitleStyle: css.titleStyle,
          headerRight: () => <HeaderRight />,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletTab}
        options={{
          tabBarLabel: 'Хэтэвч',
          title: 'Данс',
          headerTitleStyle: css.titleStyle,
        }}
      />
    </Tab.Navigator>
  );
}

const css = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 24,
    alignSelf: 'center',
    color: Colors.palette.black,
  },
  pbl: {
    flexDirection: 'row',
    marginRight: layout.margin[3],
  },
  pblWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: layout.margin[2],
    backgroundColor: '#f7f7f7',
    borderRadius: 14,
    paddingHorizontal: layout.margin[2],
    paddingVertical: 6,
  },
  count: {
    color: Colors.palette.black,
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: layout.margin[2],
  },
});
