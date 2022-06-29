/* eslint-disable no-fallthrough */
/* eslint-disable curly */
import {useNavigation} from '@react-navigation/native';
import React, {useContext, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ActionSheet from 'react-native-actions-sheet';

import {BackButton} from '../../components/back-button';
import {MainBtn} from '../../components/button';
import {ProviderContext} from '../../provider/provider-context';
import Steps from './steps';

import * as layout from '../../constants/margin-padding-const';
import * as Colors from '../../styles/colors';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const AdditionalScreen = props => {
  const provider = useContext(ProviderContext);
  const actionSheetRef = useRef();
  const user = provider.userInfo;
  const navigation = useNavigation();
  const [steps, setSteps] = useState(1);
  const animationDuration = 500;
  const allStep = 9;
  const progress = useRef(
    new Animated.Value((screenWidth / allStep) * steps),
  ).current;

  const handleBack = () => {
    steps === 1 ? navigation.goBack() : setSteps(steps - 1);
    steps === 1 &&
      provider.setUserInfo({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        profession: '',
        maritalStatus: '',
        childNumber: '',
        memberNumber: '',
        income: '',
        state: '',
        district: '',
        committee: '',
        isApps: false,
        townName: '',
      });
    Animated.timing(progress, {
      toValue: (screenWidth / allStep) * (steps - 1),
      useNativeDriver: false,
      duration: animationDuration,
    }).start();
  };

  const handlePress = () => {
    if (steps === 9) {
      actionSheetRef.current.show();
    } else {
      setSteps(steps + 1);
      Animated.timing(progress, {
        toValue: (screenWidth / allStep) * (steps + 1),
        useNativeDriver: false,
        duration: animationDuration,
      }).start();
    }
  };

  function handleDisable() {
    switch (steps) {
      case 1:
        if (user?.firstName?.length > 0 && user?.lastName?.length > 0)
          return false;
      case 2:
        if (user?.dob?.length === 10) return false;
      case 3:
        if (user?.gender) return false;
      case 4:
        if (user?.profession) return false;
      case 5:
        if (user?.maritalStatus && user?.childNumber) return false;
      case 6:
        if (user?.memberNumber) return false;
      case 7:
        if (user?.income) return false;
      case 8:
        if (user?.state && user?.district && user?.committee) return false;
      case 9:
        if (user?.state && user?.district && user?.committee) return false;
    }
    return true;
  }

  const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.palette.white,
    },
    header: {
      width: screenWidth,
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
      justifyContent: 'space-between',
      // alignItems: 'center',
    },
    indicator: {
      width: screenWidth,
      height: 3,
      backgroundColor: Colors.palette.tint,
    },
    doneIndicator: {
      width: screenWidth / allStep,
      height: 3,
      backgroundColor: Colors.palette.primary,
    },
    stepCount: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F5F5F6',
      paddingHorizontal: layout.margin[2],
      paddingVertical: 6,
      borderRadius: 6,
    },
    stepText: {
      color: '#4a4f5f',
      fontWeight: 'bold',
      fontSize: 12,
    },
    btnStyle: {
      marginTop: layout.margin[5],
    },
    footer: {
      marginBottom: 48,
      marginTop: layout.margin[11],
    },
    warning: {
      alignSelf: 'center',
      width: screenWidth - 32,
      borderRadius: layout.margin[2],
      padding: layout.margin[3],
      backgroundColor: '#F8F8F8',
      flexDirection: 'row',
      alignItems: 'center',
    },
    img: {
      width: 24,
      height: 24,
    },
    warningText: {
      color: '#4d4e5e',
      fontSize: 12,
      lineHeight: layout.margin[3],
      marginLeft: layout.margin[2],
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
    imgBig: {
      width: 150,
      height: 150,
    },
    successText: {
      color: Colors.palette.success,
      fontSize: 20,
      lineHeight: layout.margin[7],
      fontWeight: 'bold',
      marginTop: layout.margin[3],
    },
    subText: {
      color: '#4d4e5c',
      fontSize: 16,
      lineHeight: layout.margin[5],
    },
    ooter: {
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
    imgL: {
      width: 18,
      height: 18,
    },
    rewardText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#8a8d97',
      lineHeight: 32,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    pointText: {
      color: '#FFAF21',
      fontWeight: 'bold',
      fontSize: 20,
    },
    xpText: {
      color: '#3D7DFF',
      fontWeight: 'bold',
      fontSize: 20,
    },
    btnBottom: {
      position: 'absolute',
      bottom: 100,
    },
  });

  return (
    <View style={css.container}>
      <View style={css.header}>
        <BackButton
          style={css.center}
          type={steps === 1 && 'x'}
          onPress={() => handleBack()}
        />
        <View style={css.stepCount}>
          <Text style={css.stepText}>
            {steps} / {allStep}
          </Text>
        </View>
      </View>
      <View style={css.indicator}>
        <Animated.View style={[css.doneIndicator, {width: progress}]} />
      </View>
      <KeyboardAwareScrollView extraHeight={128} enableOnAndroid>
        <View style={{flex: 1}}>
          <Steps steps={steps} />
          <View style={css.footer}>
            <View style={css.warning}>
              <Image style={css.img} source={require('../../icons/lock.png')} />
              <Text style={css.warningText}>
                Уг мэдээлэл нь “Нууцлалын бодлого”-ын дагуу хэн нэгэнд ил
                харагдахгүй, мөн бусдад тараагдахгүй. Зөвхөн танд тохирох
                судалгааг оновчлоход зориулагдах болно.
              </Text>
            </View>
            <MainBtn
              text="Үргэлжлүүлэх"
              style={css.btnStyle}
              onPress={() => handlePress()}
              disabled={handleDisable()}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{borderRadius: layout.margin[5]}}>
        <View style={css.actionSheetWrap}>
          <View style={[css.titleWrap, {paddingHorizontal: layout.margin[3]}]}>
            <Image
              source={require('../../images/coins.png')}
              resizeMode="contain"
              style={css.imgBig}
            />
            <Text style={css.successText}>Баяр хүргэе.</Text>
            <Text style={css.subText}>Таны хэтэвчинд 500₮ нэмэгдлээ</Text>
          </View>
          <View style={css.footer}>
            <View style={css.rewardWrap}>
              <Text style={css.rewardText}>Шагнал</Text>
              <View style={css.row}>
                <Text style={css.pointText}>1000</Text>
                <Image
                  source={require('../../icons/lpoint.png')}
                  style={css.imgL}
                />
              </View>
            </View>
            <View style={[css.rewardWrap, {marginTop: layout.margin[3]}]}>
              <Text style={css.rewardText}>Шагнал XP</Text>
              <Text style={css.xpText}>50 XP</Text>
            </View>
          </View>
          <MainBtn
            text="OK"
            onPress={() => navigation.navigate('Main')}
            style={css.btnBottom}
          />
        </View>
      </ActionSheet>
    </View>
  );
};

export default AdditionalScreen;
