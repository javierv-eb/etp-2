import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Structure from 'eventbrite_design_system/structure/Structure';
import Layout from 'eventbrite_design_system/layout/Layout';
import flowRight from 'lodash/flowRight';

import addOverlayControls from 'eventbrite_design_system/structure/hoc/addOverlayControls';
import addMainControls from 'eventbrite_design_system/structure/hoc/addMainControls';
import addFocusDrawerControls from 'eventbrite_design_system/structure/hoc/addFocusDrawerControls';
import PhabButton from 'eventbrite_design_system/phab/PhabButton';
import CrossSvg from 'eventbrite_design_system/iconography/icons/Cross';

class SiteStructure extends Component {
    navigate = () => {
        browserHistory.goBack();
    }

    render() {
        return (
            <Structure
                hasIndependentScrolling
                {...this.props}
            >
                <Layout
                    maxWidth="large"
                    hasHorizontalGutters={true}
                >
                    <div className="eds-align--space-between eds-l-pad-top-10">
                        <h1>ETP Exercises</h1>
                        <div>
                            <PhabButton iconType={<CrossSvg />} onClick={this.navigate} size="small" />
                        </div>
                    </div>
                    {this.props.children}
                    {this.props.mainContent}
                </Layout>
            </Structure>
        )
    }
};

export default flowRight(
    addOverlayControls,
    addMainControls,
    addFocusDrawerControls
)(SiteStructure);
