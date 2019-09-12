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
import withReduxForm from 'eventbrite_design_system/form/withReduxForm';
import Button from "eventbrite_design_system/button/Button";
import InputField from 'eventbrite_design_system/inputField/InputField';
import SelectField from 'eventbrite_design_system/inputField/SelectField';
import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import {
    STYLE_STATIC,
    STYLE_BASIC,
} from 'eventbrite_design_system/inputField/constants';

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

/******** Site Structure Component ********/
class SiteStructure extends Component {
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
                    {this.props.children}
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

/******* Component ***/
class FormComponent extends PureComponent {

    handleSubmit = (event) => {
        this.props.handleSubmit();
    }
    render() {
        return (
            <form 
                onSubmit={this.handleSubmit}
                className="eds-g-cell eds-g-cell-1-1 eds-l-pad-top-4 eds-l-lg-pad-right-4 eds-l-ln-pad-right-4 eds-l-lw-pad-right-4 eds-l-md-pad-right-4 eds-l-mn-pad-right-4 eds-l-mw-pad-right-4"
            >
                <div>
                    <div>
                        <ValidationFormField
                            v2={true}
                            name="firstField"
                            required={true}
                        >
                            <InputField
                                id="firstField"
                                style={STYLE_STATIC}
                                label="First field label"
                                placeholder="First field placeholder"
                                maxLength={20}
                                required={true}
                                hasCharacterCount={true}
                            />
                        </ValidationFormField>
                    </div>
                    <div className="eds-l-pad-top-3">
                        <ValidationFormField
                            v2={true}
                            name="secondField"
                            label="Second field label"
                            required={true}
                        >
                            <SelectField
                                label="Second field label"
                                id="secondField"
                                placeholder="Second field placeholder"
                                values={[
                                    {
                                        value: 'first',
                                        display: 'first',
                                    },
                                    {
                                        value: 'second',
                                        display: 'second',
                                    },
                                ]}
                                style={STYLE_BASIC}
                            />
                        </ValidationFormField>
                    </div>
                    <div className="eds-l-pad-top-3">
                        <ValidationFormField
                            v2={true}
                            name="thirdField"
                            label="third field label"
                            required={true}
                        >
                            <SelectField
                                label="third field label"
                                id="thirdField"
                                placeholder="third field placeholder"
                                values={[
                                    {
                                        value: 'first',
                                        display: 'first',
                                    },
                                    {
                                        value: 'second',
                                        display: 'second',
                                    },
                                ]}
                                style={STYLE_BASIC}
                            />
                        </ValidationFormField>
                    </div>
                </div>
                <div className="eds-l-pad-top-3">
                    <div className="eds-g-cell eds-g-cell-1-1 eds-g-cell-mn-1-2 eds-l-lg-pad-right-4 eds-l-ln-pad-right-4 eds-l-lw-pad-right-4 eds-l-md-pad-right-4 eds-l-mn-pad-right-4 eds-l-mw-pad-right-4">
                        <ValidationFormField
                            v2={true}
                            name="5Field"
                            required={true}
                        >
                            <InputField
                                id="5Field"
                                label="input label"
                                required={true}
                            />
                        </ValidationFormField>
                    </div>
                </div>
                <div className="eds-align--right">
                    {/* eslint-disable-next-line */}
                    <Button style="fill" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </div>
            </form>
        );
    }
};

const ReduxFormComponent = () => {
  const handleSubmit = (formData) => {
    alert(JSON.stringify(formData, null, 4))
  }
  const ReduxForm = withReduxForm(
    {form: 'testForm'}
  )(FormComponent);

  return (
    <ReduxForm
      onSubmit={handleSubmit}
    />
  );
};
/**** ****/

/*********** Site Routes Config ***********/
const getRoutes = () => {
    return (
        <Route path={BASE_URL} components={SiteStructureHOC}>
            <IndexRoute component={ReduxFormComponent} />
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