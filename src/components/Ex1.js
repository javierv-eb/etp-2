import React from 'react';
import {browserHistory} from 'react-router';

import PhabButton from 'eventbrite_design_system/phab/PhabButton';
import CrossSvg from 'eventbrite_design_system/iconography/icons/Cross';

//eslint-disable-next-line
import Ex1jsx from '!raw-loader!./Ex1.jsx';

import './Ex1.scss';
import Structure from './structure/Structure';

const navigate = (route) => {
    browserHistory.goBack();
};


const Ex1 = () => (
    <section className="eds-l-pad-hor-10">
        <div className="eds-align--space-between">
                <h1 className="eds-l-pad-vert-10">Exercise One</h1>
                <div className="eds-l-pad-top-6">
                    <PhabButton iconType={<CrossSvg />} onClick={navigate} size="small" />
                </div>
            </div>
    
        <Structure
            Component={() => (
                <>
                    <div className="eds-bg-color--deepsea-blue-100  eds-g-cell eds-g-cell-1-1 ex1"></div>
                    <div className="eds-bg-color--deepsea-blue-200  eds-g-cell eds-g-cell-1-1 ex1"></div>
                    <div className="eds-bg-color--deepsea-blue-300  eds-g-cell eds-g-cell-1-1 ex1"></div>
                    <div className="eds-bg-color--deepsea-blue-400  eds-g-cell eds-g-cell-1-1 ex1"></div>
                    <div className="eds-bg-color--deepsea-blue-500  eds-g-cell eds-g-cell-1-1 ex1"></div>
                </>
            )}
            code={Ex1jsx}
        />
    </section>
);

export default Ex1;
