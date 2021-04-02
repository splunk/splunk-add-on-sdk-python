import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { _ } from '@splunk/ui-utils/i18n';
import Button from '@splunk/react-ui/Button';
import styled from 'styled-components';
import WaitSpinner from '@splunk/react-ui/WaitSpinner';

import BaseFormView from './BaseFormView';
import { axiosCallWrapper } from '../util/axiosCallWrapper';
import { MODE_CONFIG } from '../constants/modes';
import { WaitSpinnerWrapper } from './table/CustomTableStyle';

const ButtonWrapper = styled.div`
    margin-left: 270px !important;
    width: 150px;

    .save_btn {
        width: 100%;
    }
`;

function ConfigurationFormView({ serviceName }) {
    const form = useRef();
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentServiceState, setCurrentServiceState] = useState({});

    useEffect(() => {
        axiosCallWrapper({
            serviceName: `settings/${serviceName}`,
            handleError: true,
            callbackOnError: (err) => {
                // eslint-disable-next-line no-param-reassign
                err.uccErrorCode = 'ERR0004';
                setError(err);
            },
        }).then((response) => {
            setCurrentServiceState(response.data.entry[0].content);
        });
    }, [serviceName]);

    const handleSubmit = () => {
        form.current.handleSubmit();
    };

    const handleFormSubmit = (set) => {
        setIsSubmitting(set);
    };

    if (error?.uccErrorCode) {
        throw error;
    }

    return Object.keys(currentServiceState).length ? (
        <>
            <BaseFormView
                ref={form}
                page="configuration"
                stanzaName={serviceName}
                serviceName="settings"
                mode={MODE_CONFIG}
                currentServiceState={currentServiceState}
                handleFormSubmit={handleFormSubmit}
            />
            <ButtonWrapper>
                <Button
                    className="save_btn"
                    appearance="primary"
                    label={isSubmitting ? <WaitSpinner /> : _('Save')}
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                />
            </ButtonWrapper>
        </>
    ) : (
        <WaitSpinnerWrapper />
    );
}

ConfigurationFormView.propTypes = {
    serviceName: PropTypes.string.isRequired,
};

export default ConfigurationFormView;
