import React, {useState, useContext} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProviderContext} from '../provider/provider-context';

import * as Colors from '../styles/colors';
import * as layout from '../constants/margin-padding-const';

import CustomDrawer from '../components/custom-drawer';

import HomeTab from '../screens/home/top-tab';
import NotificationScreen from '../screens/drawer/notification-screen';
import PersonalScreen from '../screens/drawer/personal-screen';
import SettingsScreen from '../screens/drawer/settings-screen';
import HelpScreen from '../screens/drawer/help-screen';
import InviteScreen from '../screens/drawer/invite-screen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const provider = useContext(ProviderContext);
  const name = provider.userInfo.name;

  const HeaderLeft = ({navigation}) => {
    return (
      <TouchableOpacity
        style={css.nameWrap}
        onPress={() => navigation.openDrawer()}>
        <View style={css.myImg}>
          <Text style={css.char}>{/* {name[0]} */}M</Text>
        </View>
        <Text style={css.name}>
          {/* {name} */}
          Munkhbold
        </Text>
      </TouchableOpacity>
    );
  };

  const HeaderRight = () => {
    return (
      <View style={css.pbl}>
        {pblItems.map((item, index) => (
          <TouchableOpacity style={css.pblWrap} key={index}>
            <Image source={item.uri} style={css.img} resizeMode="contain" />
            <Text style={css.count}>{item.count}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const pblItems = [
    {
      uri: require('../icons/star.png'),
      count: 10,
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

  return (
    <React.Fragment>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        initialRouteName="HomeTab"
        screenOptions={({navigation}) => ({
          drawerType: 'front',
          headerShadowVisible: false,
          headerLeftContainerStyle: {
            paddingHorizontal: layout.margin[3],
            paddingVertical: 10,
          },
          headerRightContainerStyle: {
            paddingHorizontal: layout.margin[3],
            paddingVertical: 10,
          },
          headerTitle: '',
          headerLeft: () => <HeaderLeft navigation={navigation} />,
          headerRight: () => <HeaderRight />,
        })}>
        <Drawer.Screen name="HomeTab" component={HomeTab} />
        <Drawer.Screen
          name="Notification"
          component={NotificationScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Personal"
          component={PersonalScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Help"
          component={HelpScreen}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Invite"
          component={InviteScreen}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </React.Fragment>
  );
}

const css = StyleSheet.create({
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
    color: Colors.palette.black,
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
