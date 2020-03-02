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
import ReduxFormBasic from '../components/forms/basic/BasicForm';
import ReduxFormBasic2 from '../components/forms/basic/BasicForm2';
import ReduxFormValidation from '../components/forms/validations';
import FormTemplate from '../containers/connectFormTemplate';
//v2
import Page2 from '../containers/v2/Page';
import withDocs from '../containers/v2/withDocs';

import * as reduxConstants from '../constants/redux';
import * as edsConstants from '../constants/eds';
import * as reduxFormConstants from '../constants/reduxForm';
import * as breweryConstants from '../constants/brewery';
import connectReduxFormValidations from '../components/forms/validations/connectReduxFormValidations';

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

const focusDrawerBasic2 = assembleComponentWithFocusDrawer('Focus Drawer', FocusDrawerComponent, withDocs({
    Component: FocusDrawerAdvanced,
    guide: edsConstants.GUIDE_INFO.focusDrawer,
    resolution: edsConstants.RESOLUTION_INFO.focusDrawer
}));

const getRoutes = () => {
    const goToBaseUrl = (nextRouterState, replace) => {
        replace(BASE_URL);
    };

    return (
        <Route path={BASE_URL}>
            <IndexRoute component={Page} />
            <Route path="v2">
                <IndexRoute component={Page2} />
                <Route path="exercises" component={StructureForFocusDrawer}>
                    <Route
                        path="redux-basic"
                        component={
                            withDocs({
                                guide: reduxConstants.GUIDE_INFO['redux-basic'],
                                resolution: reduxConstants.RESOLUTION_INFO['redux-basic']
                            })
                        }
                    />
                    <Route
                        path="redux-thunk"
                        component={
                            withDocs({
                                guide: reduxConstants.GUIDE_INFO['redux-thunk'],
                                resolution: reduxConstants.RESOLUTION_INFO['redux-thunk']
                            })
                        }
                    />
                    <Route
                        path="redux-thunk-2"
                        component={
                            withDocs({
                                guide: reduxConstants.GUIDE_INFO['redux-thunk-2'],
                                resolution: reduxConstants.RESOLUTION_INFO['redux-thunk-2']
                            })
                        }
                    />
                    <Route
                        path="main-controls-notification"
                        component={
                            withDocs({
                                Component: Notifications,
                                guide: edsConstants.GUIDE_INFO.mainControlsNotification,
                                resolution: edsConstants.RESOLUTION_INFO.mainControlsNotification
                            })
                        }
                    />
                    <Route
                        path="main-controls-action-bar"
                        component={
                            withDocs({
                                Component: ActionBar,
                                guide: edsConstants.GUIDE_INFO.mainControlsActionBar,
                                resolution: edsConstants.RESOLUTION_INFO.mainControlsActionBar
                            })
                        }
                    />
                    <Route
                        path="overlay-controls-dialog"
                        component={
                            withDocs({
                                Component: OverlaySampleDialog,
                                guide: edsConstants.GUIDE_INFO.overlayControlsDialog,
                                resolution: edsConstants.RESOLUTION_INFO.overlayControlsDialog
                            })
                        }
                    />
                    <Route
                        path="overlay-controls-modal"
                        component={
                            withDocs({
                                Component: OverlaySample,
                                guide: edsConstants.GUIDE_INFO.overlayControlsModal,
                                resolution: edsConstants.RESOLUTION_INFO.overlayControlsModal
                            })
                        }
                    />
                    <Route
                        path="focus-drawer"
                        component={
                            withDocs({
                                Component: FocusDrawerAdvanced,
                                guide: edsConstants.GUIDE_INFO.focusDrawer,
                                resolution: edsConstants.RESOLUTION_INFO.focusDrawer
                            })
                        }
                    />
                    <Route path="focus-drawer-component" components={focusDrawerBasic2}/>
                    <Route
                        path="redux-form-basic"
                        component={
                            withDocs({
                                Component: ReduxFormBasic2,
                                guide: reduxFormConstants.GUIDE_INFO.reduxFormBasic,
                                resolution: reduxFormConstants.RESOLUTION_INFO.reduxFormBasic
                            })
                        }
                    />
                    <Route
                        path="redux-form-init-state"
                        component={
                            withDocs({
                                guide: reduxFormConstants.GUIDE_INFO.reduxFormStateInit,
                                resolution: reduxFormConstants.RESOLUTION_INFO.reduxFormStateInit
                            })
                        }
                    />
                    <Route
                        path="redux-form-init-action-creator"
                        component={
                            withDocs({
                                guide: reduxFormConstants.GUIDE_INFO.reduxFormStateActionCreator,
                                resolution: reduxFormConstants.RESOLUTION_INFO.reduxFormStateActionCreator
                            })
                        }
                    />
                    <Route
                        path="redux-form-selector"
                        component={
                            withDocs({
                                guide: reduxFormConstants.GUIDE_INFO.reduxFormSelector,
                                resolution: reduxFormConstants.RESOLUTION_INFO.reduxFormSelector
                            })
                        }
                    />
                    <Route
                        path="redux-form-validators"
                        component={
                            withDocs({
                                Component: connectReduxFormValidations,
                                guide: reduxFormConstants.GUIDE_INFO.reduxFormValidator,
                                resolution: reduxFormConstants.RESOLUTION_INFO.reduxFormValidator
                            })
                        }
                    />
                    <Route
                        path="brewery-layout"
                        component={
                            withDocs({
                                guide: breweryConstants.GUIDE_INFO.breweryLayout,
                                resolution: breweryConstants.RESOLUTION_INFO.breweryLayout
                            })
                        }
                    />
                    <Route
                        path="brewery-layout-2"
                        component={
                            withDocs({
                                guide: breweryConstants.GUIDE_INFO.breweryLayout2,
                                resolution: breweryConstants.RESOLUTION_INFO.breweryLayout2
                            })
                        }
                    />
                    <Route
                        path="brewery-final"
                        component={
                            withDocs({
                                guide: breweryConstants.GUIDE_INFO.breweryFinal,
                                resolution: breweryConstants.RESOLUTION_INFO.breweryFinal
                            })
                        }
                    />
                </Route>
            </Route>
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
            <Route path="reduxForm" component={StructureWithHOC}>
                <Route path="basic" component={ReduxFormBasic} />
                <Route path="basic2" component={ReduxFormBasic2} />
                <Route path="validations" component={ReduxFormValidation} />
            </Route>
            <Route path="advanced" component={StructureWithHOC}>
                <Route path="templateBuilder" component={FormTemplate} />
            </Route>
            <Route path="*" onEnter={goToBaseUrl} />
        </Route>
    );
};

export default getRoutes;
