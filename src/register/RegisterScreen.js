import React, {useRef, useCallback, useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {View} from 'react-native';
import {registerScreenStyles} from './styles';
import {ProgressHeader} from './components';
import {metrics} from '../themes';
import {
  FormSection1,
  FormSection2,
  FormSection3,
  FormSection5,
  FormSection6,
  FormSection8,
  FormSection11,
  FormSection12,
  FormSection13,
} from '../sections';
import {strings} from '../core/strings';

const RegisterScreen = () => {
  const carouselRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    {id: 0, data: 'card 1'},
    {id: 1, data: 'card 2'},
    {id: 2, data: 'card 3'},
    {id: 3, data: 'card 4'},
    {id: 4, data: 'card 5'},
    {id: 5, data: 'card 6'},
    {id: 6, data: 'card 7'},
    {id: 7, data: 'card 8'},
    {id: 8, data: 'card 9'},
    {id: 9, data: 'card 10'},
    {id: 10, data: 'card 11'},
    {id: 11, data: 'card 12'},
    {id: 12, data: 'card 13'},
    {id: 13, data: 'card 14'},
  ];

  const renderItem = useCallback(({item, index}) => {
    switch (index) {
      case 0:
        return (
          <View style={registerScreenStyles.card}>
            <FormSection1 />
          </View>
        );
      case 1:
        return (
          <View style={registerScreenStyles.card}>
            <FormSection2 />
          </View>
        );
      case 2:
        return (
          <View style={registerScreenStyles.card}>
            <FormSection3 />
          </View>
        );

      case 4:
        return (
          <View style={registerScreenStyles.card}>
            <FormSection5 />
          </View>
        );
      case 5:
        return (
          <View style={registerScreenStyles.card}>
            <FormSection6 />
          </View>
        );
      case 7:
        return (
          <View style={registerScreenStyles.card}>
            <FormSection8 text={strings.form8Label} />
          </View>
        );
      case 8:
        return (
          <View style={registerScreenStyles.card}>
            <FormSection8 text={strings.form9Label} />
          </View>
        );
      case 9:
        return (
          <View style={registerScreenStyles.card}>
            <FormSection8 text={strings.form10Label} />
          </View>
        );
      case 10:
        return (
          <View style={registerScreenStyles.card}>
            <FormSection11 />
          </View>
        );
      case 11:
        return (
          <View style={registerScreenStyles.card}>
            <FormSection12 />
          </View>
        );
      case 12:
        return (
          <View style={registerScreenStyles.card}>
            <FormSection13 />
          </View>
        );

      default:
        return <View style={registerScreenStyles.card} />;
    }
  }, []);

  return (
    <View style={registerScreenStyles.container}>
      <View style={registerScreenStyles.progressBarContainer}>
        <ProgressHeader step={activeCard + 1} />
      </View>
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
    </View>
  );
};

export default RegisterScreen;
