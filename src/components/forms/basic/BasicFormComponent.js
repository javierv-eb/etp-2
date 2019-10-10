import React, { Component } from "react";
import ClassNames from 'classnames';
import Button from "eventbrite_design_system/button/Button";
import InputField from 'eventbrite_design_system/inputField/InputField';
import SelectField from 'eventbrite_design_system/inputField/SelectField';
import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import {
    STYLE_STATIC,
    STYLE_BASIC,
} from 'eventbrite_design_system/inputField/constants';

export default class FormComponent extends Component {
    handleSubmit = (event) => {
        this.props.handleSubmit();
    }
    componentDidUpdate() {
        if (this.props.onReduxChange) {
            this.props.onReduxChange();
        }
    }
    render() {
        const {
            isSmall = true,
        } = this.props;
        const formClasses = ClassNames(
            'eds-g-cell',
            'eds-g-cell-1-1',
            {
                'eds-g-cell-mn-1-2': isSmall,
            },
            'eds-l-pad-top-4',
            'eds-l-lg-pad-right-4',
            'eds-l-ln-pad-right-4',
            'eds-l-lw-pad-right-4',
            'eds-l-md-pad-right-4',
            'eds-l-mn-pad-right-4',
            'eds-l-mw-pad-right-4'
        )
        return (
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
        );
    }
};
