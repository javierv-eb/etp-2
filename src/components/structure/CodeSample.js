import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import PhabButton from 'eventbrite_design_system/phab/PhabButton';
import CrossSvg from 'eventbrite_design_system/iconography/icons/RefreshChunky';
import classNames from 'classnames';

const CodeSegment = ({code, show, onToggleCode, addExtraPadding, hideLink}) => {
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
    const link = hideLink
        ? null
        : (
            <div className={classes}>
                <h1 className="eds-l-pad-vert-10">Toggle JSX</h1>
                <div className="eds-l-pad-top-6">
                    <PhabButton iconType={<CrossSvg />} onClick={() => onToggleCode()} size="small" />
                </div>
            </div>
        )

    return (
        <>
            {link}
            {jsx}
        </>
    );
};
export default class CodeSample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: !!props.standAloneCode,
        }
    }
    handleShowCode = () => this.setState(({show}) => ({show: !show}));
    
    render() {
        const { standAloneCode, code } = this.props;

        return (
            <CodeSegment
                show={this.state.show}
                code={code}
                onToggleCode={this.handleShowCode}
                addExtraPadding={this.props.extraPadding}
                hideLink={standAloneCode}
            />
        );
    }
}
