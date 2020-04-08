import React, {useRef, useCallback, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import QRCode from 'react-native-qrcode-svg';
import {metrics} from '../themes';
import {codesScreenStyles} from './styles';
import {GeneralButton} from '../core/components';
import {I18n} from '../core/strings';

const CodesScreen = ({navigation, declarationCodes}) => {
  const carouselRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const cards = [
    {
      name: 'Cosmin Dan',
      code: 'MM12BWR1',
    },
    {
      name: 'Cosmin Dan',
      code: 'MM12BWR2',
    },
    {
      name: 'Cosmin Dan',
      code: 'MM12BWR3',
    },
  ];

  const renderItem = useCallback(({item}) => {
    return (
      <View style={codesScreenStyles.card}>
        <View style={codesScreenStyles.qrStyle}>
          <QRCode value="text" size={150} />
        </View>
        <View style={codesScreenStyles.codeContainer}>
          <Text style={codesScreenStyles.nameTextStyle}>{item.name}</Text>
          <Text style={codesScreenStyles.codeStyle}>{item.code}</Text>
        </View>
      </View>
    );
  }, []);
  const pagination = () => {
    return (
      <Pagination
        dotsLength={cards.length}
        activeDotIndex={activeCard}
        containerStyle={codesScreenStyles.pagination}
        dotStyle={codesScreenStyles.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };
  return (
    <ScrollView style={codesScreenStyles.container}>
      <View style={codesScreenStyles.titleContainer}>
        <Text style={codesScreenStyles.titleStyle}>
          {I18n.t('finishScreenCodeLabel')}
        </Text>
      </View>
      <View>
        <Carousel
          useScrollView
          onSnapToItem={setActiveCard}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          ref={carouselRef}
          data={cards}
          renderItem={renderItem}
          sliderWidth={metrics.screenWidth}
          itemWidth={metrics.cardWidth}
          inactiveSlideOpacity={0.85}
          inactiveSlideScale={0.93}
          swipeThreshold={metrics.screenWidth * 0.1}
        />
        {pagination()}
      </View>
      <View style={codesScreenStyles.generalButtonContainer}>
        <GeneralButton
          text={I18n.t('sfaturiDeCalatorie')}
          onPress={() => console.log('sfaturi')}
        />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  const {declarationCodes} = state.register.rergisterReducer;
  return {declarationCodes};
};
export default connect(mapStateToProps)(CodesScreen);
