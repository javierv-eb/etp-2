import React, { PureComponent } from 'react';

const OVERVIEW_TIPS = [
    'Provide an usefull set of React exercises',
    'Provide guides of how to implement current EDS HOC in an application',
    'Provide an introduction to redux',
    'Provide an introduction to redux-form',
];

const USEFUL_LINKS = [
    {
        title: 'Redux',
        link: 'https://redux.js.org/',
    },
    {
        title: 'Redux-form (6.8.0)',
        link: 'https://redux-form.com/6.8.0/'
    },
    {
        title: 'EB-UI',
        link: 'https://github.com/eventbrite/eb-ui'
    },
    {
        title: 'Eventbrite Design System',
        link: 'https://eds-docs.evbhome.com/'
    },
];

export default class Overview extends PureComponent {
    render () {
        return (
            <section className="eds-best-practices eds-l-mar-vert-10" data-spec="eds-best-practices">
                <h1 className="eds-text-hm eds-l-pad-bot-6">Objectives</h1>
                <ul className="eds-text-bm eds-text-height--open eds-l-pad-left-4">
                    {OVERVIEW_TIPS.map((item) => <li className="eds-l-pad-bot-2" key={item}>{item}</li>)}
                </ul>
                <h1 className="eds-text-hm eds-l-pad-bot-6 eds-l-pad-top-10">Useful links</h1>
                <ul className="eds-text-bm eds-text-height--open eds-l-pad-left-4">
                    {USEFUL_LINKS.map(({title, link}) => (
                        <li className="eds-l-pad-bot-2" key={title}>
                            <a href={link}>{title}</a>
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
};
