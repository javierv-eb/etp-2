import React, { Component } from "react";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Button from "eventbrite_design_system/button/Button";

import CodeSampler from '../../CodeSampler';
//eslint-disable-next-line
import BasicForm from '!raw-loader!./BasicForm.jsx';
import BasicFormComponent from './connectBasicForm2';
import {getFormActions, removeAllActions, removeAllVisitedActions} from '../../../utils/middleware';


class BasicForm2 extends Component {
    constructor(props) {
        super(props);

        removeAllActions();
    }

    state = {
        response: '[]',
        formData: '{}',
        showLogger: false,
    }
    handleReduxChange = () => {
        this.setState({response: JSON.stringify(getFormActions(), null, 4)})
    }
    handleClearActions = () => {
        removeAllVisitedActions();
        this.setState({response: '[]', formData: '{}'});
    }
    handleOnSubmit = (formData) => {
        this.setState({formData: JSON.stringify(formData, null, 4)});
    }
    handleToggleLogger = () => {
        this.setState(
            ({showLogger}) => {
                return {
                    showLogger: !showLogger
                }
            }
        )
    }
    render() {
        return (
            <>
                <section className="eds-l-pad-top-10">
                    <CodeSampler>
                        <h1 className="eds-align--center-vertical">Redux Form Basic II</h1>
                        <div style={{display: 'flex'}}>
                            <BasicFormComponent
                                onSubmit={this.handleOnSubmit}
                                onReduxChange={this.handleReduxChange}
                            />
                            <div className="eds-g-cell eds-g-cell-1-1 eds-g-cell-mn-1-2 eds-l-pad-top-4 eds-l-lg-pad-right-4 eds-l-ln-pad-right-4 eds-l-lw-pad-right-4 eds-l-md-pad-right-4 eds-l-mn-pad-right-4 eds-l-mw-pad-right-4">
                                <SyntaxHighlighter language="javascript|html" style={darcula} customStyle={{height: '100%'}}>
                                    {this.state.formData}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                        <div className="eds-g-cell eds-g-cell-1-1  eds-l-pad-top-4 eds-l-lg-pad-right-4 eds-l-ln-pad-right-4 eds-l-lw-pad-right-4 eds-l-md-pad-right-4 eds-l-mn-pad-right-4 eds-l-mw-pad-right-4">
                                <div className="eds-align--space-between eds-l-pad-bot-2">
                                    {/* eslint-disable-next-line */}
                                    <Button style="fill" onClick={this.handleToggleLogger}>
                                        {this.state.showLogger ? 'Hide Logger' : 'Show Logger'}
                                    </Button>
                                    {/* eslint-disable-next-line */}
                                    <Button style="fill" onClick={this.handleClearActions}>
                                        Remove actions
                                    </Button>
                                </div>
                                <div className="eds-l-pad-bot-10" style={{height: '400px', overflow: 'auto'}}>
                                    <SyntaxHighlighter language="javascript|html" style={darcula}>
                                        {this.state.showLogger ? this.state.response : '[]'}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                    </CodeSampler>
                </section>
            </>
        );
    }
}

export default BasicForm2;
