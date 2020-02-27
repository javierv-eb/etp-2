import React, {Component} from 'react';

import Structure from 'eventbrite_design_system/structure/Structure';
import Layout from 'eventbrite_design_system/layout/Layout';
import Tabs from 'eventbrite_design_system/tabs/Tabs';
import addOverlayControls from "eventbrite_design_system/structure/hoc/addOverlayControls";


import Overview from '../../components/v2/Overview';
import GettingStarted from '../../components/v2/GettingStarted';
import ExercisesList from '../../components/v2/ExercisesList';

const items = [
    {
        value: 0,
        displayName: 'Overview',
        content: <Overview />
    },
    {
        value: 1,
        displayName: 'Getting Started',
        content: <GettingStarted />
    },
    {
        value: 2,
        displayName: 'Exercises Guide',
        content: <ExercisesList />
    },
];

class Page extends Component {
    render() {
        return (
            <Structure {...this.props}>
                <Layout
                    maxWidth="large"
                    hasHorizontalGutters={false}
                >
                    <section className="eds-l-pad-top-10">
                        <h1>Front-End Exercises Guide</h1>
                        <Tabs
                            items={items}
                        />
                    </section>
                </Layout>
            </Structure>
        )
    }
};

export default addOverlayControls(Page);
