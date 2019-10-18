import React, { Component } from "react";
import {browserHistory} from 'react-router';
import Button from "eventbrite_design_system/button/Button";

//eslint-disable-next-line
import FocusDrawerjsx from '!raw-loader!./FocusDrawerComponents.jsx';
import Structure from "../structure/Structure";

class FocusDrawerAdvanced extends Component {
    
    navigate = (route) => {
        browserHistory.push('/routerStructure/hoc/component');
    };

    render() {
        return (
            <Structure
                title={'Router & Focus Drawer exercise'}
                comments={['Use of focusDrawer', 'Use of react-router', ' Use of redux']}
                Component={
                    () => (
                        <div className="eds-l-pad-top-2">
                            {/* eslint-disable-next-line */}
                            <Button style="fill" size="block" onClick={() => this.navigate()}>
                                Show Focus Drawer
                            </Button>
                        </div>
                    )
                }
                code={FocusDrawerjsx}
            />
        );
    }
}

export default FocusDrawerAdvanced;
