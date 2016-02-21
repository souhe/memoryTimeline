import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory, match } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';

import App from './components/App';

const store = configureStore(window.__data);
const { dispatch } = store;

browserHistory.listen(location => {
    match({routes, location}, (error, redirectLocation, renderProps) => {
        const {components} = renderProps;
        
        const locals = {
            path: renderProps.location.pathname,
            query: renderProps.location.query,
            params: renderProps.params,
            dispatch    
        };
        
        //TODO: Don't fetch data for initial route     
        trigger('fetch', components, locals);
        trigger('defer', components, locals);
    }); 
});

render( 
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, 
    document.getElementById('content')
);
