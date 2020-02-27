export const OVERLAY_CONTROLS_DIALOG = {
    modalInfo: [
        {
            keyReplace: 'edsmid1',
            prevStepsBlock: [
                {
                    text: {
                        __html: `<div class="eds-l-pad-bot-2"><strong>In this exercise we are going to cover dialog component from overlay controls HOC</strong></div>`
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
                            'Please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/addOverlayControls.js" target="_blank" rel="noopener noreferrer">addOverlayControls</a>'
                    }
                },
                {
                    text: {
                        __html:
                            'Please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/withOverlayControls.js" target="_blank" rel="noopener noreferrer">withOverlayControls</a>'
                    }
                }
            ],
        },
        {
            keyReplace: 'edsmid2',
            prevStepsBlock: [
                {
                    text: {
                        __html: `Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/614f8fe84c552da79696c46de6a0624cd34b71b8" target="_blank" rel="noopener noreferrer">here</a>`
                    }
                }
            ],
        }
    ],
    guideInfo: [
        {
            keyReplace: 'edsgid1',
            prevSteps: [
                'Overlay Dialog exercise',
            ],
            prevStepsBlock: [
                {
                    text: {
                        __html: `Add a new item to <strong>editItems</strong> array from <strong>ExerciseList.js</strong> with the following data:`
                    }
                },
            ],
            postSteps: [
                {
                    text: {
                        __html: `<strong>content</strong>: EDS - Overlay Controls - Dialog`
                    }
                },
                {
                    text: {
                        __html: `<strong>value</strong>: exercises/eds-dialog`
                    }
                }
            ]
        },
        {
            keyReplace: 'edsgid2',
            prevSteps: [
                'Create a new file called EdsDialog.js',
            ],
            postSteps: [
                {
                    text: {
                        __html: 'Import <strong>withOverlayControls</strong> from EDS Structure HOC'
                    }
                },
                {
                    text: {
                        __html: 'Import <strong>Button</strong> from EDS'
                    }
                },
                'Add an onClick listener to the button to show the dialog',
                {
                    text: {
                        __html: `Import <strong>TrashChunky</strong> from EDS<strong>("import TrashSvg from 'eventbrite_design_system/iconography/icons/TrashChunky';")</strong>`
                    }
                },
            ],
        },
        {
            keyReplace: 'edsgid3',
            prevSteps: [
                {
                    text: {
                        __html: 'Add a new const called <strong>dialogContent</strong>'
                    }
                }
            ],
            prevStepsBlock: [
                'The const should looks like:'
            ],
            fragment: (
`const dialogContent = {
    headerIconType: <TrashSvg />,
    title: 'This is the title',
    message: 'This is the internal notification message',
    primaryText: 'Primary action',
    primaryType: 'danger',
    secondaryText: 'Secondary Action',
    secondaryType: 'link',
}
`
            )
        },
        {
            keyReplace: 'edsgid4',
            prevSteps: [
                'Your button onClick listener should be similar to below code:'
            ],
            fragment: (
`handleShowOverlayDialog = () => {
    this.props.showOverlay(
        'dialog',
        dialogContent,
    );
}`
            ),
            postStepsBlock: [
                {
                    text: {
                        __html: 
                            `Not that the <strong>dialog</strong> parameter is required to indicate that whenever <strong>showOverlay</strong> function from <strong>withOverlayControls</strong> is invoke, <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/Structure.js" target="_blank">Structure</a> eds component will render a <strong>dialog</strong> component with the context provided in the second parameter.`
                    }
                }
            ]
        },
    ],
    resolutionInfo: [
        {
            keyReplace: 'edsrid1',
            prevSteps: [
                'Your EdsDialog file should be similar to the code below:'
            ],
            fragment: (
`import React, { PureComponent } from 'react';

import withOverlayControls from "eventbrite_design_system/structure/hoc/withOverlayControls";
import Button from "eventbrite_design_system/button/Button";
import TrashSvg from "eventbrite_design_system/iconography/icons/TrashChunky";

const dialogContent = {
    headerIconType: <TrashSvg />,
    title: 'This is the title',
    message: 'This is the internal notification message',
    primaryText: 'Primary action',
    primaryType: 'danger',
    secondaryText: 'Secondary Action',
    secondaryType: 'link',
};

class EdsDialog extends PureComponent {

    handleShowOverlayDialog = () => {
        this.props.showOverlay(
            'dialog',
            dialogContent,
        );
    }

    render() {
        return (
            <section className="eds-l-pad-top-10">
                <div className="eds-align--space-between eds-l-pad-top-10">
                    {/* eslint-disable-next-line */}
                    <Button style="fill" onClick={() => this.handleShowOverlayDialog()}>
                        Show Dialog!!!
                    </Button>
                </div>
            </section>
        );
    }
};

export default withOverlayControls(EdsDialog);
`
            )
        }
    ],
};

export const OVERLAY_CONTROLS_MODAL = {
    modalInfo: [
        {
            keyReplace: 'edsmim1',
            prevStepsBlock: [
                {
                    text: {
                        __html: `<div class="eds-l-pad-bot-2"><strong>In this exercise we are going to cover modal component from overlay controls HOC</strong></div>`
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
                            'Please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/addOverlayControls.js" target="_blank" rel="noopener noreferrer">addOverlayControls</a>'
                    }
                },
                {
                    text: {
                        __html:
                            'Please check <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/hoc/withOverlayControls.js" target="_blank" rel="noopener noreferrer">withOverlayControls</a>'
                    }
                }
            ],
        },
        {
            keyReplace: 'edsmim2',
            prevStepsBlock: [
                {
                    text: {
                        __html: `Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/1035d47bb0c7bf4e4fad8e4cb429041a35b1c73b" target="_blank" rel="noopener noreferrer">here</a>`
                    }
                }
            ],
        }
    ],
    guideInfo: [
        {
            keyReplace: 'edsgim1',
            prevSteps: [
                'Overlay Modal with Notification bar exercise',
            ],
            prevStepsBlock: [
                {
                    text: {
                        __html: `Add a new item to <strong>editItems</strong> array from <strong>ExerciseList.js</strong> with the following data:`
                    }
                },
            ],
            postSteps: [
                {
                    text: {
                        __html: `<strong>content</strong>: EDS - Overlay Controls - Modal with Notification bar`
                    }
                },
                {
                    text: {
                        __html: `<strong>value</strong>: exercises/eds-modal`
                    }
                }
            ]
        },
        {
            keyReplace: 'edsgim2',
            prevSteps: [
                'Create a new file called EdsModalWithNotification.js',
            ],
            postSteps: [
                {
                    text: {
                        __html: 'Import <strong>withOverlayControls</strong> from EDS Structure HOC'
                    }
                },
                {
                    text: {
                        __html: 'Import <strong>Button</strong> from EDS'
                    }
                },
                'Add an onClick listener to the button to show the dialog',
                {
                    text: {
                        __html: `Import <strong>Illustration</strong> from EDS <strong>("import Illustration from from 'eventbrite_design_system/illustration/Illustration';")</strong>`
                    }
                },
                {
                    text: {
                        __html: `Import <strong>BlueMoneyIllustrationSvg</strong> from EDS <strong>("import BlueMoneyIllustrationSvg from 'eventbrite_design_system/iconography/icons/BlueMoneyIllustration';")</strong>`
                    }
                },
                {
                    text: {
                        __html: `Import <strong>AlertChunkySvg</strong> from EDS <strong>("import AlertChunkySvg from 'eventbrite_design_system/iconography/icons/AlertChunky';")</strong>`
                    }
                },
                {
                    text: {
                        __html: `Import <strong>TYPE_ERROR</strong> from EDS <strong>("import { TYPE_ERROR } from 'eventbrite_design_system/notification/constants';
                        ")</strong>`
                    }
                },
            ],
        },
        {
            keyReplace: 'edsgim3',
            prevSteps: [
                {
                    text: {
                        __html: 'Add a new function called <strong>modalContent</strong>'
                    }
                }
            ],
            prevStepsBlock: [
                'The const should looks like:'
            ],
            fragment: (
`const modalContent = (onNotificationAdd) => ({
    primaryText: 'Close',
    primaryType: 'fill',
    secondaryText: 'Secondary',
    secondaryType: 'follow',
    children: (
        <div className=" eds-g-cell eds-g-cell-1-1 eds-l-pad-top-2 eds-l-pad-vert-2">
            <h3>This is the modal Content!!!</h3>
            <div className="eds-l-pad-top-20">
                <Button type="submit" onClick={onNotificationAdd}>
                    Show Notification
                 </Button>
            </div>
        </div>
    ),
    illustration: (
        <Illustration
            type={<BlueMoneyIllustrationSvg />}
            height="420px"
            width="220px"
        />
    ),
});
`
            )
        },
        {
            keyReplace: 'edsgim4',
            prevSteps: [
                {
                    text: {
                        __html: 'Add a new const called <strong>notificationContent</strong>'
                    }
                }
            ],
            prevStepsBlock: [
                'The const should looks like:'
            ],
            fragment: (
`const notificationContent = {
    type: TYPE_ERROR,
    children: "This an error notification in the modal",
    iconType: <AlertChunkySvg />,
    hasCloseButton: true,
    shouldFloatAboveContent: true,
    shouldAnimate: true,
}
`
            )
        },
        {
            keyReplace: 'edsgim5',
            prevSteps: [
                'Your button onClick listener should be similar to below code:'
            ],
            fragment: (
`handleShowOverlay = () => {
    this.props.showOverlay(
        'modal',
        modalContent(this.handleNotificationAdd),
    );
}`
            ),
            postStepsBlock: [
                {
                    text: {
                        __html: 
                            `Not that the <strong>modal</strong> parameter is required to indicate that whenever <strong>showOverlay</strong> function from <strong>withOverlayControls</strong> is invoke, <a href="https://github.com/eventbrite/eventbrite_design_system/blob/master/library/src/structure/Structure.js" target="_blank">Structure</a> eds component will render a <strong>modal</strong> component with the context provided in the second parameter.`
                    }
                }
            ],
            postSteps: [
                {
                    text: {
                        __html:
                            `Implement the <strong>handleNotificationAdd</strong> method to display the notification bar using the already defined <strong>notificationContent</strong> var`
                    }
                }
            ]
        },
    ],
    resolutionInfo: [
        {
            keyReplace: 'edsrim1',
            prevSteps: [
                'Your EdsModalWithNotification file should be similar to the code below:'
            ],
            fragment: (
`import React, { Component } from "react";

import withOverlayControls from "eventbrite_design_system/structure/hoc/withOverlayControls";
import Button from "eventbrite_design_system/button/Button";
import Illustration from 'eventbrite_design_system/illustration/Illustration';
import BlueMoneyIllustrationSvg from 'eventbrite_design_system/iconography/icons/BlueMoneyIllustration';
import AlertChunkySvg from "eventbrite_design_system/iconography/icons/AlertChunky";
import { TYPE_ERROR } from "eventbrite_design_system/notification/constants";

const modalContent = (onNotificationAdd) => ({
    primaryText: 'Close',
    primaryType: 'fill',
    secondaryText: 'Secondary',
    secondaryType: 'follow',
    children: (
        <div className=" eds-g-cell eds-g-cell-1-1 eds-l-pad-top-2 eds-l-pad-vert-2">
            <h3>This is the modal Content!!!</h3>
            <div className="eds-l-pad-top-20">
                <Button type="submit" onClick={onNotificationAdd}>
                    Show Notification
                 </Button>
            </div>
        </div>
    ),
    illustration: (
        <Illustration
            type={<BlueMoneyIllustrationSvg />}
            height="420px"
            width="220px"
        />
    ),
});

const notificationContent = {
    type: TYPE_ERROR,
    children: "This an error notification in the modal",
    iconType: <AlertChunkySvg />,
    hasCloseButton: true,
    shouldFloatAboveContent: true,
    shouldAnimate: true,
};

class EdsModalWithNotification extends Component {
    handleNotificationAdd = () => {
        this.props.addOverlayNotification(notificationContent);
    }
    handleShowOverlay = () => {
        this.props.showOverlay(
            'modal',
            modalContent(this.handleNotificationAdd),
        );
    }
    render() {
        return (
            <section className="eds-l-pad-top-10">
                <div className="eds-align--space-between eds-l-pad-top-10">
                    {/* eslint-disable-next-line */}
                    <Button style="fill" onClick={() => this.handleShowOverlay()}>
                        Show Modal!!!
                    </Button>
                </div>
            </section>
        );
    }
}

export default withOverlayControls(EdsModalWithNotification);

`
            )
        }
    ],
};
