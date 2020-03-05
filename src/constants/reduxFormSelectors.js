import { addHtml } from './utils';

export const REDUX_FORM_SELECTORS = {
    modalInfo: [
        {
            keyReplace: 'rfmis1',
            prevSteps: [
                addHtml(
                    '<div class="eds-l-pad-bot-2">In this exercise we are going use redux-form selector</div>'
                )
            ],
            postStepsBlock: [
                'Please check the following bullets:'
            ],
            postSteps: [
                addHtml('Redux-form <a href="https://redux-form.com/6.8.0/docs/api/formvalueselector.md/" target="_blank" rel="noopener noreferrer">Form Value Selector</a>'),
            ]
        },
        {
            keyReplace: 'rfmis2',
            prevStepsBlock: [
                {
                    text: {
                        __html: `Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/91b99e2d8bb7c3e4efae8470ccac2337f9fd5503" target="_blank" rel="noopener noreferrer">here</a>`
                    }
                },
                {
                    text: {
                        __html: `Checkout current branch <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commits/redux-form-selectors" target="_blank" rel="noopener noreferrer">Redux-Form Selectors</a>`
                    }
                }
            ],
        }
    ],
    guideInfo: [
        {
            keyReplace: 'rfgis1',
            prevSteps: [
                'Add form selectors',
            ],
            postStepsBlock: [
                'Follow next steps:',
            ],
            postSteps: [
                addHtml('Create a new connector called form <strong>connectReduxFormSelectors.js</strong>'),
                addHtml(`Edit your exercise list with the following data<br/><strong>content</strong>: Redux Form - Selectors`),
                addHtml(`<strong>value</strong>: exercises/redux-form-selectors`),
            ]
        },
        {
            keyReplace: 'rfgis2',
            prevSteps: [
                'Redux-form selector utils'
            ],
            postStepsBlock: [
                'Follow next steps to create your selector utils'
            ],
            postSteps: [
                addHtml('Create a new folder called <strong>selectors</strong>'),
                addHtml('Create a new file called called <strong>reduxFormSelectors</strong>'),
            ],
        },
        {
            keyReplace: 'rfgis3',
            fragment: (
`import { formValueSelector } from 'redux-form';
import isArray from 'lodash/isArray';

const fieldValueSelector = formValueSelector('reduxFormBasic');

export const getFieldValue = (state, fieldNames) => (
    fieldValueSelector(state, ...isArray(fieldNames) ? fieldNames : [fieldNames])
);
`
            ),
            postSteps: [
                addHtml('The function <strong>formValueSelector</strong> from <strong>redux-form</strong> is a clousure which we should invoke with our current form name'),
                addHtml('The exported function <strong>getFieldValue</strong> take two arguments <strong>state</strong> and <strong>fieldNames</strong> (which could be a field name or a list of them)'),
            ],
        },
        {
            keyReplace: 'rfgis4',
            prevSteps: [
                'Setup your connectReduxFormSelectors.js'
            ],
            prevStepsBlock: [
                addHtml('In our connector (copied from <strong>connectReduxFormBasic.js</strong>) edit the mapStateToProps function to be similar to below code:')
            ],
            fragment: (
`...
import { getFieldValue } from '../../selectors/reduxFormSelector';
...
const FORM_VALUE_MAPS = {
    'firstField': 'firstField',
    'secondField': 'secondField',
    'thirdField': 'thirdField',
    '5Field': '5Field',
};

const mapStateToProps = (state) => {
    const selectedValue = getFieldValue(state, 'selector');
    let reduxBasicFormData = null;

    if (selectedValue) {
        reduxBasicFormData = getFieldValue(state, FORM_VALUE_MAPS[selectedValue] || Object.keys(FORM_VALUE_MAPS));
    }

    return {
        reduxBasicFormData,
        isFormSelector: true,
    };
};
...`
            ),
        },
        {
            keyReplace: 'rfgis5',
            prevSteps: [
                'Update your ReduxFormBasic.js file'
            ],
            prevStepsBlock: [
                addHtml('Add a new functional component which should be rendered only if isFormSelector is truthy. (Check below code)'),
            ],
            fragment: (
`...
const SelectorFields = ({ isFormSelector }) => (
    isFormSelector
        ? (
            <div className="eds-l-pad-top-3">
                <ValidationFormField
                    v2={true}
                    name="selector"
                    label="Selector field"
                    required={true}
                >
                    <SelectField
                        label="Selector field"
                        id="selector"
                        placeholder="Select which value you require"
                        values={[
                            {
                                value: 'firstField',
                                display: 'Initial Field',
                            },
                            {
                                value: 'secondField',
                                display: 'Initial select field',
                            },
                            {
                                value: 'thirdField',
                                display: 'Last select field',
                            },
                            {
                                value: '5Field',
                                display: 'Last input field',
                            },
                            {
                                value: 'all',
                                display: 'All values',
                            },
                        ]}
                        style={STYLE_BASIC}
                    />
                </ValidationFormField>
            </div>
        )
        : null
);
...`
            ),
            postStepsBlock: [
                addHtml(`<strong>Note that</strong>: The select field options are binded to basic form values. The select fields is wrapper with <strong>ValidationFormField</strong>, so redux-form registers it as a valid field. Taking this in consideration, whenever a change event is triggered, our form reducer is updated. So, in the <strong>mapStateToProps</strong> function (from our connector) we can select, via redux-form <strong>formValueSelector</strong>, the updated value.`)
            ]
        },
    ],
    resolutionInfo: [
        {
            keyReplace: 'rfris1',
            prevSteps: [
                'connectReduxFormSelector.js',
            ],
            fragment: (
`import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withReduxForm from 'eventbrite_design_system/form/withReduxForm';

import ReduxFormBasic from '../../components/reduxForm/ReduxFormBasic';
import { saveReduxFormBasicData } from '../../actions/reduxFormBasic';
import { getFieldValue } from '../../selectors/reduxFormSelector';

const FORM_VALUE_MAPS = {
    'firstField': 'firstField',
    'secondField': 'secondField',
    'thirdField': 'thirdField',
    '5Field': '5Field',
};

const mapStateToProps = (state) => {
    const selectedValue = getFieldValue(state, 'selector');
    let reduxBasicFormData = null;

    if (selectedValue) {
        reduxBasicFormData = getFieldValue(state, FORM_VALUE_MAPS[selectedValue] || Object.keys(FORM_VALUE_MAPS));
    }

    return {
        reduxBasicFormData,
        isFormSelector: true,
    };
};

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
            keyReplace: 'rfris2',
            prevSteps: [
                'reduxFormSelector.js',
            ],
            fragment: (
`import { formValueSelector } from 'redux-form';
import isArray from 'lodash/isArray';

const fieldValueSelector = formValueSelector('reduxFormBasic');

export const getFieldValue = (state, fieldNames) => (
    fieldValueSelector(state, ...isArray(fieldNames) ? fieldNames : [fieldNames])
);
`
            )
        },
        {
            keyReplace: 'rfris3',
            prevSteps: [
                'ReduxFormBasic.js',
            ],
            fragment: (
`import React, { Component } from 'react';
import ClassNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import noop from 'lodash/noop';

import Button from 'eventbrite_design_system/button/Button';
import InputField from 'eventbrite_design_system/inputField/InputField';
import SelectField from 'eventbrite_design_system/inputField/SelectField';
import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import {
    STYLE_STATIC,
    STYLE_BASIC,
} from 'eventbrite_design_system/inputField/constants';

const SelectorFields = ({ isFormSelector }) => (
    isFormSelector
        ? (
            <div className="eds-l-pad-top-3">
                <ValidationFormField
                    v2={true}
                    name="selector"
                    label="Selector field"
                    required={true}
                >
                    <SelectField
                        label="Selector field"
                        id="selector"
                        placeholder="Select which value you require"
                        values={[
                            {
                                value: 'firstField',
                                display: 'Initial Field',
                            },
                            {
                                value: 'secondField',
                                display: 'Initial select field',
                            },
                            {
                                value: 'thirdField',
                                display: 'Last select field',
                            },
                            {
                                value: '5Field',
                                display: 'Last input field',
                            },
                            {
                                value: 'all',
                                display: 'All values',
                            },
                        ]}
                        style={STYLE_BASIC}
                    />
                </ValidationFormField>
            </div>
        )
        : null
);

export default class ReduxFormBasic extends Component {
    static defaultProps = {
        onLoad: noop,
        isFormSelector: false,
    }
    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.props.handleSubmit();
    }

    componentDidMount() {
        const { onLoad } = this.props;

        onLoad();
    }

    render() {
        const {
            reduxBasicFormData,
            isFormSelector,
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
                    <SelectorFields isFormSelector={isFormSelector} />
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
                                <textarea cols={50} rows={15} value={JSON.stringify(reduxBasicFormData, null, 4)} readOnly />
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
        }
    ]
};