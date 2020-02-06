import { connect } from 'react-redux';

import flowRight from 'lodash/flowRight';
import withReduxForm from 'eventbrite_design_system/form/withReduxForm';

import FormTemplateBuilder from '../components/forms/advanced/FormTemplateBuilder';

import {
    removeCurrentComponent,
    addComponent,
    setCurrentComponent,
    removeComponent,
    sortComponents,
    saveForm,
    clearForm
} from '../actions/formTemplate';

const mapStateToProps = (state) => {
    return {
        components: state.formTemplate.components
    }
};
const mapDispatchToProps = (dispatch) => ({
    clearCurrentComponent: () => dispatch(removeCurrentComponent()),
    addComponent: (data) => dispatch(addComponent(data)),
    onEditCurrentElement: (id) => dispatch(setCurrentComponent(id)),
    onRemoveSection: (id) => dispatch(removeComponent(id)),
    onSortComponents: (componentIds) => dispatch(sortComponents(componentIds)),
    onSubmit: (formData) => dispatch(saveForm(formData)),
    onClearForm: () => dispatch(clearForm())
});


export default flowRight(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withReduxForm({
        form: 'templateBuilder'
    })
)(FormTemplateBuilder);