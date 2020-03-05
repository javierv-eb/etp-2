import { addHtml } from './utils';

export const REDUX_FORM_VALIDATORS = {
    modalInfo: [
        {
            keyReplace: 'rfmiv1',
            prevSteps: [
                addHtml(
                    '<div class="eds-l-pad-bot-2">In this exercise we are going use redux-form sync validators</div>'
                )
            ],
            postStepsBlock: [
                'Please check the following bullets:'
            ],
            postSteps: [
                addHtml('Redux-form <a href="https://redux-form.com/6.8.0/examples/syncvalidation/" target="_blank" rel="noopener noreferrer">Sync Validators</a>'),
                addHtml('<strong>js-utils</strong> <a href="https://github.com/eventbrite/js-utils/blob/master/src/validators/validation.js#L138" target="_blank" rel="noopener noreferrer">Make Validators</a>'),
                addHtml('<strong>js-utils</strong> <a href="https://github.com/eventbrite/js-utils/blob/master/src/validators/validation.js#101" target="_blank" rel="noopener noreferrer">JoinValidators</a>'),
                addHtml('<strong>js-utils</strong> <a href="https://github.com/eventbrite/js-utils/blob/master/src/validators/general.js" target="_blank" rel="noopener noreferrer">general</a> validators'),
            ]
        },
        {
            keyReplace: 'rfmiv2',
            prevStepsBlock: [
                {
                    text: {
                        __html: `Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/0776b8ea2938e818c3efa7dba53cd12494c65e8c" target="_blank" rel="noopener noreferrer">here</a>`
                    }
                },
                {
                    text: {
                        __html: `Checkout current branch <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commits/redux-form-validators" target="_blank" rel="noopener noreferrer">Redux-Form Validators</a>`
                    }
                }
            ],
        }
    ],
    guideInfo: [
        {
            keyReplace: 'rfgiv1',
            prevSteps: [
                'Add form validator',
            ],
            postStepsBlock: [
                'Follow next steps:',
            ],
            postSteps: [
                addHtml('Create a new connector called form <strong>connectReduxFormValidator.js</strong>'),
                addHtml(`Edit your exercise list with the following data<br/><strong>content</strong>: Redux Form - Validators`),
                addHtml(`<strong>value</strong>: exercises/redux-form-validators`),
            ]
        },
        {
            keyReplace: 'rfgiv2',
            prevSteps: [
                'Redux-form validator.js'
            ],
            postStepsBlock: [
                'Follow next steps to create your selector utils'
            ],
            postSteps: [
                addHtml('Create a new folder called <strong>validators</strong>'),
                addHtml('Create a new file called called <strong>reduxFormBasicValidator.js</strong>'),
            ],
        },
        {
            keyReplace: 'rfgiv3',
            fragment: (
`import isEmpty from 'lodash/isEmpty';

import {
    makeValidator,
    joinValidators,
} from 'eventbrite_design_system/utils/validation/validation';
import {
    isProvided,
    makeHasMaxLength,
} from 'js-utils/validators';

const validator = (formValues, componentProps) => {
    debugger;
    const firstFieldValidator = makeValidator({
        'firstField': [
            {
                validator: isProvided,
                errorMessage: 'first element is required',
            },
            {
                validator: makeHasMaxLength(10),
                errorMessage: 'only 10 chars',
            },
        ]
    });
    const fifthFieldValidator = makeValidator({
        '5Field': [
            {
                validator: isProvided,
                errorMessage: 'this element is provided',
            },
        ]
    });
    const customeValidationError = ({'5Field': field}) => {
        let errors = {};
        if (field === 'redux') {
            errors = {
                '5Field': 'Error in this field, not redux allowed'
            }
        } else if (field === 'redux-form') {
            errors = {
                '5Field': 'Redux form not allowed',
                'firstField': 'Redux form not allowed',
            }
        }
        return errors;
    };
    const selectFieldValidation = (fields) => {
        let errors = {};
        if (!isEmpty(componentProps.reduxBasicFormData['reduxFormBasic'])) {
            const registeredFields = componentProps.reduxBasicFormData['reduxFormBasic'].registeredFields;
            if (fields.secondField === 'second') {
                errors = {
                    ...Object.keys(registeredFields).reduce((acc, field) => ({
                        ...acc,
                        [field]: 'trigger multiple errors at once',
                    }), {})
                }
            }
        }
        return errors;
    };

    const joinedValidators = joinValidators(
        firstFieldValidator,
        fifthFieldValidator,
        customeValidationError,
        selectFieldValidation
    )(formValues);

    return joinedValidators;
}

export default validator;
`
            ),
        },
        {
            keyReplace: 'rfgiv4',
            prevSteps: [
                'Setup your connector'
            ],
            prevStepsBlock: [
                addHtml('In our connector (copied from <strong>connectReduxFormBasic.js</strong>) edit the mapStateToProps function to be similar to the below code:')
            ],
            fragment: (
`...
const mapStateToProps = (
    {
        form: reduxBasicFormData,
    }
) => ({ reduxBasicFormData });
...`
            ),
        },
    ],
    resolutionInfo: [
        {
            keyReplace: 'rfriv1',
            prevSteps: [
                'connectReduxFormFormValidator.js',
            ],
            fragment: (
`import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withReduxForm from 'eventbrite_design_system/form/withReduxForm';

import ReduxFormBasic from '../../components/reduxForm/ReduxFormBasic';
import { saveReduxFormBasicData } from '../../actions/reduxFormBasic';
import validate from '../../validators/reduxFormBasicValidator';

const mapStateToProps = (
    {
        form: reduxBasicFormData,
    }
) => ({ reduxBasicFormData });

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
        validate,
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
            keyReplace: 'rfriv3',
            prevSteps: [
                'reduxFormBasicValidator.js',
            ],
            fragment: (
`import isEmpty from 'lodash/isEmpty';

import {
    makeValidator,
    joinValidators,
} from 'eventbrite_design_system/utils/validation/validation';
import {
    isProvided,
    makeHasMaxLength,
} from 'js-utils/validators';

const validator = (formValues, componentProps) => {
    debugger;
    const firstFieldValidator = makeValidator({
        'firstField': [
            {
                validator: isProvided,
                errorMessage: 'first element is required',
            },
            {
                validator: makeHasMaxLength(10),
                errorMessage: 'only 10 chars',
            },
        ]
    });
    const fifthFieldValidator = makeValidator({
        '5Field': [
            {
                validator: isProvided,
                errorMessage: 'this element is provided',
            },
        ]
    });
    const customeValidationError = ({'5Field': field}) => {
        let errors = {};
        if (field === 'redux') {
            errors = {
                '5Field': 'Error in this field, not redux allowed'
            }
        } else if (field === 'redux-form') {
            errors = {
                '5Field': 'Redux form not allowed',
                'firstField': 'Redux form not allowed',
            }
        }
        return errors;
    };
    const selectFieldValidation = (fields) => {
        let errors = {};
        if (!isEmpty(componentProps.reduxBasicFormData['reduxFormBasic'])) {
            const registeredFields = componentProps.reduxBasicFormData['reduxFormBasic'].registeredFields;
            if (fields.secondField === 'second') {
                errors = {
                    ...Object.keys(registeredFields).reduce((acc, field) => ({
                        ...acc,
                        [field]: 'trigger multiple errors at once',
                    }), {})
                }
            }
        }
        return errors;
    };

    const joinedValidators = joinValidators(
        firstFieldValidator,
        fifthFieldValidator,
        customeValidationError,
        selectFieldValidation
    )(formValues);

    return joinedValidators;
}

export default validator;
`
            )
        }
    ]
};