import React, {PureComponent} from 'react';
import withFocusDrawerControls from "eventbrite_design_system/structure/hoc/withFocusDrawerControls";
import Button from "eventbrite_design_system/button/Button";
import {browserHistory} from 'react-router';

class FocusDrawerComponent extends PureComponent {
    _handleCloseFocusDrawer = () => {
        browserHistory.goBack();
    }
    componentDidMount() {
        const {
            showFocusDrawer,
            showFocusDrawerBottomBar,
        } = this.props;
        showFocusDrawer({
            onClose: this._handleCloseFocusDrawer
        });
        showFocusDrawerBottomBar({
            barContent: (
                <div className="eds-align--center">
                {/* eslint-disable-next-line */}
                    <Button style="fill" onClick={this._handleCloseFocusDrawer}>
                        Close Focus Drawer
                    </Button>
                </div>
            ),
        });
    }

    componentWillUnmount() {
        const {
            closeFocusDrawer,
        } = this.props;
        closeFocusDrawer();
    }

    render() {
        return (
            <div className="eds-l-pad-top-10 eds-l-pad-hor-2">
                <h1>This is the focus drawer!!!</h1>
            </div>
        );
    }
}

export default withFocusDrawerControls(FocusDrawerComponent);
