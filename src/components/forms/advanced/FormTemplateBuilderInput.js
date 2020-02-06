import React from 'react';

import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import InputField from 'eventbrite_design_system/inputField/InputField';

const InputComponent = ({
    setValues,
    editedComponent = {},
    removeValues
}) => {
    return (
        <div>
            <h4>Input field builder</h4>
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
            <h4>Input field component</h4>
            <div>
                <InputField
                    id="sampleName"
                    label="Sample field component"
                />
            </div>
        </div>
    )
};

export default InputComponent;
