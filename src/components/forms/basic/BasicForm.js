import React, { Component } from "react";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import withReduxForm from 'eventbrite_design_system/form/withReduxForm';

//eslint-disable-next-line
import BasicFormJSX from '!raw-loader!./BasicForm.jsx';
import BasicFormComponent from './BasicFormComponent';
import Structure from "../../structure/Structure";


const ReduxFormComponent = withReduxForm({
    form: 'test-form',
})(BasicFormComponent);

const BasicReduxSample = ({
    response,
    onSubmit,
}) => (
        <div style={{ display: 'flex' }}>
            <ReduxFormComponent
                onSubmit={onSubmit}
            />
            <div className="eds-g-cell eds-g-cell-1-1 eds-g-cell-mn-1-2 eds-l-pad-top-4 eds-l-lg-pad-right-4 eds-l-ln-pad-right-4 eds-l-lw-pad-right-4 eds-l-md-pad-right-4 eds-l-mn-pad-right-4 eds-l-mw-pad-right-4">
                <SyntaxHighlighter language="javascript|html" style={darcula} customStyle={{ height: '100%' }}>
                    {response}
                </SyntaxHighlighter>
            </div>
        </div>
)
class BasicForm extends Component {
    state = {
        response: '{}',
    }
    handleSubmit = (formData) => {
        this.setState({response: JSON.stringify(formData, null, 4)});
    }
    render() {
        const {
            renderCode = true,
        } = this.props;
        return (
            <Structure
                title={'Redux Form Basic'}
                comments={['A really easy form to play with']}
                Component={
                    BasicReduxSample.bind(
                        null,
                        {
                            onSubmit: this.handleSubmit,
                            response: this.state.response,
                        }
                    )
                }
                code={renderCode ? BasicFormJSX : null}
            />
        );
    }
}

export default BasicForm;
