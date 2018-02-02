import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import TradeBoard from './containers/tradeBoard/index';
import {Provider} from 'react-redux';
import store from './containers/tradeBoard/store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <TradeBoard/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
