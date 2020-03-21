import React, {useRef, useCallback} from 'react';
import Carousel from 'react-native-snap-carousel';
import {View} from 'react-native';
import {registerScreenStyles} from './styles';
import {metrics} from '../themes';

const RegisterScreen = () => {
  const carouselRef = useRef(null);
  const cards = [
    {id: 0, data: 'card 1'},
    {id: 1, data: 'card 2'},
    {id: 2, data: 'card 3'},
    {id: 3, data: 'card 4'},
  ];

  const renderItem = useCallback(({item, index}) => {
    console.log("Index:", index)
    switch (index) {
      case 0:
        return <View style={registerScreenStyles.firstCard} />;
      case 1:
        return <View style={registerScreenStyles.secondCard} />;

      default:
        return <View style={registerScreenStyles.firstCard} />;
    }
  }, []);

  return (
    <Carousel
      useScrollView
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
  );
};

export default RegisterScreen;
