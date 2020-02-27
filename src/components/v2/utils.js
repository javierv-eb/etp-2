import React from 'react';
import has from 'lodash/has';

export const getFinalTextFromTextObject = (rawText = '') => {
    let text;

    if (has(rawText, 'text')) {
        text = (
            <div
                //eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={rawText.text}
            />
        );
    } else {
        text = rawText.toString();
    }
    return text;
};