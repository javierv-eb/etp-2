import React, { Component } from "react";

import Structure from "eventbrite_design_system/structure/Structure";
import Layout from "eventbrite_design_system/layout/Layout";
import flowRight from "lodash/flowRight";

import addOverlayControls from "eventbrite_design_system/structure/hoc/addOverlayControls";
import addMainControls from "eventbrite_design_system/structure/hoc/addMainControls";
import addFocusDrawerControls from "eventbrite_design_system/structure/hoc/addFocusDrawerControls";
import withFocusDrawerControls from "eventbrite_design_system/structure/hoc/withFocusDrawerControls";
import Button from "eventbrite_design_system/button/Button";
import AlertChunkySvg from "eventbrite_design_system/iconography/icons/AlertChunky";
import { TYPE_ERROR } from "eventbrite_design_system/notification/constants";


import "eventbrite_design_system/css/eds.css";

const FocusDrawerConent = () => (
    <div className="eds-l-pad-hor-5">
        <h1>This is the focus drawer main content!!!</h1>
    </div>
);

class App extends Component {
    handleShowFocusDrawer = () => {
        const {
            showFocusDrawer,
        } = this.props;

        showFocusDrawer({
            bottomBarIsShown: true,
            content: (<FocusDrawerConent />),
            title: 'Focus Drawer Title',
        })
    };

    handleCloseFocusDrawer = () => {
        const {
            closeFocusDrawer,
        } = this.props;
        closeFocusDrawer();
    }

    handleShowBottomBar = () => {
        const {
            showFocusDrawerBottomBar,
            closeFocusDrawerBottomBar,
        } = this.props;
        showFocusDrawerBottomBar({
            barContent: (
                <div className="eds-align--center">
                {/* eslint-disable-next-line */}
                    <Button style="fill" onClick={closeFocusDrawerBottomBar}>
                        Close Focus Drawer
                    </Button>
                </div>
            ),
        });
    }

    handleCloseBottomBar = () => {
        const {
            closeFocusDrawerBottomBar,
        } = this.props;

        closeFocusDrawerBottomBar();
    }

    handleShowNotification = () => {
        const {
            addFocusDrawerNotification,
        } = this.props;

        addFocusDrawerNotification({
            type: TYPE_ERROR,
            children: 'Sample notification',
            iconType: <AlertChunkySvg />,
        });
    }

    handleCloseNotification = () => {
        const {
            hideFocusDrawerNotification,
        } = this.props;

        hideFocusDrawerNotification();
    }
    render() {
        return (
            <Structure hasIndependentScrolling {...this.props}>
                <Layout maxWidth="large" hasHorizontalGutters={true}>
                    <section className="eds-l-pad-top-10">
                    <div className="eds-l-pad-top-2">
                            <div className="eds-g-cell eds-g-cell-1-2 eds-l-pad-right-4">
                                <div className="eds-l-pad-bot-5">
                                {/* eslint-disable-next-line */}
                                    <Button style="fill" size="block" onClick={() => this.handleShowFocusDrawer()}>
                                        Show Focus Drawer
                                    </Button>
                                </div>
                                <div className="eds-l-pad-bot-5">
                                {/* eslint-disable-next-line */}
                                    <Button style="fill" size="block"  onClick={() => this.handleShowBottomBar()}>
                                        Show Focus Drawer Bottom Bar
                                    </Button>
                                </div>

                                <div className="eds-l-pad-bot-5">
                                {/* eslint-disable-next-line */}
                                    <Button style="fill" size="block"  onClick={() => this.handleShowNotification()}>
                                        Show Focus Drawer Notification
                                    </Button>
                                </div>
                            </div>
                            <div className="eds-g-cell eds-g-cell-1-2">
                                <div className="eds-l-pad-bot-5">
                                    <Button size="block"  onClick={() => this.handleCloseFocusDrawer()}>
                                        Close Focus Drawer
                                    </Button>
                                </div>
                                <div className="eds-l-pad-bot-5">
                                    <Button size="block"  onClick={() => this.handleCloseBottomBar()}>
                                        Close Focus Drawer Bottom Bar
                                    </Button>
                                </div>
                                <div className="eds-l-pad-bot-5">
                                    <Button size="block"  onClick={() => this.handleCloseNotification()}>
                                        Close Focus Drawer Notification
                                    </Button>
                                </div>
                            </div>
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
    withFocusDrawerControls,
)(App);
