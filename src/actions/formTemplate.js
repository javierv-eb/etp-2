import {
    formValueSelector,
    change,
    initialize
} from 'redux-form';
import groupBy from 'lodash/groupBy'

import {
    createFormTemplate,
    loadFormTemplateList,
    deleteFormTemplate,
} from '../api/formTemplate';

export const UPDATE_COMPONENT = 'UPDATE_COMPONENT';
export const ADD_COMPONENT_TO_LIST = 'ADD_COMPONENT_TO_LIST';
export const UPDATE_COMPONENT_LIST = 'UPDATE_COMPONENT_LIST';
export const REFRESH_TEMPLATE_LIST = 'REFRESH_TEMPLATE_LIST';

const updateComponent = (payload) => ({
    type: UPDATE_COMPONENT,
    payload
});

const addComponentList = (payload) => ({
    type: ADD_COMPONENT_TO_LIST,
    payload
});

const updateComponentList = (payload) => ({
    type: UPDATE_COMPONENT_LIST,
    payload
});

const refreshFormTemplateList = (payload) => ({
    type: REFRESH_TEMPLATE_LIST,
    payload
});

export const setNewComponent = (id) => (dispatch) => (
    dispatch(updateComponent({id, new: true}))
);

const fieldValueSelector = formValueSelector('modalElement');
export const getFieldValue = (state, field) => fieldValueSelector(state, field);

export const changeField = (nextValue) => (dispatch, getState) => {
    const {
        formTemplate: {
            currentComponent,
        },
    } = getState();

    dispatch(updateComponent({
        ...currentComponent,
        type: nextValue,
        values: null,
    }));
};

export const setFieldValues = (fields) => (dispatch, getState) => {
    const state = getState();
    const {
        formTemplate: {
            currentComponent,
        },
    } = state;

    if (currentComponent.type === 'select' || currentComponent.type === 'radio') {

        dispatch(updateComponent({
            ...currentComponent,
           values: [
               ...currentComponent.values || [],
               {
                   value: getFieldValue(state, fields[0]),
                   display: getFieldValue(state, fields[1])
               }
            ]
        }));
    }
    fields.forEach((field) => {
        dispatch(change('modalElement', field, null));
    });
};

export const removeValues = (field) => (dispatch, getState) => {
    const state = getState();
    const {
        formTemplate: {
            currentComponent,
        },
    } = state;


    if (currentComponent.type === 'select' || currentComponent.type === 'radio') {
        const excludedFields = getFieldValue(state, field);
        dispatch(updateComponent({
            ...currentComponent,
           values: currentComponent.values.filter(
               ({value}) => ! excludedFields.includes(value)
           )
        }));
    }
};

export const removeCurrentComponent = () => (dispatch) => (
    dispatch(updateComponent(null))
);

export const addComponent = (formData) => (dispatch, getState) => {
    const state = getState();
    const {
        formTemplate: {
            currentComponent: {
                new: isNew,
                ...currentComponent
            },
            components,
        },
    } = state;

    if (isNew) {
        return dispatch(addComponentList({
            ...currentComponent,
            name: formData.name,
            label: formData.label,
        }));
    }

    return dispatch(
        updateComponentList([
            ...components.map(
                (component) => {
                    if (component.id === currentComponent.id)  {
                        return {
                            ...component,
                            ...currentComponent,
                            name: formData.name,
                            label: formData.label,
                        }
                    }
                    return component;
                }
            ),
        ])
    )
};

export const setCurrentComponent = (id) => (dispatch, getState) => {
    const state = getState();
    const {
        formTemplate: {
            components,
        },
    } = state;

    dispatch(updateComponent(components.find(({id: compId}) => id === compId)));
};

export const initForm = (formData) => (dispatch) => {
    dispatch(initialize(
        'modalElement',
        {
            name: formData.name,
            label: formData.label,
            fieldSelector: formData.type
        }
    ))
};

export const removeComponent = (id) => (dispatch, getState) => {
    const state = getState();
    const {
        formTemplate: {
            components,
        },
    } = state;

    dispatch(
        updateComponentList(
            components.filter(
                ({id: compId}) => compId !== id
            )
        )
    );
};

export const sortComponents = (ids) => (dispatch, getState) => {
    const state = getState();
    const {
        formTemplate: {
            components,
        },
    } = state;
    const groups = groupBy(components, 'id');

    dispatch(
        updateComponentList(
            ids.map(
                (id) => groups[id].shift()
            )
        )
    );
};

export const loadTemplateList = () => async(dispatch) => {
    dispatch(
        refreshFormTemplateList(await loadFormTemplateList())
    );
    dispatch(
        initialize(
            'templateBuilder',
        )
    );
    dispatch(
        updateComponentList([])
    );
};

export const clearForm = () => (dispatch) => {
    dispatch(updateComponentList([]));
    dispatch(
        initialize(
            'templateBuilder',
        )
    );
};

export const saveForm = ({templateName}) => async(dispatch, getState) => {
    const state = getState();
    const {
        formTemplate: {
            components,
        },
    } = state;
    await createFormTemplate({
        fields: components.map(
            (component, index) => ({
                ...component,
                order: index,
            })
        ),
        name: templateName
    });
    dispatch(updateComponentList([]));
    dispatch(
        initialize(
            'templateBuilder',
        )
    );
    dispatch(loadTemplateList());
};

export const editForm = (formId) => (dispatch, getState) => {
    const state = getState();
    const {
        formTemplate: {
            formList,
        },
    } = state;
    const {
        name,
        fields: components,
    } = formList.find(({_id}) => _id === formId);
    dispatch(
        initialize(
            'templateBuilder',
            {
                'templateName': name
            }
        )
    );
    dispatch(updateComponentList(components));

}

export const deleteForm = (formId) => async(dispatch) => {
    await deleteFormTemplate(formId);
    dispatch(loadTemplateList());
};