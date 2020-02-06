import { connect } from 'react-redux';

import FormTemplate from '../components/forms/advanced/FormTemplate';
import {
    loadTemplateList,
    editForm,
    deleteForm,
} from '../actions/formTemplate';

const mapStateToProps = (state) => {
    return {
        formTemplates: state.formTemplate.formList
    };
};
const mapDispatchToProps = (dispatch) => ({
    onLoad: () => dispatch(loadTemplateList()),
    onEditForm: (formId) => dispatch(editForm(formId)),
    onDeleteForm: (formId) => dispatch(deleteForm(formId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormTemplate);
