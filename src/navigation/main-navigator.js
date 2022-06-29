import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WalkThroughScreen from '../screens/walkthrough/walkthrough-screen';
import {LoginScreen} from '../screens/login/login-screen';
import {VerifyScreen} from '../screens/login/verify-screen';
import TabNavigator from './tab-navigator';
import IntroAdditionalScreen from '../screens/home/intro-additional-screen';
import AdditionalScreen from '../screens/home/additional-screen';
import AddVoteScreen from '../screens/home/add-vote-screen';
import PinScreen from '../screens/wallet/pin';
import TransactionScreen from '../screens/wallet/transaction-screen';
import ReadNewsScreen from '../screens/news/read-news-screen';

import * as Colors from '../styles/colors';

const Stack = createNativeStackNavigator();

export const MainNavigator = props => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      tabBarOptions={{activeTintColor: Colors.palette.primary}}
      screenOptions={{
        headerMode: 'screen',
      }}>
      <Stack.Screen
        name="Walkthrough"
        component={WalkThroughScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verify"
        component={VerifyScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IntroAdditional"
        component={IntroAdditionalScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Additional"
        component={AdditionalScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddVote"
        component={AddVoteScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pin"
        component={PinScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ReadNews"
        component={ReadNewsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
