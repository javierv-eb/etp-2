import React, { Component } from "react";

import Structure from "eventbrite_design_system/structure/Structure";
import Layout from "eventbrite_design_system/layout/Layout";
import flowRight from "lodash/flowRight";

import addOverlayControls from "eventbrite_design_system/structure/hoc/addOverlayControls";
import addMainControls from "eventbrite_design_system/structure/hoc/addMainControls";
import addFocusDrawerControls from "eventbrite_design_system/structure/hoc/addFocusDrawerControls";
import withOverlayControls from "eventbrite_design_system/structure/hoc/withOverlayControls";
import Button from "eventbrite_design_system/button/Button";
import Illustration from 'eventbrite_design_system/illustration/Illustration';
import BlueMoneyIllustrationSvg from 'eventbrite_design_system/iconography/icons/BlueMoneyIllustration';
import AlertChunkySvg from "eventbrite_design_system/iconography/icons/AlertChunky";
import { TYPE_ERROR } from "eventbrite_design_system/notification/constants";

import "eventbrite_design_system/css/eds.css";

class App extends Component {
    handleNotificationAdd = () => {
        this.props.addOverlayNotification({
            type: TYPE_ERROR,
            children: "This an error notification in the modal",
            iconType: <AlertChunkySvg />,
            hasCloseButton: true,
            shouldFloatAboveContent: true,
            shouldAnimate: true,
        });
    }
    handleShowOverlay = () => {
        this.props.showOverlay(
            'modal',
            {
                primaryText: 'Close',
                primaryType: 'fill',
                secondaryText: 'Secondary',
                secondaryType: 'follow',
                children: (
                    <div className=" eds-g-cell eds-g-cell-1-1 eds-l-pad-top-2 eds-l-pad-vert-2">
                        <h3>This is the modal Content!!!</h3>
                        <div className="eds-l-pad-top-20">
                            <Button type="submit" onClick={this.handleNotificationAdd}>
                                Show Notification
                             </Button>
                        </div>
                    </div>
                ),
                illustration: (
                    <Illustration
                        type={<BlueMoneyIllustrationSvg />}
                        height="420px"
                        width="220px"
                    />
                ),
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
                            <Button style="fill" onClick={() => this.handleShowOverlay()}>
                                Show Modal!!!
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
