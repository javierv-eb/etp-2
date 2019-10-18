import React, { Component } from "react";
import AlertChunkySvg from "eventbrite_design_system/iconography/icons/AlertChunky";
import { TYPE_ERROR } from "eventbrite_design_system/notification/constants";
import withFocusDrawerControls from "eventbrite_design_system/structure/hoc/withFocusDrawerControls";
import Button from "eventbrite_design_system/button/Button";

//eslint-disable-next-line
import FocusDrawerjsx from '!raw-loader!./FocusDrawer.jsx';
import Structure from "../structure/Structure";

const FocusDrawerConent = () => (
    <div className="eds-l-pad-hor-5">
        <h1>This is the focus drawer main content!!!</h1>
    </div>
);

const FocusDrawerSample = ({
    onShowFocusDrawer,
    onShowBottomBar,
    onShowNotification,
    onCloseFocusDrawer,
    onCloseBottomBar,
    onCloseNotification,
}) => (
        <div className="eds-l-pad-top-2">
            <div className="eds-g-cell eds-g-cell-1-2 eds-l-pad-right-4">
                <div className="eds-l-pad-bot-5">
                    {/* eslint-disable-next-line */}
                    <Button style="fill" size="block" onClick={onShowFocusDrawer}>
                        Show Focus Drawer
                    </Button>
                </div>
                <div className="eds-l-pad-bot-5">
                    {/* eslint-disable-next-line */}
                    <Button style="fill" size="block" onClick={onShowBottomBar}>
                        Show Focus Drawer Bottom Bar
                    </Button>
                </div>

                <div className="eds-l-pad-bot-5">
                    {/* eslint-disable-next-line */}
                    <Button style="fill" size="block" onClick={onShowNotification}>
                        Show Focus Drawer Notification
                    </Button>
                </div>
            </div>
            <div className="eds-g-cell eds-g-cell-1-2">
                <div className="eds-l-pad-bot-5">
                    <Button size="block" onClick={onCloseFocusDrawer}>
                        Close Focus Drawer
                    </Button>
                </div>
                <div className="eds-l-pad-bot-5">
                    <Button size="block" onClick={onCloseBottomBar}>
                        Close Focus Drawer Bottom Bar
                    </Button>
                </div>
                <div className="eds-l-pad-bot-5">
                    <Button size="block" onClick={onCloseNotification}>
                        Close Focus Drawer Notification
                    </Button>
                </div>
            </div>
        </div>
)

class FocusDrawer extends Component {
    state = {
        showFocusDrawer: false,
    }

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
            <Structure
                title={'Focus Drawer exercise'}
                comments={['In this exercise we are going to use an focus drawer HOC without routing.']}
                Component={
                    FocusDrawerSample.bind(
                        null,
                        {
                            onShowFocusDrawer: this.handleShowFocusDrawer,
                            onShowBottomBar: this.handleShowBottomBar,
                            onShowNotification: this.handleShowNotification,
                            onCloseFocusDrawer: this.handleCloseFocusDrawer,
                            onCloseBottomBar: this.handleCloseBottomBar,
                            onCloseNotification: this.handleCloseNotification,
                        }
                    )
                }
                code={FocusDrawerjsx}
            />
        );
    }
}

export default withFocusDrawerControls(FocusDrawer);
