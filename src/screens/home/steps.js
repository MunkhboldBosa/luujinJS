import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Keyboard,
  Image,
  Switch,
  TouchableOpacity,
} from 'react-native';
import MaskInput from 'react-native-mask-input';

import {CustomTextInput} from '../../components/text-input';
import CustomDropdownPicker from '../../components/dropdownpicker';
import {ProviderContext} from '../../provider/provider-context';

import * as layout from '../../constants/margin-padding-const';
import * as Colors from '../../styles/colors';

const screenWidth = Dimensions.get('window').width;

const Steps = props => {
  const provider = useContext(ProviderContext);
  const [border, setBorder] = useState({
    width: 1,
    color: Colors.palette.inActiveGray,
  });
  const [selectedGender, setSelectedGender] = useState(null);

  const mask = [/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/];
  const gender = ['Эрэгтэй', 'Эмэгтэй', 'Бусад (ЛГБТ)'];
  const status = [
    {label: 'Гэрлэсэн', value: '1'},
    {label: 'Гэрлээгүй', value: '2'},
  ];
  const number = [
    {label: '0', value: '0'},
    {label: '1', value: '1'},
    {label: '2', value: '2'},
    {label: '3', value: '3'},
    {label: '4', value: '4'},
    {label: '5', value: '5'},
    {label: '5-аас их', value: '6'},
  ];

  const data = [
    {label: 'Автомашины засвар үйлчилгээ', value: '1'},
    {label: 'Ажилчид, туслах ажилтан', value: '2'},
    {label: 'Аялал жуулчлал', value: '3'},
    {label: 'Банк, Санхүү, Нягтлан бодох бүртгэл', value: '4'},
    {label: 'Барилга, Үл хөдлөх хөрөнгө', value: '5'},
    {label: 'Захиргаа, Хүний нөөц', value: '6'},
    {label: 'Маркетинг, PR,  Менежмент', value: '7'},
    {label: 'Мэдээлэл технологи, Харилцаа холбоо', value: '8'},
  ];

  const profession = [
    {label: 'Автын цахилгаанчин', value: '1', parentValue: '1'},
    {label: 'Инженер', value: '2', parentValue: '1'},
    {label: 'Жолооч', value: '3', parentValue: '2'},
    {label: 'Засварчин', value: '4', parentValue: '2'},
    {label: 'Хөтөч', value: '5', parentValue: '3'},
    {label: 'Орчуулагч', value: '6', parentValue: '3'},
    {label: 'Аудит', value: '7', parentValue: '4'},
    {label: 'Эрсдлийн шинжээч', value: '8', parentValue: '4'},
  ];

  const state = [{label: 'Улаанбаатар', value: '1'}];
  const district = [
    {label: 'Баянзүрх дүүрэг', value: '1'},
    {label: 'Сүхбаатар дүүрэг', value: '2'},
    {label: 'Чингэлтэй дүүрэг', value: '3'},
  ];
  const committee = [
    {label: '11р хороо', value: '1'},
    {label: '12р хороо', value: '2'},
    {label: '13р хороо', value: '3'},
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [secondFocus, setSecond] = useState(false);
  const [thirdFocus, setThird] = useState(false);
  const [secondData, setSecondData] = useState(null);
  const [maritalStatus, setMaritalStatus] = useState(null);
  const [noc, setNoc] = useState(null); //numberofchild
  const [nof, setNof] = useState(null); //numberoffamily
  const [dummyAddress, setAddress] = useState({
    state: '',
    district: '',
    committee: '',
    isApps: false,
    townName: '',
  });

  const handleProfession = item => {
    setSecondData(item.value);
    provider.setUserInfo({...provider.userInfo, profession: item.label});
    setSecond(false);
  };

  const selectGender = (selected, index) => {
    setSelectedGender(index);
    provider.setUserInfo({...provider.userInfo, gender: selected});
  };

  const handleMarital = item => {
    provider.setUserInfo({...provider.userInfo, maritalStatus: item.label});
    setMaritalStatus(item.value);
    setIsFocus(false);
  };

  const handleNoc = item => {
    provider.setUserInfo({...provider.userInfo, childNumber: item.label});
    setNoc(item.value);
    setSecond(false);
  };

  const handleNof = item => {
    provider.setUserInfo({...provider.userInfo, memberNumber: item.label});
    setNof(item.value);
    setIsFocus(false);
  };

  const handleState = item => {
    provider.setUserInfo({
      ...provider.userInfo,
      state: item.label,
    });
    setAddress({...dummyAddress, state: item.value});
    setIsFocus(false);
  };

  const handleDistrict = item => {
    provider.setUserInfo({
      ...provider.userInfo,
      district: item.label,
    });
    setAddress({...dummyAddress, district: item.value});
    setSecond(false);
  };

  const handleCommit = item => {
    provider.setUserInfo({
      ...provider.userInfo,
      committee: item.label,
    });
    setAddress({...dummyAddress, committee: item.value});
    setThird(false);
  };

  function handleData() {
    let array = [];
    for (var i = 0; i < profession.length; i++) {
      if (value === profession[i].parentValue) {
        array.push(profession[i]);
      }
    }
    return array;
  }

  const css = StyleSheet.create({
    title: {
      color: Colors.palette.black,
      fontSize: 20,
      lineHeight: 32,
      fontWeight: 'bold',
      marginLeft: layout.margin[3],
    },
    bodyWrap: {
      marginTop: 40,
      flex: 1,
    },
    actionWrap: {
      paddingHorizontal: layout.margin[3],
      marginTop: layout.margin[2],
    },
    intro: {
      fontSize: 12,
      color: '#8a8d97',
      marginTop: layout.margin[1],
      textAlign: 'left',
    },
    custom: {
      width: screenWidth - 32,
      alignSelf: 'center',
      height: 44,
      backgroundColor: Colors.palette.white,
      borderWidth: border.width,
      borderColor: border.color,
      borderRadius: layout.margin[2],
      paddingHorizontal: layout.margin[3],
      fontSize: 16,
    },
    genderWrap: {
      width: screenWidth - 32,
      backgroundColor: Colors.palette.white,
      borderWidth: 2,
      borderColor: Colors.palette.borderInactive,
      borderRadius: layout.margin[2],
      paddingVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: layout.margin[3],
    },
    label: {
      color: '#4c4e5d',
      fontSize: 14,
      lineHeight: layout.margin[4],
    },
    warning: {
      alignSelf: 'center',
      width: screenWidth - 32,
      borderRadius: layout.margin[2],
      padding: layout.margin[3],
      backgroundColor: '#F8F8F8',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: layout.margin[3],
    },
    warningText: {
      color: Colors.palette.primary,
      fontSize: 12,
      lineHeight: layout.margin[3],
      textAlign: 'left',
      marginLeft: layout.margin[2],
    },
    img: {
      width: 24,
      height: 24,
    },
    isApps: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 48,
    },
    text: {
      color: Colors.palette.black,
      fontSize: 16,
      lineHeight: layout.margin[6],
    },
  });
  return (
    <View style={css.bodyWrap}>
      {props.steps === 1 && (
        <React.Fragment>
          <Text style={css.title}>Овог</Text>
          <View style={css.actionWrap}>
            <CustomTextInput
              placeholder="Овог"
              label={false}
              value={provider.userInfo.lastName}
              onChangeText={text =>
                provider.setUserInfo({...provider.userInfo, lastName: text})
              }
            />
            <Text style={css.intro}>
              Та өөрийн иргэний үнэмлэх дээрх овгоо оруулна уу.
            </Text>
          </View>
          <Text style={[css.title, {marginTop: layout.margin[3]}]}>Нэр</Text>
          <View style={css.actionWrap}>
            <CustomTextInput
              placeholder="Нэр"
              label={false}
              value={provider.userInfo.firstName}
              onChangeText={text =>
                provider.setUserInfo({...provider.userInfo, firstName: text})
              }
            />
            <Text style={css.intro}>
              Та өөрийн иргэний үнэмлэх дээрх нэрээ оруулна уу.
            </Text>
          </View>
        </React.Fragment>
      )}
      {props.steps === 2 && (
        <React.Fragment>
          <Text style={css.title}>Төрсөн огноо?</Text>
          <View style={css.actionWrap}>
            <MaskInput
              style={css.custom}
              value={provider.userInfo.dob}
              onChangeText={(masked, unmasked) => {
                provider.setUserInfo({...provider.userInfo, dob: masked});
              }}
              mask={mask}
              onFocus={() =>
                setBorder({width: 2, color: Colors.palette.primary})
              }
              onBlur={() =>
                setBorder({width: 1, color: Colors.palette.inActiveGray})
              }
            />
            <Text style={css.intro}>
              Та өөрийн төрсөн он сар өдрийг yyyy/mm/dd форматаар оруулна
              уу.(Жишээ: 1998/08/27)
            </Text>
          </View>
        </React.Fragment>
      )}
      {props.steps === 3 && (
        <React.Fragment>
          <Text style={css.title}>Таны хүйс?</Text>
          <View style={css.actionWrap}>
            {gender.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  css.genderWrap,
                  {
                    borderColor:
                      selectedGender === index
                        ? Colors.palette.primary
                        : Colors.palette.borderInactive,
                  },
                ]}
                onPress={() => selectGender(item, index)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </React.Fragment>
      )}
      {props.steps === 4 && (
        <React.Fragment>
          <Text style={css.title}>Таны мэргэжил?</Text>
          <View style={css.actionWrap}>
            <View style={css.dropdownWrap}>
              <Text style={css.label}>Салбар</Text>
              <CustomDropdownPicker
                style={isFocus && {borderColor: Colors.palette.primary}}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                data={data}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
            {value && (
              <View style={[css.dropdownWrap, {marginTop: layout.margin[5]}]}>
                <Text style={css.label}>Мэргэжил</Text>
                <CustomDropdownPicker
                  style={secondFocus && {borderColor: Colors.palette.primary}}
                  value={secondData}
                  onFocus={() => setSecond(true)}
                  onBlur={() => setSecond(false)}
                  data={handleData()}
                  onChange={item => handleProfession(item)}
                />
              </View>
            )}
          </View>
        </React.Fragment>
      )}
      {props.steps === 5 && (
        <React.Fragment>
          <Text style={css.title}>Гэрлэлтийн байдал</Text>
          <View style={css.actionWrap}>
            <View style={css.dropdownWrap}>
              <CustomDropdownPicker
                style={isFocus && {borderColor: Colors.palette.primary}}
                value={maritalStatus}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                data={status}
                onChange={item => handleMarital(item)}
              />
            </View>
          </View>
          {maritalStatus && (
            <View style={{marginTop: layout.margin[3]}}>
              <Text style={css.title}>Хүүхдийн тоо</Text>
              <CustomDropdownPicker
                style={secondFocus && {borderColor: Colors.palette.primary}}
                value={noc}
                onFocus={() => setSecond(true)}
                onBlur={() => setSecond(false)}
                data={number}
                onChange={item => handleNoc(item)}
              />
            </View>
          )}
        </React.Fragment>
      )}
      {props.steps === 6 && (
        <React.Fragment>
          <Text style={css.title}>Ам бүлийн гишүүдийн тоо</Text>
          <View style={css.actionWrap}>
            <View style={css.dropdownWrap}>
              <CustomDropdownPicker
                style={isFocus && {borderColor: Colors.palette.primary}}
                value={nof}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                data={number}
                onChange={item => handleNof(item)}
              />
            </View>
          </View>
        </React.Fragment>
      )}
      {props.steps === 7 && (
        <React.Fragment>
          <Text style={css.title}>Өрхийн дундаж орлого</Text>
          <View style={[css.actionWrap]}>
            <CustomTextInput
              placeholder="12345678"
              label={false}
              value={provider.userInfo.income}
              onChangeText={text =>
                provider.setUserInfo({...provider.userInfo, income: text})
              }
            />
            <View style={css.warning}>
              <Image
                source={require('../../icons/lockblue.png')}
                style={css.img}
              />
              <Text style={css.warningText}>
                Таны орлогын түвшин их багаас шалтгаалж шагналын мөнгөнд
                өөрчлөлт орохгүй.
              </Text>
            </View>
          </View>
        </React.Fragment>
      )}
      {props.steps === 8 && (
        <React.Fragment>
          <Text style={css.title}>Гэрийн хаяг</Text>
          <View style={[css.actionWrap]}>
            <View style={css.dropdownWrap}>
              <Text style={css.label}>Хот/Аймаг</Text>
              <CustomDropdownPicker
                style={isFocus && {borderColor: Colors.palette.primary}}
                value={dummyAddress.state}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                data={state}
                onChange={item => handleState(item)}
              />
            </View>
            {dummyAddress.state ? (
              <View style={[css.dropdownWrap, {marginTop: layout.margin[3]}]}>
                <Text style={css.label}>Дүүрэг/Сум</Text>
                <CustomDropdownPicker
                  style={secondFocus && {borderColor: Colors.palette.primary}}
                  value={dummyAddress.district}
                  onFocus={() => setSecond(true)}
                  onBlur={() => setSecond(false)}
                  data={district}
                  onChange={item => handleDistrict(item)}
                />
              </View>
            ) : null}
            {dummyAddress.district ? (
              <View style={[css.dropdownWrap, {marginTop: layout.margin[3]}]}>
                <Text style={css.label}>Хороо/Баг</Text>
                <CustomDropdownPicker
                  style={thirdFocus && {borderColor: Colors.palette.primary}}
                  value={dummyAddress.committee}
                  onFocus={() => setThird(true)}
                  onBlur={() => setThird(false)}
                  data={committee}
                  onChange={item => handleCommit(item)}
                />
              </View>
            ) : null}
            <View style={css.isApps}>
              <Text style={css.text}>Та орон сууцанд амьдардаг уу? </Text>
              <Switch
                value={provider.userInfo.isApps}
                onValueChange={() =>
                  provider.setUserInfo({
                    ...provider.userInfo,
                    isApps: !provider.userInfo.isApps,
                  })
                }
                trackColor={{true: Colors.palette.primary, false: '#8b8c96'}}
              />
            </View>
            {provider.userInfo.isApps ? (
              <View style={{marginTop: layout.margin[3]}}>
                <Text style={css.label}>Хотхоны нэр</Text>
                <CustomTextInput
                  placeholder="Нэр"
                  value={provider.userInfo.townName}
                  onChangeText={text =>
                    provider.setUserInfo({...provider.userInfo, townName: text})
                  }
                />
              </View>
            ) : null}
          </View>
        </React.Fragment>
      )}
      {props.steps === 9 && <Text>duuslaa</Text>}
    </View>
  );
};

export default Steps;
