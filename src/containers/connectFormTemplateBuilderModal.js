import {connect} from 'react-redux';

import FormTemplateBuilderModal from '../components/forms/advanced/FormTemplateBuilderModal'
import {
    setNewComponent,
    changeField,
    getFieldValue,
    setFieldValues,
    removeValues,
    initForm,
} from '../actions/formTemplate';

const mapStateToProps = (state) => {

    return {
        currentComponent: getFieldValue(state, 'fieldSelector'),
        editedComponent: state.formTemplate.currentComponent,
    }
};

const mapDispatchToProps = (dispatch) => ({
    setNewComponent: (componentId) => dispatch(setNewComponent(componentId)),
    onFieldSelectorChange: (nextValue) => dispatch(changeField(nextValue)),
    setValues: (fields) => dispatch(setFieldValues(fields)),
    removeValues: (field) => dispatch(removeValues(field)),
    onLoad: (component) => dispatch(initForm(component))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormTemplateBuilderModal);
