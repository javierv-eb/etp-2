import React from 'react';

import DocsFragments from './GenericPageFragment';

const Docs = ({
    guide
}) => (
    <>
    {guide.map((data) => (<DocsFragments {...data} key={data.keyReplace} />))}
    </>
);

export default Docs;
