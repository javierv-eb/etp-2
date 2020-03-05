import React, { Component } from "react";

import withOverlayControls from "eventbrite_design_system/structure/hoc/withOverlayControls";
import Button from "eventbrite_design_system/button/Button";
import TrashSvg from "eventbrite_design_system/iconography/icons/TrashChunky";

//eslint-disable-next-line
import OverlaySamplejsx from '!raw-loader!./OverlaySampleDialog.jsx';
import Structure from "../structure/Structure";

const OverlaySampleComponent = ({
    onShowOverlayDialog
}) => (
        <div className="eds-align--space-between eds-l-pad-top-10">
            {/* eslint-disable-next-line */}
            <Button style="fill" onClick={onShowOverlayDialog}>
                Show Dialog!!!
            </Button>
        </div>
)
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
        const {
            renderCode = true,
        } = this.props;

        return (
            <Structure
                title={'Overlay Dialog'}
                comments={['Press the show modal button to check dialog']}
                Component={
                    OverlaySampleComponent.bind(
                        null,
                        {
                            onShowOverlayDialog : this.handleShowOverlayDialog,
                        }
                    )
                }
                code={renderCode ? OverlaySamplejsx : null}
            />
        );
    }
}

export default withOverlayControls(OverlaySample);
