import React from 'react';
import {Route, IndexRoute, browserHistory, createMemoryHistory} from 'react-router';

import Ex1 from '../components/Ex1';
import Ex2 from '../components/Ex2';

import Notifications from '../components/hoc/Notifications';

import Page from '../containers/Page';
import StructureWithHOC from '../containers/StructureWithHOC';
import StructureForFocusDrawer from '../containers/StructureForFocusDrawer';
import BasicStructure from '../components/BasicStructure';
import ActionBar from '../components/hoc/ActionBar';
import OverlaySample from '../components/hoc/OverlaySample';
import OverlaySampleDialog from '../components/hoc/OverlaySampleDialog';
import FocusDrawer from '../components/hoc/FocusDrawer';
import FocusDrawerAdvanced from '../components/hoc/FocusDrawerAdvanced';
import FocusDrawerComponent from '../components/hoc/FocusDrawerComponent';

const BASE_URL = '/';

export const getHistory = () => {
    const hasBrowserHistory = typeof(browserHistory) !== 'undefined' && process.env.NODE_ENV !== 'test';

    return hasBrowserHistory ? browserHistory : createMemoryHistory();
};

const assembleComponentWithFocusDrawer = (focusDrawerTitle, focusDrawerContent, children) => {
    const TitleComponent = () => (
        <span className="eds-text-bl">{focusDrawerTitle || 'Sample title'}</span>
    );

    return {
        mainContent: children,
        focusDrawerContent,
        focusDrawerTitle: TitleComponent
    }
};

const focusDrawerBasic = assembleComponentWithFocusDrawer('Focus Drawer', FocusDrawerComponent, FocusDrawerAdvanced);

const getRoutes = () => {
    const goToBaseUrl = (nextRouterState, replace) => {
        replace(BASE_URL);
    };

    return (
        <Route path={BASE_URL}>
            <IndexRoute component={Page} />
            <Route path="ex1" component={Ex1}/>
            <Route path="ex2" component={Ex2}/>
            <Route path="structure" component={StructureWithHOC}>
                <Route path="basicStructure" component={BasicStructure} />
                <Route path="hoc/mainControls">
                    <Route path="notification" component={Notifications} />
                    <Route path="actionBar" component={ActionBar} />
                </Route>
                <Route path="hoc/overlayControls">
                    <Route path="overlayModal" component={OverlaySample} />
                    <Route path="overlayDialog" component={OverlaySampleDialog} />
                </Route>
                <Route path="hoc/focusDrawer" component={FocusDrawer} />
            </Route>
            <Route path="routerStructure" component={StructureForFocusDrawer}>
                <Route path="hoc">
                    <Route path="focusDrawer" component={FocusDrawerAdvanced}/>
                    <Route path="component" components={focusDrawerBasic}/>
                </Route>
            </Route>
            <Route path="*" onEnter={goToBaseUrl} />
        </Route>
    );
};

export default getRoutes;
