import React, { Component } from "react";

import withOverlayControls from "eventbrite_design_system/structure/hoc/withOverlayControls";
import Button from "eventbrite_design_system/button/Button";
import Illustration from 'eventbrite_design_system/illustration/Illustration';
import BlueMoneyIllustrationSvg from 'eventbrite_design_system/iconography/icons/BlueMoneyIllustration';
import AlertChunkySvg from "eventbrite_design_system/iconography/icons/AlertChunky";
import { TYPE_ERROR } from "eventbrite_design_system/notification/constants";

import CodeSampler from '../CodeSampler';
//eslint-disable-next-line
import OverlaySamplejsx from '!raw-loader!./OverlaySample.jsx';

const ModalContent = ({ onShowNotification }) => (
    <div className=" eds-g-cell eds-g-cell-1-1 eds-l-pad-top-2 eds-l-pad-vert-2">
        <h3>This is the modal Content!!!</h3>
        <div className="eds-l-pad-top-20">
            <Button type="submit" onClick={onShowNotification}>
                Show Notification
            </Button>
        </div>
    </div>
);

class OverlaySample extends Component {
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
                children: (<ModalContent onShowNotification={this.handleNotificationAdd} />),
                illustration: (<Illustration
                    type={<BlueMoneyIllustrationSvg />}
                    height="420px"
                    width="220px"
                />),
            }
        );
    }
    render() {
        return (
            <>
                <section className="eds-l-pad-top-10">
                    <CodeSampler code={OverlaySamplejsx}>
                        <h1 className="eds-align--center-vertical">Overlay</h1>
                        <div className="eds-l-pad-vert-10">
                            <p className="eds-text-bm--fixed">
                                • Press the show modal button to check modal
                            </p>
                        </div>
                        <div className="eds-align--space-between eds-avatar__background--has-border">
                            <div>
                            <Illustration
                                type={<BlueMoneyIllustrationSvg />}
                                height="420px"
                                width="220px"
                            />
                            </div>
                            <div className="eds-g-cell eds-g-cell-8-12 eds-l-pad-left-10 eds-l-pad-top-10">
                                <ModalContent />
                            </div>
                        </div>

                        <div className="eds-align--space-between eds-l-pad-top-10">
                        {/* eslint-disable-next-line */}
                            <Button style="fill" onClick={() => this.handleShowOverlay()}>
                                Show Modal!!!
                            </Button>
                        </div>
                    </CodeSampler>
                </section>
            </>
        );
    }
}

export default withOverlayControls(OverlaySample);
