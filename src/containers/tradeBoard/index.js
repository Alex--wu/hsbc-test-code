import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTradeList, addNewTrade} from './actions';
import {
  AddNewTradeFormStandard,
} from '../../components/addNewTradeForm/AddNewTradeForm';
import store from './store';

class TradeBoard extends Component {
  componentDidMount() {
    if (this.props.didInvalidate && !this.props.isFetching) {
      store.dispatch(fetchTradeList());
    }
  }

  componentDidUpdate() {
    if (this.props.didInvalidate && !this.props.isFetching) {
      store.dispatch(fetchTradeList());
    }
  }

  onClickSave = (form) => {
    store.dispatch(addNewTrade(form.company, form.quantity));
  };

  render() {
    const {
      isFetching, tradeList
    } = this.props;
    return (
      <div className="ui-inner">
        <div className={`ui segment ${isFetching ? 'loading' : ''}`}>
          <h2 className="ui header">Today's Trades</h2>
          <table className="ui celled unstackable table">
            <thead>
            <tr>
              <th>Company</th>
              <th>Total</th>
            </tr>
            </thead>
            <tbody>
            {tradeList.map((tradeItem, index) =>
              <tr key={index}>
                <td>{tradeItem.company.label}</td>
                <td className={tradeItem.quantity < 0 ? 'negative' : 'positive'}>{tradeItem.quantity}</td>
              </tr>
            )}
            </tbody>
          </table>
          <h2 className="ui header">Add New Trade</h2>
          <AddNewTradeFormStandard onSubmit={this.onClickSave}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.tradeBoard.isFetching,
  didInvalidate: state.tradeBoard.didInvalidate,
  tradeList: state.tradeBoard.tradeList,
});
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TradeBoard);
