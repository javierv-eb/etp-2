import React, { Component, PureComponent } from "react";
import {Provider} from 'react-redux';
import {Router, browserHistory, Route, createMemoryHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createLogger} from 'redux-logger';
import {reducer as formReducer} from 'redux-form';
import {routerMiddleware, routerReducer} from 'react-router-redux';

import Structure from "eventbrite_design_system/structure/Structure";
import Layout from "eventbrite_design_system/layout/Layout";
import flowRight from "lodash/flowRight";

import addOverlayControls from "eventbrite_design_system/structure/hoc/addOverlayControls";
import addMainControls from "eventbrite_design_system/structure/hoc/addMainControls";
import addFocusDrawerControls from "eventbrite_design_system/structure/hoc/addFocusDrawerControls";
import withFocusDrawerControls from "eventbrite_design_system/structure/hoc/withFocusDrawerControls";
import Button from "eventbrite_design_system/button/Button";

import "eventbrite_design_system/css/eds.css";

/******** Store configuration ********/
const loadDefaultReducers = () => combineReducers({
    form: formReducer,
    routing: routerReducer,
});

const configureStore = ({
    reducer = loadDefaultReducers(),
    initialState = {},
    middleware = [
        thunk,
        createLogger({collapsed: true}),
        routerMiddleware(browserHistory),
    ],
}) => (
    createStore(
        reducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                ...middleware,
            )
        )
    )
);

/******** END Store configuration ********/

/******** Router configuration ********/
const BASE_URL = '/';

export const getHistory = () => {
    const hasBrowserHistory = typeof(browserHistory) !== 'undefined' && process.env.NODE_ENV !== 'test';

    return hasBrowserHistory ? browserHistory : createMemoryHistory();
};

/******** END Router configuration ********/

/******** Focus Drawer main Page ********/
class FocusDrawerLanding extends Component {
    navigate = (route) => {
        browserHistory.push('/component');
    };

    render() {
        return (
            <>
                <section className="eds-l-pad-top-10">
                    <div className="eds-l-pad-top-2">
                        {/* eslint-disable-next-line */}
                        <Button style="fill" size="block" onClick={() => this.navigate()}>
                            Show Focus Drawer
                        </Button>
                    </div>
                </section>
            </>
        );
    }
}
/******** END Focus Drawer main Page ********/

/******** Focus Drawer left Component ********/
class FocusDrawerComponent extends PureComponent {
    _handleCloseFocusDrawer = () => {
        browserHistory.push('/');
    }
    componentDidMount() {
        const {
            showFocusDrawer,
            showFocusDrawerBottomBar,
        } = this.props;
        showFocusDrawer({
            onClose: this._handleCloseFocusDrawer
        });
        showFocusDrawerBottomBar({
            barContent: (
                <div className="eds-align--center">
                {/* eslint-disable-next-line */}
                    <Button style="fill" onClick={this._handleCloseFocusDrawer}>
                        Close Focus Drawer
                    </Button>
                </div>
            ),
        });
    }

    componentWillUnmount() {
        const {
            closeFocusDrawer,
        } = this.props;
        closeFocusDrawer();
    }

    render() {
        return (
            <div className="eds-l-pad-top-10 eds-l-pad-hor-2">
                <h1>This is the focus drawer!!!</h1>
            </div>
        );
    }
}

/******** END Focus Drawer left Component ********/


/******** Site Structure Component ********/
class SiteStructure extends Component {
    navigate = (route) => {
        browserHistory.goBack();
    }

    render() {
        const {
            focusDrawerContent,
            focusDrawerTitle,
            focusDrawerOptions,
        } = this.props;
        let nextFocusDrawerOptions;

        if (focusDrawerContent) {
            nextFocusDrawerOptions = {
                ...focusDrawerOptions,
                content: focusDrawerContent,
                title: focusDrawerTitle,
                hideClose: false,
                isShown: !!focusDrawerContent,
            };
        } else {
            nextFocusDrawerOptions = {
                content: '',
            };
        }
        return (
            <Structure
                hasIndependentScrolling
                {...this.props}
                focusDrawerOptions={nextFocusDrawerOptions}
            >
                <Layout
                    maxWidth="large"
                    hasHorizontalGutters={true}
                >
                    {this.props.children}
                    {this.props.mainContent}
                </Layout>
            </Structure>
        )
    }
};


const SiteStructureHOC = flowRight(
    addOverlayControls,
    addMainControls,
    addFocusDrawerControls
)(SiteStructure);
/******** End Site Structure Component ********/

/*********** Site Routes Config ***********/
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

const focusDrawerBasic = assembleComponentWithFocusDrawer('Focus Drawer', withFocusDrawerControls(FocusDrawerComponent), FocusDrawerLanding);

const getRoutes = () => {
    const goToBaseUrl = (nextRouterState, replace) => {
        replace(BASE_URL);
    };

    return (
        <Route path={BASE_URL} components={SiteStructureHOC}>
            <IndexRoute component={FocusDrawerLanding} />
            <Route path="focusDrawer" component={FocusDrawerLanding}/>
            <Route path="component" components={focusDrawerBasic}/>
            <Route path="*" onEnter={goToBaseUrl} />
        </Route>
    );
};
/*********** END Site Routes Config ***********/


export default class App extends Component {
    constructor(props) {
      super(props);
  
      this.store = configureStore({});
      this.history = syncHistoryWithStore(browserHistory, this.store);
  
    }
  
    render() {
      return (
        <Provider store={this.store}>
          <Router history={this.history} routes={getRoutes()} />
        </Provider>
      )
    }
  }