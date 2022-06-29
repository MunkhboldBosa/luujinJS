import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const screenWidth = Dimensions.get('window').width;

const SurveyScreen = props => {
  const navigation = useNavigation();

  return (
    <View style={css.container}>
      <View>
        <TouchableOpacity
          style={css.surveyContainer}
          onPress={() => navigation.navigate('IntroAdditional')}>
          <Text style={css.title}>Өргөтгөсөн профайл судалгаа</Text>
          <View style={css.surveyBottomWrap}>
            <View style={css.bottomStart}>
              <View style={css.miniWrap}>
                <Image
                  style={css.img}
                  resizeMode="contain"
                  source={require('../../icons/cards.png')}
                />
                <Text style={css.text}>8 асуулттай</Text>
              </View>
              <View style={[css.miniWrap, css.fromLeft]}>
                <Image
                  style={css.img}
                  resizeMode="contain"
                  source={require('../../icons/clock.png')}
                />
                <Text style={css.text}>2 мин</Text>
              </View>
            </View>
            <View style={css.bottomEnd}>
              <Text style={css.point}>+1000</Text>
              <Image
                style={[css.img, css.miniLeft]}
                resizeMode="contain"
                source={require('../../icons/lpoint.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  surveyContainer: {
    alignSelf: 'center',
    width: screenWidth - 32,
    backgroundColor: Colors.palette.white,
    borderWidth: 1,
    borderColor: '#e7e6eb',
    borderRadius: layout.margin[2],
    marginVertical: 16,
    padding: layout.margin[3],
  },
  title: {
    color: Colors.palette.black,
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 20,
  },
  surveyBottomWrap: {
    width: screenWidth - 64,
    flexDirection: 'row',
    marginTop: layout.margin[3],
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomStart: {
    flexDirection: 'row',
  },
  miniWrap: {
    flexDirection: 'row',
  },
  img: {
    width: 16,
    height: 16,
  },
  text: {
    marginLeft: layout.margin[1],
    fontSize: 12,
    color: Colors.palette.inActiveGray,
  },
  fromLeft: {
    marginLeft: layout.margin[3],
  },
  bottomEnd: {
    flexDirection: 'row',
    backgroundColor: Colors.palette.lBg,
    borderRadius: layout.margin[1],
    paddingVertical: layout.margin[1],
    paddingHorizontal: layout.margin[2],
    alignItems: 'center',
  },
  miniLeft: {
    marginLeft: layout.margin[1],
  },
  point: {
    color: Colors.palette.black,
    fontSize: 12,
  },
});

export default SurveyScreen;
