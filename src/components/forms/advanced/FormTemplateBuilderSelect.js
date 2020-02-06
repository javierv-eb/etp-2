import React from 'react';

import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import MultiselectField from 'eventbrite_design_system/inputField/MultiselectField';
import InputField from 'eventbrite_design_system/inputField/InputField';
import IconButton from 'eventbrite_design_system/iconButton/IconButton';
import PlusChunkySvg from 'eventbrite_design_system/iconography/icons/PlusChunky';
import {STYLE_STATIC} from 'eventbrite_design_system/inputField/constants';

const SelectComponent = ({
    setValues,
    editedComponent = {},
    removeValues
}) => {
    return (
        <div>
            <h4>Select field builder</h4>
            <div className="eds-g-cell eds-g-cell-1-1">
                <ValidationFormField
                    v2={true}
                    name="name"
                    label="Select Field Name"
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
                    label="Select Field Label"
                >
                    <InputField
                        id="label"
                        label="Enter Field Label"
                    />
                </ValidationFormField>
            </div>
            <h4>Add values to your select component</h4>
            <div className="eds-g-cell eds-g-cell-5-12 eds-l-pad-right-2">
                <ValidationFormField
                    v2={true}
                    name="internalValue"
                    label="Internal Value"
                >
                    <InputField
                        id="internalValue"
                        style={STYLE_STATIC}
                        label="Enter internal Field Name"
                    />
                </ValidationFormField>
            </div>
            <div className="eds-g-cell eds-g-cell-5-12">
                <ValidationFormField
                    v2={true}
                    name="displayValue"
                    label="Display Name"
                >
                    <InputField
                        id="displayValue"
                        style={STYLE_STATIC}
                        label="Enter Display Value"
                    />
                </ValidationFormField>
            </div>
            <div className="eds-g-cell eds-g-cell-2-12">
                <div className="eds-align--right">
                    <IconButton
                        iconType={<PlusChunkySvg />}
                        title="Icon Button example - default"
                        onClick={setValues.bind(null, ['internalValue', 'displayValue'])}
                    />
                </div>
            </div>
            <h4>Select field component</h4>
            <div>
                <ValidationFormField
                        v2={true}
                        name="selectMulti"
                >
                    <MultiselectField
                        id="selectMulti"
                        label="Select Field"
                        placeholder="Select data to remove"
                        values={editedComponent.values || []}
                        shouldShowSelectAll={true}
                        onApplyButtonClick={removeValues.bind(this, 'selectMulti')}
                    />
                </ValidationFormField>
            </div>
        </div>
    )
};

export default SelectComponent;
