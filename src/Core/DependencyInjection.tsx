/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect } from 'react';

import { StoreDispatcher } from '../index';

import { connect } from 'react-redux';
import { Action } from 'redux';

import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
    ModalI,
    error,
    hideNotification,
    modal,
    showNotification,
    success,
    warn,
} from '../Actions';
import * as _env from '../environments/environment';
import * as _Services from '../services';
import { ObjI, environmentI } from './@types';
import ErrorBoundary from './ErrorBoundaries';

import { ThunkDispatch } from 'redux-thunk';
// import { showToast } from '../App';

type ObjectI = {
    [key: string]: any;
};

export interface globalStateI {
    set: (key: string, value: string, prefix?: boolean) => void;
    get: (key: string, prefix?: boolean) => string | null;
    removeLocalStorage: (key: string, path?: string) => unknown;
    getBearerToken: () => string | null;
}

interface diI {
    environment: environmentI;
    GET: (endpoint: string, params?: ObjI, fullUrl?: boolean) => Promise<any>;
    POST: (endpoint: string, data?: any, fullUrl?: boolean) => Promise<any>;
    DELETE: (endpoint: string, data?: ObjI, fullUrl?: boolean) => Promise<any>;
    PUT: (endpoint: string, data?: ObjI, fullUrl?: boolean) => Promise<any>;
    globalState: globalStateI;
    user_id: string;
}

interface PreFunI {
    showNotification: (message: string, error?: boolean) => void;
    success: (message: string) => void;
    error: (message: string) => void;
    warn: (message: string) => void;
    hideNotification: (id: string | number) => void;
    showToast: (type: "success" | "error" | "warn", message: string) => void;
    modal: (open: boolean, data?: ModalI | null) => void;
}

/**
 * THIS SHOULD be used with DI\, it will help you in using the Dependency without any problem
 */
interface DIProps extends PreFunI {
    // match: match<{ [name: string]: string }>;
    di: diI;
    history: (to: any, options?: { replace?: boolean, state?: any }) => void;
    location: any;
    match: any;
    target_marketplace: string;
    source_marketplace: string;
    redux: DIredux
}

export interface DIredux {
    basic: {
        name: string;
        shop_url: string;
        stepActive: string;
        [name: string]: any;
    };
    current: {
        target: {
            shop_id: string;
            name?: string;
            [name: string]: any;
        },
        source: {
            shop_id: string;
            name?: string;
            [name: string]: any;
        }
    };
    /**
     * Check if the api request is completed
     */
    loaded: boolean;
    account: any;
    user_id: string;
    connector: {
        [code: string]: {
            can_import: 1 | 0;
            code: string;
            description: string;
            image: string;
            installed: Array<ObjectI> | number;
            is_source: boolean;
            is_target: boolean;
            source_model: string;
            title: string;
            type: 'real';
            [extra: string]: any;
        };
    };
    profile_data: Array<{
        name: string;
        marketplaces: {
            [name: string]: Array<string> | any;
        };
        query: string;
        [name: string]: any;
    }>;
    LOGIN_STATUS: {
        status: 'LOGIN' | 'LOGOUT';
        [name: string]: any;
    };
    showToast: {
        message: string;
        error?: boolean;
        warn?: boolean;
    }[];
    MODAL: {
        open: boolean,
        data: ModalI
    };
    fetch_order_id: {
        data: any
    }
}

interface OptionalParams {
    /**
     * Redux Action, you can send your own Action here\
     * E.g YOUR Func = () => (dispacher) => {/ YOUR LOGIC /}
     */
    func?: ObjectI;
    /**
     * Justify if you want to Inject the Redux State or Not\
     * DEFAULT if true
     */
    stateNeeded?: boolean;
}

/**
 * This Will Inject the Nessasary props which will help in the Compoenent\
 * E.G : Notify, Redux ,Router, Services etc\
 * You can access them using props, props.di or props.redux
 */
const DependencyInjection = function (
    Component: React.FC | any | JSX.Element,
    { func = {}, stateNeeded = true }: OptionalParams = {}
): React.FC<ObjectI> {
    // let match = useRouteMatch();

    const ComponentWrapper = function (props: ObjectI): JSX.Element {
        const navigate = useNavigate();
        // let locationNew: any;
        const match = useParams();
        const location = useLocation();
        const dispacher = useContext(StoreDispatcher);
        let params = {
            target_marketplace:
                localStorage.getItem(match?.uId + '_target_marketplace') || 'all',
        };
        useEffect(() => {
            params = {
                target_marketplace:
                    localStorage.getItem(match.uId + '_target_marketplace') || 'all',
            };
        }, [match?.uId]);

        /**
         * This will Inject Services and Environment Variable\
         * Props.di.GET or Props.di.POST
         */
        const Dispatch: ThunkDispatch<any, unknown, Action<string>> = dispacher;
        const preRedux = { ...props.redux, user_id: match.uId ?? 1 };
        const di: diI = {
            ..._Services,
            globalState: {
                set: _Services.globalState.set(preRedux),
                get: _Services.globalState.get(preRedux),
                removeLocalStorage:
                    _Services.globalState.removeLocalStorage(preRedux),
                getBearerToken: _Services.globalState.getBearerToken(preRedux),
            },
            user_id: match.uId ?? '1',
            GET: _Services.GET(Dispatch, preRedux),
            POST: _Services.POST(Dispatch, preRedux),
            DELETE: _Services.DELETE(Dispatch, preRedux),
            PUT: _Services.PUT(Dispatch, preRedux),
            ..._env,
        };

        return (
            <React.Fragment>
                <ErrorBoundary history={navigate}>
                    <Component
                        {...props}
                        history={navigate}
                        location={location}
                        match={match}
                        di={di}
                    // {...params}
                    />
                </ErrorBoundary>
            </React.Fragment>
        );
    };

    /**
     * Injecting the Redux Stated\
     * @param state = Redux State, you can find all the state in Reduces folder and used them accordingly
     */
    const mappedStateToProps = (state: any) => {
        return { redux: { ...state.necessaryInfo, ...state.utility } };
    };

    /**
     * Pre define Function for Redux
     */
    const preFunInject = {
        showNotification,
        success,
        error,
        warn,
        hideNotification,
        // showToast,
        modal,
    };

    return connect(!stateNeeded ? null : mappedStateToProps, {
        ...func,
        ...preFunInject,
    })(ComponentWrapper);
};

export default DependencyInjection;

export { DependencyInjection as DI };
export type { DIProps, PreFunI, diI };

