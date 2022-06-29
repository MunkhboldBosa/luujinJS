import React, {useState} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useNavigation} from '@react-navigation/native';

import RewardHistoryScreen from './reward-history';
import TransactionHistoryScreen from './transaction-history';
import WalletTabItem from './wallet-tab-item';
import CardWallet from '../../components/card-wallet';
import {MainBtn} from '../../components/button';
import WalletModal from './wallet-modal';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const Tab = createMaterialTopTabNavigator();
const screenWidth = Dimensions.get('window').width;

const WalletTab = props => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const handleOnPress = () => {
    setVisible(false);
    navigation.navigate('Additional');
  };
  const firstTime = true;
  const hasPin = false;
  const handleWithdraw = () => {
    if (!hasPin) {
      navigation.navigate('Pin');
    }
  };
  return (
    <React.Fragment>
      <View style={css.header}>
        <CardWallet firstTime={firstTime} onPress={() => handleWithdraw()} />
        {firstTime && (
          <MainBtn text="Мөнгө татах" onPress={() => setVisible(true)} />
        )}
        <WalletModal
          visible={visible}
          onClose={() => setVisible(false)}
          sub="Хэрэглэгчийн мэдээлэл баталгаажсанаар зарлага хийгдэх эрхтэй болно."
          title="Хэрэглэгчийн мэдээллээ баталгаажуулна уу."
          btnText="Мэдээлэл баталгаажуулах"
          presetText="Дараа болоё"
          onPress={() => handleOnPress()}
          onPreset={() => setVisible(false)}
        />
      </View>
      <Tab.Navigator
        style={{backgroundColor: Colors.palette.white}}
        tabBar={props => <WalletTabItem {...props} />}>
        <Tab.Screen
          name="RewardHistory"
          component={RewardHistoryScreen}
          options={{tabBarLabel: 'Урамшууллын түүх'}}
        />
        <Tab.Screen
          name="TransactionHistory"
          component={TransactionHistoryScreen}
          options={{tabBarLabel: 'Гүйлгээний түүх'}}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
};

const css = StyleSheet.create({
  header: {
    backgroundColor: Colors.palette.white,
  },
});

export default WalletTab;
