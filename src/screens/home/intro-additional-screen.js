import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {BackButton} from '../../components/back-button';
import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MainBtn} from '../../components/button';

const screenWidth = Dimensions.get('window').width;

const IntroAdditionalScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={css.container}>
      <View style={css.header}>
        <BackButton
          style={css.center}
          type="x"
          onPress={() => navigation.navigate('Home')}
        />
        <View style={css.titleWrap}>
          <Text style={css.title}>Өргөтгөсөн профайл судалгаа</Text>
        </View>
      </View>
      <ScrollView style={css.body}>
        <View style={css.intro}>
          <Text style={css.introhead}>Судалгааны тайлбар</Text>
          <View style={css.wrap}>
            <Text style={css.introbody}>
              Та энэхүү судалгааг бөглөснөөр зөвхөн танд зориулагдсан олон
              төрлийн судалгааг хүлээн авах боломжтой болно. Эдгээр профайл
              мэдээлэл нь
              <TouchableOpacity style={css.link}>
                <Text style={[css.introbody, css.linkText]}>
                  "Шалгах асуулт"
                </Text>
              </TouchableOpacity>
              <Text style={css.introbody}>
                болон орж ирдэг тул үнэн зөвөөр бөглөөгүйгээс үүдэн нэмэлт
                орлоготой болох боломжгүйг анхаарна уу.
              </Text>
            </Text>
          </View>
        </View>
        <View style={css.infoWrap}>
          <View style={css.introinfo}>
            <Text style={css.infotext}>8 асуулт</Text>
          </View>
          <View style={css.introinfo}>
            <Text style={css.infotext}>3-4 минут</Text>
          </View>
        </View>
      </ScrollView>
      <View style={css.footer}>
        <View style={css.rewardWrap}>
          <Text style={css.rewardText}>Шагнал</Text>
          <View style={css.row}>
            <Text style={{color: '#FFAF21', fontWeight: 'bold'}}>1000</Text>
            <Image source={require('../../icons/lpoint.png')} style={css.img} />
          </View>
        </View>
        <View style={[css.rewardWrap, {marginTop: layout.margin[3]}]}>
          <Text style={css.rewardText}>Шагнал XP</Text>
          <Text style={{color: Colors.palette.primary, fontWeight: 'bold'}}>
            50 XP
          </Text>
        </View>
        <MainBtn
          text="Эхлэх"
          style={{marginTop: layout.margin[5]}}
          onPress={() => navigation.navigate('Additional')}
        />
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.palette.background,
  },
  header: {
    backgroundColor: Colors.palette.white,
    paddingHorizontal: layout.margin[3],
    paddingVertical: layout.margin[2],
    flexDirection: 'row',
    alignSelf: 'center',
    shadowColor: '#c9cbcd',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
  },
  title: {
    alignSelf: 'center',
    fontSize: 16,
    color: Colors.palette.black,
    fontWeight: 'bold',
  },
  center: {
    alignSelf: 'center',
  },
  titleWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    paddingHorizontal: layout.margin[3],
    marginTop: layout.margin[3],
  },
  intro: {
    width: screenWidth - 32,
    backgroundColor: '#F3F3F4',
    borderRadius: layout.margin[2],
    alignSelf: 'center',
    padding: layout.margin[3],
  },
  introhead: {
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 16,
    color: '#2c2f41',
  },
  introbody: {
    lineHeight: 20,
    fontSize: 14,
    color: '#4b4e5f',
  },
  wrap: {
    marginTop: layout.margin[2],
  },
  infoWrap: {
    width: screenWidth - 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: layout.margin[3],
  },
  introinfo: {
    width: screenWidth / 2 - 32,
    backgroundColor: '#F3F3F4',
    paddingVertical: layout.margin[3],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: layout.margin[2],
  },
  infotext: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#2c2f41',
  },
  link: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.palette.primary,
  },
  footer: {
    paddingHorizontal: layout.margin[3],
    paddingVertical: layout.margin[5],
    backgroundColor: Colors.palette.white,
    width: screenWidth,
  },
  rewardWrap: {
    width: screenWidth - 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: layout.margin[2],
    borderColor: '#c9cbcd',
    padding: layout.margin[3],
    alignItems: 'center',
  },
  img: {
    width: 18,
    height: 18,
  },
  rewardText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#8a8d97',
    lineHeight: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default IntroAdditionalScreen;
