import React, { Component } from "react";

import Structure from "eventbrite_design_system/structure/Structure";
import Layout from "eventbrite_design_system/layout/Layout";
import flowRight from "lodash/flowRight";

import addOverlayControls from "eventbrite_design_system/structure/hoc/addOverlayControls";
import addMainControls from "eventbrite_design_system/structure/hoc/addMainControls";
import addFocusDrawerControls from "eventbrite_design_system/structure/hoc/addFocusDrawerControls";

import "eventbrite_design_system/css/eds.css";

class App extends Component {
    render() {
        return (
            <Structure>
                <Layout maxWidth="large" hasHorizontalGutters={true}>
                    <section className="eds-l-pad-top-10">
                        <div className="eds-align--space-between eds-l-pad-top-10">
                            <p> This is a p sample with structure component!!! </p>
                        </div>
                    </section>
                </Layout>
            </Structure>
        );
    }
}

export default flowRight(
  addOverlayControls,
  addMainControls,
  addFocusDrawerControls
)(App);
