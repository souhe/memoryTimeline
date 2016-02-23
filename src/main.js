import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory, match } from 'react-router';
import { Provider } from 'react-redux';
import { trigger } from 'redial';
import configureStore from './store/configureStore';
import getRoutes from './routes';

import App from './components/App';

const store = configureStore(window.__data);
const { dispatch } = store;
const routes = getRoutes(store);

browserHistory.listen(location => {
    match({routes, location}, (error, redirectLocation, renderProps) => {
        const {components} = renderProps;
        
        const locals = {
            path: renderProps.location.pathname,
            query: renderProps.location.query,
            params: renderProps.params,
            dispatch    
        };
        
        if (window.__data) {
            delete window.__data;
        } else {
            trigger('fetch', components, locals);
        }

        trigger('defer', components, locals);
    }); 
});

render( 
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, 
    document.getElementById('content')
);
