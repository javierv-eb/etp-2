import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import PhabButton from 'eventbrite_design_system/phab/PhabButton';
import CrossSvg from 'eventbrite_design_system/iconography/icons/RefreshChunky';
import classNames from 'classnames';

const CodeSegment = ({code, show, onToggleCode, addExtraPadding}) => {
    if (!code) {
        return null;
    }
    const jsx = show ? (
        <div className="eds-l-pad-top-4">
            <SyntaxHighlighter language="javascript|html" style={darcula}>
                {code}
            </SyntaxHighlighter>
        </div>
    ) : null;

    const classes = classNames(
        'eds-align--space-between',
        {
            'eds-l-pad-hor-10': addExtraPadding,
        },
    );

    return (
        <>
            <div className={classes}>
                <h1 className="eds-l-pad-vert-10">Toggle JSX</h1>
                <div className="eds-l-pad-top-6">
                    <PhabButton iconType={<CrossSvg />} onClick={() => onToggleCode()} size="small" />
                </div>
            </div>
            {jsx}
        </>
    );
};
export default class CodeSample extends Component {

    state = {
        show: false,
    }
    handleShowCode = () => this.setState(({show}) => ({show: !show}));
    
    render() {
        return (
            <CodeSegment
                show={this.state.show}
                code={this.props.code}
                onToggleCode={this.handleShowCode}
                addExtraPadding={this.props.extraPadding}
            />
        );
    }
}
