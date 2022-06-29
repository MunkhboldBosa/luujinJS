import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import VoteScreen from './home-vote-screen';
import SurveyScreen from './home-survey-screen';
import TabItem from './tab-item';
import CustomHeader from '../../components/custom-header';
import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const Tab = createMaterialTopTabNavigator();
const screenWidth = Dimensions.get('window').width;

const HomeTab = props => {
  return (
    <React.Fragment>
      <Tab.Navigator
        style={{backgroundColor: Colors.palette.white}}
        tabBar={props => <TabItem {...props} />}>
        <Tab.Screen
          name="Survey"
          component={SurveyScreen}
          options={{tabBarLabel: 'Судалгаа'}}
        />
        <Tab.Screen
          name="Vote"
          component={VoteScreen}
          options={{tabBarLabel: 'Санал асуулга'}}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
};

export default HomeTab;
