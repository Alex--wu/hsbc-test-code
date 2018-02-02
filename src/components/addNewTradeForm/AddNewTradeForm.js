import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import renderDropdown from '../reduxFormFields/RenderDropdown';
import {companies} from './enum';

const notZero = value => value === '0' ? '0 is not valid' : undefined;
const required = value => value ? undefined : 'Required';
const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const renderField = ({input, placeholder, type, meta: {touched, error, warning}}) => (
  <div>
    <input {...input} placeholder={placeholder} type={type}/>
    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
  </div>
);

class AddNewTradeForm extends Component {
  render() {
    const {handleSubmit, pristine, submitting, onSubmit} = this.props;
    return (
      <form className="ui form small" onSubmit={handleSubmit(onSubmit)}>
        <div className="fields">
          <div className='field required'>
            <label>Company</label>
            <Field name="company" component={renderDropdown} options={companies} search required/>
          </div>
          <div className='field required'>
            <label>Quantity</label>
            <Field name="quantity" placeholder='Quantity' component={renderField} type="number"
                   validate={[required, number, notZero]}/>
          </div>
          <div className='field'>
            <label>&nbsp;</label>
            <button className="ui positive small button"
                    type="submit" disabled={pristine || submitting}>Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export const AddNewTradeFormStandard = reduxForm({
  form: 'AddNewTradeFormStandard',
  enableReinitialize: true,
})(AddNewTradeForm);
