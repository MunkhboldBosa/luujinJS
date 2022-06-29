/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const MissionScreen = () => {
  const dummy = [
    {
      name: 'App explorer',
      sub: 'Support and feedback хэсгийн intro видёо үзэх',
      progress: 45,
      reward: 5,
    },
    {
      name: 'App explorer',
      sub: 'Support and feedback хэсгийн intro видёо үзэх, Support and feedback хэсгийн intro видёо үзэх Support and feedback хэсгийн intro видёо үзэх',
      progress: 12,
      reward: 25,
    },
    {
      name: 'App explorer',
      sub: 'Support and feedback ',
      progress: 89,
      reward: 10,
    },
  ];

  const dummy2 = [
    {
      name: 'Супер шагнал',
      sub: 'Support and feedback хэсгийн intro видёо үзэх',
      uri: require('../../assets/avatars/avatar1.png'),
    },
    {
      name: 'Супер шагнал',
      sub: 'Support and feedback хэсгийн intro видёо үзэх',
      uri: require('../../assets/avatars/avatar2.png'),
    },
    {
      name: 'Супер шагнал',
      sub: 'Support and feedback хэсгийн intro видёо үзэх',
      uri: require('../../assets/avatars/avatar3.png'),
    },
    {
      name: 'Супер шагнал',
      sub: 'Support and feedback хэсгийн intro видёо үзэх',
      uri: require('../../assets/avatars/avatar4.png'),
    },
  ];

  return (
    <View style={css.container}>
      <ScrollView bounces={false}>
        <View style={css.body}>
          <Text style={css.title}>Хүлээгдэж буй даалгавар</Text>
          <View style={css.bodyWrap}>
            {dummy.map((e, i) => {
              let lastItem = false;
              if (dummy.length === i + 1) {
                lastItem = true;
              }
              return (
                <View
                  key={i}
                  style={[
                    css.itemContainer,
                    {borderBottomWidth: lastItem ? 0 : 0.3},
                  ]}>
                  <AnimatedCircularProgress
                    rotation={0}
                    size={48}
                    width={4}
                    fill={e.progress}
                    tintColor={Colors.palette.primary}
                    backgroundColor={Colors.palette.tint}
                    lineCap="round">
                    {progress => (
                      <Text style={css.progressText}>{progress}%</Text>
                    )}
                  </AnimatedCircularProgress>
                  <View style={css.textWrap}>
                    <Text style={css.name}>{e.name}</Text>
                    <Text style={css.sub}>{e.sub}</Text>
                  </View>
                  <Text style={css.rewardText}>+{e.reward} XP</Text>
                </View>
              );
            })}
          </View>
        </View>
        <View style={css.body}>
          <Text style={css.title}>Биелүүлсэн даалгавар</Text>
          <View style={css.bodyWrap}>
            {dummy2.map((e, i) => {
              let lastItem = false;
              if (dummy2.length === i + 1) {
                lastItem = true;
              }
              return (
                <View
                  key={i}
                  style={[
                    css.itemContainer,
                    {borderBottomWidth: lastItem ? 0 : 0.3},
                  ]}>
                  <AnimatedCircularProgress
                    rotation={0}
                    size={48}
                    width={4}
                    fill={100}
                    tintColor={Colors.palette.success}
                    lineCap="round">
                    {() => (
                      <ImageBackground
                        source={e.uri}
                        style={css.img}
                        resizeMode="stretch"
                      />
                    )}
                  </AnimatedCircularProgress>
                  <View style={css.textWrap}>
                    <Text style={css.name}>{e.name}</Text>
                    <Text style={css.sub}>{e.sub}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.palette.background,
  },
  title: {
    marginTop: layout.margin[5],
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: layout.margin[3],
    color: Colors.palette.blackSixty,
    marginLeft: layout.margin[1],
  },
  body: {
    paddingHorizontal: layout.margin[3],
    paddingBottom: 24,
  },
  bodyWrap: {
    paddingHorizontal: layout.margin[3],
    backgroundColor: Colors.palette.white,
    paddingBottom: layout.margin[2],
    borderRadius: layout.margin[2],
    marginTop: layout.margin[2],
  },
  name: {
    fontSize: 14,
    color: Colors.palette.black,
    lineHeight: layout.margin[4],
  },
  sub: {
    fontSize: 12,
    lineHeight: layout.margin[3],
    color: Colors.palette.blackSixty,
    marginTop: layout.margin[1],
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: layout.margin[3],
    borderColor: Colors.palette.borderInactive,
  },
  rewardText: {
    fontSize: 12,
    color: Colors.palette.primary,
    lineHeight: layout.margin[3],
  },
  progressText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: Colors.palette.primary,
  },
  textWrap: {
    flex: 1,
    textAlign: 'left',
    marginLeft: layout.margin[2],
  },
  history: {
    paddingHorizontal: layout.margin[3],
  },
  img: {
    width: 48,
    height: 48,
  },
});

export default MissionScreen;
