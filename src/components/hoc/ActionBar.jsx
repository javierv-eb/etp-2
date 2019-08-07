import React, { Component } from "react";

import Structure from "eventbrite_design_system/structure/Structure";
import Layout from "eventbrite_design_system/layout/Layout";
import flowRight from "lodash/flowRight";

import addOverlayControls from "eventbrite_design_system/structure/hoc/addOverlayControls";
import addMainControls from "eventbrite_design_system/structure/hoc/addMainControls";
import addFocusDrawerControls from "eventbrite_design_system/structure/hoc/addFocusDrawerControls";
import withMainControls from "eventbrite_design_system/structure/hoc/withMainControls";
import Button from "eventbrite_design_system/button/Button";

import "eventbrite_design_system/css/eds.css";

class App extends Component {
    handleShowActionBar = () => {
        this.props.showMainBottomBar({
            barContent: (
                <div className="eds-avatar__background--has-border eds-g-cell eds-g-cell-1-1 eds-l-pad-top-2 eds-l-pad-vert-2">
                    <div className="eds-align--space-around">
                        <span className="eds-text-bm"> This is the action footer bar</span>
                        <Button style="fill" onClick={this.handleCloseActionBar}>
                            Close Bar
                        </Button>
                    </div>
                </div>
            )
        });
    };
    handleCloseActionBar = () => {
        this.props.closeMainBottomBar();
    };
    render() {
        return (
            <Structure hasIndependentScrolling {...this.props}>
                <Layout maxWidth="large" hasHorizontalGutters={true}>
                    <section className="eds-l-pad-top-10">
                        <div className="eds-align--space-between eds-l-pad-top-10">
                            <Button style="fill" onClick={() => this.handleShowActionBar()}>
                                Show ActionBar
                            </Button>
                            <Button onClick={() => this.handleCloseActionBar()}>
                                Hide ActionBar
                            </Button>
                        </div>
                    </section>
                </Layout>
            </Structure>
        );
    }
}

export default flowRight(
    addOverlayControls,
    addMainControls,
    addFocusDrawerControls,
    withMainControls
)(App);
