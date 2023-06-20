import { configureStore } from '@reduxjs/toolkit';
import { necessaryInfo } from './NecessaryInfo';
import { utility } from './Utility';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};
const rootReducer = combineReducers({
    necessaryInfo,
    utility
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


