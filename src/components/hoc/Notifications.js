import React, { Component } from "react";

import withMainControls from "eventbrite_design_system/structure/hoc/withMainControls";
import Button from "eventbrite_design_system/button/Button";
import AlertChunkySvg from "eventbrite_design_system/iconography/icons/AlertChunky";
import { TYPE_ERROR } from "eventbrite_design_system/notification/constants";
import NotificationBar from "eventbrite_design_system/notification/NotificationBar";

import CodeSampler from '../CodeSampler';
//eslint-disable-next-line
import Notificationjsx from '!raw-loader!./Notifications.jsx';

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
    return (
        <>
            <section className="eds-l-pad-top-10">
                <CodeSampler code={Notificationjsx}>
                    <h1 className="eds-align--center-vertical">Notification exercise</h1>
                    <div className="eds-l-pad-vert-10">
                        <p className="eds-text-bm--fixed">
                            • Press the show button to show top notification
                        </p>
                        <p className="eds-text-bm--fixed">
                            • Press the hide button to close it or wait
                        </p>
                    </div>
                    <NotificationBar type={TYPE_ERROR} iconType={<AlertChunkySvg />}>
                        <span>This is an error notification </span>
                    </NotificationBar>
                    <div className="eds-align--space-between eds-l-pad-top-10">
                        <Button style="fill" onClick={() => this.handleMainNotification()}>
                            Show Notification
                        </Button>
                        <Button onClick={() => this.handleHideNotification()}>
                        Hide Notification
                        </Button>
                    </div>
                </CodeSampler>
            </section>
        </>
    );
  }
}

export default withMainControls(Notifications);
