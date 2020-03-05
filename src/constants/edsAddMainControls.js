export const MAIN_CONTROLS_NOTIFICATION = {
    modalInfo: [
        {
            keyReplace: 'edsmimn1',
            prevStepsBlock: [
                {
                    text: {
                        __html: `<div class="eds-l-pad-bot-2"><strong>In this exercise we are going to cover notifications component from main controls HOC</strong></div>`
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
                            'Please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/addMainControls.js" target="_blank" rel="noopener noreferrer">addMainControls</a>'
                    }
                },
                {
                    text: {
                        __html:
                            'Please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/withMainControls.js" target="_blank" rel="noopener noreferrer">withMainControls</a>'
                    }
                }
            ]
        },
        {
            keyReplace: 'edsmimn2',
            prevStepsBlock: [
                {
                    text: {
                        __html: `Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/b41a213c115fd5d5cbbb1c3f3523e9283c9a4eac" target="_blank" rel="noopener noreferrer">here</a>`
                    }
                },
                {
                    text: {
                        __html: `Checkout current branch <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commits/eds-notification" target="_blank" rel="noopener noreferrer">Notifications</a>`
                    }
                }
            ],
        }
    ],
    guideInfo: [
        {
            keyReplace: 'edsgimn-1',
            prevSteps: [
                'Main Notification exercise'
            ],
            prevStepsBlock: [
                'Edit your ExercisesList.js component'
            ],
            fragment: (
`const edsItems = [
    {
        content: 'Eds - Main Controls - Notifications',
        value: 'exercises/eds-notification',
        iconType: <ReactChunkySvg />,
    },
];

<ExpansionPanel
    linkText="EDS - Exercises"
    verticalMargin="both"
    //eslint-disable-next-line react/style-prop-object
    style="container"
>
    <TextList items={edsItems} onItemSelect={this.handleNavigate}/>
</ExpansionPanel>
`
            ),
        },
        {
            keyReplace: 'edsgimn1',
            prevSteps: [
                'Create a new file called EdsNotification.js component'
            ],
            prevStepsBlock: [
                'Please, follow the next steps for this guide:'
            ],
            fragment: (
`import withMainControls from "eventbrite_design_system/structure/hoc/withMainControls";
import Button from "eventbrite_design_system/button/Button";
import AlertChunkySvg from "eventbrite_design_system/iconography/icons/AlertChunky";
import { TYPE_ERROR } from "eventbrite_design_system/notification/constants";`
            ),
            postSteps: [
                'Create a new notifications folder under components',
                'Add a new file called EdsNotification.js',
                'Include above imports',
            ],
        },
        {
            keyReplace: 'edsgimn2',
            prevSteps: [
                'Create the following constant',
            ],
            fragment: (
`const ERROR_NOTIFICATION = {
    type: TYPE_ERROR,
    children: "This an error notification",
    iconType: <AlertChunkySvg />,
    shouldScrollTo: true,
    hasCloseButton: true
}`
            ),
        },
        {
            keyReplace: 'edsgimn3',
            prevSteps: [
                {
                    text: {
                        __html:
                        `Add an onClick handler to one of the buttons to invoke the <strong>addMainNotification</strong> function.`
                    }
                }
            ],
            fragment: (
`handleMainNotification = () => this.props.addMainNotification(ERROR_NOTIFICATION);`
            ),
            postStepsBlock: [
                'After the handler is triggered then the notification message is rendered',
            ],
        },
        {
            keyReplace: 'edsgimn4',
            prevSteps: [
                {
                    text: {
                        __html:
                        `Add an onClick handler to invoke the <strong>handleHideNotification</strong> function.`
                    }
                }
            ],
            fragment: (
`handleHideNotification = () => this.props.hideMainNotification();`
            ),
            postStepsBlock: [
                'After the handler is triggered then the notification bar is closed',
            ],
        },
        {
            keyReplace: 'edsgimn5',
            prevSteps: [
                {
                    text: {
                        __html: `Wrap your component with <strong>withMainControls</strong> and export it as default export`
                    }
                }
            ],
            fragment: (
`export default withMainControls(EdsNotification);`
            ),
        },
        {
            keyReplace: 'edsgimn6',
            prevSteps: [
                'Edit your routes'
            ],
            fragment: (
`...
import EdsNotification from './components/eds/EdsNotification';
...
//under exercises
<Route path ="eds-notification" component={EdsNotification} />
...
`
            ),
        },
    ],
    resolutionInfo: [
        {
            keyReplace: 'edsrimn1',
            prevSteps: [
                'Your Notification file should be similar to the code below:'
            ],
            fragment: (
`import React, { PureComponent } from 'react';

import withMainControls from "eventbrite_design_system/structure/hoc/withMainControls";
import Button from "eventbrite_design_system/button/Button";
import AlertChunkySvg from "eventbrite_design_system/iconography/icons/AlertChunky";
import { TYPE_ERROR } from "eventbrite_design_system/notification/constants";

const ERROR_NOTIFICATION = {
    type: TYPE_ERROR,
    children: "This an error notification",
    iconType: <AlertChunkySvg />,
    shouldScrollTo: true,
    hasCloseButton: true
};

class EdsNotification extends PureComponent {
    handleAddNotification = () => {
        this.props.addMainNotification(ERROR_NOTIFICATION);
    }

    handleHideNotification = () => {
        this.props.hideMainNotification();
    }

    render() {
        return (
            <section className="eds-g-grid eds-g-cell eds-g-cell-1-1">
                <div className="eds-align--space-between eds-l-pad-top-10">
                    {/* eslint-disable-next-line */}
                    <Button style="fill" onClick={this.handleAddNotification}>
                        Show Notification
                    </Button>
                    <Button onClick={this.handleHideNotification}>
                        Hide Notification
                    </Button>
                </div>
            </section>
        )
    }
};

export default withMainControls(EdsNotification);
`
            )
        }
    ],
};

export const MAIN_CONTROLS_ACTION_BAR = {
    modalInfo: [
        {
            keyReplace: 'edsmiab1',
            prevStepsBlock: [
                {
                    text: {
                        __html: `<div class="eds-l-pad-bot-2"><strong>In this exercise we are going to cover action bar component from main controls HOC</strong></div>`
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
                            'Please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/addMainControls.js" target="_blank" rel="noopener noreferrer">addMainControls</a>'
                    }
                },
                {
                    text: {
                        __html:
                            'Please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/withMainControls.js" target="_blank" rel="noopener noreferrer">withMainControls</a>'
                    }
                },
                {
                    text: {
                        __html: `Checkout current branch <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commits/eds-action-bar" target="_blank" rel="noopener noreferrer">Action Bar</a>`
                    }
                }
            ]
        },
        {
            keyReplace: 'edsmiab2',
            prevStepsBlock: [
                {
                    text: {
                        __html: `Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/901a18696091d34927665ad01efcda7831cba859" target="_blank" rel="noopener noreferrer">here</a>`
                    }
                }
            ],
        }
    ],
    guideInfo: [
        {
            keyReplace: 'edsgiab1',
            prevSteps: [
                'Action Bar exercise',
            ],
            prevStepsBlock: [
                'Add a new item to edsItems from ExerciseList.js with the following data:',
            ],
            postSteps: [
                {
                    text: {
                        __html: `<strong>content</strong>: EDS - Main Controls - Action Bar`
                    }
                },
                {
                    text: {
                        __html: `<strong>value</strong>: exercises/eds-action-bar`
                    }
                }
            ]
        },
        {
            keyReplace: 'edsgiab2',
            prevSteps: [
                'Create a new file called EdsActionBar.js'
            ],
            prevStepsBlock: [
                'Create a new class based component with:',
            ],
            postSteps: [
                {
                    text: {
                        __html: `Import <strong>withMainControls</strong> from EDS Structure HOC`,
                    },
                },
                {
                    text: {
                        __html: `Import <strong>Button</strong>, from EDSC`,
                    },
                },
                {
                    text: {
                        __html: 
                            `Add a section to your <strong>render</strong> method with two buttons. (<strong>Show action bar</strong> & <strong>Hide action bar</strong>)`,
                    },
                },
                {
                    text: {
                        __html: 
                            `Bind the <strong>onClick</strong> attribute with the <strong>showMainBottomBar</strong> and the <strong>closeMainBottomBar</strong> in an appropiated way.`,
                    },
                },
            ]
        }
    ],
    resolutionInfo: [
        {
            keyReplace: 'edsriab1',
            prevSteps: [
                'Your action bar file should be similar to the code below'
            ],
            fragment: (
`import React, { Component } from 'react';

import withMainControls from 'eventbrite_design_system/structure/hoc/withMainControls';
import Button from 'eventbrite_design_system/button/Button';

class EdsActionBar extends Component {
    handleShowActionBar = () => {
        this.props.showMainBottomBar({
            barContent: (
                <div className="eds-avatar__background--has-border eds-g-cell eds-g-cell-1-1 eds-l-pad-top-2 eds-l-pad-vert-2">
                    <div className="eds-align--space-around">
                        <span className="eds-text-bm"> This is the action footer bar</span>
                        {/* eslint-disable-next-line */}
                        <Button style="fill" onClick={this.handleCloseActionBar}>
                            Close Bar
                        </Button>
                    </div>
                </div>
            )
        });
    };
    handleCloseActionBar = () => {
        this.props.closeMainBottomBar();
    };
    render() {
        return (
            <section className="eds-l-pad-top-10">
                <div className="eds-align--space-between eds-l-pad-top-10">
                    {/* eslint-disable-next-line */}
                    <Button style="fill" onClick={() => this.handleShowActionBar()}>
                        Show action bar
                    </Button>
                    <Button onClick={() => this.handleCloseActionBar()}>
                        Hide action bar
                    </Button>
                </div>
            </section>
        );
    }
}

export default withMainControls(EdsActionBar);
`
            )
        }
    ],
};
