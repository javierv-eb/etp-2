import React from 'react';
import isEmpty from 'lodash/isEmpty';

import withOverlayControls from "eventbrite_design_system/structure/hoc/withOverlayControls";
import CardList from 'eventbrite_design_system/cardList/CardList';
import IconButton from 'eventbrite_design_system/iconButton/IconButton';
import * as cardConstants from 'eventbrite_design_system/card/constants';
import InputField from 'eventbrite_design_system/inputField/InputField';
import SelectField from 'eventbrite_design_system/inputField/SelectField';
import Checkbox from 'eventbrite_design_system/checkbox/Checkbox';
import Radio from 'eventbrite_design_system/radio/Radio';
import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import {
    STYLE_STATIC,
    STYLE_BASIC,
} from 'eventbrite_design_system/inputField/constants';
import Button from 'eventbrite_design_system/button/Button';
import Illustration from 'eventbrite_design_system/illustration/Illustration';
import CalendarRepeatEventIllustration from 'eventbrite_design_system/iconography/icons/CalendarRepeatEventIllustration';
import PencilChunkySvg from 'eventbrite_design_system/iconography/icons/PencilChunky';
import CrossChunkySvg from 'eventbrite_design_system/iconography/icons/CrossChunky';

import FormTemplateBuilderModal from '../../../containers/connectFormTemplateBuilderModal';

const AddNewSection = ({onNewSection}) => (
    <div className="eds-align--right">
    {/* eslint-disable-next-line */}
        <Button style="anchor"
            size="responsive"
            onClick={onNewSection}
        >
            Add new Element
        </Button>
    </div>
);

const EditActions = ({onEdit, onRemove}) => (
    <div className="eds-g-cell eds-g-cell-2-12">
        <div className="eds-align--right">
            <IconButton
                iconType={<PencilChunkySvg />}
                title="Icon"
                onClick={onEdit}
            />
            <IconButton
                iconType={<CrossChunkySvg />}
                title="Icon"
                onClick={onRemove}
            />
        </div>
    </div>
);

const CurrentComponents = ({components, onEditSection, onRemoveSection, onSortComponents}) => {
    if (isEmpty(components)) {
        return null;
    }

    const compList = components.map(
        (component, index) => {

            const bindedFunction = onEditSection.bind(null, component.id);
            const bindedRemove = onRemoveSection.bind(null, component.id);
            let content;

            if (component.type === 'select') {
                content = (
                    <>
                        <h4>{component.label}</h4>
                        <div className="eds-g-cell eds-g-cell-10-12 eds-l-pad-top-2">
                            <SelectField
                                id={component.name}
                                label={component.name}
                                values={component.values}
                                style={STYLE_BASIC}
                            />
                        </div>
                    </>
                );
            } else if (component.type === 'input') {
                content = (
                    <>
                        <h4>{component.label}</h4>
                        <div className="eds-g-cell eds-g-cell-10-12 eds-l-pad-top-2">
                            <InputField
                                id={component.name}
                                label={component.name}
                                style={STYLE_BASIC}
                            />
                        </div>
                    </>
                )
            }  else if (component.type === 'checkbox') {
                content = (
                    <div className="eds-g-cell eds-g-cell-10-12 eds-l-pad-top-2">
                        <Checkbox
                            id={component.name}
                        >
                            {component.label}
                        </Checkbox>
                    </div>
                );
            } else {
                content = (
                    <>
                        <h4>{component.label}</h4>
                        <div className="eds-g-cell eds-g-cell-10-12 eds-l-pad-top-2">
                            <Radio
                                id={component.name}
                                label={component.name}
                                values={component.values}
                                style={STYLE_BASIC}
                            />
                        </div>
                    </>
                )
            }
            return {
                id: component.id,
                content: (
                    <div className="eds-g-cell eds-g-cell-1-1 eds-l-pad-vert-2">
                        {content}
                        <EditActions
                            onEdit={bindedFunction}
                            onRemove={bindedRemove}
                        />
                    </div>
                )
            }
        }
    );

    const sortItems = ({arrayMove, oldIndex, newIndex}) => {
        onSortComponents(arrayMove(compList, oldIndex, newIndex).map(({id}) => id));
    };

    return (
        <CardList
            style={cardConstants.CARD_STYLE_SIMPLE}
            items={compList}
            onSortEnd={sortItems}
        />
    );
}

class FormTemplateBuilder extends React.PureComponent {
    handleShowOverlayModal = (id) => {
        this.props.clearCurrentComponent();

        if (id) {
            this.props.onEditCurrentElement(id);
        }
        this.props.showOverlay(
            'modal',
            {
                type: 'complex',
                primaryText: 'Save',
                primaryType: 'fill',
                secondaryText: 'Close',
                secondaryType: 'follow',
                children: (
                    <FormTemplateBuilderModal
                        onModalSubmitBind={this.handleModalSubmitBind}
                        onSubmit={this.handleModalSubmit}
                    />
                ),
                illustration: (<Illustration
                    type={<CalendarRepeatEventIllustration />}
                    height="420px"
                    width="220px"
                />),
                onPrimaryAction: this.handleTriggerModalSubmit
            }
        );
    }
    handleModalSubmitBind = (onHandleModalSubmit) => {
        this.modalSubmitForm = onHandleModalSubmit;
    }

    handleModalSubmit = (data) => {
        this.props.addComponent(data);
    }

    handleTriggerModalSubmit = () => {
        this.modalSubmitForm();
    }

    render() {
        const {
            components,
            onRemoveSection,
            onSortComponents,
            onClearForm,
        } = this.props;
        return (
            <form className="eds-l-pad-bot-20">
                <div className="eds-g-cell eds-g-cell-1-1 eds-l-pad-top-4 eds-l-lg-pad-right-4 eds-l-ln-pad-right-4 eds-l-lw-pad-right-4 eds-l-md-pad-right-4 eds-l-mn-pad-right-4 eds-l-mw-pad-right-4">
                    <div className="eds-l-pad-left-10">
                        <ValidationFormField
                            v2={true}
                            name="templateName"
                        >
                            <InputField
                                id="templateName"
                                style={STYLE_STATIC}
                                label="Enter your form teamplte name"
                                placeholder="You form name"
                            />
                        </ValidationFormField>
                    </div>
                    <CurrentComponents                        
                        components={components}
                        onEditSection={this.handleShowOverlayModal}
                        onRemoveSection={onRemoveSection}
                        onSortComponents={onSortComponents}
                    />
                    <AddNewSection onNewSection={this.handleShowOverlayModal}/>
                    {!isEmpty(components) ?
                        <div className="eds-align--right eds-l-pad-top-10">
                            <div className="eds-l-pad-right-2">
                                <Button
                                    size="responsive"
                                    onClick={onClearForm}
                                >
                                    Clean Form
                                </Button>
                            </div>
                            {/* eslint-disable-next-line */}
                            <Button style="fill"
                                size="responsive"
                                onClick={this.props.handleSubmit}
                            >
                                Add template
                            </Button>
                        </div>
                    : null }
                </div>
            </form>
        );
    }
};

export default withOverlayControls(FormTemplateBuilder);
