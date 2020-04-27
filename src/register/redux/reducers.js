import produce from 'immer';
import {assign} from 'lodash-es';
import {
  SET_CNP,
  SET_FIRST_NAME,
  SET_SURNAME,
  SET_DOCUMENT_TYPE,
  SET_DOCUMENT_SERIES,
  SET_DOCUMENT_NUMBER,
  SET_TRAVELLING_COUNTRY,
  SET_TRAVELLING_CITY,
  SET_TRAVELLING_DATE,
  SET_ITINERARY_COUNTRIES,
  SET_CITY,
  SET_COUNTY,
  SET_ARRIVAL,
  SET_DEPARTURE,
  SET_ADDRESS,
  SET_EMAIL,
  SET_QUESTION1,
  SET_QUESTION2,
  SET_QUESTION3,
  SET_FEVER,
  SET_SWALLOW,
  SET_BREATHING,
  SET_COUGH,
  SET_VECHICLE_TYPE,
  SET_REGISTRATION_NO,
  SET_CITIES_ROUTE,
  SET_PHONE_NUMBER,
  SET_RECOMPLETE,
  SET_RECOMPLETE_DATA,
  RESET_STATE,
  SET_DECLARATION_CODE,
  SET_USER_TOKEN,
  SET_REDIRECTED,
  SET_SIGNATURE,
  SET_LANGUAGE,
  SET_TRAVELLING_FROM_DATE_REUSE,
  SET_ARRIVAL_DATE_REUSE,
  SET_DEPARTURE_DATE_REUSE,
} from './actionTypes';

const INITIAL_STATE = {
  userToken: '',
  firstName: '',
  surname: '',
  cnp: '',
  documentType: '',
  documentSeries: '',
  documentNumber: '',
  travellingFromCountry: '',
  travellingFromCity: '',
  travellingFromDate: '',
  itineraryCountries: [],
  city: '',
  county: '',
  arrivalDate: '',
  departureDate: '',
  address: '',
  email: '',
  phoneNumber: '',
  question1: '',
  question2: '',
  question3: '',
  fever: false,
  swallow: false,
  breathing: false,
  cough: false,
  vechicleType: '',
  registrationNo: '',
  citiesRoute: '',
  recompleteData: null,
  recomplete: false,
  declarationCodes: [],
  redirected: false,
  signature: '',
  language: '',
  arrivalDateReuse: false,
  travellingFromDateReuse: false,
  departureDateReuse: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SIGNATURE:
      return produce(state, nextState =>
        assign(nextState, {
          signature: action.signature,
        }),
      );
    case SET_FIRST_NAME:
      return produce(state, nextState =>
        assign(nextState, {
          firstName: action.firstName,
        }),
      );
    case SET_USER_TOKEN:
      return produce(state, nextState =>
        assign(nextState, {
          userToken: action.userToken,
        }),
      );
    case SET_REDIRECTED:
      return produce(state, nextState =>
        assign(nextState, {
          redirected: action.redirected,
        }),
      );
    case SET_SURNAME:
      return produce(state, nextState =>
        assign(nextState, {
          surname: action.surname,
        }),
      );
    case SET_CNP:
      return produce(state, nextState =>
        assign(nextState, {
          cnp: action.cnp,
        }),
      );
    case SET_DOCUMENT_TYPE:
      return produce(state, nextState =>
        assign(nextState, {
          documentType: action.documentType,
        }),
      );
    case SET_DOCUMENT_SERIES:
      return produce(state, nextState =>
        assign(nextState, {
          documentSeries: action.documentSeries,
        }),
      );
    case SET_DOCUMENT_NUMBER:
      return produce(state, nextState =>
        assign(nextState, {
          documentNumber: action.documentNumber,
        }),
      );
    case SET_TRAVELLING_COUNTRY:
      return produce(state, nextState =>
        assign(nextState, {
          travellingFromCountry: action.travellingCountry,
        }),
      );
    case SET_TRAVELLING_CITY:
      return produce(state, nextState =>
        assign(nextState, {
          travellingFromCity: action.travellingFromCity,
        }),
      );
    case SET_TRAVELLING_DATE:
      return produce(state, nextState =>
        assign(nextState, {
          travellingFromDate: action.travellingDate,
        }),
      );
    case SET_ITINERARY_COUNTRIES:
      return produce(state, nextState =>
        assign(nextState, {
          itineraryCountries: action.itineraryCountries,
        }),
      );
    case SET_CITY:
      return produce(state, nextState =>
        assign(nextState, {
          city: action.city,
        }),
      );
    case SET_COUNTY:
      return produce(state, nextState =>
        assign(nextState, {
          county: action.county,
        }),
      );
    case SET_ARRIVAL:
      return produce(state, nextState =>
        assign(nextState, {
          arrivalDate: action.arrivalDate,
        }),
      );
    case SET_DEPARTURE:
      return produce(state, nextState =>
        assign(nextState, {
          departureDate: action.departureDate,
        }),
      );
    case SET_ADDRESS:
      return produce(state, nextState =>
        assign(nextState, {
          address: action.address,
        }),
      );
    case SET_EMAIL:
      return produce(state, nextState =>
        assign(nextState, {
          email: action.email,
        }),
      );
    case SET_QUESTION1:
      return produce(state, nextState =>
        assign(nextState, {
          question1: action.question1,
        }),
      );
    case SET_QUESTION2:
      return produce(state, nextState =>
        assign(nextState, {
          question2: action.question2,
        }),
      );
    case SET_QUESTION3:
      return produce(state, nextState =>
        assign(nextState, {
          question3: action.question3,
        }),
      );
    case SET_FEVER:
      return produce(state, nextState =>
        assign(nextState, {
          fever: action.fever,
        }),
      );
    case SET_SWALLOW:
      return produce(state, nextState =>
        assign(nextState, {
          swallow: action.swallow,
        }),
      );
    case SET_BREATHING:
      return produce(state, nextState =>
        assign(nextState, {
          breathing: action.breathing,
        }),
      );
    case SET_COUGH:
      return produce(state, nextState =>
        assign(nextState, {
          cough: action.cough,
        }),
      );
    case SET_VECHICLE_TYPE:
      return produce(state, nextState =>
        assign(nextState, {
          vechicleType: action.vechicleType,
        }),
      );
    case SET_REGISTRATION_NO:
      return produce(state, nextState =>
        assign(nextState, {
          registrationNo: action.registrationNo,
        }),
      );
    case SET_CITIES_ROUTE:
      return produce(state, nextState =>
        assign(nextState, {
          citiesRoute: action.citiesRoute,
        }),
      );
    case SET_PHONE_NUMBER:
      return produce(state, nextState =>
        assign(nextState, {
          phoneNumber: action.phoneNumber,
        }),
      );
    case SET_DECLARATION_CODE:
      return produce(state, nextState =>
        assign(nextState, {
          declarationCodes: action.declarationCodes,
        }),
      );
    case SET_RECOMPLETE:
      return produce(state, nextState => {
        assign(nextState, {
          recomplete: action.recomplete,
        });
      });
    case SET_LANGUAGE:
      return produce(state, nextState => {
        assign(nextState, {
          language: action.language,
        });
      });
    case SET_TRAVELLING_FROM_DATE_REUSE:
      return produce(state, nextState => {
        assign(nextState, {
          travellingFromDateReuse: action.travellingFromDateReuse,
        });
      });
    case SET_ARRIVAL_DATE_REUSE:
      return produce(state, nextState => {
        assign(nextState, {
          arrivalDateReuse: action.arrivalDateReuse,
        });
      });
    case SET_DEPARTURE_DATE_REUSE:
      return produce(state, nextState => {
        assign(nextState, {
          departureDateReuse: action.departureDateReuse,
        });
      });
    case SET_RECOMPLETE_DATA:
      return produce(state, nextState => {
        const {
          travellingFromCountry,
          travellingFromCity,
          travellingFromDate,
          itineraryCountries,
          city,
          county,
          arrivalDate,
          departureDate,
          address,
          vechicleType,
          registrationNo,
        } = state;
        assign(nextState, {
          recompleteData: {
            travellingFromCountry: travellingFromCountry,
            travellingFromCity: travellingFromCity,
            travellingFromDate: travellingFromDate,
            itineraryCountries: itineraryCountries,
            city: city,
            county: county,
            arrivalDate: arrivalDate,
            departureDate: departureDate,
            address: address,
            vechicleType: vechicleType,
            registrationNo: registrationNo,
          },
        });
      });

    case RESET_STATE:
      return produce(state, nextState => {
        assign(nextState, {
          firstName: '',
          surname: '',
          cnp: '',
          documentType: '',
          documentSeries: '',
          documentNumber: '',
          travellingFromCountry: '',
          travellingFromCity: '',
          travellingFromDate: '',
          itineraryCountries: [],
          city: '',
          county: '',
          arrivalDate: '',
          departureDate: '',
          address: '',
          email: '',
          question1: '',
          question2: '',
          question3: '',
          fever: false,
          swallow: false,
          breathing: false,
          cough: false,
          vechicleType: '',
          registrationNo: '',
          citiesRoute: '',
          signature: '',
        });
      });
    default:
      return state;
  }
};
