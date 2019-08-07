import React, { Component } from "react";

import Structure from "eventbrite_design_system/structure/Structure";
import Layout from "eventbrite_design_system/layout/Layout";
import flowRight from "lodash/flowRight";

import addOverlayControls from "eventbrite_design_system/structure/hoc/addOverlayControls";
import addMainControls from "eventbrite_design_system/structure/hoc/addMainControls";
import addFocusDrawerControls from "eventbrite_design_system/structure/hoc/addFocusDrawerControls";
import withMainControls from "eventbrite_design_system/structure/hoc/withMainControls";
import Button from "eventbrite_design_system/button/Button";
import AlertChunkySvg from "eventbrite_design_system/iconography/icons/AlertChunky";
import { TYPE_ERROR } from "eventbrite_design_system/notification/constants";

import "eventbrite_design_system/css/eds.css";

class App extends Component {
    handleMainNotification = () => {
        this.props.addMainNotification({
            type: TYPE_ERROR,
            children: "This an error notification",
            iconType: <AlertChunkySvg />,
            shouldScrollTo: true,
            hasCloseButton: true
        });
    };
    handleHideNotification = () => {
        this.props.hideMainNotification();
    };
    render() {
        return (
            <Structure hasIndependentScrolling {...this.props}>
                <Layout maxWidth="large" hasHorizontalGutters={true}>
                    <section className="eds-l-pad-top-10">
                        <div className="eds-align--space-between eds-l-pad-top-10">
                        {/* eslint-disable-next-line */}
                            <Button style="fill"
                                onClick={() => this.handleMainNotification()}
                            >
                                Show Notification
                            </Button>
                            <Button onClick={() => this.handleHideNotification()}>
                                Hide Notification
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
