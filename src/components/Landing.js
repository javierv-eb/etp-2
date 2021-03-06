import React from 'react';
import {browserHistory} from 'react-router';
import TextList from 'eventbrite_design_system/textList/TextList';
import MapSvg from 'eventbrite_design_system/iconography/icons/Map';
import ExpansionPanel from 'eventbrite_design_system/expansionPanel/ExpansionPanel';

const items = [
    {
        content: 'Grid exercise I',
        value: 'ex1',
        iconType: <MapSvg />,
    },
    {
        content: 'Grid exercise II',
        value: 'ex2',
        iconType: <MapSvg />,
    },
];

const hocItems = [
    {
        content: 'Basic Structure',
        value: 'structure/basicStructure',
        iconType: <MapSvg />,
    },
    {
        content: 'Notifications',
        value: 'structure/hoc/mainControls/notification',
        iconType: <MapSvg />,
    },
    {
        content: 'Action Bar',
        value: 'structure/hoc/mainControls/actionBar',
        iconType: <MapSvg />,
    },
    {
        content: 'Overlay Modal',
        value: 'structure/hoc/overlayControls/overlayModal',
        iconType: <MapSvg />,
    },
    {
        content: 'Overlay Dialog',
        value: 'structure/hoc/overlayControls/overlayDialog',
        iconType: <MapSvg />,
    },
    {
        content: 'Focus Drawer',
        value: 'structure/hoc/focusDrawer/',
        iconType: <MapSvg />,
    },
    {
        content: 'Focus Drawer with router',
        value: 'routerStructure/hoc/focusDrawer',
        iconType: <MapSvg />,
    },
];
const formItems = [
    {
        content: 'Redux Form Basic',
        value: 'reduxForm/basic',
        iconType: <MapSvg />,
    },
    {
        content: 'Redux Form Basic II',
        value: 'reduxForm/basic2',
        iconType: <MapSvg />,
    },
    {
        content: 'Redux Form with validation',
        value: 'reduxForm/validations',
        iconType: <MapSvg />,
    },
    {
        content: 'Redux integration sample',
        value: 'advanced/templateBuilder',
        iconType: <MapSvg />,
    }
]

const navigate = (route) => {
    browserHistory.push(route);
};

const Landing = ({history}) => (
    <>
        <ExpansionPanel
            linkText="General CSS"
            verticalMargin="both"
            //eslint-disable-next-line react/style-prop-object
            style="container"
        >
            <TextList items={items} onItemSelect={navigate}/>
        </ExpansionPanel>

        <ExpansionPanel
            linkText="EDS Structure"
            verticalMargin="both"
            //eslint-disable-next-line react/style-prop-object
            style="container"
        >
            <TextList items={hocItems} onItemSelect={navigate}/>
        </ExpansionPanel>

        <ExpansionPanel
            linkText="Redux Form"
            verticalMargin="both"
            //eslint-disable-next-line react/style-prop-object
            style="container"
        >
            <TextList items={formItems} onItemSelect={navigate}/>
        </ExpansionPanel>
    </>
);

export default Landing;
