import React from 'react';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';

import Tabs from 'eventbrite_design_system/tabs/Tabs';
import Docs from '../../components/v2/Docs';

const items = (guide, resolution, Components, props) => {

    const tabs = [
        {
            value: 0,
            displayName: 'Guide',
            content: <Docs guide={guide} />
        },
        {
            value: 1,
            displayName: 'Resolution',
            content: <Docs guide={resolution} />
        },
    ];

    return !isEmpty(Components) || isFunction(Components)
        ? [
            ...tabs,
            {
                value: 3,
                displayName: 'Sample',
                content: <Components {...props} renderCode={false} />,
            }
        ]
        : tabs;
};

const withDocs = ({guide, resolution, Component}) => {
    const WithDocs = (props) => (
        <Tabs
            items={items(guide, resolution, Component, props)}
            initialSelectedTab={ (props.location.hash && props.location.hash.includes('#position='))? parseInt(props.location.hash.split('#position=')[1]) : 0}
        />
    );

    return WithDocs;
};

export default withDocs;
