import {
  LOGIN_SUCCES,
  LOGIN_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  auth: false,
  nombre: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUCCES:
      return { ...state, auth: true, nombre: 'Ale' };
    case LOGIN_FAIL:
      return { ...state, auth: false, nombre: 'Incognito' };
    default:
      return state;
  }
}
