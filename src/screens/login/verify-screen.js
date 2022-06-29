import {useNavigation} from '@react-navigation/native';
import React, {createRef, useContext, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import RNFadedScrollView from 'rn-faded-scrollview';
//local
import {BackButton} from '../../components/back-button';
import {MainBtn} from '../../components/button';
import {CustomTextInput} from '../../components/text-input';
import * as layout from '../../constants/margin-padding-const';
import {ProviderContext} from '../../provider/provider-context';
import * as Colors from '../../styles/colors';
import * as globalStyle from '../../styles/global-style';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const VerifyScreen = () => {
  const navigation = useNavigation();
  const provider = useContext(ProviderContext);
  const animationDuration = 500;
  const actionSheetRef = createRef();
  const allStep = 3;
  const progress = useRef(new Animated.Value(screenWidth / allStep)).current;
  const [smsCode, setCode] = useState('');
  const [name, setName] = useState('');
  const [steps, setSteps] = useState(1);

  const numberConfirm = () => {
    if (smsCode.length === 6) {
      setSteps(2);
      Animated.timing(progress, {
        toValue: (screenWidth / allStep) * 2,
        useNativeDriver: false,
        duration: animationDuration,
      }).start();
    }
  };

  const nameConfirm = () => {
    setSteps(3);
    Animated.timing(progress, {
      toValue: screenWidth,
      useNativeDriver: false,
      duration: animationDuration,
    }).start();
    provider.setUserInfo({
      name: name,
    });
  };

  const handleBack = () => {
    switch (steps) {
      case 1:
        navigation.goBack();
        break;
      case 2:
        setSteps(1);
        Animated.timing(progress, {
          toValue: screenWidth / allStep,
          useNativeDriver: false,
          duration: animationDuration,
        }).start();
        break;
      case 3:
        setSteps(2);
        Animated.timing(progress, {
          toValue: (screenWidth / allStep) * 2,
          useNativeDriver: false,
          duration: animationDuration,
        }).start();
        break;
    }
  };

  const css = StyleSheet.create({
    header: {
      width: screenWidth - 32,
      paddingHorizontal: layout.margin[3],
      paddingVertical: layout.margin[2],
    },
    indicator: {
      width: screenWidth,
      height: 3,
      backgroundColor: Colors.palette.tint,
    },
    doneIndicator: {
      width: screenWidth / 3,
      height: 3,
      backgroundColor: Colors.palette.primary,
    },
    margintop: {
      marginTop: layout.margin[2],
    },
    title: {
      fontSize: 20,
      lineHeight: 32,
      fontWeight: 'bold',
      color: Colors.palette.black,
      marginHorizontal: layout.margin[3],
    },
    bodyWrap: {
      flex: 1,
      // paddingHorizontal: layout.margin[3],
      paddingTop: 38,
      paddingBottom: layout.margin[5],
    },
    actionWrap: {
      marginTop: layout.margin[5],
    },
    policyText: {
      fontSize: 12,
      lineHeight: 16,
      color: Colors.palette.inActiveGray,
    },
    actionSheetWrap: {
      height: screenHeight,
      paddingBottom: 40,
      paddingTop: 35,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleWrap: {
      alignItems: 'center',
      justifyContent: 'center',
      // paddingHorizontal: layout.margin[3],
      bottom: 'auto',
      top: 'auto',
    },
    tyText: {
      fontSize: 16,
      marginTop: layout.margin[2],
      lineHeight: 24,
    },
  });

  return (
    <View style={globalStyle.container}>
      <View style={css.header}>
        <BackButton onPress={() => handleBack()} />
      </View>
      <View style={css.indicator}>
        <Animated.View style={[css.doneIndicator, {width: progress}]} />
      </View>
      {steps === 1 && (
        <View style={css.bodyWrap}>
          <Text style={css.title}>Утасны дугаараа баталгаажуулна уу?</Text>
          <View style={css.actionWrap}>
            <CustomTextInput
              style={css.margintop}
              placeholder="SMS-ээр ирэх кодыг оруулна уу"
              label="SMS код"
              value={smsCode}
              onChangeText={text => setCode(text)}
            />
            <MainBtn
              text="Үргэлжлүүлэх"
              style={css.margintop}
              disabled={smsCode.length <= 5 ? true : false}
              onPress={() => numberConfirm()}
            />
          </View>
        </View>
      )}
      {steps === 2 && (
        <View style={css.bodyWrap}>
          <Text style={css.title}>Нэр</Text>
          <View style={css.actionWrap}>
            <CustomTextInput
              style={css.margintop}
              placeholder="Нэр"
              label="Нэр"
              value={name}
              onChangeText={text => setName(text)}
            />
            <MainBtn
              text="Үргэлжлүүлэх"
              style={css.margintop}
              disabled={name.length < 1 ? true : false}
              onPress={() => nameConfirm()}
            />
          </View>
        </View>
      )}
      {steps === 3 && (
        <View style={css.bodyWrap}>
          <Text style={css.title}>Үйлчилгээны нөхцөл</Text>
          <RNFadedScrollView
            bounces={false}
            style={{
              marginTop: layout.margin[3],
              paddingHorizontal: layout.margin[3],
            }}>
            <Text style={css.policyText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque finibus sapien aliquet magna varius convallis.
              Suspendisse aliquam, dui eu auctor ullamcorper, libero sem
              vulputate ipsum, vitae gravida dolor nunc pellentesque risus. Ut
              finibus placerat arcu vitae pharetra. Morbi tristique dui at
              condimentum interdum. Nulla volutpat est eget mollis consequat.
              Curabitur lectus magna, dapibus vel finibus non, tempor vitae
              nunc. Etiam hendrerit vestibulum magna in facilisis. Proin vel
              erat a tortor fermentum hendrerit. Maecenas posuere rhoncus ipsum,
              in semper turpis tincidunt nec. Aenean luctus ante eu dui
              interdum, et finibus dolor mollis. Pellentesque pharetra dui et
              sagittis iaculis. Vestibulum tempus nunc ut lacus finibus, eu
              tincidunt metus egestas. Etiam sit amet justo semper, iaculis diam
              nec, placerat arcu. Donec hendrerit volutpat metus id ornare. Sed
              scelerisque, metus id varius imperdiet, enim lectus laoreet ipsum,
              fermentum mattis quam lacus non leo. Curabitur non lectus nec
              justo rutrum vehicula nec vel erat. Nulla iaculis nisl quis enim
              mattis congue. Duis sodales turpis quis ligula aliquam tempor.
              Fusce suscipit ac mauris at pulvinar. Integer congue a nunc eget
              sodales. Nulla facilisi. Phasellus ut interdum diam, tempus
              finibus erat. Maecenas aliquet risus et est mollis posuere. In id
              justo eu tellus ultrices finibus vitae eget ante. Mauris sit amet
              nulla elementum, pulvinar lacus et, dignissim felis. Integer est
              risus, suscipit sed malesuada sed Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Pellentesque finibus sapien aliquet
              magna varius convallis. Suspendisse aliquam, dui eu auctor
              ullamcorper, libero sem vulputate ipsum, vitae gravida dolor nunc
              pellentesque risus. Ut finibus placerat arcu vitae pharetra. Morbi
              tristique dui at condimentum interdum. Nulla volutpat est eget
              mollis consequat. Curabitur lectus magna, dapibus vel finibus non,
              tempor vitae nunc. Etiam hendrerit vestibulum magna in facilisis.
              Proin vel erat a tortor fermentum hendrerit. Maecenas posuere
              rhoncus ipsum, in semper turpis tincidunt nec. Aenean luctus ante
              eu dui interdum, et finibus dolor mollis. Pellentesque pharetra
            </Text>
          </RNFadedScrollView>
          <MainBtn
            text="Үргэлжлүүлэх"
            style={css.margintop}
            disabled={smsCode.length <= 1 ? true : false}
            onPress={() => actionSheetRef.current.show()}
          />
        </View>
      )}
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{borderRadius: layout.margin[5]}}>
        <View style={css.actionSheetWrap}>
          <View style={[css.titleWrap, {paddingHorizontal: layout.margin[3]}]}>
            <Image
              source={require('../../images/done.png')}
              resizeMode="contain"
              style={{width: 150, height: 150}}
            />
            <Text style={[css.title, {marginTop: 38}]}>
              Тавтай морил {name}.
            </Text>
            <Text style={[css.policyText, css.tyText]}>
              Та “Luujin” судалгааны урамшуулалт аппликэйшнд амжилттай
              бүртгэгдлээ!
            </Text>
          </View>
          <MainBtn
            text="OK"
            onPress={() => navigation.replace('Main')}
            style={{position: 'absolute', bottom: 100}}
          />
        </View>
      </ActionSheet>
    </View>
  );
};
