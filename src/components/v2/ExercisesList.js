import React from 'react';
import { browserHistory } from 'react-router';

import ExpansionPanel from 'eventbrite_design_system/expansionPanel/ExpansionPanel';
import TextList from 'eventbrite_design_system/textList/TextList';
import CodeChunkySvg from 'eventbrite_design_system/iconography/icons/CodeChunky';
import withOverlayControls from 'eventbrite_design_system/structure/hoc/withOverlayControls';
import ReactChunkySvg from 'eventbrite_design_system/iconography/icons/ReactChunky';

import ExercisesListFragment from './GenericPageFragment';

import { MODAL_INFO } from '../../constants/redux';
import { EDS_MODAL_INFO } from '../../constants/eds';
import { REDUX_FORM_INFO } from '../../constants/reduxForm';
import { BREWERY_INFO } from '../../constants/brewery';

const reduxItems = [
    {
        content: 'Basic React Redux exercise',
        value: 'v2/exercises/redux-basic',
        iconType: <ReactChunkySvg />,
        title: 'Redux Basic exercise',
        steps: MODAL_INFO['redux-basic'],
    },
    {
        content: 'Working with thunk middleware',
        value: 'v2/exercises/redux-thunk',
        title: 'Redux Thunk basic exercise',
        iconType: <ReactChunkySvg />,
        steps: MODAL_INFO['redux-thunk'],
    },
    {
        content: 'Enhance the thunk exercise',
        title: 'Redux Thunk enhance',
        value: 'v2/exercises/redux-thunk-2',
        iconType: <ReactChunkySvg />,
        steps: MODAL_INFO['redux-thunk-2'],
    },
];

const edsHOCItems = [
    {
        content: 'Main Controls - Notifications',
        value: 'v2/exercises/main-controls-notification',
        iconType: <CodeChunkySvg />,
        title: 'Notifications',
        steps: EDS_MODAL_INFO.mainControlsNotification,
    },
    {
        content: 'Main Controls - Action Bar',
        value: 'v2/exercises/main-controls-action-bar',
        iconType: <CodeChunkySvg />,
        title: 'Action Bar',
        steps: EDS_MODAL_INFO.mainControlsActionBar,
    },
    {
        content: 'Overlay Controls - Dialog',
        value: 'v2/exercises/overlay-controls-dialog',
        iconType: <CodeChunkySvg />,
        title: 'Dialog',
        steps: EDS_MODAL_INFO.overlayControlsDialog,
    },
    {
        content: 'Overlay Controls - Modal',
        value: 'v2/exercises/overlay-controls-modal',
        iconType: <CodeChunkySvg />,
        title: 'Modal',
        steps: EDS_MODAL_INFO.overlayControlsModal,
    },
    {
        content: 'Focus Drawer Controls',
        value: 'v2/exercises/focus-drawer',
        iconType: <CodeChunkySvg />,
        title: 'Focus Drawer',
        steps: EDS_MODAL_INFO.focusDrawer,
    },
];

const reduxFormItems = [
    {
        content: 'Redux Form Basic',
        value: 'v2/exercises/redux-form-basic',
        iconType: <ReactChunkySvg />,
        title: 'Redux Form Basic',
        steps: REDUX_FORM_INFO.reduxFormBasic,
    },
    {
        content: 'Redux Form - Initialize - From State',
        value: 'v2/exercises/redux-form-init-state',
        iconType: <ReactChunkySvg />,
        title: 'Redux Form State initialization',
        steps: REDUX_FORM_INFO.reduxFormStateInit,
    },
    {
        content: 'Redux Form - Initialize - Action Creator',
        value: 'v2/exercises/redux-form-init-action-creator',
        iconType: <ReactChunkySvg />,
        title: 'Redux Form Action Creator initialization',
        steps: REDUX_FORM_INFO.reduxFormStateActionCreator,
    },
    {
        content: 'Redux Form - Selector',
        value: 'v2/exercises/redux-form-selector',
        iconType: <ReactChunkySvg />,
        title: 'Redux Form Selector',
        steps: REDUX_FORM_INFO.reduxFormSelector,
    },
    {
        content: 'Redux Form - Validators',
        value: 'v2/exercises/redux-form-validators',
        iconType: <ReactChunkySvg />,
        title: 'Redux Form Validators',
        steps: REDUX_FORM_INFO.reduxFormValidator,
    },
];

const breweriesItems = [
    {
        content: 'Brewery - Layout',
        value: 'v2/exercises/brewery-layout',
        iconType: <ReactChunkySvg />,
        title: 'Improve Brewery Layout',
        steps: BREWERY_INFO.breweryLayout,
    },
    {
        content: 'Brewery - Layout - Add Custom Breweries',
        value: 'v2/exercises/brewery-layout-2',
        iconType: <ReactChunkySvg />,
        title: 'Enhance Brewery Layout',
        steps: BREWERY_INFO.breweryLayout2,
    },
];

const allItems = [...edsHOCItems, ...reduxItems, ...reduxFormItems, ...breweriesItems];

class ExercisesList extends React.Component {
    handleNavigate = (route) => {
        browserHistory.push(route);
    };

    handleNavigation = (route) => {
        const {
            title,
            steps,
        } = allItems.find(({ value }) => value === route);

        this.props.showOverlay(
            'modal',
            {
                title: title,
                children: (
                    <>
                        {steps.map((data) => <ExercisesListFragment {...data} key={data.keyReplace} />)}
                    </>
                ),
                primaryText: 'Go',
                onPrimaryAction: this.handleNavigate.bind(null, route),
                primaryType: 'fill',
                secondaryText: 'Cancel',
                secondaryType: 'link',
            }
        );
    }

    render() {
        return (
            <section className="eds-best-practices eds-l-mar-vert-10 etp-expansion-panel">
                <ExpansionPanel
                    linkText="Redux"
                    verticalMargin="both"
                    //eslint-disable-next-line react/style-prop-object
                    style="container"
                >
                    <TextList items={reduxItems} onItemSelect={this.handleNavigation}/>
                </ExpansionPanel>
                <ExpansionPanel
                    linkText="Eds Structure HOCs"
                    verticalMargin="both"
                    //eslint-disable-next-line react/style-prop-object
                    style="container"
                >
                    <TextList items={edsHOCItems} onItemSelect={this.handleNavigation}/>
                </ExpansionPanel>
                <ExpansionPanel
                    linkText="Redux Form"
                    verticalMargin="both"
                    //eslint-disable-next-line react/style-prop-object
                    style="container"
                >
                    <TextList items={reduxFormItems} onItemSelect={this.handleNavigation}/>
                </ExpansionPanel>
                <ExpansionPanel
                    linkText="Breweries"
                    verticalMargin="both"
                    //eslint-disable-next-line react/style-prop-object
                    style="container"
                >
                    <TextList items={breweriesItems} onItemSelect={this.handleNavigation}/>
                </ExpansionPanel>
            </section>
        )
    }
}

export default withOverlayControls(ExercisesList);

