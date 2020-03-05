import { addHtml } from './utils';

export const REDUX_FORM_BASIC = {
    modalInfo: [
        {
            keyReplace: 'rfmib1',
            prevSteps: [
                addHtml(
                    '<div class="eds-l-pad-bot-2">In this exercise we are going to setup our project to support Redux-Form</div>'
                )
            ],
            postStepsBlock: [
                'Please cover the following bullets:'
            ],
            postSteps: [
                addHtml('Introduction to <a href="https://redux-form.com/6.8.0/docs/api/" target="_blank" rel="noopener noreferrer">Redux Form 6.8.0</a>'),
                addHtml('Setup our main form reducer'),
                addHtml('Use of <a href="https://eds-docs.evbhome.com/validation-form-field" target="_blank" rel="noopener noreferrer">ValidationFormField</a> EDS component'),
                addHtml('Use of <a href="https://github.com/eventbrite/eventbrite_design_system/blob/a865e40d3ff03edcf3fce3df8614318261f40209/library/src/form/withReduxForm/index.js" target="_blank" ref="noopener noreferrer">withReduxForm</a> which is a HOC wrapper of <a href="https://redux-form.com/6.8.0/docs/api/reduxform.md/" target="_blank" ref="noopener noreferrer">reduxForm</a> from <strong>Redux-Form</strong>'),
                'Submitting our form'
            ]
        },
        {
            keyReplace: 'rfmib2',
            prevStepsBlock: [
                {
                    text: {
                        __html: `Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/a2de76ebe2dfee4d73be986e5e3b1c2ad5ec0515" target="_blank" rel="noopener noreferrer">here</a>`
                    }
                },
                {
                    text: {
                        __html: `Checkout current branch <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commits/redux-form-basic" target="_blank" rel="noopener noreferrer">Redux-Form Basic</a>`
                    }
                },
            ],
        }
    ],
    guideInfo: [
        {
            keyReplace: 'rfguib1',
            prevSteps: [
                'Redux-form exercise',
            ],
            prevStepsBlock: [
                addHtml('Edit your <strong>ExercisesList.js</strong> component')
            ],
            fragment: (
`...
const reduxForm = [
    {
        content: 'Redux Form - Basic',
        value: 'exercises/redux-form-basic',
        iconType: <ReactChunkySvg />,
    },
];
...
<ExpansionPanel
    linkText="Redux Form - Basic"
    verticalMargin="both"
    //eslint-disable-next-line react/style-prop-object
    style="container"
>
    <TextList items={reduxForm} onItemSelect={this.handleNavigate}/>
</ExpansionPanel>
...
`
            )
        },
        {
            keyReplace: 'rfguib2',
            prevSteps: [
                addHtml('Create a new folder called <strong>reduxForm</strong> and a new file called <strong>ReduxFormBasic</strong>'),
            ],
            prevStepsBlock: [
                'Add the following code inside it'
            ],
            fragment: (
`import React, { Component } from 'react';
import ClassNames from 'classnames';
import isEmpty from 'lodash/isEmpty';

import Button from 'eventbrite_design_system/button/Button';
import InputField from 'eventbrite_design_system/inputField/InputField';
import SelectField from 'eventbrite_design_system/inputField/SelectField';
import {
    STYLE_STATIC,
    STYLE_BASIC,
} from 'eventbrite_design_system/inputField/constants';

export default class ReduxFormBasic extends Component {

    render() {
        const formClasses = ClassNames(
            'eds-g-cell',
            'eds-g-cell-1-1',
            'eds-g-cell-mn-1-2',
            'eds-l-pad-top-4',
            'eds-l-lg-pad-right-4',
            'eds-l-ln-pad-right-4',
            'eds-l-lw-pad-right-4',
            'eds-l-md-pad-right-4',
            'eds-l-mn-pad-right-4',
            'eds-l-mw-pad-right-4'
        )
        return (
            <>
                <form
                    className={formClasses}
                >
                    <div>
                        <div>
                            <InputField
                                id="firstField"
                                style={STYLE_STATIC}
                                label="First field label"
                                placeholder="First field placeholder"
                                maxLength={20}
                                required={true}
                                hasCharacterCount={true}
                            />
                        </div>
                        <div className="eds-l-pad-top-3">
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
                                        display: 'Run multiple validations',
                                    },
                                ]}
                                style={STYLE_BASIC}
                            />
                        </div>
                        <div className="eds-l-pad-top-3">
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
                        </div>
                    </div>
                    <div className="eds-l-pad-top-3">
                        <div className="eds-g-cell eds-g-cell-1-1 eds-g-cell-mn-1-2 eds-l-lg-pad-right-4 eds-l-ln-pad-right-4 eds-l-lw-pad-right-4 eds-l-md-pad-right-4 eds-l-mn-pad-right-4 eds-l-mw-pad-right-4">
                            <InputField
                                id="5Field"
                                label="input label"
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="eds-align--right">
                        {/* eslint-disable-next-line */}
                        <Button style="fill">
                            Submit
                        </Button>
                    </div>
                </form>
            </>
        );
    }
};
`
            )
        },
        {
            keyReplace: 'rfguib3',
            prevSteps: [
                'Create a new react-redux connector',
            ],
            fragment: (
`import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withReduxForm from 'eventbrite_design_system/form/withReduxForm';

import ReduxFormBasic from '../../components/reduxForm/ReduxFormBasic';
import { saveReduxFormBasicData } from '../../actions/reduxFormBasic';

const mapStateToProps = (
    {
        reduxBasicFormData
    }
) => ({ reduxBasicFormData } );

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (formData) => dispatch(saveReduxFormBasicData(formData)),
});

export default flowRight(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withReduxForm({
        form: 'reduxFormBasic',
    }),
)(ReduxFormBasic);
`
            ),
            postStepsBlock: [
                'There a couple of things to consider in this connector:'
            ],
            postSteps: [
                addHtml('Note that <strong>withReduxForm</strong> is an EDS HOC that decorates <strong>ReduxFormBasic</strong> component. Internally, it decorates the component with the <strong>ReduxForm</strong> HOC provided by <strong>Redux-form</strong>.'),
                addHtml('The <strong>ReduxForm</strong> HOC connects inner <strong>Field</strong> (from redux-form) to the redux store (which in this case is called <strong>reduxFormBasic</strong>)'),
                addHtml('The <strong>onSubmit</strong> method is required by redux-form for handling form submission'),
                addHtml('In addition, it is important to mention that <strong>onSubmit</strong> method is not available in our component, but we get an other property called <strong>handleSubmit</strong> which is used to invoke the form submission action.')
            ]
        },
        {
            keyReplace: 'rfguib4',
            prevSteps: [
                'Update our form to make redux-form able to map our fields values.',
            ],
            prevStepsBlock: [
                addHtml('Taking as reference our connector, we need to indicate in some way that our input fields are part of redux-form. The library documentation indicates that we should use <a href="https://redux-form.com/6.8.0/docs/api/field.md/" target="_blank" rel="noopener noreferrer">Field</a> component to connect each individual input to the Redux store, so we should pass every single EDS based input, of our form, as component prop of the <strong>Field</strong> component'),
                addHtml('Before doing the above approach, we should take in consideration that <strong>EDS</strong> provides a component called <a href="https://eds-docs.evbhome.com/validation-form-field" target="_blank" rel="noopener noreferrer">ValidationFormField</a> that do the trick for us.')
            ],
            postSteps: [
                addHtml('Import <strong>ValidationFormField</strong> from EDS'),
                addHtml('Wrap every single <strong>InputFields</strong> and <strong>SelectFields</strong> from the from component with <strong>ValidationFormField</strong>')
            ],
        },
        {
            keyReplace: 'rfguib5',
            prevSteps: [
                'Use the handleSubmit prop in our form component',
            ],
            postSteps: [
                'Create an event handler function',
                'Add the handler function reference to the onSubmit action of the form element',
                'Add the handler function reference to the onClick action of our submit button',
                addHtml('In the handler function prevent default and stop propagation before calling the <strong>handleSubmit</strong> prop')
            ]
        },
        {
            keyReplace: 'rfguib6',
            prevSteps: [
                'Create a new action dispatcher and a new reducer (check above connector) for saving form submition data',
            ],
        },
        {
            keyReplace: 'rfguib7',
            prevSteps: [
                'Edit the form component to display form submition data',
            ],
            fragment: (
`</form>
<div className="eds-g-cell eds-g-cell-1-2">
    {
        !isEmpty(reduxBasicFormData)
            ? (
                <textarea cols={50} rows={15} value={JSON.stringify(reduxBasicFormData, null, 4)} />
            )
            : null
    }
</div>`
            )
        },
        {
            keyReplace: 'rfguib8',
            prevSteps: [
                'Add Redux-Form to our redux store',
            ],
            fragment: (
`...
import {reducer as formReducer } from 'redux-form';
...
export default combineReducers({
....
    reduxBasicFormData,
    form: formReducer,
});
`
            )
        }
    ],
    resolutionInfo: [
        {
            keyReplace: 'rfrib1',
            prevSteps: [
                'ReduxFormBasic.js'
            ],
            fragment: (
`import React, { Component } from 'react';
import ClassNames from 'classnames';
import isEmpty from 'lodash/isEmpty';

import Button from 'eventbrite_design_system/button/Button';
import InputField from 'eventbrite_design_system/inputField/InputField';
import SelectField from 'eventbrite_design_system/inputField/SelectField';
import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import {
    STYLE_STATIC,
    STYLE_BASIC,
} from 'eventbrite_design_system/inputField/constants';

export default class ReduxFormBasic extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.props.handleSubmit();
    }

    render() {
        const {
            reduxBasicFormData,
        } = this.props;
        const formClasses = ClassNames(
            'eds-g-cell',
            'eds-g-cell-1-1',
            'eds-g-cell-mn-1-2',
            'eds-l-pad-top-4',
            'eds-l-lg-pad-right-4',
            'eds-l-ln-pad-right-4',
            'eds-l-lw-pad-right-4',
            'eds-l-md-pad-right-4',
            'eds-l-mn-pad-right-4',
            'eds-l-mw-pad-right-4'
        )
        return (
            <>
                <form 
                    onSubmit={this.handleSubmit}
                    className={formClasses}
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
                                            display: 'Run multiple validations',
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
                <div className="eds-g-cell eds-g-cell-1-2">
                    {
                        !isEmpty(reduxBasicFormData)
                            ? (
                                <textarea cols={50} rows={15} value={JSON.stringify(reduxBasicFormData, null, 4)} />
                            )
                            : null
                    }
                </div>
            </>
        );
    }
};
`
            )
        },
        {
            keyReplace: 'rfrib2',
            prevSteps: [
                'connectReduxFormBasic.js'
            ],
            fragment: (
`import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withReduxForm from 'eventbrite_design_system/form/withReduxForm';

import ReduxFormBasic from '../../components/reduxForm/ReduxFormBasic';
import { saveReduxFormBasicData } from '../../actions/reduxFormBasic';

const mapStateToProps = (
    {
        reduxBasicFormData
    }
) => ({ reduxBasicFormData } );

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (formData) => dispatch(saveReduxFormBasicData(formData)),
});

export default flowRight(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withReduxForm({
        form: 'reduxFormBasic',
    }),
)(ReduxFormBasic);
`
            )
        },
        {
            keyReplace: 'rfrib3',
            prevSteps: [
                'reduxFormBasic.js action'
            ],
            fragment: (
`export const SET_REDUX_FORM_BASIC_INFO = 'SET_REDUX_FORM_BASIC_INFO';

export const saveReduxFormBasicData = (payload) => ({
    type: SET_REDUX_FORM_BASIC_INFO,
    payload,
});
`
            )
        },
        {
            keyReplace: 'rfrib4',
            prevSteps: [
                'reduxFormBasic.js reducer'
            ],
            fragment: (
`import { SET_REDUX_FORM_BASIC_INFO } from '../actions/reduxFormBasic';

export const setReduxFormBasicInfo = (state = {}, { type, payload}) => {
    let nextState = state;

    if (type === SET_REDUX_FORM_BASIC_INFO) {
        nextState = payload;
    }

    return nextState;
};
`
            )
        },
        {
            keyReplace: 'rfrib5',
            prevSteps: [
                'Reducer index.js'
            ],
            fragment: (
`import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import {reducer as formReducer } from 'redux-form';

import { SET_DATE, SET_BREWERIES } from '../actions/redux';

import { setReduxFormBasicInfo as reduxBasicFormData } from './reduxFormBasic';

const dateReducer = (state = 'No data', { type, payload }) => {
    let nextState = state;

    if (type === SET_DATE) {
        nextState = payload;
    }

    return nextState;
};

const breweriesReducer = (state = {}, { type, payload }) => {
    let nextState = state;

    if (type === SET_BREWERIES) {
        nextState = {
            ...nextState,
            ...payload,
        };
    }

    return nextState;
};

export default combineReducers({
    routing,
    dateReducer,
    breweriesReducer,
    reduxBasicFormData,
    form: formReducer,
});
`
            )
        }
    ]
}