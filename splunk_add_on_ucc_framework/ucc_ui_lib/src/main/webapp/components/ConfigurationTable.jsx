import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';

import ToastMessages from '@splunk/react-toast-notifications/ToastMessages';

import { TableContextProvider } from '../context/TableContext';
import TableWrapper from './table/TableWrapper';
import EntityModal from './EntityModal';
import { MODE_CREATE } from '../constants/modes';

// NOTE: if bundle script is put some dir instead of js/build, this function will broken.
export function getBuildDirPath() {
    const scripts = document.getElementsByTagName('script');
    const scriptsCount = scripts.length;
    for (let i = 0; i < scriptsCount; i+=1) {
        const s = scripts[i];
        if(s.src && s.src.match(/js\/build/)) {
            const lastSlashIndex = s.src.lastIndexOf('/');
            return s.src.slice(0, lastSlashIndex);
        }
    }
    return '';
}

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
function ConfigurationTable({ serviceName, serviceTitle }) {
    const [open, setOpen] = useState(false);
    const serviceLabel = `Add ${serviceTitle}`;

    const handleRequestOpen = () => {
        setOpen(true);
    };

    const handleRequestClose = () => {
        setOpen(false);
    };
    const generateModalDialog = () => {
        if (open) {
            return (
                <EntityModal
                    page="configuration"
                    open={open}
                    handleRequestClose={handleRequestClose}
                    handleSaveData={() => {}}
                    serviceName={serviceName}
                    mode={MODE_CREATE}
                    formLabel={serviceLabel}
                />
            );
        }
        return null;
    };
    return (
        <>
            <TableContextProvider value={null}>
                <TableWrapper
                    page="configuration"
                    serviceName={serviceName}
                    handleRequestModalOpen={() => handleRequestOpen()}
                />
                <ToastMessages />
                {generateModalDialog()}
            </TableContextProvider>
        </>
    );
}

ConfigurationTable.propTypes = {
    serviceName: PropTypes.string.isRequired,
    serviceTitle: PropTypes.string.isRequired,
};

export default memo(ConfigurationTable);
