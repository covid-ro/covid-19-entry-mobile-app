import React, {useRef, useCallback, useState} from 'react';
import {connect} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import {View, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {registerScreenStyles} from './styles';
import {ProgressHeader} from './components';
import {metrics} from '../themes';
import {
  FormSection1,
  FormSection2,
  FormSection3,
  FormSection4,
  FormSection5,
  FormSection6,
  FormSection7,
  FormSection8,
  FormSection9,
  FormSection10,
} from '../sections';
import {strings} from '../core/strings';
import {GeneralButton} from '../core/components';
import {roots} from '../navigation';
import {IOS} from '../core/constants';
import {
  SET_RECOMPLETE_DATA,
  SET_RECOMPLETE,
  RESET_STATE,
} from './redux/actionTypes';

const RegisterScreen = ({
  navigation,
  recompleteData,
  setRecompleteData,
  setRecomplete,
  resetState,
}) => {
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
      case 3:
        return (
          <View style={registerScreenStyles.card}>
            <FormSection4 />
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
      case 6:
        return (
          <View style={registerScreenStyles.card}>
            <FormSection7 />
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
            <FormSection9 text={strings.form9Label} />
          </View>
        );
      case 9:
        return (
          <View style={registerScreenStyles.card}>
            <FormSection10 text={strings.form10Label} />
          </View>
        );

      default:
        return <View style={registerScreenStyles.card} />;
    }
  }, []);

  return (
    <View style={registerScreenStyles.container}>
      <ProgressHeader step={activeCard + 1} />
      <ScrollView contentContainerStyle={registerScreenStyles.contentContainer}>
        {Platform.OS === IOS ? (
          <KeyboardAvoidingView
            style={registerScreenStyles.container}
            behavior="padding"
            keyboardVerticalOffset={metrics.size30}>
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
          </KeyboardAvoidingView>
        ) : (
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
        )}

        <View style={registerScreenStyles.generalButtonContainer}>
          {activeCard !== 9 ? (
            <GeneralButton
              text={strings.urmatorul}
              onPress={() => carouselRef.current.snapToNext()}
            />
          ) : (
            <GeneralButton
              text={strings.trimite}
              onPress={() => {
                setRecomplete(true);
                setRecompleteData();
                navigation.navigate(roots.finishNavigator);
                resetState();
              }}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};
const mapStateToProps = state => {
  const {email, phoneNumber, recompleteData} = state.register.rergisterReducer;
  return {email, phoneNumber, recompleteData};
};

const mapDispatchToProps = dispatch => ({
  setRecompleteData: () => dispatch({type: SET_RECOMPLETE_DATA}),
  setRecomplete: recomplete => dispatch({type: SET_RECOMPLETE, recomplete}),
  resetState: () => dispatch({type: RESET_STATE}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterScreen);
