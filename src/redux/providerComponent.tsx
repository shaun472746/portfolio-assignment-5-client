'use client';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { SessionProvider } from 'next-auth/react';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SessionProvider>{children}</SessionProvider>
            </PersistGate>
        </Provider>
    );
};

export default Providers;
