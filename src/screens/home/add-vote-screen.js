import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ActionSheet from 'react-native-actions-sheet';

import Header from '../../components/header';
import {MainBtn} from '../../components/button';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const AddVoteScreen = props => {
  const answers = props.route.params.answers;
  const question = props.route.params.question;
  const actionSheetRef = useRef();
  const navigation = useNavigation();

  const [selected, setSelected] = useState(null);
  const [btnStatus, setBtnStatus] = useState(true);

  const select = (item, index) => {
    setSelected(index);
    setBtnStatus(false);
  };

  const submitVote = () => {
    actionSheetRef.current.show();
  };

  const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.palette.white,
    },
    body: {
      paddingHorizontal: layout.margin[3],
      paddingTop: 42,
    },
    answerWrap: {
      width: screenWidth - 32,
      backgroundColor: Colors.palette.white,
      borderWidth: 2,
      borderColor: Colors.palette.borderInactive,
      borderRadius: layout.margin[2],
      paddingVertical: 18,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: layout.margin[3],
    },
    question: {
      color: Colors.palette.black,
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 32,
    },
    answer: {
      color: Colors.palette.black,
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 24,
    },
    answerContainer: {
      marginTop: layout.margin[5],
    },
    btn: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: 48,
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
    title: {
      fontSize: 20,
      lineHeight: 32,
      color: '#2d2f40',
      fontWeight: 'bold',
      marginTop: layout.margin[3],
    },
    img: {
      width: 150,
      height: 150,
    },
    actionSheetBtn: {
      position: 'absolute',
      bottom: 100,
    },
    rewardWrap: {
      width: screenWidth - 32,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderWidth: 0.5,
      borderRadius: layout.margin[2],
      borderColor: '#c9cbcd',
      padding: layout.margin[3],
      alignItems: 'center',
      marginTop: 160,
    },
    rewardText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#8a8d97',
      lineHeight: 32,
    },
    xpText: {
      color: '#3D7DFF',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });

  return (
    <View style={css.container}>
      <Header type="x" />
      <View style={css.body}>
        <Text style={css.question}>{question && question}</Text>
        <View style={css.answerContainer}>
          {answers.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                css.answerWrap,
                {
                  borderColor:
                    selected === index
                      ? Colors.palette.primary
                      : Colors.palette.borderInactive,
                },
              ]}
              onPress={() => select(item, index)}>
              <Text
                style={[
                  css.answer,
                  {
                    color:
                      selected === index
                        ? Colors.palette.primary
                        : Colors.palette.black,
                  },
                ]}>
                {item.answer}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <MainBtn
        text="Үргэлжлүүлэх"
        style={css.btn}
        disabled={btnStatus}
        onPress={() => submitVote()}
      />
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{borderRadius: layout.margin[5]}}>
        <View style={css.actionSheetWrap}>
          <View style={[css.titleWrap, {paddingHorizontal: layout.margin[3]}]}>
            <Image
              source={require('../../images/done.png')}
              resizeMode="contain"
              style={css.img}
            />
            <Text style={[css.title]}>Саналаа өгсөн танд баярлалаа.</Text>
          </View>
          <View style={css.rewardWrap}>
            <Text style={css.rewardText}>XP</Text>
            <Text style={css.xpText}>+5XP</Text>
          </View>
          <MainBtn
            text="OK"
            onPress={() => navigation.goBack()}
            style={css.actionSheetBtn}
          />
        </View>
      </ActionSheet>
    </View>
  );
};

export default AddVoteScreen;
