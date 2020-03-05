import { addHtml } from './utils';

export const EDS_FOCUS_DRAWER = {
    modalInfo: [
        {
            keyReplace: 'edsmifd1',
            prevStepsBlock: [
                {
                    text: {
                        __html: `<div class="eds-l-pad-bot-2"><strong>In this exercise we are going to cover Focus Drawer controls HOC</strong></div>`
                    }
                }
            ],
            postStepsBlock: [
                {
                    text: {
                        __html:
                        `Please check <a href="https://reactjs.org/docs/higher-order-components.html" target="_blank" rel="noopener noreferrer">HOC</a>.`
                    }
                },
                {
                    text: {
                        __html:
                            `Please check <a href="https://reactjs.org/docs/legacy-context.html" target="_blank" rel="noopener noreferrer"> React Legacy Context API </a>`
                    }
                },
                {
                    text: {
                        __html:
                            'Please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/addFocusDrawerControls.js" target="_blank" rel="noopener noreferrer">addFocusDrawerControls</a>'
                    }
                },
                {
                    text: {
                        __html:
                            'Please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/withFocusDrawerControls.js" target="_blank" rel="noopener noreferrer">withFocusDrawerControls</a>'
                    }
                }
            ],
        },
        {
            keyReplace: 'edsmifd2',
            prevStepsBlock: [
                {
                    text: {
                        __html: `Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/6d3079d7a9ee8dec73cf909efded936d4dc037ab" target="_blank" rel="noopener noreferrer">here</a>`
                    }
                },
                {
                    text: {
                        __html: `Checkout current branch <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commits/eds-focus-drawer" target="_blank" rel="noopener noreferrer">Focus Drawer</a>`
                    }
                }
            ],
        }
    ],
    guideInfo: [
        {
            keyReplace: 'edsgifd1',
            prevSteps: [
                'Focus Drawer with Router Exercise',
            ],
            prevStepsBlock: [
                addHtml(`The goal of this exercise is to replicate the current implementation of focus drawer on our platform. Please check an example on <a href="https://www.evbqa.com/manage/events/62545789139/tickets/115050329" target="_blank" rel="noopener noreferrer">Create app - Tickets page</a>`),
                addHtml(`<strong>Note</strong> that <a href="https://eds-docs.evbhome.com/structure-hocs" target="_blanl" rel="noopener noreferrer">EDS documentation</a> doesn't cover what we are trying to accomplish in this exercise`),
                addHtml(`<div class="eds-l-pad-top-4">In this exercise we are going to create two componentes <strong>EdsFocusDrawer</strong> which will be our background layout and <strong>EdsFocusDrawerComponent</strong> that contains the right panel information.
                </div>`)
            ]
        },
        {
            keyReplace: 'edsgifd2',
            prevSteps: [
                'Edit your ExerciseList.js component'
            ],
            postStepsBlock: [
                addHtml('Add a new item to <strong>editItems</strong> with the following data:')
            ],
            postSteps: [
                addHtml('<strong>content</strong>: EDS - Focus Drawer Controls - Focus drawer & router'),
                addHtml('<strong>value</strong>: exercises/eds-focus-drawer')
            ],
        },
        {
            keyReplace: 'edsgifd3',
            prevSteps: [
                'Create a new component File called EdsFocusDrawer.js'
            ],
            postStepsBlock: [
                addHtml('This file should containt an eds button which onClick action that should navigate via react router to a new route <strong>/exercises/eds-focus-component</strong> (covered later on <strong>route.js</strong> edition)')
            ],
            postSteps: [
                addHtml(`Add the following import <strong>import { browserHistory } from 'react-router';</strong>. Note that we will use <strong>browserHistory.push</strong> to perform the navigation.`),
            ],
        },
        {
            keyReplace: 'edsgifd4',
            prevSteps: [
                'Create a new component File called EdsFocusDrawerComponent.js'
            ],
            postStepsBlock: [
                addHtml('Create a class based React component, in which we will implement <strong>componentDidUpdate<strong> and <strong>componentWillUnmount</strong> lifecycle methods')
            ],
            postSteps: [
                addHtml('Import <strong>withFocusDrawerControls</strong> HOC and use it to wrap your class component'),
                'Your render method should contain only some text to be displayed',
            ]
        },
        {
            keyReplace: 'edsgifd5',
            prevSteps: [
                'EdsFocusDrawerComponent.js componentDidMount'
            ],
            postStepsBlock: [
                'Follow the below instructions'
            ],
            postSteps: [
                addHtml('Destructure <strong>this.props</strong> to get <strong>showFocusDrawer</strong> and <strong>showFocusDrawerBottomBar</strong> which are function provided via the legacy context api from <strong>addFocusDrawerControls</strong>'),
                addHtml('Add a handle to navigate back via <strong>browserHistory</strong>'),
                addHtml('Invoke the <strong>showFocusDrawer</strong> function and pass an object with an <strong>onClose</strong> property which refers to previously added handler'),
                addHtml('Invoke the other function from the <strong>HOC</strong> with an object with a property called <strong>barContent</strong> and its value should be a <strong>JSX</strong> which will contain an eds button. Use the close handler as onClick action for the already mentioned button')
            ],
        },
        {
            keyReplace: 'edsgifd6',
            prevSteps: [
                'EdsFocusDrawerComponent.js componentWillUnmount'
            ],
            postStepsBlock: [
                addHtml('We need to clear <strong>focusDrawer</strong> content from within the <strong>Structure</strong> component. For this reason we are going to use the <strong>componentWillUnmount</strong> mehtod')
            ],
            postSteps: [
                addHtml('Destructure <strong>this.props</strong> to get <strong>closeFocusDrawer</strong> provided via the legacy context api from <strong>addFocusDrawerControls</strong> and invoke it'),
            ],
        },
        {
            keyReplace: 'edsgifd7',
            prevSteps: [
                'Update routes.js'
            ],
            prevStepsBlock: [
                'Import both focus drawer components and add them to your routes',
            ],
            fragment: (
`<Route path ="eds-focus-drawer" component={EdsFocusDrawer} />
<Route path ="eds-focus-component" component={EdsFocusDrawerComponent} />`
            ),
        },
        {
            keyReplace: 'edsgifd8',
            prevSteps: [
                'Create a utils.js under src/',
            ],
            fragment: (
`import React from 'react';

export const assembleComponentWithFocusDrawer = (
    focusDrawerTitle,
    focusDrawerContent,
    children,
) => ({
    mainContent: children,
    focusDrawerContent,
    focusDrawerTitle: () => (
        <span className="eds-text-bl">{focusDrawerTitle || 'Sample title'}</span>
    )
});
`
            ),
        },
        {
            keyReplace: 'edsgifd9',
            prevSteps: [
                'Edit again your routes.js file',
            ],
            prevStepsBlock: [
                'Check the below code'
            ],
            fragment: (
`
...
import EdsFocusDrawer from './components/eds/EdsFocusDrawer';
import EdsFocusDrawerComponent from './components/eds/EdsFocusDrawerComponent';
import { assembleComponentWithFocusDrawer } from './utils';

...

const edsFocusDrawerExercise = assembleComponentWithFocusDrawer('Focus Drawer', EdsFocusDrawerComponent, EdsFocusDrawer);

....
        <Route path={BASE_PATH}>
            <IndexRoute component={ConnectedPage} />
            <Route path="exercises" component={SiteStructure}>
...
                <Route path ="eds-focus-drawer" component={EdsFocusDrawer} />
                <Route path ="eds-focus-component" components={edsFocusDrawerExercise} />
...`
            ),
            postSteps: [
                addHtml('<strong>Note that</strong> we have updated our final route and instead of passing <strong>component</strong> prop we are using <strong>components</strong>'),
                addHtml('We are passing a JS object (instead of a React component) which contains 3 React components <strong>mainContent</strong>, <strong>focusDrawerContent</strong> and finally <strong>focusDrawerTitle</strong>'),
                addHtml('<strong>mainContent</strong>: will be what it should render below the focus drawer'),
                addHtml('<strong>focusDrawerContent</strong>: React component that will be render inside the <strong>Structure</strong> focus drawer'),
                addHtml('<strong>focusDrawerTitle</strong>: The title component for the focus drawer'),
            ]
        },
        {
            keyReplace: 'edsgifd10',
            prevSteps: [
                'Edit your SiteStructure.js container in order to support the above changes.',
            ],
            prevStepsBlock: [
                'Update your render method adding:'
            ],
            fragment: (
`render() {
    const {
        focusDrawerContent,
        focusDrawerTitle,
        focusDrawerOptions,
    } = this.props;
    let nextFocusDrawerOptions;

    if (focusDrawerContent) {
        nextFocusDrawerOptions = {
            ...focusDrawerOptions,
            content: focusDrawerContent,
            title: focusDrawerTitle,
            hideClose: false,
            isShown: !!focusDrawerContent,
        };
    } else {
        nextFocusDrawerOptions = {
            content: '',
        };
    }

    return (
        <Structure
...
            focusDrawerOptions={nextFocusDrawerOptions}
        >
            <Layout
                maxWidth="large"
                hasHorizontalGutters={true}
            >
...
                {this.props.mainContent}
            </Layout>
        </Structure>
    )
}`
            ),
        },
    ],
    resolutionInfo: [
        {
            keyReplace: 'edsrifd1',
            prevSteps: [
                'EdsFocusDrawer.js'
            ],
            fragment: (
`import React, { PureComponent } from 'react';
import { browserHistory } from 'react-router';

import Button from 'eventbrite_design_system/button/Button';

export default class EdsFocusDrawer extends PureComponent {
    handleNavigate = () => browserHistory.push('/exercises/eds-focus-component');

    render() {
        return (
            <div className="eds-l-pad-top-2">
                {/* eslint-disable-next-line */}
                <Button style="fill" size="block" onClick={() => this.handleNavigate()}>
                    Show Focus Drawer
                </Button>
            </div>
        )
    }
};
`
            )
        },
        {
            keyReplace: 'edsrifd2',
            prevSteps: [
                'EdsFocusDrawerComponent.js'
            ],
            fragment: (
`import React, { PureComponent } from 'react';
import { browserHistory } from 'react-router';

import withFocusDrawerControls from 'eventbrite_design_system/structure/hoc/withFocusDrawerControls';
import Button from 'eventbrite_design_system/button/Button';

class EdsFocusDrawerComponent extends PureComponent {
    _handleCloseFocusDrawer = () => {
        browserHistory.goBack();
    }
    
    componentDidMount() {
        const {
            showFocusDrawer,
            showFocusDrawerBottomBar,
        } = this.props;
        showFocusDrawer({
            onClose: this._handleCloseFocusDrawer
        });
        showFocusDrawerBottomBar({
            barContent: (
                <div className="eds-align--center">
                {/* eslint-disable-next-line */}
                    <Button style="fill" onClick={this._handleCloseFocusDrawer}>
                        Close Focus Drawer
                    </Button>
                </div>
            ),
        });
    }

    componentWillUnmount() {
        const {
            closeFocusDrawer,
        } = this.props;
        closeFocusDrawer();
    }

    render() {
        return (
            <div className="eds-l-pad-top-10 eds-l-pad-hor-2">
                <h1>This is the focus drawer!!!</h1>
            </div>
        );
    }
}

export default withFocusDrawerControls(EdsFocusDrawerComponent);
`
            )
        },
        {
            keyReplace: 'edsrifd3',
            prevSteps: [
                'SiteStructure.js'
            ],
            fragment: (
`import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Structure from 'eventbrite_design_system/structure/Structure';
import Layout from 'eventbrite_design_system/layout/Layout';
import flowRight from 'lodash/flowRight';

import addOverlayControls from 'eventbrite_design_system/structure/hoc/addOverlayControls';
import addMainControls from 'eventbrite_design_system/structure/hoc/addMainControls';
import addFocusDrawerControls from 'eventbrite_design_system/structure/hoc/addFocusDrawerControls';
import PhabButton from 'eventbrite_design_system/phab/PhabButton';
import CrossSvg from 'eventbrite_design_system/iconography/icons/Cross';

class SiteStructure extends Component {
    navigate = () => {
        browserHistory.goBack();
    }

    render() {
        const {
            focusDrawerContent,
            focusDrawerTitle,
            focusDrawerOptions,
        } = this.props;
        let nextFocusDrawerOptions;

        if (focusDrawerContent) {
            nextFocusDrawerOptions = {
                ...focusDrawerOptions,
                content: focusDrawerContent,
                title: focusDrawerTitle,
                hideClose: false,
                isShown: !!focusDrawerContent,
            };
        } else {
            nextFocusDrawerOptions = {
                content: '',
            };
        }

        return (
            <Structure
                hasIndependentScrolling
                {...this.props}
                focusDrawerOptions={nextFocusDrawerOptions}
            >
                <Layout
                    maxWidth="large"
                    hasHorizontalGutters={true}
                >
                    <div className="eds-align--space-between eds-l-pad-top-10">
                        <h1>Exercise</h1>
                        <div>
                            <PhabButton iconType={<CrossSvg />} onClick={this.navigate} size="small" />
                        </div>
                    </div>
                    {this.props.children}
                    {this.props.mainContent}
                </Layout>
            </Structure>
        )
    }
};

export default flowRight(
    addOverlayControls,
    addMainControls,
    addFocusDrawerControls
)(SiteStructure);`
            )
        },
        {
            keyReplace: 'edsrifd4',
            prevSteps: [
                'utils.js'
            ],
            fragment: (
`import React from 'react';

export const assembleComponentWithFocusDrawer = (
    focusDrawerTitle,
    focusDrawerContent,
    children,
) => ({
    mainContent: children,
    focusDrawerContent,
    focusDrawerTitle: () => (
        <span className="eds-text-bl">{focusDrawerTitle || 'Sample title'}</span>
    )
});
`
            )
        }
    ]
}