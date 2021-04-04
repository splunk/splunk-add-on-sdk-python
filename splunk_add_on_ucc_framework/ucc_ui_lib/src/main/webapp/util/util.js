import { TOAST_TYPES } from '@splunk/react-toast-notifications/ToastConstants';
import Toaster, { makeCreateToast } from '@splunk/react-toast-notifications/Toaster';

let appData = null;
let unifiedConfigs = null;

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

export function setMetaInfo(data) {
    appData = data;
}

export function getMetaInfo() {
    return {
        appData,
    };
}

export function isFalse(value) {
    return ['0', 'FALSE', 'F', 'N', 'NO', 'NONE', ''].includes(value.toString().toUpperCase());
}

export function isTrue(value) {
    return ['1', 'TRUE', 'T', 'Y', 'YES'].includes(value.toString().toUpperCase());
}

export function generateEndPointUrl(name) {
    return `${unifiedConfigs.meta.restRoot}_${name}`;
}

export function setUnifiedConfig(unifiedConfig) {
    unifiedConfigs = unifiedConfig;
}

export function getUnifiedConfigs() {
    return unifiedConfigs;
}

const createToast = makeCreateToast(Toaster);
export const generateToast = (message, action = undefined) => {
    createToast({
        type: TOAST_TYPES.ERROR,
        message,
        autoDismiss: true,
        dismissOnActionClick: true,
        showAction: Boolean(action),
        action: action || undefined,
    });
};

export function filterByAllowList(fields, allowList) {
    const allowRegex = new RegExp(allowList);
    return fields.filter((item) => allowRegex.test(item.value));
}

export function filterByDenyList(fields, denyList) {
    const denyRegex = new RegExp(denyList);
    return fields.filter((item) => !denyRegex.test(item.value));
}

export function filterResponse(items, labelField, allowList, denyList) {
    let newItems = items.map((item) => {
        return { label: labelField ? item[labelField] : item.name, value: item.name };
    });

    if (allowList) {
        newItems = filterByAllowList(newItems, allowList);
    }

    if (denyList) {
        newItems = filterByDenyList(newItems, denyList);
    }

    return newItems;
}
