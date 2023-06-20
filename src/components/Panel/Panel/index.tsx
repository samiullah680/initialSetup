import React, { useContext } from 'react';

import { Card, Skeleton } from '@cedcommerce/ounce-ui';
import { StoreDispatcher } from '../../..';
import { DIProps, extractUSername, parseJwt } from '../../../Core';
import { PropsI } from '../../../Core/@types';
import { PanelProps } from '../Panel';

export { ShowLogOutScreen } from './LogoutScreen';

// default if env don't have one
const env_API_KEY = '91f86057fadf7597521eda72f7aefd75';

// used to add hour in current time, used in getClientExpTime()
const env_exp_hours = 3;

// used for ROUTING
const env_user_id = '';

export function checkForAutoLogin(props: PanelProps) {
    const params: any = new URLSearchParams(props.location.search);
    if (params.get('user_token') !== null) {
        return true;
    }
    return false;
}


// if the Token is present save it to localstorage and open the app
export function redirectToApp(props: PanelProps) {
    const params: any = new URLSearchParams(props.location.search);
    const token = params.get('user_token');
    const shop = params.get('shop');
    const host = params.get('shopify_host');
    const username = params.get('username') ?? 'User';
    const onboarding = params.get('onboarding');
    props.di.globalState.set(`user_authenticated`, `true`);
    props.di.globalState.set(`auth_token`, token);
    props.di.globalState.set(`username`, extractUSername(username));
    props.di.globalState.set(`shop`, shop);
    props.di.globalState.set(`host`, host);

    if (onboarding) {
        props.di.globalState.set(`onboarding`, 'completed');
    } else {
        props.di.globalState.removeLocalStorage(`onboarding`);
    }

    props.loginStatus();
    props.history('./' + props.match['*']);
}


export function RenderSkeleton(props: PropsI) {
    return (
        <Card>
            <Skeleton line={5}></Skeleton>
        </Card>
    );
}
