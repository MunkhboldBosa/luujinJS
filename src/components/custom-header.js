import React, {useState, useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Appbar} from 'react-native-paper';

import * as Colors from '../styles/colors';
import * as layout from '../constants/margin-padding-const';
import {ProviderContext} from '../provider/provider-context';

const screenWidth = Dimensions.get('window').width;

export default function CustomHeader(props) {
  const provider = useContext(ProviderContext);
  const name = provider.userInfo.name;

  const pblItems = [
    {
      uri: require('../icons/star.png'),
      count: 0,
    },
    {
      uri: require('../icons/level.png'),
      count: 3,
    },
    {
      uri: require('../icons/lpoint.png'),
      count: 0,
    },
  ];

  const openDrawer = () => {
    console.log(props);
    // navigation.openDrawer();
  };

  return (
    <Appbar style={css.headerContainer}>
      <TouchableOpacity style={css.nameWrap} onPress={() => openDrawer()}>
        <View style={css.myImg}>
          <Text style={css.char}>{/* {name[0]} */}M</Text>
        </View>
        <Text style={css.name}>
          {/* {name} */}
          Munkhbold
        </Text>
      </TouchableOpacity>
      <View style={css.pbl}>
        {pblItems.map((item, index) => (
          <TouchableOpacity key={index} style={css.pblWrap}>
            <Image source={item.uri} style={css.img} resizeMode="contain" />
            <Text style={css.count}>{item.count}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </Appbar>
  );
}

const css = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.palette.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  myImg: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.palette.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  char: {
    color: Colors.palette.white,
    fontWeight: 'bold',
  },
  name: {
    marginLeft: layout.margin[2],
    fontSize: 16,
    fontWeight: 'bold',
  },
  img: {
    width: 20,
    height: 20,
  },
  pbl: {
    flexDirection: 'row',
  },
  pblWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: layout.margin[2],
    backgroundColor: '#f7f7f7',
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  count: {
    color: Colors.palette.black,
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: layout.margin[2],
  },
});
