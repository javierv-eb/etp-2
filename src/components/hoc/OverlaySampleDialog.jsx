import React, { Component } from "react";

import Structure from "eventbrite_design_system/structure/Structure";
import Layout from "eventbrite_design_system/layout/Layout";
import flowRight from "lodash/flowRight";

import addOverlayControls from "eventbrite_design_system/structure/hoc/addOverlayControls";
import addMainControls from "eventbrite_design_system/structure/hoc/addMainControls";
import addFocusDrawerControls from "eventbrite_design_system/structure/hoc/addFocusDrawerControls";
import withOverlayControls from "eventbrite_design_system/structure/hoc/withOverlayControls";
import Button from "eventbrite_design_system/button/Button";
import TrashSvg from "eventbrite_design_system/iconography/icons/TrashChunky";

import "eventbrite_design_system/css/eds.css";

class App extends Component {
    handleShowOverlayDialog = () => {
        this.props.showOverlay(
            'dialog',
            {
                headerIconType: <TrashSvg />,
                title: 'This is the title',
                message: 'This is the internal notification message',
                primaryText: 'Primary action',
                primaryType: 'danger',
                secondaryText: 'Secondary Action',
                secondaryType: 'link',
            }
        );
    }
    render() {
        return (
            <Structure hasIndependentScrolling {...this.props}>
                <Layout maxWidth="large" hasHorizontalGutters={true}>
                    <section className="eds-l-pad-top-10">
                        <div className="eds-align--space-between eds-l-pad-top-10">
                        {/* eslint-disable-next-line */}
                            <Button style="fill" onClick={() => this.handleShowOverlayDialog()}>
                                Show Dialog!!!
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
    withOverlayControls
)(App);
