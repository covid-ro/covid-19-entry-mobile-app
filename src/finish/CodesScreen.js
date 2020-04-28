import React, {useRef, useCallback, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import QRCode from 'react-native-qrcode-svg';
import {useNavigation} from '@react-navigation/native';
import {metrics} from '../themes';
import {codesScreenStyles} from './styles';
import {GeneralButton} from '../core/components';
import {I18n} from '../core/strings';
import {roots} from '../navigation';
import {SET_REDIRECTED, RESET_STATE} from '../register/redux/actionTypes';

const CodesScreen = ({
  declarationCodes,
  redirected,
  setRedirected,
  route,
  resetState,
  language,
}) => {
  const navigation = useNavigation();
  const carouselRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const navRedirected = route?.params?.redirected;

  const renderItem = useCallback(({item}) => {
    return (
      <View style={codesScreenStyles.card}>
        <View style={codesScreenStyles.qrStyle}>
          <QRCode value={item.code} size={150} />
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
        dotsLength={declarationCodes.length}
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
          {I18n.t('finishScreenCodeLabel', {locale: language})}
        </Text>
      </View>
      <View>
        <Carousel
          useScrollView
          onSnapToItem={setActiveCard}
          keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          ref={carouselRef}
          data={declarationCodes}
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
        {(redirected || navRedirected) && (
          <View>
            <GeneralButton
              onPress={() => {
                resetState();
                setRedirected(true);
                navigation.navigate(roots.registerStack);
              }}
              text={I18n.t('adaugaMembru', {locale: language})}
            />
            <View style={codesScreenStyles.marginTop} />
          </View>
        )}

        <GeneralButton
          text={I18n.t('sfaturiDeCalatorie', {locale: language})}
          onPress={() => console.log('sfaturi')}
        />
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
  const {
    declarationCodes,
    redirected,
    language,
  } = state.register.rergisterReducer;
  return {declarationCodes, redirected, language};
};
const mapDispatchToProps = dispatch => ({
  resetState: () => dispatch({type: RESET_STATE}),
  setRedirected: redirected => dispatch({type: SET_REDIRECTED, redirected}),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CodesScreen);
