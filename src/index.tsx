/* eslint-disable @typescript-eslint/no-non-null-assertion */ // necessary, to avoid warnings
import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import App from './app/App';
import {store} from './modules/store';
import * as serviceWorker from './serviceWorker';

import './utils/localization/i18n';
import './styles/index.scss';

const container = document.querySelector('#root');
const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);

serviceWorker.unregister();
