import React from 'react';
import ReactDOM from 'react-dom/server';
import express from 'express';
import http from 'http';
import 'isomorphic-fetch';
import { RouterContext, match } from 'react-router';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import { trigger } from 'redial';
import configureStore from './store/configureStore';
import getRoutes from './routes';
import Html from './components/Html';

const app = express();
const server = new http.Server(app);
const config = require('./config');

app.get('/api/getEvents', (req, res) => {
    res.send(JSON.stringify([
        {
            name: "test"
        }
    ]));
});

app.use((req, res) => {
    const history = createMemoryHistory(req.originalUrl);
    const store = configureStore();
    const {dispatch, getState} = store;
    const routes = getRoutes(store);

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
                        <Provider store={store} key="provider">
                            <RouterContext {...renderProps} />
                        </Provider>
                    );

                    const assets = {
                        javascript: {
                            main: '../dist/main.js'
                        }
                    }; //TODO: change this
                    console.log(ReactDOM.renderToString(<RouterContext {...renderProps} />));
                    const html = ReactDOM.renderToString(<Html assets={assets} component={component} store={store}/>);
                    console.log("HTML: ");
                    console.log(html);
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