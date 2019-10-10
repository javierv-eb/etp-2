import isEmpty from 'lodash/isEmpty';

import {
    makeValidator,
    joinValidators,
} from 'eventbrite_design_system/utils/validation/validation';
import {
    isProvided,
    makeHasMaxLength,
} from 'js-utils/validators';

const validator = (formValues, componentProps) => {
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
        if (!isEmpty(componentProps.formData["validateForm"])) {
            const registeredFields = componentProps.formData["validateForm"].registeredFields;
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
