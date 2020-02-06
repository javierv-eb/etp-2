import React from 'react';
import isEmpty from 'lodash/isEmpty';

import DataTable from 'eventbrite_design_system/dataTable/DataTable';
import EmptyState from 'eventbrite_design_system/emptyState/EmptyState';
import GhostGraphicSvg from 'eventbrite_design_system/iconography/icons/GhostGraphic';
import withOverlayControls from "eventbrite_design_system/structure/hoc/withOverlayControls";

import formSampler from './formSampler/FormSampler';

const TABLE_ACTIONS = [
    {
        value: 'edit',
        content: 'Edit Template'
    },
    {
        value: 'delete',
        content: 'Delete Template'
    },
    {
        value: 'view',
        content: 'View Template'
    },
];
const COLUMNS = [
    {
        fieldName: 'id',
        fieldLabel: 'ID',
        isEditable: false,
        isSortable: true,
    },
    {
        fieldName: 'name',
        fieldLabel: 'Form Name',
        isEditable: false,
        isSortable: true,
    },
];

class FormTemplateSelection extends React.PureComponent {
    componentDidMount() {
        this.props.onLoad();
    }
    _handleOnFormAction = (type, formId) => {
        const {
            onEditForm,
            onDeleteForm,
            formTemplates,
            showOverlay
        } = this.props;

        if (type === 'edit') {
            return onEditForm(formId);
        } else if (type === 'delete') {
            return onDeleteForm(formId);
        }

        const FormSampler = formSampler(formTemplates.find(({_id}) => _id === formId));

        showOverlay(
            'modal',
            {
                primaryText: 'Submit',
                primaryType: 'fill',
                secondaryText: 'Close',
                secondaryType: 'follow',
                children: (
                    <FormSampler
                        formTemplate={formTemplates.find(({_id}) => _id === formId)}
                        onModalSubmitBind={this.handleModalSubmitBind}
                        onSubmit={this.handleModalSubmit}
                    />
                ),
                onPrimaryAction: this.handleTriggerModalSubmit
            }
        );

    }

    render() {
        const {
            formTemplates,
        } = this.props;
        if (isEmpty(formTemplates)) {
            return (
                <div className="eds-align--center">
                    <EmptyState
                        graphicType={<GhostGraphicSvg />}
                        title="There is no form templates"
                        primaryText="Please add a new template"
                    />
                </div>
            )
        }
        return (
            <DataTable
                items={formTemplates.map(({name, _id}) => ({
                    name,
                    id: _id
                }))}
                columns={COLUMNS}
                itemActions={TABLE_ACTIONS}
                onItemAction={this._handleOnFormAction}
            />
        );
    }
};

export default withOverlayControls(FormTemplateSelection);
