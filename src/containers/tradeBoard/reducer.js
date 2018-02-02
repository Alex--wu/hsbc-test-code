import constants from './constants';

const defaultOverviewState = {
  isFetching: false,
  didInvalidate: true,
  tradeList: []
};

export function addNewTradeReducer(state = defaultOverviewState, action) {
  const payload = action.payload;
  switch (action.type) {
    case constants.FETCH_TRADE_LIST:
    case constants.ADD_NEW_TRADE:
      return {
        ...state,
        isFetching: true
      };
    case constants.FETCH_TRADE_LIST_FAIL:
    case constants.ADD_NEW_TRADE_FAIL:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false
      };
    case constants.FETCH_TRADE_LIST_SUCCESS:
      return {
        ...state,
        tradeList: payload,
        isFetching: false,
        didInvalidate: false
      };
    case constants.ADD_NEW_TRADE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: true
      };
    default:
      return state;
  }
}
