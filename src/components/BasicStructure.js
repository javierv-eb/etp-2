import React, { Component } from "react";

import AlertChunkySvg from "eventbrite_design_system/iconography/icons/AlertChunky";
import { TYPE_ERROR } from "eventbrite_design_system/notification/constants";

import CodeSampler from './CodeSampler';
//eslint-disable-next-line
import Notificationjsx from '!raw-loader!./BasicStructure.jsx';

class BasicStructure extends Component {
  render() {
    return (
        <>
            <section className="eds-l-pad-top-10">
                <CodeSampler code={Notificationjsx}>
                    <h1 className="eds-align--center-vertical">Basic Structure exercise</h1>
                    <div className="eds-l-pad-vert-10">
                        <p> This is a p sample with structure component!!! </p>
                    </div>
                </CodeSampler>
            </section>
        </>
    );
  }
}

export default BasicStructure;
