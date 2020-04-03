import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
//import companyReducer from './companyReducer';
import userReducer from './userReducer';
import oneToOneReducer from './user/oneToOneReducer';
// import stopReducer from './stopReducer';
// import dayReducer from './dayReducer';
// import eventReducer from './eventReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  user: userReducer,
  oneToOne: oneToOneReducer,
});
