import React from 'react';
import Header from './Header';
import Example from './Example';
import CodeSample from './CodeSample';

const Structure = ({
    title,
    comments,
    Component,
    code,
    children,
}) => (
    <section className="eds-l-pad-top-10">
        <Header title={title} comments={comments} />
        <Example Component={Component} />
        {children}
        <CodeSample code={code} />
    </section>
);

export default Structure;
