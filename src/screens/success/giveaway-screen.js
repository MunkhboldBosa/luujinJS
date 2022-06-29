import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

import {useCountdown} from './countdown';
import {MainBtn} from '../../components/button';
import {PresetBtn} from '../../components/preset-button';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const {width, height} = Dimensions.get('window');

const success = require('../../images/success.png');
const lpoint = require('../../icons/lpoint.png');

let today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

const GiveawayScreen = props => {
  const actionSheetRef = useRef();
  const [days, hours, minutes, seconds] = useCountdown(tomorrow);
  const timerValues = [
    {value: 'өдөр', real: days},
    {value: 'цаг', real: hours},
    {value: 'минут', real: minutes},
    {value: 'сек', real: seconds},
  ];

  const names = ['A', 'M', 'S', 'T', 'R'];

  return (
    <ScrollView style={css.container}>
      <View style={css.wrap}>
        <View style={css.trophyWrap}>
          <Image
            source={require('../../images/trophy.png')}
            resizeMode="contain"
            style={css.trophy}
          />
          <Text style={css.trophyText}>ШАГНАЛ</Text>
        </View>
        <ImageBackground
          source={success}
          resizeMode="stretch"
          style={css.backImg}>
          <View />
          <View style={css.backHeader}>
            <View style={css.amountWrap}>
              <Image source={lpoint} style={css.lpoint} resizeMode="contain" />
              <Text style={css.amount}>200’000</Text>
            </View>
            <View style={css.moneyWrap}>
              <Text style={css.money}>100’000₮</Text>
            </View>
          </View>
          <View style={css.backFooter}>
            <Text style={css.infoText}>Дуусах: 8.30-нд 16:00 цагт</Text>
            <View style={css.timerWrap}>
              {timerValues.map((item, index) => (
                <View style={css.timer} key={index}>
                  <View style={css.timerBody}>
                    <Text style={css.timerValue}>{item.real}</Text>
                  </View>
                  <Text style={css.timerText}>{item.value}</Text>
                </View>
              ))}
            </View>
          </View>
        </ImageBackground>
        <View style={{marginTop: layout.margin[3]}}>
          <View style={css.usersWrap}>
            <Image
              source={require('../../icons/group.png')}
              style={css.img}
              resizeMode="contain"
            />
            <Text style={css.users}>1243 Хүн энэ тэмцээнийг тоглож байна </Text>
          </View>
          {/* <View style={css.row}>
            {names.map((e, i) => (
              <View key={i} style={[css.nameWrap, {left: 20 * i}]}>
                <Text style={css.char}>{e}</Text>
              </View>
            ))}
          </View> */}
          <MainBtn
            style={css.btn}
            text="Тэмцээнд оролцох"
            onPress={() => actionSheetRef.current.show()}
          />
          <PresetBtn style={css.btn} text="Дэлгэрэнгүй" />
        </View>
      </View>
      <ActionSheet ref={actionSheetRef}></ActionSheet>
    </ScrollView>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.palette.background,
    paddingTop: 14,
  },
  wrap: {
    width: width - 32,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderColor: Colors.palette.borderInactive,
    paddingHorizontal: layout.margin[3],
    paddingBottom: layout.margin[5],
    borderWidth: 1,
    borderTopWidth: 0,
    borderRadius: layout.margin[2],
    zIndex: -1,
    marginTop: layout.margin[3],
  },
  backImg: {
    width: width - 32,
    height: height * 0.31,
    overflow: 'hidden',
    alignSelf: 'center',
    borderTopEndRadius: layout.margin[2],
    borderTopStartRadius: layout.margin[2],
    paddingHorizontal: layout.margin[3],
    justifyContent: 'space-between',
    paddingBottom: layout.margin[3],
  },
  backHeader: {
    width: width - 64,
    alignItems: 'center',
  },
  amountWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  lpoint: {
    width: 38,
    height: 38,
  },
  amount: {
    fontSize: 42,
    color: Colors.palette.white,
    fontWeight: 'bold',
    marginLeft: layout.margin[2],
  },
  moneyWrap: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: layout.margin[1],
    borderRadius: layout.margin[2],
    paddingHorizontal: 44,
    backgroundColor: '#00000080',
  },
  money: {
    fontWeight: 'bold',
    color: Colors.palette.white,
  },
  backFooter: {
    width: width - 64,
    backgroundColor: '#00000060',
    borderRadius: layout.margin[2],
    paddingVertical: layout.margin[3],
    alignItems: 'center',
  },
  infoText: {
    fontSize: 12,
    color: Colors.palette.white,
    lineHeight: layout.margin[3],
  },
  timerWrap: {
    width: width - 96,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: layout.margin[2],
  },
  timer: {
    alignItems: 'center',
  },
  timerBody: {
    paddingVertical: 6,
    backgroundColor: '#00000080',
    borderRadius: layout.margin[2],
    alignItems: 'center',
    justifyContent: 'center',
    width: (width - 120) / 4,
  },
  timerValue: {
    fontSize: 32,
    color: Colors.palette.white,
  },
  timerText: {
    color: Colors.palette.white,
    fontSize: 12,
    marginTop: layout.margin[2],
  },
  btn: {
    width: width - 64,
    marginTop: layout.margin[3],
  },
  img: {
    width: 20,
    height: 20,
  },
  users: {
    fontSize: 12,
    color: Colors.palette.blackSixty,
    marginLeft: layout.margin[2],
  },
  usersWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  trophyText: {
    fontSize: 12,
    color: Colors.palette.white,
    marginLeft: layout.margin[0],
    fontWeight: 'bold',
  },
  trophy: {
    width: 15,
    height: 15,
  },
  trophyWrap: {
    backgroundColor: '#000',
    width: 102,
    height: 28,
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: layout.margin[3],
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 1,
    top: -14,
  },
  row: {
    flexDirection: 'row',
    marginTop: layout.margin[2],
  },
  nameWrap: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    backgroundColor: Colors.palette.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  char: {
    color: Colors.palette.white,
    fontWeight: 'bold',
    fontSize: 8,
  },
});

export default GiveawayScreen;
