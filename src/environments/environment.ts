import { environmentI } from '../Core/@types';

export const environment: environmentI = {
    production: process.env.REACT_APP_PROD ? true : false,
    API_ENDPOINT: process.env.REACT_APP_END_POINT as string,
    AppName: process.env.REACT_APP_NAME as string,
    appCode: {
        wix: process.env.REACT_APP_WIX as string,
        bwp: process.env.REACT_APP_BWP as string,
    },
    marketplace: process.env.REACT_APP_MP_NAME as string,
    appTag: 'WiX_BwP',
    Bearer: process.env.REACT_APP_BEARER as string,
    isLive: undefined,
};
