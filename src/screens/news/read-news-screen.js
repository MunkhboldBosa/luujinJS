import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

import Header from '../../components/header';
import {MainBtn} from '../../components/button';

import * as Colors from '../../styles/colors';
import * as layout from '../../constants/margin-padding-const';

const {width, height} = Dimensions.get('window');

const ReadNewsScreen = props => {
  const data = props.route.params.data;
  return (
    <View style={css.container}>
      <Header />
      <ScrollView style={css.scroll}>
        <View style={css.body}>
          <Image source={data.uri} resizeMode="stretch" style={css.img} />
          <Text style={css.title}>{data.title}</Text>
          <Text style={css.sub}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque finibus sapien aliquet magna varius convallis.
            Suspendisse aliquam, dui eu auctor ullamcorper, libero sem vulputate
            ipsum, vitae gravida dolor nunc pellentesque risus. Ut finibus
            placerat arcu vitae pharetra. Morbi tristique dui at condimentum
            interdum. Nulla volutpat est eget mollis consequat. Curabitur lectus
            magna, dapibus vel finibus non, tempor vitae nunc. Etiam hendrerit
            vestibulum magna in facilisis. Proin vel erat a tortor fermentum
            hendrerit. Maecenas posuere rhoncus ipsum, in semper turpis
            tincidunt nec. Aenean luctus ante eu dui interdum, et finibus dolor
            mollis. Pellentesque pharetra dui et sagittis iaculis. Vestibulum
            tempus nunc ut lacus finibus, eu tincidunt metus egestas. Etiam sit
            amet justo semper, iaculis diam nec, placerat arcu. Donec hendrerit
            volutpat metus id ornare. Sed scelerisque, metus id varius
            imperdiet, enim lectus laoreet ipsum, fermentum mattis quam lacus
            non leo. Curabitur non lectus nec justo rutrum vehicula nec vel
            erat. Nulla iaculis nisl quis enim mattis congue. Duis sodales
            turpis quis ligula aliquam tempor. Fusce suscipit ac mauris at
            pulvinar. Integer congue a nunc eget sodales. Nulla facilisi.
            Phasellus ut interdum diam, tempus finibus erat. Maecenas aliquet
            risus et est mollis posuere. In id justo eu tellus ultrices finibus
            vitae eget ante. Mauris sit amet nulla elementum, pulvinar lacus et,
            dignissim felis. Integer est risus, suscipit sed malesuada sed Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            finibus sapien aliquet magna varius convallis. Suspendisse aliquam,
            dui eu auctor ullamcorper, libero sem vulputate ipsum, vitae gravida
            dolor nunc pellentesque risus. Ut finibus placerat arcu vitae
            pharetra. Morbi tristique dui at condimentum interdum. Nulla
            volutpat est eget mollis consequat. Curabitur lectus magna, dapibus
            vel finibus non, tempor vitae nunc. Etiam hendrerit vestibulum magna
            in facilisis. Proin vel erat a tortor fermentum hendrerit. Maecenas
            posuere rhoncus ipsum, in semper turpis tincidunt nec. Aenean luctus
            ante eu dui interdum, et finibus dolor mollis. Pellentesque pharetra
          </Text>
          <MainBtn text="Шагнал авах" style={css.btn} />
        </View>
      </ScrollView>
    </View>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.palette.background,
  },
  scroll: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: layout.margin[5],
    paddingBottom: 48,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.palette.black,
    lineHeight: 32,
    marginTop: layout.margin[3],
    fontSize: 20,
    textAlign: 'center',
  },
  sub: {
    color: Colors.palette.blackSixty,
    fontSize: 14,
    lineHeight: 24,
    marginTop: layout.margin[2],
  },
  img: {
    width: width - 32,
    height: 195,
  },
  btn: {
    marginTop: layout.margin[5],
  },
});

export default ReadNewsScreen;
