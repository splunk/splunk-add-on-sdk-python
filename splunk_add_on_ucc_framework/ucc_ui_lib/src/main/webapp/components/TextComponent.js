import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from '@splunk/react-ui/Text';

// NOTE: The resolve will only be executed if the globalConfig exist
export function loadGlobalConfig() {
    // Get the configuraiton json file in sync mode
    return new Promise((resolve, reject) => {
        fetch(`${getBuildDirPath()}/globalConfig.json`).then((res) => {
            return res.json();     
        }).then((json) => {
            // window.__globalConfig = json;
            resolve(json);
        }).catch((err) => {
            reject(err);
        });
    });
}

class TextComponent extends Component {

    handleChange = (e, {value}) => {
        this.props.handleChange(this.props.field, value);
    };

    render() {
        return (
            <Text
                inline
                error={this.props.error}
                placeholder={this.props?.controlOptions?.placeholder}
                className={this.props.field}
                disabled={this.props.disabled}
                value={this.props.value}
                onChange={this.handleChange}
                type={this.props.encrypted ? 'password' : 'text'}
            />
        );
    }
}

TextComponent.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    field: PropTypes.string,
    controlOptions: PropTypes.object,
    encrypted:PropTypes.bool,
    disabled:PropTypes.bool
};

export default TextComponent;
