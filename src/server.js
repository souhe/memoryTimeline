import React from 'react';
import ReactDOM from 'react-dom/server';
import Express from 'express';
import http from 'http';
import path from 'path';
import 'isomorphic-fetch';
import { RouterContext, match } from 'react-router';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import { trigger } from 'redial';
import fs from 'fs';

import configureStore from './store/configureStore';
import getRoutes from './routes';
import Html from './components/Html';

const app = Express();
const server = new http.Server(app);
const config = require('./config');

app.use('/dist', Express.static(path.join(__dirname, '..', 'dist')));

app.get('/api/getEvents', (req, res) => {
    let content = fs.readFile('./dist/data/timeline.json', (error, contents) => {
        res.send(contents);
        });
});

app.use((req, res) => {
    if (__DEVELOPMENT__) {
        webpackIsomorphicTools.refresh();
    }
    
    const history = createMemoryHistory(req.originalUrl);
    const store = configureStore();
    const {dispatch, getState} = store;
    const routes = getRoutes(store)
    
    function hydrateOnClient() {
        res.send('<!doctype html>\n' +
        ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} store={store}/>));
    }
    
    if (__DISABLE_SSR__) {
        hydrateOnClient();
        return;
    }

    match({ history, routes, location: req.originalUrl }, (error, redirectLocaion, renderProps) => {
        if (redirectLocaion) {
            res.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (error) {
            console.error('ROUTER ERROR:', error);
            res.status(500);
        } else if (renderProps) {
            const {components} = renderProps;
            const locals = {
                path: renderProps.location.pathname,
                query: renderProps.location.query,
                params: renderProps.params,
                dispatch
            };
            
            trigger('fetch', components, locals)
                .then(() => {
                    const state = getState();

                    const component = (
                        <Provider store={store}>
                            <RouterContext {...renderProps} />
                        </Provider>
                    );
                    
                    const html = ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} component={component} store={store}/>);
                    res.status(200);
                    res.send(`<!doctype html>\n ${html}`);
                });
        } else {
            res.status(404).send('Not found');
        }
    });
});

server.listen(config.port, (err) => {
    if (err) {
        console.error(err);
    }
    console.info('==> ✅  Open http://%s:%s in a browser to view the app.', config.host, config.port);
});