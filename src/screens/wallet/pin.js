import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import Header from '../../components/header';
import {MainBtn} from '../../components/button';
import {ProviderContext} from '../../provider/provider-context';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const {Value, Text: AnimatedText} = Animated;
const CELL_COUNT = 4;

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: hasValue ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const PinScreen = () => {
  const navigation = useNavigation();
  const provider = useContext(ProviderContext);
  const [first, setFirst] = useState(false);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [done, setDone] = useState(false);

  const handleNext = () => {
    setFirst(true);
  };
  const handleBack = () => {
    first ? setFirst(false) : navigation.goBack();
  };

  const submitPin = () => {
    provider.setPin(value);
    setDone(true);
  };

  const renderCell = ({index, symbol, isFocused}) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [Colors.palette.primary, Colors.palette.primary],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [Colors.palette.white, Colors.palette.primary],
          }),
      borderColor: isFocused
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [Colors.palette.inActiveGray, Colors.palette.primary],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [Colors.palette.inActiveGray, Colors.palette.primary],
          }),
    };

    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);

    return (
      <AnimatedText
        style={[css.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}
        key={index}
      />
    );
  };
  return (
    <View style={css.container}>
      {done ? (
        <View style={css.doneWrap}>
          <View />
          <View>
            <Image
              resizeMode="contain"
              source={require('../../images/done.png')}
              style={css.img}
            />
            <Text style={css.title}>Пин код амжилттай үүслээ.</Text>
            <Text style={css.sub}>
              Цаашид уг Pin кодыг та хэтэвчнээсээ мөнгө авахдаа ашиглах болно
            </Text>
          </View>
          <MainBtn
            text="OK"
            onPress={() => navigation.replace('Transaction')}
          />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <Header
            title={first ? 'Pin үүсгэх' : ''}
            onPress={() => handleBack()}
            type={first ? '' : 'x'}
          />
          <View style={{flex: 1}}>
            {!first ? (
              <View style={css.topWrap}>
                <View style={css.insideWrap}>
                  <Image
                    source={require('../../icons/lockblue.png')}
                    style={css.img}
                    resizeMode="contain"
                  />
                  <Text style={css.title}>
                    Та гүйлгээ хийх 4 оронтой пин кодоо зохионо уу?
                  </Text>
                  <Text style={css.sub}>
                    Энэ нь таны санхүүгийн аюулгүй байдалд шаардлагатай ба
                    цаашид зарлагын гүйлгээ хийгдэх бүрт тус кодыг ашиглах
                    болохыг анхаарна уу.
                  </Text>
                </View>
                <MainBtn text="OK" onPress={() => handleNext()} />
              </View>
            ) : (
              <View style={{flex: 1}}>
                <View style={css.codeField}>
                  <Text style={css.title}>Пин кодоо зохионо уу?</Text>
                  <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={css.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={renderCell}
                  />
                </View>
                <MainBtn
                  text="Үргэлжлүүлэх"
                  disabled={value.length === 4 ? false : true}
                  onPress={() => submitPin()}
                />
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.palette.white,
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
    fontSize: 20,
    color: '#2d2f40',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  center: {
    alignSelf: 'center',
  },
  titleWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  img: {
    width: 170,
    height: 170,
    alignSelf: 'center',
  },
  topWrap: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 48,
    paddingHorizontal: layout.margin[3],
  },
  insideWrap: {
    paddingTop: 100,
    flex: 1,
    alignSelf: 'center',
  },
  sub: {
    color: Colors.palette.blackSixty,
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 16,
    marginTop: layout.margin[2],
  },
  codeField: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeFieldRoot: {
    marginTop: 24,
  },
  cell: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 12,
    marginLeft: layout.margin[2],
    overflow: 'hidden',
  },
  doneWrap: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 48,
    paddingHorizontal: layout.margin[3],
  },
});

export default PinScreen;
