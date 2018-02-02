import constants from './constants';
import {mockFetchTradeApi, mockUpdateTradeApi} from '../../mockApi/mockApi';

function mockRequest(url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(url(data));
    }, 50);
  });
}

export function fetchTradeList(offset = 0, size = 20) {
  const data = {
    offset,
    size,
  };
  return dispatch => {
    dispatch({
      type: constants.FETCH_TRADE_LIST
    });
    mockRequest(mockFetchTradeApi, data, 'GET')
      .then(res => {
        dispatch({
          type: constants.FETCH_TRADE_LIST_SUCCESS,
          payload: res
        });
      }, () => {
        dispatch({
          type: constants.FETCH_TRADE_LIST_FAIL
        });
      });
  };
}

export function addNewTrade(companyId, quantity = 0) {
  const data = {
    companyId,
    quantity,
  };
  return dispatch => {
    dispatch({
      type: constants.ADD_NEW_TRADE
    });
    mockRequest(mockUpdateTradeApi, data, 'POST')
      .then(res => {
        dispatch({
          type: constants.ADD_NEW_TRADE_SUCCESS,
          payload: res
        });
      }, () => {
        dispatch({
          type: constants.ADD_NEW_TRADE_FAIL
        });
      });
  };
}
