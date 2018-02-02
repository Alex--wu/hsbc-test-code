import createStore from '../../createStore';
import {reducer as formReducer} from 'redux-form';
import {addNewTradeReducer} from './reducer';

export default createStore({
  tradeBoard: addNewTradeReducer,
  form: formReducer
});
