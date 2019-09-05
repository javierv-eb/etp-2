import React, { Component } from "react";
import {browserHistory} from 'react-router';
import Button from "eventbrite_design_system/button/Button";

import CodeSampler from '../CodeSampler';
//eslint-disable-next-line
import FocusDrawerjsx from '!raw-loader!./FocusDrawerComponents.jsx';

class FocusDrawerAdvanced extends Component {
    
    navigate = (route) => {
        browserHistory.push('/routerStructure/hoc/component');
    };

    render() {
        return (
            <>
                <section className="eds-l-pad-top-10">
                    <CodeSampler code={FocusDrawerjsx}>
                        <h1 className="eds-align--center-vertical">Router & Focus Drawer exercise</h1>
                        <div className="eds-l-pad-vert-10">
                            <p className="eds-text-bm--fixed">
                                • Use of focusDrawer
                            </p>
                            <p className="eds-text-bm--fixed">
                                • Use of react-router
                            </p>
                            <p className="eds-text-bm--fixed">
                                • Use of redux
                            </p>
   
                        </div>
                        <div className="eds-l-pad-top-2">
                            {/* eslint-disable-next-line */}
                            <Button style="fill" size="block" onClick={() => this.navigate()}>
                                Show Focus Drawer
                            </Button>
                        </div>
                    </CodeSampler>
                </section>
            </>
        );
    }
}

export default FocusDrawerAdvanced;
