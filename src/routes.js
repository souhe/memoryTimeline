import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './components/App';
import Timeline from './components/Timeline';

export default (store) => {
    return (
        <Route path="/" component={App}>
            <IndexRoute component={Timeline} />
        </Route>
    );
}