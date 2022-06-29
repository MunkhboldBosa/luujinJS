import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';
import CardWallet from '../../components/card-wallet';
import {MainBtn} from '../../components/button';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const WalletScreen = () => {
  return (
    <ScrollView style={css.container} bounces={false}>
      <View style={css.cardWrap}>
        <CardWallet />
      </View>
    </ScrollView>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardWrap: {
    flex: 1,
    backgroundColor: Colors.palette.white,
    paddingBottom: layout.margin[5],
  },
  cardImg: {
    alignSelf: 'center',
    width: screenWidth - 32,
    height: screenHeight * 0.3,
    borderRadius: layout.margin[2],
    marginTop: layout.margin[2],
    paddingHorizontal: layout.margin[3],
    paddingVertical: layout.margin[5],
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    color: Colors.palette.white,
    fontSize: 12,
    lineHeight: layout.margin[3],
  },
  luuicon: {
    width: 16,
    height: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balance: {
    fontSize: 30,
    lineHeight: 40,
    fontWeight: 'bold',
    color: Colors.palette.white,
    alignSelf: 'center',
    marginTop: layout.margin[3],
  },
  indicatorWrap: {
    marginTop: layout.margin[2],
  },
  indicator: {
    height: 16,
    width: screenWidth - 64,
    marginTop: layout.margin[2],
    backgroundColor: Colors.palette.warningTint,
    borderRadius: 6,
  },
  doneindicator: {
    height: 16,
    width: '60%',
    backgroundColor: Colors.palette.warning,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorText: {
    fontWeight: 'bold',
    fontSize: 8,
    lineHeight: layout.margin[3],
    color: Colors.palette.white,
    alignItems: 'center',
  },
  cardFooter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WalletScreen;
