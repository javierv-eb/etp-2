import React, { Component } from "react";

import withMainControls from "eventbrite_design_system/structure/hoc/withMainControls";
import Button from "eventbrite_design_system/button/Button";

import CodeSampler from '../CodeSampler';
//eslint-disable-next-line
import ActionBarjsx from '!raw-loader!./ActionBar.jsx';

const ActionBarContent = ({onCloseBar}) => (
    <div className="eds-avatar__background--has-border eds-g-cell eds-g-cell-1-1 eds-l-pad-top-2 eds-l-pad-vert-2">
        <div className="eds-align--space-around">
            <span className="eds-text-bm"> This is the action footer bar</span>
            <Button style="fill" onClick={() => onCloseBar()}>
                Close Bar
            </Button>
        </div>
    </div>
);

class ActionBar extends Component {
  handleShowActionBar = () => {
    this.props.showMainBottomBar({
        barContent: (<ActionBarContent onCloseBar={this.handleCloseActionBar}/>),
    });
  }
  handleCloseActionBar = () => {
      this.props.closeMainBottomBar();
  }
  render() {
    return (
        <>
            <section className="eds-l-pad-top-10">
                <CodeSampler code={ActionBarjsx}>
                    <h1 className="eds-align--center-vertical">Action Bar exercise</h1>
                    <div className="eds-l-pad-vert-10">
                        <p className="eds-text-bm--fixed">
                            • Press the show button to show footer action bar
                        </p>
                        <p className="eds-text-bm--fixed">
                            • Press the hide button to close footer action bar
                        </p>
                    </div>
                    <ActionBarContent
                        onCloseBar={() => ({})}
                    />
                    <div className="eds-align--space-between eds-l-pad-top-10">
                        <Button style="fill" onClick={() => this.handleShowActionBar()}>
                            Show ActionBar
                        </Button>
                        <Button onClick={() => this.handleCloseActionBar()}>
                            Hide ActionBar
                        </Button>
                    </div>
                </CodeSampler>
            </section>
        </>
    );
  }
}

export default withMainControls(ActionBar);
