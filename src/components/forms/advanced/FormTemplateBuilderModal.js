import React from 'react';
import isEmpty from 'lodash/isEmpty';

import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import {
    STYLE_STATIC,
    STYLE_BASIC,
} from 'eventbrite_design_system/inputField/constants';
import SelectField from 'eventbrite_design_system/inputField/SelectField';
import withReduxForm from 'eventbrite_design_system/form/withReduxForm';


import {getAvailableComponentList} from './utils';
import SelectComponent from './FormTemplateBuilderSelect';
import InputComponent from './FormTemplateBuilderInput';
import CheckboxComponent from './FormTemplateBuilderCheckbox';
import RadioComponent from './FormTemplateBuilderRadio';

const COMPONENT_WRAPPER_MAP = {
    'select': SelectComponent,
    'input': InputComponent,
    'checkbox': CheckboxComponent,
    'radio': RadioComponent,
    default: () => null
};

const ComponentWrapper = ({currentComponent, ...additionalProps}) => {
    const CurrentComponent = COMPONENT_WRAPPER_MAP[currentComponent] || COMPONENT_WRAPPER_MAP.default;

    return (
        <CurrentComponent {...additionalProps} />
    )
};

class ModalContent extends React.PureComponent {
    
    constructor(props) {
        super(props);
        props.onModalSubmitBind(props.handleSubmit);
        this.fieldId = new Date().getTime();
    }

    componentDidMount() {
        const {
            editedComponent,
            setNewComponent,
            onLoad,
        } = this.props;

        if (isEmpty(editedComponent)) {
            setNewComponent(this.fieldId);
        } else {
            onLoad(editedComponent);
        }
    }

    handleOnChange = (nextValue) => {
        this.props.onFieldSelectorChange(nextValue);
    }

    render() {
        return (
            <form>
                <div className=" eds-g-cell eds-g-cell-1-1 eds-l-pad-top-2 eds-l-pad-vert-2 eds-g-cell--has-overflow">
                    <h3>Please add your new field</h3>
                    <div className="eds-l-pad-top-2">
                        <ValidationFormField
                            v2={true}
                            name="fieldSelector"
                            label="Select Field Type"
                        >
                            <SelectField
                                label="Please select a field"
                                id="fieldSelector"
                                placeholder="select a field"
                                values={getAvailableComponentList()}
                                style={STYLE_BASIC}
                                onChange={this.handleOnChange}
                            />
                        </ValidationFormField>
                        <ComponentWrapper {...this.props} />
                    </div>
                </div>
            </form>
        );
    }
};

export default withReduxForm({
    form: 'modalElement'
})(ModalContent);
