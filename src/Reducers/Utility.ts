/* eslint-disable @typescript-eslint/no-explicit-any */
interface UtilityActionI {
    type: 'showToast' | 'hideToast' | 'LOGIN_STATUS' | 'logout' | 'MODAL';
    state: any;
}

interface StateI {
    showToast: ObjectI;
    showID: number;
    LOGIN_STATUS?: {
        [name: string]: any;
        state: 'LOGIN' | 'LOGOUT';
    };
    MODAL?: any
}

interface ObjectI {
    [name: string]: any;
}

export const utility = (
    state: StateI = { showToast: {}, showID: 1 },
    action: UtilityActionI
): StateI => {
    switch (action.type) {
        case 'showToast':
            state['showToast'][state['showID']] = action.state;
            state['showID']++;
            return { ...state };
        case 'hideToast':
            delete state['showToast'][action.state.id];
            return { ...state };
        case 'logout': return {
            showToast: {},
            showID: 1
        };
        case 'LOGIN_STATUS':
            return {
                ...state,
                LOGIN_STATUS: {
                    ...action.state,
                },
            };
        case 'MODAL':
            return {
                ...state,
                MODAL: {
                    ...action.state,
                },
            };
        default:
            return state;
    }
};
