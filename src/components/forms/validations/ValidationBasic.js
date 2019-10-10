import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import CodeSampler from '../../CodeSampler';
//eslint-disable-next-line
import validationsJSX from '!raw-loader!./validations.jsx';

const withValidationBasic = (title, message, Component) => {
    return (props) => (
        <>
            <section className="eds-l-pad-top-10">
                <CodeSampler code={validationsJSX}>
                    <h1 className="eds-align--center-vertical">{title}</h1>
                    <div className="eds-l-pad-vert-10">
                        <p className="eds-text-bm--fixed">
                            • {message}
                        </p>
                    </div>
                    <div>
                        <Component {...props} />
                        <div className="eds-l-pad-vert-10" style={{ height: '400px', overflow: 'auto' }}>
                            <SyntaxHighlighter language="javascript|html" style={darcula} customStyle={{ height: '100%' }}>
                                {JSON.stringify(props.formData[props.formName] || '{}', null, 4)}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </CodeSampler>
            </section>
        </>
    )
};

export default withValidationBasic;
