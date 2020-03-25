import produce from 'immer';
import {assign} from 'lodash-es';
import {SET_NAME} from './actionTypes';

const INITIAL_STATE = {
  name: 'Test Name',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NAME:
      return produce(state, nextState =>
        assign(nextState, {
          name: action.name,
        }),
      );

    default:
      return state;
  }
};
