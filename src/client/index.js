import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'mobx-react';

import CoinList from '../client/models'

import App from '../shared/App';

/**
 * Renders a react component into the #react-root div container.
 * Since react 16, the `hydrate` method is used instead of `render` when dealing
 * with server side rendering.
 *
 * @param Component React component that should be rendered
 */
const render = (Component) => {
    hydrate(
        <Provider store={CoinList(window.__PRELOADED_STATE__)}>
            <Component />
        </Provider>,
        document.getElementById('react-root')
    );
};

render(App);

/**
 * This script provides hot module reloading in development mode.
 */
if(module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept('../shared/App', () => {
        const NextApp = require('../shared/App').default;
        render(NextApp);
    });
}
