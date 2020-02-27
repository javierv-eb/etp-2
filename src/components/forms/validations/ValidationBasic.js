import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

//eslint-disable-next-line
import validationsJSX from '!raw-loader!./validations.jsx';
import Structure from '../../structure/Structure';

const withValidationBasic = (title, message, Component) => {
    const ValidationBasic = (props) => (
        <Structure
                title={title}
                comments={[...message]}
                code={props.renderCode ? validationsJSX : null}
        >
            <div>
                <Component {...props} />
                <div className="eds-l-pad-vert-10" style={{ height: '400px', overflow: 'auto' }}>
                    <SyntaxHighlighter language="javascript|html" style={darcula} customStyle={{ height: '100%' }}>
                        {JSON.stringify(props.formData[props.formName] || '{}', null, 4)}
                    </SyntaxHighlighter>
                </div>
            </div>
        </Structure>
    );

    ValidationBasic.defaultProps = {
        renderCode: true,
    };

    return ValidationBasic;
};

export default withValidationBasic;
