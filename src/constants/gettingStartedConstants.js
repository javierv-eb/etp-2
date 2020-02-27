import image from '../assets/img/webpack.config.js.jpeg'

export const CONFIG_BUILDER = [
    {
        keyReplace: 'cb1',
        prevSteps: [
            'Edit your App.js file to include the following imports'
        ],
        fragment: (
`
import React, { Component } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import 'eventbrite_design_system/css/eds.css';
`
        ),
        postStepsBlock: [
            {
                text: {
                    __html:
                        `
                        Please check <a href="https://github.com/reactjs/react-router-redux#routermiddlewarehistory" target="_blank" rel="noopener noreferrer">Router middleware history</a>`,
                },
            },
            {
                text: {
                    __html:
                        `
                        Please check <a href="https://redux.js.org/recipes/configuring-your-store" target="_blank" rel="noopener noreferrer">Configure your store</a>`,
                },
            },
            {
                text: {
                    __html:
                        `
                        Please check <a href="https://github.com/reactjs/react-router-redux#history--synchistorywithstorehistory-store-options" target="_blank" rel="noopener noreferrer">Sync History With Store</a>`,
                },
            },
            {
                text: {
                    __html:
                        `
                        Please check <a href="https://github.com/reduxjs/redux-thunk" target="_blank" rel="noopener noreferrer">Redux Thunk</a>`,
                },
            },
            'We need to manually add EDS styles css'
        ],
        postSteps: [
            'Finally, We need to manually add EDS styles css'
        ],
    },
    {
        keyReplace: 'cb2',
        prevSteps: [
            'After the import section add the following JSX into your App.js file'
        ],
        fragment: (
`export default class App extends Component {
    history = getHistory();
    store = configureStore({});
  
    render() {
      return (
        <Provider store={this.store}>
          <Router history={this.history} routes={getRoutes()} />
        </Provider>
      );
    }
  }
`
        ),
        postStepsBlock: [
            'Checking the above code fragment we could note that:'
        ],
        postSteps: [
            'We have defined a new function which extends from React.Component',
            'The store property is configured (we will cover it later)',
            'History property is configured with redux (we will cover it later)',
            'In our render function, We return Provider and Router as single provider child with previously configured properties. In addition we configure our custom routes and pass them as a react-router prop'
        ],
    },
    {
        keyReplace: 'cb3',
        prevSteps: [
            'Store configuration'
        ],
        prevStepsBlock: [
            {
                text: {
                    __html:
                        `This will only describe how we are building our redux store.
                        Please check <a href="https://github.com/eventbrite/js-utils/blob/master/src/redux/configureStore.debug.js" target="_blank" rel="noopener noreferrer"> configureStore from 'js-utils/redux'</a>`,
                },
            },
        ],
        fragment: (
`
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

/**
 * @typedef {object} StoreOptions
 * @property {import('redux').Reducer<{}>} reducer Reducer to use
 * @property {object} initialState Initial state
 * @property {import('redux').Middleware[]} middleware Array of middleware
 */

/**
 * Create's a redux store
 * @param {StoreOptions} options
 */
const configureStore = ({reducer, initialState, middleware = [thunk]}) => (
    createStore(
        reducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middleware),
        ),
    )
);

export default configureStore;
`
        )
    },
    {
        keyReplace: 'cb4',
        prevSteps: [
            'Router configuration'
        ],
        prevStepsBlock: [
            {
                text: {
                    __html:
                        `This will only describe how we are setting up our router config.
                        Please check <a href="https://github.com/eventbrite/js-utils/blob/5306cddaac0fec48f80a20a3a8d515707ed708de/src/router/index.js" target="_blank" rel="noopener noreferrer">getHistory &  updateHistory from 'js-utils/router'</a>`,
                },
            },
        ],
        fragment: (
`
import React from 'react';
import {
    Router,
    Route,
    browserHistory,
    createMemoryHistory,
} from 'react-router';
import {createMemoryHistory as createMemoryHistoryRouterV4} from 'history';
import {formatUrl} from 'url-lib';

/**
 * Provides an environment appropriate history management object for react-router
 */
export const getHistory = (routerConfig = {}) => {
    const hasBrowserHistory = typeof(browserHistory) !== 'undefined' && process.env.NODE_ENV !== 'test';

    let _browserHistory;

    if (hasBrowserHistory) {
        _browserHistory = browserHistory;
    } else if (routerConfig.isRouterV4) {
        _browserHistory = createMemoryHistoryRouterV4();
    } else {
        _browserHistory = createMemoryHistory();
    }

    return _browserHistory;
};

/**
 * Replaces the specified history object with the specified request parameters
 * (particularly useful for initial server rendering)
 * @param {import("history").History} routerHistory The history object
 * @param {{path: string, params: object}} params
 */
export const updateHistory = (routerHistory, {path, params}) => {
    routerHistory.replace(formatUrl(path, params));
};
`
            
        )
    },
    {
        keyReplace: 'cb5',
        prevSteps: [
            'Update your import section including js-utils imports'
        ],
        fragment: (
`
import { configureStore } from 'js-utils/redux';
import { getHistory, updateHistory } from 'js-utils/router';
`
            
        )
    },
    {
        keyReplace: 'cb6',
        prevSteps: [
            'Update your App class component'
        ],
        prevStepsBlock: [
            'We will cover reducer & getInitialState later'
        ],
        fragment: (
`
history = getHistory();
store = configureStore({
    reducer,
    initialState: getInitialState(),
    middleware: [thunk, routerMiddleware(this.history)],
});
history = syncHistoryWithStore(this.history, this.store);
`
        ),
    },
    {
        keyReplace: 'cb7',
        prevSteps: [
            'Creating our reducers',
        ],
        prevStepsBlock: [
            'Create a new reducer folder under src',
            'Add an index.js file within it'
        ],
        fragment: (
`
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

export default combineReducers({
    routing,
});

`
        ),
        postSteps: [
            'import reducers into your App.js file',
        ],
        postStepsBlock: [
            'Here we have configure our reducers all future reducers will be added into this file',
            {
                text: {
                    __html:
                        `Please check <a href="https://redux.js.org/api/combinereducers/" target="_blank" rel="noopener noreferrer">Combine Reducers</a>`,
                },
            },
            {
                text: {
                    __html:
                        `Please check <a href="https://github.com/reactjs/react-router-redux#routerreducer" target="_blank" rel="noopener noreferrer">Router reducer</a>`,
                },
            }
        ]
    },
    {
        keyReplace: 'cb8',
        prevSteps: [
            'Creating our initial state',
        ],
        prevStepsBlock: [
            'The initalState will setup our redux-store with pre-required initial data. So lets create a new file within reducer folder called utils.js'
        ],
        fragment: (
`
export const getInitialState = () => ({});

`
        ),
        postSteps: [
            'import getInitialState from your utils folder into your App.js file',
        ],
        postStepsBlock: [
            'Here we have configure our reducer initial state. You will notice that this function only returns an empty object as we don\'t have any custom reducer',
            {
                text: {
                    __html:
                        `Please check <a href="https://redux.js.org/recipes/structuring-reducers/initializing-state/" target="_blank" rel="noopener noreferrer">Initial Store</a>`,
                },
            }
        ]
    },
    {
        keyReplace: 'cb9',
        prevSteps: [
            'Creating our routes',
        ],
        prevStepsBlock: [
            'We are goint to build our routes function which will return all the app routes in src/routes.js'
        ],
        fragment: (
`
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import ConnectedPage from './containers/connectPage';

const BASE_PATH = '/';

const getRoutes = () => {
    return (
        <Route path={BASE_PATH}>
            <IndexRoute component={ConnectedPage} />
        </Route>
    );
};

export default getRoutes;

`
        ),
    },
    {
        keyReplace: 'cb10',
        prevSteps: [
            'Creating our first connector',
        ],
        prevStepsBlock: [
            'Create a new containers folder under src.',
            'Create a new file called connectPage.js inside it'
        ],
        fragment: (
`
import { connect } from 'react-redux';

import Page from './Page';

export default connect()(Page);

`
        ),
        postStepsBlock: [
            {
                text: {
                    __html:
                        `The connect function returns a new function which is a <a href="https://reactjs.org/docs/higher-order-components.html" target="_blank" rel="noopener noreferrer">HOC</a>.
                        The <a href="https://react-redux.js.org/api/connect" target="_blank" rel="noopener noreferrer">connect</a> will be used later to access redux-store <a href="https://react-redux.js.org/api/connect#mapstatetoprops-state-ownprops-object" target="_blank" rel="noopener noreferrer">(mapStateToProps)</a> and store.dispatch <a href="https://react-redux.js.org/api/connect#mapdispatchtoprops-object-dispatch-ownprops-object" target="_blank" rel="noopener noreferrer">(mapDispatchToProps)</a> function`,
                },
            },
        ]
    },
    {
        keyReplace: 'cb11',
        prevSteps: [
            'Creating our first componet',
        ],
        prevStepsBlock: [
            'Create a new filed called Page.js un containers folder. Not that Page.js is not a react-redux connected component but it follows the Redux Container component pattern.',
        ],
        fragment: (
`
import React, { PureComponent } from 'react;

export default class App extends PureComponent {
    render() {
        return (
            <section>
                <h1>My first component</h1>
            </section>
        );
    }
}

`
        ),
    },
    {
        keyReplace: 'cb12',
        prevSteps: [
            'Importing routes in our App.js file',
        ],
        fragment: (
`
import getRoutes from './routes';
`
        ),
    },
    {
        keyReplace: 'cb13',
        prevSteps: [
            'Finally our App.js file will be similar to the below code',
        ],
        fragment: (
`
import React, { Component } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import { configureStore } from 'js-utils/redux';
import { getHistory, updateHistory } from 'js-utils/router';

import reducer from './reducer';
import { getInitialState } from './reducer/utils';
import getRoutes from './routes';

import 'eventbrite_design_system/css/eds.css';

export default class App extends Component {
    history = getHistory();
    store = configureStore({
        reducer,
        initialState: getInitialState(),
        middleware: [thunk, routerMiddleware(this.history)],
    });
    history = syncHistoryWithStore(this.history, this.store);
  
    render() {
      return (
        <Provider store={this.store}>
          <Router history={this.history} routes={getRoutes()} />
        </Provider>
      );
    }
}
`
        ),
    },
];

export const STARTED_BUILDER = [
    {
        prevSteps: [
            'Install react app',
        ],
        fragment: 'yarn global add create-react-app',
        keyReplace: 'sb1',
    },
    {
        prevSteps: [
            'Create your exercise project',
        ],
        fragment: 'create-react-app eds-structure',
        keyReplace: 'sb2',
    },
    {
        prevSteps: [
            'Eject your react project',
        ],
        fragment: (`yarn eject
NOTE: Create React App 2+ supports TypeScript, Sass, CSS Modules and more without ejecting: https://reactjs.org/blog/2018/10/01/create-react-app-v2.html
            
? Are you sure you want to eject? This action is permanent. (y/N)`
        ),
        keyReplace: 'sb3',
    },
    {
        prevSteps: [
            'Install the following dependencies',
        ],
        fragment: 'yarn add react-router@^3.2.1 react-router-redux@4.0.4 react-redux@^4.4.9 redux@3.5.2 redux-form@^6.8.0 redux-logger@^3.0.6 redux-thunk@2.3.0 lodash@^4.3.0',
        keyReplace: 'sb4',
    },
    {
        prevSteps: [
            'Edit package.json and add the following dependencies',
        ],
        fragment: (
`"dependencies": { 
    …
    "eventbrite_design_system": "http://packages.evbops.com:8889/package/eventbrite_design_system/78.56.0",
    "js-utils": "http://packages.evbops.com:8889/package/js-utils/14.7.0"
},
`  
        ),
        postStepsBlock: [
            'Run yarn, to download all node_modules dependencies',
        ],
        keyReplace: 'sb5',
    },
    {
        prevSteps: [
            'Edit your webpack.config.js file to allow process.env access',
        ],
        imageFragment: image,
        keyReplace: 'sb6',
    },
    {
        prevSteps: [
            'Under plugins object add',
        ],
        fragment: (
`new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('development'),
      'REACT_APP_TARGET': JSON.stringify('browser'),
    },
  }),`
        ),
        keyReplace: 'sb7',
    },
    {
        prevSteps: [
            'Run your project',
        ],
        fragment: 'yarn start',
        postStepsBlock: [
            'Note: after correctly building your project it will be running on localhost:3000'
        ],
        keyReplace: 'sb8',
    },
];

export const CONFIG_LAYER = [
    {
        keyReplace: 'cl1',
        prevSteps: [
            'Edit your Page.js application to include the following code',
        ],
        fragment: (
`
import React, {Component} from 'react';

import Structure from 'eventbrite_design_system/structure/Structure';
import Layout from 'eventbrite_design_system/layout/Layout';
import Tabs from 'eventbrite_design_system/tabs/Tabs';


import Overview from '../components/Overview';
import ExercisesList from '../components/ExercisesList';

const items = [
    {
        value: 0,
        displayName: 'Guide',
        content: <Overview />
    },
    {
        value: 1,
        displayName: 'Exercises',
        content: <ExercisesList />
    },
];

export default class Page extends Component {
    render() {
        return (
            <Structure {...this.props}>
                <Layout
                    maxWidth="large"
                    hasHorizontalGutters={false}
                >
                    <section className="eds-l-pad-top-10">
                        <h1>User Resolution Guide</h1>
                        <Tabs
                            items={items}
                        />
                    </section>
                </Layout>
            </Structure>
        )
    }
};
`
        ),
    },
    {
        keyReplace: 'cl2',
        prevSteps: [
            'Create a new component in the components folder called Overview.js',
        ],
        fragment: (
`
import React from 'react';

const OVERVIEW_TIPS = [
    'This repo will be used to save your progress in the resolution of the proposed exercises',
    'The proposed exercise are in order and should be followed in that way',
    'Please append every single exercise according to the guide instruction',
];

const Overview = () => (
    <section className="eds-best-practices eds-l-mar-vert-10" data-spec="eds-best-practices">
        <h1 className="eds-text-hm eds-l-pad-bot-6">Checklist</h1>
        <ul className="eds-text-bm eds-text-height--open eds-l-pad-left-4">
            {OVERVIEW_TIPS.map((item) => <li className="eds-l-pad-bot-2" key={item}>{item}</li>)}
        </ul>
    </section>
);
export default Overview;
`
        )
    },
    {
        keyReplace: 'cl3',
        prevSteps: [
            'Create a new component in the components folder called ExercisesList.js',
        ],
        fragment: (
`
import React from 'react';
import { browserHistory } from 'react-router';

import ExpansionPanel from 'eventbrite_design_system/expansionPanel/ExpansionPanel';
import TextList from 'eventbrite_design_system/textList/TextList';
import ReactChunkySvg from 'eventbrite_design_system/iconography/icons/ReactChunky';


const items = [
    {
        content: 'Sample item',
        value: 'ROUTE_DEFINED_IN_YOUR_ROUTE.JS_FILE',
        iconType: <ReactChunkySvg />,
    },
];

export default class ExercisesList extends React.Component {
    handleNavigate = (route) => {
        browserHistory.push(route);
    };

    render() {
        return (
            <section className="eds-best-practices eds-l-mar-vert-10 etp-expansion-panel">
                <h1 className="eds-text-hm eds-l-pad-bot-6">List of exercises</h1>
                <ExpansionPanel
                    linkText="Exercises"
                    verticalMargin="both"
                    //eslint-disable-next-line react/style-prop-object
                    style="container"
                >
                    <TextList items={items} onItemSelect={this.handleNavigate}/>
                </ExpansionPanel>
            </section>
        )
    }
}
`
        ),
        postStepsBlock: [
            'Please check that items array will be used to define the routes for your exercises so for every single new exercise you will have to add a new object with the correct route.',
        ]
    },
    {
        keyReplace: 'cl4',
        prevSteps: [
            'Create a new file under the containers folder called SiteStructure.js',
        ],
        fragment: (
`
import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Structure from 'eventbrite_design_system/structure/Structure';
import Layout from 'eventbrite_design_system/layout/Layout';
import flowRight from 'lodash/flowRight';

import addOverlayControls from 'eventbrite_design_system/structure/hoc/addOverlayControls';
import addMainControls from 'eventbrite_design_system/structure/hoc/addMainControls';
import addFocusDrawerControls from 'eventbrite_design_system/structure/hoc/addFocusDrawerControls';
import PhabButton from 'eventbrite_design_system/phab/PhabButton';
import CrossSvg from 'eventbrite_design_system/iconography/icons/Cross';

class SiteStructure extends Component {
    navigate = () => {
        browserHistory.goBack();
    }

    render() {
        return (
            <Structure
                hasIndependentScrolling
                {...this.props}
            >
                <Layout
                    maxWidth="large"
                    hasHorizontalGutters={true}
                >
                    <div className="eds-align--space-between eds-l-pad-top-10">
                        <h1>Exercise</h1>
                        <div>
                            <PhabButton iconType={<CrossSvg />} onClick={this.navigate} size="small" />
                        </div>
                    </div>
                    {this.props.children}
                    {this.props.mainContent}
                </Layout>
            </Structure>
        )
    }
};

export default flowRight(
    addOverlayControls,
    addMainControls,
    addFocusDrawerControls
)(SiteStructure);

`
        ),
        postStepsBlock: [
            {
                text: {
                    __html:
                        `Please check <a href="https://reactjs.org/docs/legacy-context.html" target="_blank" rel="noopener noreferrer"> React Legacy Context API </a>`
                }
            },
            {
                text: {
                    __html:
                        `Please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/addMainControls.js" target="_blank" rel="noopener noreferrer">Add main Controls</a>.
                        and please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/withMainControls.js" target="_blank" rel="noopener noreferrer">with main Controls</a>`,
                },
            },
            {
                text: {
                    __html:
                        `Please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/addFocusDrawerControls.js" target="_blank" rel="noopener noreferrer">Add focus drawer Controls</a>.
                        and please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/withFocusDrawerControls.js" target="_blank" rel="noopener noreferrer">with focus drawer Controls</a>`,
                },
            },
            {
                text: {
                    __html:
                        `Please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/addOverlayControls.js" target="_blank" rel="noopener noreferrer">Add overlay Controls</a>.
                        and please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/withOverlayControls.js" target="_blank" rel="noopener noreferrer">with overlay Controls</a>`,
                },
            },
        ]
    },
    {
        keyReplace: 'cl5',
        prevSteps: [
            'Edit your routes to finish up your project setup'
        ],
        prevStepsBlock: [
            'We are going to add our SiteStructure component as main wrapper for our exercises',
            'Edit your routes.js file and add the following code'
        ],
        fragment: (
`
import SiteStructure from './containers/SiteStructure';

...

const getRoutes = () => {
    const goToBaseUrl = (nextRouterState, replace) => {
        replace(BASE_PATH);
    };

    return (
        <Route path={BASE_PATH}>
            <IndexRoute component={ConnectedPage} />
            <Route path="exercises" component={SiteStructure}>
            </Route>
            <Route path="*" onEnter={goToBaseUrl} />
        </Route>
    );
};

`            
        ),
        postStepsBlock: [
            {
                text: {
                    __html:
                        `
                        The route <strong> exercises </strong> will be our main route which includes all the required structure and HOC needed in our exercises`,
                },
            }
        ]
    }
];
