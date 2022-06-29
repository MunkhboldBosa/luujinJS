import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {ProviderContext} from '../provider/provider-context';

import * as Colors from '../styles/colors';
import * as layout from '../constants/margin-padding-const';

const bell = require('../icons/bell.png');
const user = require('../icons/user.png');
const cog = require('../icons/cog.png');
const question = require('../icons/question.png');

const CustomDrawer = props => {
  const provider = useContext(ProviderContext);
  const navigation = useNavigation();
  // const {state, ...rest} = props;
  // const newState = {...state};
  // newState.routes = newState.routes.filter(item => item.name !== 'HomeTab');

  const logout = () => {
    navigation.replace('Walkthrough');
  };

  const Header = () => {
    return (
      <View style={css.header}>
        <View style={css.name}>
          <View style={css.circle}>
            <Text style={css.char}>M</Text>
          </View>
          <View style={css.info}>
            <Text style={css.nameText}>Munkhbold</Text>
            <Text style={css.profile}>View Profile</Text>
          </View>
        </View>
      </View>
    );
  };

  const Label = ({label, count}) => {
    return (
      <View style={css.row}>
        <Text style={css.labelStyle}>{label}</Text>
        {count && (
          <View style={css.countWrap}>
            <Text style={css.count}>{count}</Text>
          </View>
        )}
      </View>
    );
  };

  const ItemImage = ({source}) => {
    return <Image resizeMode="contain" style={css.img} source={source} />;
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={css.container}>
      <View>
        <Header />
        <View style={css.itemWrap}>
          <DrawerItem
            labelStyle={css.labelStyle}
            style={css.itemContainer}
            label={() => <Label label="Мэдэгдэл" count={2} />}
            onPress={() => navigation.navigate('Notification')}
            icon={() => <ItemImage source={bell} />}
          />
          <DrawerItem
            labelStyle={css.labelStyle}
            style={css.itemContainer}
            label={() => <Label label="Хувийн мэдээлэл" count={20} />}
            onPress={() => navigation.navigate('Personal')}
            icon={() => <ItemImage source={user} />}
          />
          <DrawerItem
            labelStyle={css.labelStyle}
            style={css.itemContainer}
            label={() => <Label label="Тохиргоо" />}
            onPress={() => navigation.navigate('Settings')}
            icon={() => <ItemImage source={cog} />}
          />
          <DrawerItem
            labelStyle={css.labelStyle}
            style={css.itemContainer}
            label={() => <Label label="Тусламж Дэмжлэг" />}
            onPress={() => navigation.navigate('Help')}
            icon={() => <ItemImage source={question} />}
          />
          <DrawerItem
            labelStyle={css.labelStyle}
            style={[css.itemContainer, {borderBottomWidth: 0}]}
            label={() => <Label label="Найзаа урих" count={5} />}
            onPress={() => navigation.navigate('Invite')}
            icon={() => <ItemImage source={user} />}
          />
        </View>
      </View>
      <TouchableOpacity style={css.logout} onPress={() => logout()}>
        <Icon name="logout" size={18} color={Colors.palette.alert} />
        <Text style={css.logutText}>Системээс гарах</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.palette.white,
    justifyContent: 'space-between',
    paddingTop: layout.margin[6],
    paddingBottom: layout.margin[2],
  },
  header: {
    // flex: 1,
  },
  name: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: layout.margin[3],
  },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.palette.primary,
  },
  char: {
    color: Colors.palette.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  info: {
    marginLeft: layout.margin[5],
  },
  nameText: {
    fontWeight: 'bold',
    color: '#2d2f3f',
    fontSize: 20,
  },
  profile: {
    fontSize: 12,
    lineHeight: 20,
    color: Colors.palette.blackSixty,
  },
  img: {
    width: 20,
    height: 20,
  },
  itemWrap: {
    marginTop: 30,
  },
  itemContainer: {
    borderBottomColor: Colors.palette.borderInactive,
    borderBottomWidth: 0.3,
  },
  labelStyle: {
    fontSize: 14,
    color: '#2d2f40',
    lineHeight: 20,
    fontWeight: 'bold',
  },
  countWrap: {
    marginLeft: layout.margin[2],
    backgroundColor: Colors.palette.alert,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  count: {
    color: Colors.palette.white,
    fontSize: 10,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logout: {
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    paddingLeft: layout.margin[3],
  },
  logutText: {
    marginLeft: layout.margin[5],
    fontSize: 14,
    color: Colors.palette.alert,
  },
});

export default CustomDrawer;
