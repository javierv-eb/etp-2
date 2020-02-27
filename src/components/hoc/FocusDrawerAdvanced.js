import React, { Component } from "react";
import {browserHistory} from 'react-router';
import Button from "eventbrite_design_system/button/Button";

//eslint-disable-next-line
import FocusDrawerjsx from '!raw-loader!./FocusDrawerComponents.jsx';
import Structure from "../structure/Structure";

class FocusDrawerAdvanced extends Component {
    
    navigate = (renderCode) => {
        if (renderCode) {
            browserHistory.push('/routerStructure/hoc/component');
        } else {
            browserHistory.push('/v2/exercises/focus-drawer-component/#position=2');
        }
    };

    render() {
        const {
            renderCode = true,
        } = this.props;

        return (
            <Structure
                title={'Router & Focus Drawer exercise'}
                comments={['Use of focusDrawer', 'Use of react-router', ' Use of redux']}
                Component={
                    () => (
                        <div className="eds-l-pad-top-2">
                            {/* eslint-disable-next-line */}
                            <Button style="fill" size="block" onClick={() => this.navigate(renderCode)}>
                                Show Focus Drawer
                            </Button>
                        </div>
                    )
                }
                code={renderCode ? FocusDrawerjsx : null}
            />
        );
    }
}

export default FocusDrawerAdvanced;
