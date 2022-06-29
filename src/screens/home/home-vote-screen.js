import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';
import {MainBtn} from '../../components/button';

const screenWidth = Dimensions.get('window').width;

const VoteScreen = () => {
  const navigation = useNavigation();
  const [allVote, setAllVote] = useState(null);
  const question = 'Баянгол дүүрэгт нэмж цэцэглэг барих шаардлагатай юу?';
  const answers = [
    {answer: 'Шаардлагагүй', value: '0', count: 48},
    {answer: 'Шаардлагатай', value: '1', count: 304},
    {answer: 'Маш Шаардлагатай', value: '2', count: 454},
    {answer: 'Мэдэхгүй байна', value: '3', count: 100},
  ];

  const names = ['A', 'M', 'S', 'T', 'R'];

  useEffect(() => {
    let vote = 0;
    for (var i = 0; i < answers.length; i++) {
      vote = vote + answers[i].count;
    }
    setAllVote(vote);
  }, [answers]);

  const css = StyleSheet.create({
    container: {
      backgroundColor: '#FAFAFA',
      flex: 1,
    },
    body: {
      marginTop: layout.margin[3],
    },
    vote: {
      alignSelf: 'center',
      backgroundColor: Colors.palette.white,
      width: screenWidth - 32,
      padding: layout.margin[3],
      borderWidth: 0.5,
      borderColor: Colors.palette.borderInactive,
      borderRadius: layout.margin[2],
    },
    voteTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: layout.margin[4],
      color: Colors.palette.black,
    },
    voteWrap: {
      height: 60,
      width: screenWidth - 64,
      borderWidth: 2,
      borderRadius: layout.margin[2],
      borderColor: Colors.palette.borderInactive,
      marginTop: layout.margin[3],
      paddingVertical: layout.margin[2],
    },
    answerText: {
      fontSize: 14,
      color: Colors.palette.black,
      lineHeight: layout.margin[4],
    },
    countText: {
      fontSize: 12,
      color: Colors.palette.black,
      marginTop: layout.margin[1],
      lineHeight: layout.margin[3],
    },
    percentage: {
      lineHeight: layout.margin[5],
      fontSize: 14,
      fontWeight: 'bold',
      color: '#4b4f5c',
    },
    wrap: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
      paddingHorizontal: layout.margin[3],
    },
    doneWrap: {
      backgroundColor: Colors.palette.tint,
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: -1,
      height: 56,
      borderRadius: 6,
    },
    infoText: {
      marginLeft: layout.margin[1],
      fontSize: 12,
      lineHeight: layout.margin[3],
      color: Colors.palette.blackSixty,
    },
    nameWrap: {
      width: 15,
      height: 15,
      borderRadius: 14,
      backgroundColor: Colors.palette.primary,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
    },
    char: {
      color: Colors.palette.white,
      fontWeight: 'bold',
      fontSize: 8,
    },
    icon: {
      width: 16,
      height: 16,
    },
    info: {
      flexDirection: 'row',
      marginTop: layout.margin[3],
    },
    row: {
      flexDirection: 'row',
    },
  });

  return (
    <View style={css.container}>
      <ScrollView style={css.body} bounces={false}>
        <View style={css.vote}>
          <Text style={css.voteTitle}>{question && question}</Text>
          {answers.map((item, index) => {
            let percent = Math.round((item.count * 100) / allVote);
            return (
              <View key={index} style={css.voteWrap}>
                <View style={css.wrap}>
                  <View style={css.answerWrap}>
                    <Text style={css.answerText}>{item.answer}</Text>
                    <Text style={css.countText}>{item.count} санал</Text>
                  </View>
                  <View style={css.infoWrap}>
                    <Text style={css.percentage}>{percent} %</Text>
                    <View style={css.row}>
                      {names.map((e, i) => (
                        <View key={i} style={[css.nameWrap, {right: 10 * i}]}>
                          <Text style={css.char}>{e}</Text>
                        </View>
                      ))}
                    </View>
                  </View>
                </View>
                <View style={[css.doneWrap, {width: `${percent} %`}]} />
              </View>
            );
          })}
          <View style={css.info}>
            <Image source={require('../../icons/group.png')} style={css.icon} />
            <Text style={css.infoText}>{allVote && allVote} санал өгсөн</Text>
          </View>
          <MainBtn
            text="Cанал өгөх"
            textStyle={{fontSize: 14, lineHeight: 20}}
            style={{width: screenWidth - 64, marginTop: layout.margin[3]}}
            onPress={() =>
              navigation.navigate('AddVote', {
                answers: answers,
                question: question,
              })
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default VoteScreen;
