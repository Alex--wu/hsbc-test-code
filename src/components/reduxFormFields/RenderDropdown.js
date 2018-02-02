import React from 'react';
import {Dropdown} from 'semantic-ui-react';

class renderDropdown extends React.Component {
  render() {
    const {input: {onChange}, options, search, placeholder} = this.props;
    return <Dropdown placeholder={placeholder} search={search} selection options={options}
                     onChange={(event, data) => onChange(data.value)}/>;
  }
}

export default renderDropdown;
