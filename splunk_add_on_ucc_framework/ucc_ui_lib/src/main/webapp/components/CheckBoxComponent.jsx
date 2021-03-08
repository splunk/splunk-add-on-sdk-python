import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from '@splunk/react-ui/Switch';

class CheckBoxComponent extends Component {
    handleChange = () => {
        this.props.handleChange(this.props.field, 1 - this.props.value);
    };

    render() {
        return (
            <Switch
                key={this.props.field}
                value={this.props.field}
                onClick={this.handleChange}
                disabled={this.props.disabled}
                selected={!!this.props.value}
                appearance="checkbox"
             />
        );
    }
}

CheckBoxComponent.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    field: PropTypes.string,
    disabled: PropTypes.bool
};

export default CheckBoxComponent;
