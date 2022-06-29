import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Dimensions,
  Animated,
  Image,
} from 'react-native';

import {MainBtn} from '../../components/button';
import {PresetBtn} from '../../components/preset-button';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const screenWidth = Dimensions.get('window').width;

export default function WalletModal({
  visible,
  onClose,
  sub,
  title,
  btnText,
  presetText,
  onPress,
  onPreset,
}) {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal
      visible={showModal}
      transparent
      onDismiss={() => onClose()}
      onRequestClose={() => onClose()}>
      <View style={[css.modalBackground]}>
        <Animated.View
          style={[css.modalContainer, {transform: [{scale: scaleValue}]}]}>
          <View>
            <Image
              source={require('../../images/error.png')}
              style={css.img}
              resizeMode="contain"
            />
            <Text style={css.title}>{title && title}</Text>
            <Text style={css.sub}>{sub && sub}</Text>
          </View>
          <MainBtn
            text={btnText && btnText}
            onPress={onPress}
            style={css.btn}
            textStyle={css.btnText}
          />

          <PresetBtn
            text={presetText && presetText}
            style={css.preset}
            onPress={onPreset && onPreset}
          />
          <View />
        </Animated.View>
      </View>
    </Modal>
  );
}

const css = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    width: screenWidth - 48,
    backgroundColor: '#fff',
    borderRadius: layout.margin[2],
    paddingHorizontal: layout.margin[5],
    paddingVertical: layout.margin[5],
  },
  img: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  title: {
    color: '#090A0A',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: layout.margin[5],
  },
  sub: {
    marginTop: layout.margin[2],
    color: Colors.palette.gray,
    fontSize: 14,
    lineHeight: layout.margin[4],
    textAlign: 'center',
  },
  btn: {
    width: screenWidth - 80,
    marginTop: layout.margin[5],
  },
  preset: {
    width: screenWidth - 80,
    marginTop: layout.margin[3],
  },
  btnText: {
    fontWeight: 'bold',
  },
});
