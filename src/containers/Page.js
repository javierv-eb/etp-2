import React, {Component} from 'react';

import Structure from 'eventbrite_design_system/structure/Structure';
import Layout from 'eventbrite_design_system/layout/Layout';

import Landing from '../components/Landing';


export default class Page extends Component {
    render() {
        return (
            <Structure>
                <Layout
                    maxWidth="large"
                    hasHorizontalGutters={true}
                >
                    <section className="eds-l-pad-top-10">
                        <h1>ETP Exercises</h1>
                        <Landing />
                    </section>
                </Layout>
            </Structure>
        )
    }
};
