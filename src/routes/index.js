import React from 'react';
import {Route, IndexRoute, browserHistory, createMemoryHistory} from 'react-router';

import Ex1 from '../components/Ex1';
import Ex2 from '../components/Ex2';

import Notifications from '../components/hoc/Notifications';

import Page from '../containers/Page';
import MainControls from '../containers/MainControls';

const BASE_URL = '/';

export const getHistory = () => {
    const hasBrowserHistory = typeof(browserHistory) !== 'undefined' && process.env.NODE_ENV !== 'test';

    return hasBrowserHistory ? browserHistory : createMemoryHistory();
};

const getRoutes = () => {
    const goToBaseUrl = (nextRouterState, replace) => {
        replace(BASE_URL);
    };

    return (
        <Route path={BASE_URL}>
            <IndexRoute component={Page} />
            <Route path="ex1" component={Ex1}/>
            <Route path="ex2" component={Ex2}/>
            <Route path="hoc/mainControls" component={MainControls}>
                <Route path="notification" component={Notifications} />
            </Route>
            <Route path="*" onEnter={goToBaseUrl} />
        </Route>
    );
};

export default getRoutes;
