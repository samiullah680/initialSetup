/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { environment } from '../../src/environments/environment';
import { ObjI } from '../Core/@types';
import requests from '../services/Request';
import { extractCurrentAccount, extractCurrentSelected, extractCurrentSourceShop } from './Functions';

type ReduxRI = ThunkAction<void, any, unknown, Action<string>>;

// Action to Re-sync necessary Info
export const syncConnectorInfo =
    (props: any, shop_url?: string | null): ReduxRI => async (dispatch, ownProps: any) => {
        const state = { ...ownProps().necessaryInfo };
        await requests
            .GET(
                dispatch,
                state
            )('connector/get/all')
            .then((e) => {
                if (e.success && e.data) {
                    dispatch({
                        type: 'setConnector',
                        state: {
                            /****** Uncomment if need all the data in one place */
                            // connector: {
                            //     ...Object.values(e.data).filter(
                            //         (code: any) =>
                            //             // code.code === 'mercado_cbt' ||
                            //             code.is_target == 1 ||
                            //             code.is_source == 1
                            //     ),
                            // },
                            account: extractCurrentAccount(e, shop_url),
                            current: extractCurrentSelected(props, e, shop_url),
                            loaded: true,
                        },
                    });
                } else {
                    console.error('No Response from server', e);
                }
                return e;
            });
    };

function validateUsableData(data: any) {
    return Object.keys(data).reduce((_newVal: ObjI, e) => {
        if (data[e]['usable']) _newVal[e] = data[e];
        return _newVal;
    }, {});
}

export const syncNecessaryInfo =
    (showMessage?: any): ReduxRI => async (dispatch, ownProps: any) => {
        const path = [];
        const state = { ...ownProps().necessaryInfo };

        path.push('/App/User/Step');
        await requests
            .POST(dispatch, state)('connector/frontend/getStepCompleted', {
                path: '/App/User/Step',
                target: JSON.parse(JSON.stringify({ marketplace: 'bwp' })),
                source: JSON.parse(JSON.stringify({ marketplace: 'wix' })),
                app_tag: environment.appTag
            })
            .then((e) => {
                if (e.success) {
                    if (showMessage?.connectAmazon && e.connected)
                        showMessage?.onboardingProps.success('Account successfully connected!');
                    else
                        showMessage?.onboardingProps.error('Connection unsuccessful!');

                    dispatch({
                        type: 'setBasicInfo',
                        state: {
                            basic: {
                                stepActive:
                                    e.collections?.wix_bwp?.step_completed ??
                                    e.data ??
                                    0,
                                name: e.name,
                                // shop_url: e.shop_url,
                            },
                        },
                    });
                } else {
                    console.error(
                        'No Response from Server, failed to get active step',
                        e
                    );
                }
                return e;
            });
    };

export const syncProfileInfo =
    (): ReduxRI => async (dispatch, ownProps: any) => {
        const state = { ...ownProps().necessaryInfo };
        requests
            .GET(dispatch, state)('connector/profile/get', { count: 1 })
            .then((e) => {
                if (e.success && e.data) {
                    dispatch({
                        type: 'setConnector',
                        state: {
                            profile_data: Object.values(e.data)
                                // .filter((code: any) => code.code === "mercado_cbt" || code.is_source == 1)
                                // .filter(
                                //     (code: any) =>
                                //         typeof code.installed === 'object' &&
                                //         Object.keys(code.installed).length > 0
                                // )
                                .reduce((profiles: any, data: any) => {
                                    profiles.push({
                                        name: data.name,
                                        product_effected: data.product_effected,
                                        marketplaces: data?.toForm?.targets ? Object.keys(
                                            data?.toForm?.targets
                                        ).reduce((code: any, key: string) => {
                                            code[key] = {
                                                shop_ids: Object.keys(
                                                    data?.toForm?.targets[key]
                                                ),
                                            };
                                            return code;
                                        }, {}) : {},
                                        value: data._id?.$oid,
                                        target_marketplace:
                                            data.target_marketplace,
                                        category_id: data.category_id,
                                        user_id: data.user_id,
                                        query: data.toForm?.query_builder
                                            ?.query_made,
                                        toForm: data.toForm,
                                    });
                                    return profiles;
                                }, []),
                        },
                    });
                } else {
                    console.error('No Response from Connector', e);
                }
                return e;
            });
    };

export const syncServices = (): ReduxRI => async (dispatch, ownProps: any) => {
    const state = { ...ownProps().necessaryInfo };
    requests
        .GET(dispatch, state)('connector/get/services', {
            'filters[type]': 'importer',
        })
        .then((e) => {
            if (e.success && e.data) {
                dispatch({
                    type: 'setConnector',
                    state: {
                        services_importer: validateUsableData(e.data),
                    },
                });
            } else {
                console.error('No Response from Connector', e);
            }
            return e;
        });
    requests
        .GET(dispatch, state)('connector/get/services', {
            'filters[type]': 'uploader',
        })
        .then((e) => {
            if (e.success && e.data) {
                dispatch({
                    type: 'setConnector',
                    state: {
                        //usable
                        services_uploader: validateUsableData(e.data),
                    },
                });
            } else {
                console.error('No Response from Connector', e);
            }
            return e;
        });
};
export const UserContext = React.createContext({});

export const Provider = UserContext.Provider;

export const Consumer = UserContext.Consumer;
