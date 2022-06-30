import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Local
import * as globalStyle from '../../styles/global-style';
import {CustomTextInput} from '../../components/text-input';
import {MainBtn} from '../../components/button';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const screenWidth = Dimensions.get('window').width;

export const LoginScreen = props => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const fbBlue = '#0078FF';

  const login = () => {
    navigation.navigate('Verify');
  };
  return (
    <View style={[globalStyle.container, {justifyContent: 'space-between'}]}>
      <View style={css.header}>
        <Image source={require('../../images/logo.png')} style={css.logo} />
      </View>
      <KeyboardAwareScrollView
        extraHeight={128}
        enableOnAndroid
        bounces={false}
        contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
        <View style={{flex: 1}} />
        <View style={css.body}>
          <CustomTextInput
            label="Утасны дугаар"
            value={text}
            onChangeText={text => setText(text)}
            // keyboardType="numeric"
          />
          <MainBtn
            onPress={() => login()}
            text="Бүртгүүлэх/Нэвтрэх"
            style={{marginTop: layout.margin[3]}}
            disabled={text.length >= 8 ? false : true}
          />
          <View style={css.insideWrap}>
            <View style={css.border} />
            <Text style={css.middleText}>Эсвэл</Text>
            <View style={css.border} />
          </View>
          <View style={css.insideWrap}>
            <TouchableOpacity style={css.signUpBtn}>
              <Image source={require('../../images/googleLogo.png')} />
              <Text style={[css.googleText, css.btnText]}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[css.signUpBtn, {backgroundColor: fbBlue}]}>
              <Image source={require('../../images/fbLogo.png')} />
              <Text style={[css.fbText, css.btnText]}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={css.footer}>
          <Text style={css.footerTextWrap}>
            <Text style={css.text}>
              Таныг хэн нэгэн урьсан уу? Хэрэв тийм бол
            </Text>
            <TouchableOpacity>
              <Text style={[css.text, css.touchableText]}> энд дарна уу</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const css = StyleSheet.create({
  border: {
    justifyContent: 'space-between',
    backgroundColor: Colors.palette.border,
    width: screenWidth * 0.35,
    height: 1,
  },
  body: {
    flex: 3,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  insideWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: layout.margin[5],
    marginHorizontal: layout.margin[3],
  },
  signUpBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth / 2 - 24,
    borderRadius: layout.margin[2],
    borderWidth: 1,
    borderColor: '#EBEBED',
    paddingVertical: 12,
  },
  logo: {
    alignSelf: 'center',
    marginTop: layout.margin[5],
  },
  googleText: {
    color: Colors.palette.black,
    marginLeft: layout.margin[2],
  },
  fbText: {
    marginLeft: layout.margin[2],
    color: Colors.palette.white,
  },
  btnText: {
    fontSize: 16,
  },
  footerTextWrap: {
    textAlign: 'center',
    width: screenWidth * 0.55,
    lineHeight: 20,
  },
  text: {
    color: Colors.palette.inActiveGray,
    fontSize: 14,
  },
  touchableText: {
    color: Colors.palette.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  middleText: {
    color: '#C3C4CA',
    // marginHorizontal: layout.margin[2],
    fontSize: 16,
  },
});
