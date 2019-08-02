import React from 'react';
import {browserHistory} from 'react-router';

import PhabButton from 'eventbrite_design_system/phab/PhabButton';
import CrossSvg from 'eventbrite_design_system/iconography/icons/Cross';

import CodeSampler from './CodeSampler';
//eslint-disable-next-line
import Ex12jsx from '!raw-loader!./Ex2.jsx';

import './Ex2.scss';

const navigate = (route) => {
    browserHistory.goBack();
};

const Ex2 = () => (
    <section className="eds-g-grid eds-g-cell eds-g-cell-1-1">
        <CodeSampler code={Ex12jsx} extraPadding>
            <div className="eds-align--space-between eds-l-pad-hor-10">
                <h1 className="eds-l-pad-vert-10">Exercise Two</h1>
                <div className="eds-l-pad-top-6">
                    <PhabButton iconType={<CrossSvg />} onClick={navigate} size="small"/>
                </div>
            </div>

            <div className="eds-bg-color--ui-red  eds-g-cell eds-g-cell-1-1 ex1"></div>
            <div className="eds-bg-color--ui-blue  eds-g-cell eds-g-cell-1-2 ex1"></div>
            <div className="eds-bg-color--ui-green  eds-g-cell eds-g-cell-1-2 ex1"></div>
            <div className="eds-bg-color--ui-organge eds-g-cell eds-g-cell-7-12 eds-g-offset-3-12 ex1">
                <div className="eds-g-group eds-text--center">
                    <div className="eds-bg-color--ui-red  eds-g-cell eds-g-cell-1-1 eds-text-color--background eds-text-bm ex1">
                        (7*12)/7 = 12
                    </div>
                    <div className="eds-bg-color--ui-blue  eds-g-cell eds-g-cell-5-12 eds-text-color--background eds-text-bm ex1">
                        (3*12)/7 = 5
                    </div>
                    <div className="eds-bg-color--ui-green eds-g-cell eds-g-cell-7-12 eds-text-color--background eds-text-bm ex1">
                        (4*12)/7 = 7
                    </div>
                    <div className="eds-bg-color--ui-orange eds-g-cell eds-g-cell-3-12 eds-text-color--background eds-text-bm ex1">
                        (2*12)/7 = 3
                    </div>
                    <div className="eds-bg-color--ui-red eds-g-cell eds-g-cell-5-12 eds-text-color--background eds-text-bm ex1">
                        (3*12)/7 = 5
                    </div>
                    <div className="eds-bg-color--ui-blue eds-g-cell eds-g-cell-2-12 eds-text-color--background eds-text-bm ex1">
                        (1*12)/7 = 2
                    </div>
                    <div className="eds-bg-color--ui-green eds-g-cell eds-g-cell-2-12 eds-text-color--background eds-text-bm ex1">
                        (1*12)/7 = 2
                    </div>
                    <div className="eds-bg-color--ui-orange eds-g-cell eds-g-cell-3-12 eds-text-color--background eds-text-bm ex1">
                        (2*12)/7 = 3
                    </div>
                    <div className="eds-bg-color--ui-red eds-g-cell eds-g-cell-5-12 eds-text-color--background eds-text-bm ex1">
                        (3*12)/7 = 5
                    </div>
                    <div className="eds-bg-color--ui-blue eds-g-cell eds-g-cell-2-12 eds-text-color--background eds-text-bm ex1">
                        (1*12)/7 = 2
                    </div>
                    <div className="eds-bg-color--ui-green eds-g-cell eds-g-cell-2-12 eds-text-color--background eds-text-bm ex1">
                        (1*12)/7 = 2
                    </div>
                    <div className="eds-bg-color--ui-orange eds-g-cell eds-g-cell-3-12 eds-text-color--background eds-text-bm ex1">
                        (2*12)/7 = 3
                    </div>
                    <div className="eds-bg-color--ui-red eds-g-cell eds-g-cell-5-12 eds-text-color--background eds-text-bm ex1">
                        (3*12)/7 = 5
                    </div>
                    <div className="eds-bg-color--ui-blue eds-g-cell eds-g-cell-2-12 eds-text-color--background eds-text-bm ex1">
                        (1*12)/7 = 2
                    </div>
                    <div className="eds-bg-color--ui-green eds-g-cell eds-g-cell-2-12 eds-text-color--background eds-text-bm ex1">
                        (1*12)/7 = 2
                    </div>
                </div>
            </div>
        </CodeSampler>
    </section>
);

export default Ex2;
