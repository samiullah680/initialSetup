/* eslint-disable @typescript-eslint/no-explicit-any */

interface necessaryInfoActionI {
    type:
    | 'syncNecessaryInfo'
    | 'setConnector'
    | 'setBasicInfo'
    | 'user_id'
    | 'logout'
    | 'target_shop'
    | 'source_shop';
    state: any;
}

export const necessaryInfo = (
    state: any = {},
    action: necessaryInfoActionI
): any => {
    switch (action.type) {
        case 'syncNecessaryInfo':
            return {
                ...state,
                ...action.state,
            };
        case 'user_id':
            return {
                ...state,
                ...action.state,
            };
        case 'target_shop':
            return {
                ...state,
                current: {
                    ...state.current,
                    ...action.state
                },
            };
        case 'source_shop':
            return {
                ...state,
                current: {
                    ...state.current,
                    ...action.state
                },
            };
        case 'logout':
            return {};
        case 'setConnector':
            return {
                ...state,
                ...action.state,
            };
        case 'setBasicInfo':
            return {
                ...state,
                ...action.state,
            };
        default:
            return { ...state };
    }
};
