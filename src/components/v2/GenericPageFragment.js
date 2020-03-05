import React from 'react';
import isEmpty from 'lodash/isEmpty';

import CodeSample from '../structure/CodeSample';
import { getFinalTextFromTextObject } from './utils';

const GenericPageFragment = ({
    prevSteps,
    prevStepsBlock,
    fragment,
    postSteps,
    postStepsBlock,
    imageFragment,
    keyReplace: key,
}) => (
    <div className="eds-l-pad-bot-8">
        <ul className="eds-l-pad-left-4">
            {prevSteps.map(
                (text, index) => <li className="eds-text-bl eds-l-pad-top-2" key={`${key}-${index}`}>{getFinalTextFromTextObject(text)}</li>
            )}
        </ul>
        {prevStepsBlock.map((text, index) => (
            <div className="eds-l-pad-top-2" key={`${key}-${index}`}>{getFinalTextFromTextObject(text)}</div>
        ))}
        {isEmpty(fragment) ? null : <CodeSample
            code={fragment}
            standAloneCode
        />}
        {isEmpty(imageFragment) ? null : <img src={imageFragment} alt="Sample" />}
        {postStepsBlock.map((text, index) => (<div className="eds-l-pad-top-2" key={`${key}-${index}`}>{getFinalTextFromTextObject(text)}</div>))}
        <ul className="eds-l-pad-left-4 eds-l-pad-top-2">
            {postSteps.map(
                (text, index) => <li className="eds-text-bm" key={`${key}-${index}`}>{getFinalTextFromTextObject(text)}</li>
            )}
        </ul>
        
    </div>
);

GenericPageFragment.defaultProps = {
    prevSteps: [],
    prevStepsBlock: [],
    fragment: '',
    postSteps: [],
    postStepsBlock: [],
};

export default GenericPageFragment;
