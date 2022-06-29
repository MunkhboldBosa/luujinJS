import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import GiveawayScreen from './giveaway-screen';
import MissionScreen from './mission-screen';
import ProgressScreen from './progress-screen';

import SuccessTabItem from './success-tab-item';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const Tab = createMaterialTopTabNavigator();
const screenWidth = Dimensions.get('window').width;

const SuccessTab = props => {
  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Giveaway"
        style={{backgroundColor: Colors.palette.white}}
        tabBar={props => <SuccessTabItem {...props} />}>
        <Tab.Screen
          name="Progress"
          component={ProgressScreen}
          options={{tabBarLabel: 'Явц'}}
        />
        <Tab.Screen
          name="Giveaway"
          component={GiveawayScreen}
          options={{tabBarLabel: 'Тэмцээн'}}
        />
        <Tab.Screen
          name="Mission"
          component={MissionScreen}
          options={{tabBarLabel: 'Даалгавар'}}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
};

export default SuccessTab;
