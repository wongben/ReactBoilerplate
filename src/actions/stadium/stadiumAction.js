import { createAction } from 'redux-actions';
import {
  FETCH_DATA
} from '../constants/actionTypes';

export const fetchData = createAction(FETCH_DATA);
export const showFailSpinner = createAction(FETCH_DATA);
