import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import {MainBtn} from '../../components/button';
import * as layout from '../../constants/margin-padding-const';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const images = [
  {
    id: '1',
    uri: require('../../images/walkthrough/first.png'),
    title: 'Таны бодол бүр үнэ цэнэтэй',
    subtitle:
      'Та өөрийн санал бодлыг хуваалцаж, аливаа бүтээгдэхүүн үйлчилгээг улам бүр сайжрах урам зоригийн эхлэл болоорой.',
  },
  {
    id: '2',
    uri: require('../../images/walkthrough/second.png'),
    title: 'Нэмэлт орлого олох шинэ боломж',
    subtitle:
      'Бид энэхүү аппликэйшныг ашигласнаараа баян болохгүй ч, өдөр бүрийн хэрэглээний мөнгөө олох нэмэлт орлогын эх үүсвэртэй болж чадна.',
  },
  {
    id: '3',
    uri: require('../../images/walkthrough/third.png'),
    title: 'Шагналт урамшуулал таныг хүлээж байна',
    subtitle:
      'Сар бүр даалгавар биелүүлэн, сугалаат урамшууллын азтан болоорой.',
  },
];

const WalkThroughScreen = props => {
  const [activeImg, setActiveImg] = useState(0);

  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      slide !== activeImg && setActiveImg(slide);
    }
  };

  return (
    <View style={css.container}>
      <View style={css.wrap}>
        <ScrollView
          scrollEventThrottle={3}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          pagingEnabled
          style={css.wrap}>
          {images.map((item, index) => (
            <View key={index}>
              <Image resizeMode="contain" style={css.image} source={item.uri} />
              <Text style={[css.textPos, css.titleText]}>{item?.title}</Text>
              <Text style={[css.textPos, css.subText]}>{item?.subtitle}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={css.bottomWrap}>
        <View style={css.wrapDot}>
          {images.map((item, index) => (
            <Text
              key={index}
              style={activeImg === index ? css.activeDot : css.dot}>
              {'\u25CF'}
            </Text>
          ))}
        </View>
      </View>
      <MainBtn
        text="Эхлэх"
        onPress={() => props.navigation.navigate('Login')}
        style={{marginTop: layout.margin[3]}}
        disabled={false}
      />
    </View>
  );
};

const css = StyleSheet.create({
  activeDot: {
    margin: 3,
    color: '#0C5DFF',
  },
  bottomWrap: {
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dot: {
    margin: 3,
    color: '#E3E5E5',
  },
  wrap: {
    width: screenWidth,
    height: screenHeight * 0.7,
  },
  image: {
    width: screenWidth,
    height: screenHeight * 0.5,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  textPos: {
    width: screenWidth - 32,
    textAlign: 'center',
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 20,
    color: '#040921',
    fontWeight: 'bold',
  },
  subText: {
    marginTop: layout.margin[2],
    color: '#686B7A',
    fontSize: 14,
  },
});

export default WalkThroughScreen;
