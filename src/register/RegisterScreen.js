import React, {useRef, useCallback, useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, ScrollView, Alert, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {I18n} from '../core/strings';
import {registerScreenStyles} from './styles';
import {ProgressHeader} from './components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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
  SignatureForm,
} from '../sections';
import {GeneralButton} from '../core/components';
import {roots} from '../navigation';
import {colors} from '../themes';
import {
  SET_RECOMPLETE_DATA,
  SET_RECOMPLETE,
  RESET_STATE,
  SET_DECLARATION_CODE,
  SET_ARRIVAL_DATE_REUSE,
  SET_DEPARTURE_DATE_REUSE,
  SET_TRAVELLING_FROM_DATE_REUSE,
} from './redux/actionTypes';
import {sendDeclaration} from '../api';

const RegisterScreen = ({
  language,
  setDeclarationCodes,
  navigation,
  setRecompleteData,
  setRecomplete,
  resetState,
  email,
  firstName,
  surname,
  cnp,
  documentType,
  documentSeries,
  documentNumber,
  travellingFromCountry,
  travellingFromCity,
  travellingFromDate,
  itineraryCountries,
  city,
  county,
  arrivalDate,
  departureDate,
  address,
  question1,
  question2,
  question3,
  fever,
  swallow,
  breathing,
  cough,
  vechicleType,
  registrationNo,
  userToken,
  declarationCodes,
  recompleteData,
  setArrivalDateReuse,
  setDepartureDateReuse,
  setTravellingFromDateReuse,
  arrivalDateReuse,
  departureDateReuse,
  travellingFromDateReuse,
}) => {
  const carouselRef = useRef(null);
  const [declarationCodesArray, setDeclarationCodesArray] = useState(
    declarationCodes,
  );
  const [activeCard, setActiveCard] = useState(0);
  const [isSending, setIsSending] = useState(false);
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
  console.log(recompleteData);
  useEffect(() => {
    setDeclarationCodes(declarationCodesArray);
  }, [setDeclarationCodes, declarationCodesArray]);
  console.log(arrivalDateReuse, 'reuse');
  const handleSendDeclaration = useCallback(async () => {
    if (firstName === '' || surname === '') {
      Alert.alert(I18n.t('completeNameError', {locale: language}), '', [
        {onPress: () => carouselRef.current.snapToItem(0)},
      ]);
    } else if (cnp === '') {
      Alert.alert(I18n.t('completeCNPErorr', {locale: language}), '', [
        {onPress: () => carouselRef.current.snapToItem(0)},
      ]);
    } else if (documentType === '') {
      Alert.alert(I18n.t('chooseDocumentTypeError', {locale: language}), '', [
        {onPress: () => carouselRef.current.snapToItem(1)},
      ]);
    } else if (documentSeries === '' && documentType === 'identity_card') {
      Alert.alert(
        I18n.t('completeDocumentSeriesError', {locale: language}),
        '',
        [{onPress: () => carouselRef.current.snapToItem(1)}],
      );
    } else if (documentNumber === '' && documentType === 'passport') {
      Alert.alert(
        I18n.t('completeDocumentNumberError', {locale: language}),
        '',
        [{onPress: () => carouselRef.current.snapToItem(1)}],
      );
    } else if (travellingFromCountry === '') {
      Alert.alert(I18n.t('travellingFromCountryError'), '', [
        {onPress: () => carouselRef.current.snapToItem(2)},
      ]);
    } else if (travellingFromCity === '') {
      Alert.alert(I18n.t('travellingFromCityError', {locale: language}), '', [
        {onPress: () => carouselRef.current.snapToItem(2)},
      ]);
    } else if (travellingFromDate === '') {
      Alert.alert(I18n.t('travellingFromDateError', {locale: language}), '', [
        {onPress: () => carouselRef.current.snapToItem(2)},
      ]);
    } else if (itineraryCountries === []) {
      Alert.alert(I18n.t('itineraryCountriesError', {locale: language}), '', [
        {onPress: () => carouselRef.current.snapToItem(2)},
      ]);
    } else if (city === '') {
      Alert.alert(I18n.t('cityError', {locale: language}), '', [
        {onPress: () => carouselRef.current.snapToItem(3)},
      ]);
    } else if (county === '') {
      Alert.alert(I18n.t('countyError', {locale: language}), '', [
        {onPress: () => carouselRef.current.snapToItem(3)},
      ]);
    } else if (arrivalDate === '') {
      Alert.alert(I18n.t('arrivalDateError', {locale: language}), '', [
        {onPress: () => carouselRef.current.snapToItem(3)},
      ]);
    } else if (address === '') {
      Alert.alert(I18n.t('addressError', {locale: language}), '', [
        {onPress: () => carouselRef.current.snapToItem(3)},
      ]);
    } else if (question1 === '') {
      Alert.alert(I18n.t('question1Error', {locale: language}), '', [
        {onPress: () => carouselRef.current.snapToItem(5)},
      ]);
    } else if (question2 === '') {
      Alert.alert(I18n.t('question2Error', {locale: language}), '', [
        {onPress: () => carouselRef.current.snapToItem(5)},
      ]);
    } else if (question3 === '') {
      Alert.alert(I18n.t('question3Error', {locale: language}), '', [
        {onPress: () => carouselRef.current.snapToItem(6)},
      ]);
    } else if (vechicleType === '') {
      Alert.alert(I18n.t('vechicleTypeError', {locale: language}), '', [
        {onPress: () => carouselRef.current.snapToItem(8)},
      ]);
    } else if (vechicleType === 'auto' && registrationNo === '') {
      Alert.alert(I18n.t('registrationNoError', {locale: language}), '', [
        {onPress: () => carouselRef.current.snapToItem(8)},
      ]);
    } else {
      let travelling_from_date;
      let city_arrival_date;
      let city_departure_date;

      if (arrivalDateReuse) {
        city_arrival_date = arrivalDate.split('T')[0];
      } else {
        city_arrival_date = arrivalDate.toISOString().split('T')[0];
      }
      if (departureDateReuse) {
        city_departure_date = departureDate.split('T')[0];
      } else {
        city_departure_date = departureDate.toISOString().split('T')[0];
      }
      if (travellingFromDateReuse) {
        travelling_from_date = travellingFromDate.split('T')[0];
      } else {
        travelling_from_date = travellingFromDate.toISOString().split('T')[0];
      }

      let symptoms = [];
      fever && symptoms.push('fever');
      swallow && symptoms.push('swallow');
      breathing && symptoms.push('breath');
      cough && symptoms.push('cough');
      setIsSending(true);
      const response = await sendDeclaration(
        {
          name: firstName,
          surname,
          email,
          cnp,
          document_type: documentType,
          document_series: documentSeries,
          document_number: documentNumber,
          travelling_from_country_code: travellingFromCountry.alpha2.toUpperCase(),
          travelling_from_city: travellingFromCity,
          travelling_from_date: travelling_from_date,
          isolation_addresses: [
            {
              city,
              county,
              city_full_address: address,
              city_arrival_date: city_arrival_date,
              city_departure_date: city_departure_date,
            },
          ],
          q_visited: question1,
          q_contacted: question2,
          q_hospitalized: question3,
          symptoms: symptoms,
          itinerary_countries: itineraryCountries,
          vehicle_type: vechicleType,
          vehicle_registration_no: registrationNo,
        },
        userToken,
      );
      if (response.status === 200) {
        setIsSending(false);
        setDeclarationCodesArray(declarationCodesArray => [
          ...declarationCodesArray,
          {
            name: firstName + ' ' + surname,
            code: response.data.declaration_code,
          },
        ]);
        setTravellingFromDateReuse(false);
        setArrivalDateReuse(false);
        setDepartureDateReuse(false);
        setRecomplete(true);
        setRecompleteData();
        navigation.navigate(roots.finishNavigator);
        carouselRef.current.snapToItem(0);
        resetState();
      } else {
        setIsSending(false);
        Alert.alert(I18n.t('backEndError', {locale: language}));
      }
    }
  }, [
    language,
    userToken,
    setDeclarationCodesArray,
    navigation,
    setRecomplete,
    setRecompleteData,
    resetState,
    email,
    firstName,
    surname,
    cnp,
    documentType,
    documentSeries,
    documentNumber,
    travellingFromCountry,
    travellingFromCity,
    travellingFromDate,
    itineraryCountries,
    city,
    county,
    arrivalDate,
    departureDate,
    address,
    question1,
    question2,
    question3,
    fever,
    swallow,
    breathing,
    cough,
    vechicleType,
    registrationNo,
    arrivalDateReuse,
    setArrivalDateReuse,
    setTravellingFromDateReuse,
    departureDateReuse,
    setDepartureDateReuse,
    travellingFromDateReuse,
  ]);

  const renderItem = useCallback(
    ({item, index}) => {
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
              <FormSection8 text={I18n.t('form8Label', {locale: language})} />
            </View>
          );
        case 8:
          return (
            <View style={registerScreenStyles.card}>
              <FormSection9 text={I18n.t('form9Label', {locale: language})} />
            </View>
          );
        case 9:
          return (
            <View style={registerScreenStyles.card}>
              <SignatureForm />
            </View>
          );
        default:
          return <View style={registerScreenStyles.card} />;
      }
    },
    [language],
  );

  return (
    <View style={registerScreenStyles.container}>
      <ProgressHeader step={activeCard + 1} />
      <KeyboardAwareScrollView
        extraHeight={metrics.size160}
        automaticallyAdjustContentInsets={false}
        scrollEnabled
        enableOnAndroid
        enableAutomaticScroll>
        <ScrollView
          contentContainerStyle={registerScreenStyles.contentContainer}>
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
          <View style={registerScreenStyles.generalButtonContainer}>
            {activeCard !== 9 ? (
              <GeneralButton
                text={I18n.t('urmatorul', {locale: language})}
                onPress={() => carouselRef.current.snapToNext()}
              />
            ) : isSending ? (
              <ActivityIndicator size="large" color={colors.darkBlue} />
            ) : (
              <GeneralButton
                text={I18n.t('trimite', {locale: language})}
                onPress={handleSendDeclaration}
              />
            )}
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};
const mapStateToProps = state => {
  const {
    userToken,
    email,
    phoneNumber,
    recompleteData,
    firstName,
    surname,
    cnp,
    documentType,
    documentSeries,
    documentNumber,
    travellingFromCountry,
    travellingFromCity,
    travellingFromDate,
    itineraryCountries,
    city,
    county,
    arrivalDate,
    departureDate,
    address,
    question1,
    question2,
    question3,
    fever,
    swallow,
    breathing,
    cough,
    vechicleType,
    registrationNo,
    citiesRoute,
    declarationCodes,
    redirected,
    language,
    arrivalDateReuse,
    departureDateReuse,
    travellingFromDateReuse,
  } = state.register.rergisterReducer;
  return {
    userToken,
    email,
    phoneNumber,
    recompleteData,
    firstName,
    surname,
    cnp,
    documentType,
    documentSeries,
    documentNumber,
    travellingFromCountry,
    travellingFromCity,
    travellingFromDate,
    itineraryCountries,
    city,
    county,
    arrivalDate,
    departureDate,
    address,
    question1,
    question2,
    question3,
    fever,
    swallow,
    breathing,
    cough,
    vechicleType,
    registrationNo,
    citiesRoute,
    declarationCodes,
    redirected,
    language,
    arrivalDateReuse,
    departureDateReuse,
    travellingFromDateReuse,
  };
};

const mapDispatchToProps = dispatch => ({
  setRecompleteData: () => dispatch({type: SET_RECOMPLETE_DATA}),
  setRecomplete: recomplete => dispatch({type: SET_RECOMPLETE, recomplete}),
  resetState: () => dispatch({type: RESET_STATE}),
  setDeclarationCodes: declarationCodes =>
    dispatch({type: SET_DECLARATION_CODE, declarationCodes}),
  setArrivalDateReuse: arrivalDateReuse =>
    dispatch({type: SET_ARRIVAL_DATE_REUSE, arrivalDateReuse}),
  setDepartureDateReuse: departureDateReuse =>
    dispatch({type: SET_DEPARTURE_DATE_REUSE, departureDateReuse}),
  setTravellingFromDateReuse: travellingFromDateReuse =>
    dispatch({type: SET_TRAVELLING_FROM_DATE_REUSE, travellingFromDateReuse}),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterScreen);
