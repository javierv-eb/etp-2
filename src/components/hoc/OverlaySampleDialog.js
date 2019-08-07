import React, { Component } from "react";

import withOverlayControls from "eventbrite_design_system/structure/hoc/withOverlayControls";
import Button from "eventbrite_design_system/button/Button";
import TrashSvg from "eventbrite_design_system/iconography/icons/TrashChunky";

import CodeSampler from '../CodeSampler';
//eslint-disable-next-line
import OverlaySamplejsx from '!raw-loader!./OverlaySampleDialog.jsx';

class OverlaySample extends Component {
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
            <>
                <section className="eds-l-pad-top-10">
                    <CodeSampler code={OverlaySamplejsx}>
                        <h1 className="eds-align--center-vertical">Overlay</h1>
                        <div className="eds-l-pad-vert-10">
                            <p className="eds-text-bm--fixed">
                                • Press the show dialog button to check dialog
                        </p>
                        </div>

                        <div className="eds-align--space-between eds-l-pad-top-10">
                        {/* eslint-disable-next-line */}
                            <Button style="fill" onClick={() => this.handleShowOverlayDialog()}>
                                Show Dialog!!!
                            </Button>
                        </div>
                    </CodeSampler>
                </section>
            </>
        );
    }
}

export default withOverlayControls(OverlaySample);
