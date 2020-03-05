import React, {Component} from 'react';
import { browserHistory } from 'react-router';

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
                        {/* eslint-disable-next-line */}
                        <a style={{position: 'absolute', top: '50px', right: '74px',}}  onClick={() =>  browserHistory.push('/')}>Current exercies</a>
                    </section>
                </Layout>
            </Structure>
        )
    }
};
