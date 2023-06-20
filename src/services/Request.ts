/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { environment } from '../environments/environment';
import { globalState } from './globalstate';
import { ObjI as ObjectI } from '../Core/@types';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { DIredux } from '../Core';

const message = `Sorry, the request was unsuccessful. Please come back later.`;

type ReduxI = ThunkDispatch<any, unknown, Action<string>>;

function getAdditionalParams(StateProps: any) {
    const marketplace =
        globalState.get(StateProps)('target_marketplace') || 'all';
    const params: any = {
        marketplace: marketplace,
        shop_id: globalState.get(StateProps)('target_shop_id')
    };
    if (globalState.get(StateProps)('target_warehouse_id')) {
        params['warehouse_id'] = globalState.get(StateProps)('target_warehouse_id');
    }

    return {
        target_marketplace: btoa(JSON.stringify(params))
    };
}

function prepareheaders(
    StateProps: DIredux
): {
    Authorization: string;
    appTag: string;
    appCode: string;
    "Ced-Source-Id": string,
    "Ced-Source-Name": string,
    "Ced-Target-Id": string,
    "Ced-Target-Name": string,
} {
    return {
        Authorization: 'Bearer ' + globalState.getBearerToken(StateProps)(),
        appCode: btoa(JSON.stringify(environment.appCode)),
        appTag: environment.appTag,
        "Ced-Source-Id": StateProps.current?.source?._id ?? globalState.get(StateProps)('source_id') ?? '',
        "Ced-Source-Name": StateProps.current?.source?.marketplace ?? '',
        "Ced-Target-Id": StateProps.current?.target?._id ?? globalState.get(StateProps)('target_id') ?? '',
        "Ced-Target-Name": StateProps.current?.target?.marketplace ?? '',
    };
}

const GET = (dispatch: ReduxI, StateProps: DIredux) => (
    endpoint: string,
    params?: any,
    fullUrl = false
): Promise<any> => {
    let paramsString = '';
    if (!params) params = getAdditionalParams(StateProps);
    else params = { ...getAdditionalParams(StateProps), ...params };

    if (endpoint.search('\\?') >= 0) paramsString += '&';
    else paramsString += '?';

    for (let i = 0; i < Object.keys(params).length; i++) {
        const end = i < Object.keys(params).length - 1 ? '&' : '';
        paramsString +=
            Object.keys(params)[i] +
            '=' +
            encodeURIComponent(params[Object.keys(params)[i]]) +
            end;
    }

    let url = environment.API_ENDPOINT + endpoint;
    if (fullUrl) {
        url = endpoint;
    }
    return fetch(url + paramsString, {
        method: 'GET',
        headers: prepareheaders(StateProps),
    })
        .then((res) => res.json())
        .then((e) => {
            validateResponse(e, dispatch);
            return responseModifier(e);
        })
        .catch((e) => {
            return { success: false, message: message, code: e };
        });
};

const POST = (dispatch: ReduxI, StateProps: DIredux) => (
    endpoint: string,
    data?: ObjectI,
    fullUrl = false
): Promise<any> => {
    let url = environment.API_ENDPOINT + endpoint;
    if (fullUrl) {
        url = endpoint;
    }
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...prepareheaders(StateProps),
        },
        body: JSON.stringify({ ...getAdditionalParams(StateProps), ...data }),
    })
        .then((res) => res.json())
        .then((e) => {
            validateResponse(e, dispatch);
            return responseModifier(e);
        })
        .catch((e) => {
            return { success: false, message: message, code: e };
        });
};

const DELETE = (dispatch: ReduxI, StateProps: DIredux) => (
    endpoint: string,
    data?: ObjectI,
    fullUrl = false
): Promise<any> => {
    let url = environment.API_ENDPOINT + endpoint;
    if (fullUrl) {
        url = endpoint;
    }
    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...prepareheaders(StateProps),
        },
        body: JSON.stringify({ ...getAdditionalParams(StateProps), ...data }),
    })
        .then((res) => res.json())
        .then((e) => {
            validateResponse(e, dispatch);
            return responseModifier(e);
        })
        .catch((e) => {
            return { success: false, message: message, code: e };
        });
};

const PUT = (dispatch: ReduxI, StateProps: DIredux) => (
    endpoint: string,
    data?: ObjectI,
    fullUrl = false
): Promise<any> => {
    let url = environment.API_ENDPOINT + endpoint;
    if (fullUrl) {
        url = endpoint;
    }
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...prepareheaders(StateProps),
        },
        body: JSON.stringify({ ...getAdditionalParams(StateProps), ...data }),
    })
        .then((res) => res.json())
        .then((e) => {
            validateResponse(e, dispatch);
            return responseModifier(e);
        })
        .catch((e) => {
            return { success: false, message: message, code: e };
        });
};

const validateResponse = (e: any, dispatch: ReduxI) => {
    if (
        e.code === 'token_expired' ||
        e.code === 'invalid_token' ||
        e.code === 'future_token' ||
        e.code === 'token_decode_error'
    ) {
        dispatch({
            type: 'LOGIN_STATUS',
            state: {
                data: e,
                status: 'LOGOUT',
            },
        });
    }
};

function responseModifier(res: ObjectI): ObjectI {
    if (!res['success'] || res['errorFlag'] !== undefined) {
        res['success'] = false;
        if (!res['message'] && res['msg']) {
            res['message'] = res['msg'];
        }
    }
    return res;
}

const requests = {
    GET: GET,
    POST: POST,
    DELETE: DELETE,
    PUT: PUT,
};

export default requests;

export { GET, POST, DELETE, PUT };
