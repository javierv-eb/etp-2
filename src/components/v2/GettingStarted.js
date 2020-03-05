import React, { PureComponent } from 'react';
import { browserHistory } from 'react-router';

import ExpansionPanel from 'eventbrite_design_system/expansionPanel/ExpansionPanel';
import {STYLE_CONTAINER, VERTICAL_MARGIN_BOTH} from 'eventbrite_design_system/expansionPanel/constants';

import { STARTED_BUILDER, CONFIG_BUILDER, CONFIG_LAYER } from '../../constants/gettingStartedConstants';
import StartedFragment from './GenericPageFragment';

import './v2.scss';

export default class GettingStarted extends PureComponent {
    handleNavigate = () => {
        browserHistory.push('/v1');
    };
    
    render() {
        return (
            <section className="eds-best-practices eds-l-mar-vert-10 etp-expansion-panel" data-spec="eds-best-practices">
                <h1 className="eds-text-hm eds-l-pad-bot-6">Basic project config</h1>
                <ul className="eds-l-pad-left-2 eds-l-pad-bot-6">
                    <li>This guide aims to configure a new react project from scratch which will be used to build further exercises</li>
                    <li>It is recommended to follow this guide in order to setup correctly your project but you might fork the already configured <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution" target="_blank" rel="noopener noreferrer">Initial Project</a></li>
                </ul>
                <ExpansionPanel
                    linkText="Initial configuration"
                    verticalMargin={VERTICAL_MARGIN_BOTH}
                    style={STYLE_CONTAINER}
                >
                    {STARTED_BUILDER.map((data) => (<StartedFragment {...data} key={data.keyReplace} />))}
                </ExpansionPanel>
                <ExpansionPanel
                    linkText="Setting up your project"
                    verticalMargin={VERTICAL_MARGIN_BOTH}
                    style={STYLE_CONTAINER}
                >
                    {CONFIG_BUILDER.map((data) => (<StartedFragment {...data} key={data.keyReplace} />))}
                </ExpansionPanel>
                <ExpansionPanel
                    linkText="Setting up your project layout"
                    verticalMargin={VERTICAL_MARGIN_BOTH}
                    style={STYLE_CONTAINER}
                >
                    {CONFIG_LAYER.map((data) => (<StartedFragment {...data} key={data.keyReplace} />))}
                </ExpansionPanel>
                 {/* eslint-disable-next-line */}
                 <a style={{position: 'absolute', top: '-29px', right: '0',}} className="eds-l-pad-top-20 eds-l-pad-bot-20" onClick={this.handleNavigate}>Old exercies</a>
            </section>
        )
    }
};