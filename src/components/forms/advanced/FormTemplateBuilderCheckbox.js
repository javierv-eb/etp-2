import React from 'react';

import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import Checkbox from 'eventbrite_design_system/checkbox/Checkbox';
import InputField from 'eventbrite_design_system/inputField/InputField';

const CheckboxComponent = ({
    setValues,
    editedComponent = {},
    removeValues
}) => {
    return (
        <div>
            <h4>Checkbox field builder</h4>
            <div className="eds-g-cell eds-g-cell-1-1">
                <ValidationFormField
                    v2={true}
                    name="name"
                    label="Input Field Name"
                >
                    <InputField
                        id="name"
                        label="Enter Field Name"
                    />
                </ValidationFormField>
            </div>
            <div className="eds-g-cell eds-g-cell-1-1">
                <ValidationFormField
                    v2={true}
                    name="label"
                    label="Input Field Label"
                >
                    <InputField
                        id="label"
                        label="Enter Field Label"
                    />
                </ValidationFormField>
            </div>
            <h4>Checkbox component</h4>
            <div>
                <Checkbox
                    id="sampleCheckbox"
                >
                </Checkbox>
            </div>
        </div>
    )
};

export default CheckboxComponent;
