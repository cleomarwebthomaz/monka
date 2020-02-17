import { combineReducers } from 'redux';

import auth from './auth';
import cart from './cart';
import setting from './setting';
import breadcrumb from './breadcrumb';

export default combineReducers({
  auth,
  cart,
  setting,
  breadcrumb
});