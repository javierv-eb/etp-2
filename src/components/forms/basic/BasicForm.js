import React, { Component } from "react";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import withReduxForm from 'eventbrite_design_system/form/withReduxForm';

import CodeSampler from '../../CodeSampler';
//eslint-disable-next-line
import BasicFormJSX from '!raw-loader!./BasicForm.jsx';
import BasicFormComponent from './BasicFormComponent';


const ReduxFormComponent = withReduxForm({
    form: 'test-form',
})(BasicFormComponent);

class BasicForm extends Component {
    state = {
        response: '{}',
    }
    handleSubmit = (formData) => {
        this.setState({response: JSON.stringify(formData, null, 4)});
    }
    render() {
        return (
            <>
                <section className="eds-l-pad-top-10">
                    <CodeSampler code={BasicFormJSX}>
                        <h1 className="eds-align--center-vertical">Redux Form Basic</h1>
                        <div className="eds-l-pad-vert-10">
                            <p className="eds-text-bm--fixed">
                                • A really easy form to play with
                        </p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <ReduxFormComponent
                                onSubmit={this.handleSubmit}
                            />
                            <div className="eds-g-cell eds-g-cell-1-1 eds-g-cell-mn-1-2 eds-l-pad-top-4 eds-l-lg-pad-right-4 eds-l-ln-pad-right-4 eds-l-lw-pad-right-4 eds-l-md-pad-right-4 eds-l-mn-pad-right-4 eds-l-mw-pad-right-4">
                                <SyntaxHighlighter language="javascript|html" style={darcula} customStyle={{height: '100%'}}>
                                    {this.state.response}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </CodeSampler>
                </section>
            </>
        );
    }
}

export default BasicForm;
