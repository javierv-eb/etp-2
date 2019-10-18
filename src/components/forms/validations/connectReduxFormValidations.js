import {connect} from 'react-redux';

import flowRight from 'lodash/flowRight';
import withReduxForm from 'eventbrite_design_system/form/withReduxForm';

import validationBasic from './ValidationBasic';
import ValidationFormComponent from '../basic/BasicFormComponent';
import validate from './basicValidator';

export default flowRight(
    connect(
        (state) => {
            const {
                form: formData
            } = state;

            return {
                formData,
                formName: 'validateForm',
                isSmall: false,
                initialValues: {
                    'firstField': 'hey Value'
                }
            };
        },
        (dispatch) => ({
            onSubmit: () => ({})
        })
    ),
    withReduxForm({
        form: 'validateForm',
        validate,
    }),
    validationBasic.bind(null, 'Redux Form Validations', ['Play with the fields to trigger validations']),
)(ValidationFormComponent);
