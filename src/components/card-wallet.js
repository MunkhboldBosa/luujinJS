import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../styles/colors';
import * as layout from '../constants/margin-padding-const';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const CardWallet = props => {
  return (
    <React.Fragment>
      {props.firstTime ? (
        <React.Fragment>
          <ImageBackground
            source={require('../images/walletcard.png')}
            resizeMode="contain"
            style={css.cardImg}>
            <View style={css.cardHeader}>
              <Text style={css.cardText}>Дансны үлдэгдэл</Text>
              <View style={css.row}>
                <Image
                  resizeMode="contain"
                  source={require('../icons/lpoint.png')}
                  style={css.luuicon}
                />
                <Text style={css.cardText}>Luu Point LP</Text>
              </View>
            </View>
            <Text style={css.balance}>12’500 LP</Text>
            <View style={css.indicatorWrap}>
              <Text style={css.cardText}>6250₮</Text>
              <View style={css.indicator}>
                <View style={css.doneindicator}>
                  <Text style={css.indicatorText}>60%</Text>
                </View>
              </View>
            </View>
            <View style={css.cardFooter}>
              <Text style={css.cardText}>Хэтэвчнээс гаргах эхний зарлага</Text>
              <Text style={css.cardText}>20’000LP = 10’000₮ ✌️ </Text>
            </View>
          </ImageBackground>
        </React.Fragment>
      ) : (
        <ImageBackground
          source={require('../images/walletcard.png')}
          resizeMode="stretch"
          style={css.cardImg}>
          <View style={css.cardHeader}>
            <Text style={css.cardText}>Дансны үлдэгдэл</Text>
            <View style={css.row}>
              <Image
                resizeMode="contain"
                source={require('../icons/lpoint.png')}
                style={css.luuicon}
              />
              <Text style={css.cardText}>Luu Point LP</Text>
            </View>
          </View>
          <View style={css.textWrap}>
            <Text style={css.balance}>12’500 LP</Text>
            <Text style={css.cardText}>6250₮</Text>
          </View>
          <TouchableOpacity
            style={css.withdraw}
            onPress={props.onPress && props.onPress}>
            <View style={css.row}>
              <Text style={css.withdrawText}>Мөнгө татах</Text>
              <Icons
                name={'arrow-down'}
                color={Colors.palette.black}
                size={18}
                style={css.icon}
              />
            </View>
          </TouchableOpacity>
        </ImageBackground>
      )}
    </React.Fragment>
  );
};

const css = StyleSheet.create({
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
    justifyContent: 'center',
  },
  balance: {
    fontSize: 30,
    lineHeight: 40,
    fontWeight: 'bold',
    color: Colors.palette.white,
    // alignSelf: 'center',
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
  withdraw: {
    width: screenWidth - 64,
    backgroundColor: Colors.palette.white,
    height: 44,
    borderRadius: layout.margin[2],
    alignSelf: 'center',
    marginTop: layout.margin[6],
    alignItems: 'center',
    justifyContent: 'center',
  },
  withdrawText: {
    color: Colors.palette.black,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  icon: {
    marginLeft: layout.margin[1],
  },
  textWrap: {
    marginTop: layout.margin[5],
  },
});

export default CardWallet;
