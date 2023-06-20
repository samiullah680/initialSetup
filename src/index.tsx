import "@cedcommerce/ounce-ui/dist/index.css";
import React, { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";

import { store } from './Reducers';

export const StoreDispatcher = React.createContext(store.dispatch);

const App = lazy(() => import("./App"));
const persistor = persistStore(store);
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <BrowserRouter basename={process.env.route ?? ""}>
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>
          {/* <StoreDispatcher.Provider value={store.dispatch}> */}
          <Suspense fallback={<>Loading...</>}>
            <App />
          </Suspense>
          {/* </StoreDispatcher.Provider> */}
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </StrictMode>
);

