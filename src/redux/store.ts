import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './baseApi';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import navigationReducer from './features/navigationBar/navigationSlice';

const navPersistConfig = {
    key: 'navBar',
    storage,
};

const persistedNavReducer = persistReducer(navPersistConfig, navigationReducer);

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        navBar: persistedNavReducer,
    },

    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
