import React, { Component } from "react";

import withMainControls from "eventbrite_design_system/structure/hoc/withMainControls";
import Button from "eventbrite_design_system/button/Button";

//eslint-disable-next-line
import ActionBarjsx from '!raw-loader!./ActionBar.jsx';
import Structure from "../structure/Structure";

const ActionBarContent = ({onCloseBar}) => (
    <div className="eds-avatar__background--has-border eds-g-cell eds-g-cell-1-1 eds-l-pad-top-2 eds-l-pad-vert-2">
        <div className="eds-align--space-around">
            <span className="eds-text-bm"> This is the action footer bar</span>
            {/* eslint-disable-next-line */}
            <Button style="fill" onClick={() => onCloseBar()}>
                Close Bar
            </Button>
        </div>
    </div>
);


const ActionBarSample = ({
    onShowActionBar,
    onCloseActionBar
}) => (
    <>
        <ActionBarContent
            onCloseBar={() => ({})}
        />
        <div className="eds-align--space-between eds-l-pad-top-10">
            {/* eslint-disable-next-line */}
            <Button style="fill" onClick={onShowActionBar}>
                Show ActionBar
            </Button>
            <Button onClick={onCloseActionBar}>
                Hide ActionBar
            </Button>
        </div>
    </>
)
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
    const {
        renderCode = true,
    } = this.props;

    return (
        <Structure
            title={'Action Bar exercise'}
            comments={['Press the show button to show footer action bar', 'Press the hide button to close footer action bar']}
            Component={
                ActionBarSample.bind(
                    null,
                    {
                        onShowActionBar : this.handleShowActionBar,
                        onCloseActionBar: this.handleCloseActionBar
                    }
                )
            }
            code={renderCode ? ActionBarjsx : null}
        />
    );
  }
}

export default withMainControls(ActionBar);
