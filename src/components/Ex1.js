import React from 'react';
import {browserHistory} from 'react-router';

import PhabButton from 'eventbrite_design_system/phab/PhabButton';
import CrossSvg from 'eventbrite_design_system/iconography/icons/Cross';

import CodeSampler from './CodeSampler';
//eslint-disable-next-line
import Ex1jsx from '!raw-loader!./Ex1.jsx';

import './Ex1.scss';

const navigate = (route) => {
    browserHistory.goBack();
};


const Ex1 = () => (
    <section>
        <CodeSampler code={Ex1jsx} extraPadding>
            <div className="eds-align--space-between eds-l-pad-hor-10">
                <h1 className="eds-l-pad-vert-10">Exercise One</h1>
                <div className="eds-l-pad-top-6">
                    <PhabButton iconType={<CrossSvg />} onClick={navigate} size="small" />
                </div>
            </div>

            <div className="eds-bg-color--deepsea-blue-100  eds-g-cell eds-g-cell-1-1 ex1"></div>
            <div className="eds-bg-color--deepsea-blue-200  eds-g-cell eds-g-cell-1-1 ex1"></div>
            <div className="eds-bg-color--deepsea-blue-300  eds-g-cell eds-g-cell-1-1 ex1"></div>
            <div className="eds-bg-color--deepsea-blue-400  eds-g-cell eds-g-cell-1-1 ex1"></div>
            <div className="eds-bg-color--deepsea-blue-500  eds-g-cell eds-g-cell-1-1 ex1"></div>
        </CodeSampler>
    </section>
);

export default Ex1;
