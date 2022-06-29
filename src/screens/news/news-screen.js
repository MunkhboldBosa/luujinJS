import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const {width, height} = Dimensions.get('window');

const NewsScreen = () => {
  const navigation = useNavigation();
  const news = [
    {
      uri: require('../../images/guys.png'),
      title: 'Unitel компани 250+ нээлттэй шинэ ажлын байр зарлагдлаа',
      duration: '2',
      read: false,
    },
    {
      uri: require('../../images/third.png'),
      title:
        'Эрэгтэй баг эхний тоглолтдоо Тайванийг 22-15 харьцаагаар илүүрхэн хожлоо',
      duration: '35',
      read: true,
    },
  ];
  const dummy = [
    {
      uri: require('../../images/first.png'),
      title: 'Fat hen бүх бүргер 50% Хямралаа',
      sub: 'Metadata goes by here',
    },
    {
      uri: require('../../images/second.png'),
      title: 'Fat hen бүх бүргер 50% Хямралаа',
      sub: 'Metadata goes by here',
    },
    {
      uri: require('../../images/third.png'),
      title: 'Fat hen бүх бүргер 50% Хямралаа',
      sub: 'Metadata goes by here',
    },
  ];
  return (
    <ScrollView style={css.container} showsVerticalScrollIndicator={false}>
      <View style={css.header}>
        <Text style={css.title}>Суртчилгаа</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={css.banner}
          nestedScrollEnabled={true}
          contentContainerStyle={css.contentStyle}>
          {dummy.map((item, index) => (
            <ImageBackground
              key={index}
              source={item.uri}
              resizeMode="stretch"
              style={css.ImageBackground}>
              <View />
              <View style={css.bottomWrap}>
                <Text style={css.bannerTitle}>{item.title}</Text>
                <Text style={css.sub}>{item.sub}</Text>
              </View>
            </ImageBackground>
          ))}
        </ScrollView>
        <Text style={css.title}>Мэдээ мэдээлэл</Text>
        <View style={{marginTop: layout.margin[2]}}>
          {news.map((e, i) => (
            <TouchableOpacity
              style={css.newsWrap}
              key={i}
              onPress={() =>
                navigation.navigate('ReadNews', {
                  data: e,
                })
              }>
              <Image source={e.uri} resizeMode="stretch" style={css.img} />
              <Text style={css.newsTitle}>{e.title}</Text>
              <View style={css.newsfooter}>
                <View style={css.row}>
                  <Icon
                    name="timer-outline"
                    size={18}
                    color={Colors.palette.blackSixty}
                  />
                  <Text style={css.duration}>{e.duration} мин</Text>
                </View>
                {e.read ? (
                  <View style={css.readWrap}>
                    <Text style={css.readText}>Уншсан</Text>
                  </View>
                ) : (
                  <Text style={css.xpText}>+5 XP</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.palette.background,
  },
  title: {
    fontWeight: 'bold',
    marginLeft: layout.margin[4],
    marginTop: layout.margin[5],
    color: Colors.palette.black76,
  },
  banner: {
    marginTop: layout.margin[2],
  },
  contentStyle: {
    paddingRight: layout.margin[2],
  },
  ImageBackground: {
    width: 311,
    height: 195,
    justifyContent: 'space-between',
    marginLeft: layout.margin[3],
  },
  bottomWrap: {
    backgroundColor: '#00000099',
    height: '41%',
    borderRadius: layout.margin[2],
    padding: layout.margin[3],
  },
  bannerTitle: {
    fontWeight: 'bold',
    color: '#fff',
  },
  sub: {
    fontSize: 12,
    color: Colors.palette.white,
    marginTop: layout.margin[2],
  },
  newsWrap: {
    alignSelf: 'center',
    width: width - 32,
    padding: layout.margin[3],
    backgroundColor: Colors.palette.white,
    borderWidth: 0.5,
    borderRadius: layout.margin[2],
    borderColor: Colors.palette.borderInactive,
    marginBottom: layout.margin[5],
    alignItems: 'center',
  },
  newsTitle: {
    width: '100%',
    fontWeight: 'bold',
    color: Colors.palette.black,
    lineHeight: 20,
    marginTop: layout.margin[3],
    textAlign: 'left',
  },
  newsfooter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: layout.margin[3],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  duration: {
    marginLeft: layout.margin[1],
    color: Colors.palette.blackSixty,
    fontSize: 12,
  },
  readText: {
    color: Colors.palette.blackSixty,
    fontSize: 12,
    fontWeight: 'bold',
  },
  xpText: {
    color: Colors.palette.primary,
    fontWeight: 'bold',
  },
  readWrap: {
    paddingHorizontal: layout.margin[2],
    paddingVertical: layout.margin[1],
    backgroundColor: Colors.palette.borderInactive,
    borderRadius: layout.margin[1],
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
  },
});

export default NewsScreen;
