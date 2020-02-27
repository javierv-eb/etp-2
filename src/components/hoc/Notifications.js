import React, { Component } from "react";

import withMainControls from "eventbrite_design_system/structure/hoc/withMainControls";
import Button from "eventbrite_design_system/button/Button";
import AlertChunkySvg from "eventbrite_design_system/iconography/icons/AlertChunky";
import { TYPE_ERROR } from "eventbrite_design_system/notification/constants";
import NotificationBar from "eventbrite_design_system/notification/NotificationBar";

//eslint-disable-next-line
import Notificationjsx from '!raw-loader!./Notifications.jsx';
import Structure from "../structure/Structure";

const NotificationSample = ({
    onMainNotification,
    onHideMainNotification
}) => (
        <>
            <NotificationBar type={TYPE_ERROR} iconType={<AlertChunkySvg />}>
                <span>This is an error notification </span>
            </NotificationBar>
            <div className="eds-align--space-between eds-l-pad-top-10">
                {/* eslint-disable-next-line */}
                <Button style="fill" onClick={onMainNotification}>
                    Show Notification
                </Button>
                <Button onClick={onHideMainNotification}>
                    Hide Notification
                </Button>
            </div>
        </>
    );

class Notifications extends Component {
    handleMainNotification = () => {
        this.props.addMainNotification({
            type: TYPE_ERROR,
            children: "This an error notification",
            iconType: <AlertChunkySvg />,
            shouldScrollTo: true,
            hasCloseButton: true
        });
    }
    handleHideNotification = () => {
        this.props.hideMainNotification();
    }
    render() {
        const {
            renderCode = true,
        } = this.props;

        return (
            <Structure
                title={'Notification exercise'}
                comments={['Press the show button to show top notification', 'Press the hide button to close it or wait']}
                Component={
                    NotificationSample.bind(
                        null,
                        {
                            onMainNotification: this.handleMainNotification,
                            onHideMainNotification: this.handleHideNotification
                        }
                    )
                }
                code={renderCode ? Notificationjsx : null}
            />
        );
    }
}

export default withMainControls(Notifications);
