/* eslint-disable @typescript-eslint/no-explicit-any */
// import  requests from "../Services/Request";
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

type ReduxRI = ThunkAction<void, any, unknown, Action<string>>;

export * from './NecessaryFun';
export * from './Utility';

export const themeChange = (type: string): ReduxRI => dispatch => {
    localStorage.setItem('cedTheme', type);
    dispatch({
        type: 'theme',
        state: {
            'type': type,
            'newDesign': type !== 'old',
        }
    });
};