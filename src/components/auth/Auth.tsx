/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense, lazy, useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { StoreDispatcher } from '../..';
import { DI, DIProps } from '../../Core';
import Confirmation from './Confirmation';
import ForgetPassword from './Forget';
import ResetPassword from './NewPassword';
import SignUp from './Signup';

const Login = lazy(() => import('./Login'));

function Auth(_props: DIProps): JSX.Element {
    const dispacher = useContext(StoreDispatcher);
    useEffect(() => {
        dispacher({
            type: 'logout',
            state: {},
        });
        _props.di.globalState.removeLocalStorage('auth_token');
    }, []);
    return (
        <Routes>
            <Route
                path="login"
                element={
                    <Suspense fallback={<></>}>
                        <Login />
                    </Suspense>
                }
            />
            <Route
                path="signup"
                element={
                    <Suspense fallback={<></>}>
                        <SignUp />
                    </Suspense>
                }
            />
            <Route
                path="forgot-password"
                element={
                    <Suspense fallback={<></>}>
                        <ForgetPassword />
                    </Suspense>
                }
            />
            <Route
                path="reset"
                element={
                    <Suspense fallback={<></>}>
                        <ResetPassword />
                    </Suspense>
                }
            />
            <Route
                path="confirmation"
                element={
                    <Suspense fallback={<></>}>
                        <Confirmation />
                    </Suspense>
                }
            />
            <Route path="*" element={<Navigate to={"/auth/login"} />} />
        </Routes>
    );
}

export default DI(Auth);
