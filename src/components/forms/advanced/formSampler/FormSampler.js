import React, { PureComponent } from 'react';

import withReduxForm from 'eventbrite_design_system/form/withReduxForm';
import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import Checkbox from 'eventbrite_design_system/checkbox/Checkbox';
import Radio from 'eventbrite_design_system/radio/Radio';
import InputField from 'eventbrite_design_system/inputField/InputField';
import SelectField from 'eventbrite_design_system/inputField/SelectField';
import {
    STYLE_BASIC,
    STYLE_STATIC,
} from 'eventbrite_design_system/inputField/constants';

const FORM_ELEMENTS = {
    checkbox: ({name, label}) => (
        <Checkbox
            id={name}
        >
            {label}
        </Checkbox>
    ),
    input: ({name}) => (
        <InputField
            id={name}
            label={name}
            style={STYLE_STATIC}
        />
    ),
    radio: ({name, values}) => (
        <Radio
            id={name}
            name={name}
            label={name}
            values={values}
            style={STYLE_BASIC}
        />
    ),
    select: ({name, values}) => (
        <SelectField
            id={name}
            label={name}
            values={values}
            style={STYLE_BASIC}
        />
    )
};

const FormStructure = ({name, fields}) => {
    const transformedFields = fields.map(
        (field) => {
            const CurrentField = FORM_ELEMENTS[field.type];
            debugger;
            return (
                <div className="eds-g-cell eds-g-cell-1-1 eds-l-pad-vert-4" key={field.id}>
                    <ValidationFormField
                        v2={true}
                        name={field.name}
                        label={field.label}
                    >
                        <CurrentField {...field}/>
                    </ValidationFormField>
                </div>
            );
        }
    )

    return (
        <div>
            <h1>{name}</h1>
            {transformedFields}
        </div>
    )
};

const formSampler = ({name, fields}) => {
    class FormSampler extends PureComponent {
        render() {
            return (
                <FormStructure
                    name={name}
                    fields={fields}
                    {...this.props}
                />
            )
        };
    }

    return withReduxForm({
        form: name,
    })(FormSampler);
};

export default formSampler;
