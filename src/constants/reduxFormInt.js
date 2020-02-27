import { addHtml } from './utils';

export const REDUX_FORM_INIT = {
    modalInfo: [
        {
            keyReplace: 'rfmii1',
            prevSteps: [
                addHtml(
                    '<div class="eds-l-pad-bot-2">In this exercise we are going initialize our basic form</div>'
                )
            ],
            postStepsBlock: [
                'Please check the following bullets:'
            ],
            postSteps: [
                addHtml('Redux form initialization via <a href="https://redux-form.com/6.8.0/examples/initializefromstate/" target="_blank" rel="noopener noreferrer">mapStateToProps form state initialization </a>'),
            ]
        },
        {
            keyReplace: 'rfmii2',
            prevStepsBlock: [
                {
                    text: {
                        __html: `Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/d7acec7425d552010dd33650124c1065c3df7035" target="_blank" rel="noopener noreferrer">here</a>`
                    }
                }
            ],
        }
    ],
    guideInfo: [
        {
            keyReplace: 'rfgii1',
            prevSteps: [
                'Initialize your form via form state',
            ],
            postStepsBlock: [
                'Follow next steps:',
            ],
            postSteps: [
                addHtml('Create a new connector called form <strong>connectReduxFormStateInit.js</strong>'),
                addHtml(`Edit your exercise list with the following data<br/><strong>content</strong>: Redux Form - State Init`),
                addHtml(`<strong>value</strong>: exercises/redux-form-state-init`),
            ]
        },
        {
            keyReplace: 'rfgii2',
            prevStepsBlock: ['Init your form with the following data:'],
            fragment: (
`{
    firstField: 'First Value',
    secondField: 'second',
    thirdField: 'first',
    '5Field': 'Last value'
}`
            ),
        },
    ],
    resolutionInfo: [
        {
            keyReplace: 'rfrii1',
            prevSteps: [
                'connectReduxFormStateInit.js',
            ],
            fragment: (
`import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';

import withReduxForm from 'eventbrite_design_system/form/withReduxForm';

import ReduxFormBasic from '../../components/reduxForm/ReduxFormBasic';
import { saveReduxFormBasicData } from '../../actions/reduxFormBasic';

const mapStateToProps = (
    {
        reduxBasicFormData
    }
) => ({
    reduxBasicFormData,
    initialValues: {
        firstField: 'First Value',
        secondField: 'second',
        thirdField: 'first',
        '5Field': 'Last value',
    },
} );

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (formData) => dispatch(saveReduxFormBasicData(formData)),
});

export default flowRight(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withReduxForm({
        form: 'reduxFormBasic',
    }),
)(ReduxFormBasic);
`
            )
        }
    ]
};

export const REDUX_FORM_INIT_ACTION_CREATOR = {
    modalInfo: [
        {
            keyReplace: 'rfmiiac1',
            prevSteps: [
                addHtml(
                    '<div class="eds-l-pad-bot-2">In this exercise we are going initialize our basic form</div>'
                )
            ],
            postStepsBlock: [
                'Please check the following bullets:'
            ],
            postSteps: [
                addHtml('Redux form initialization via <a href="https://redux-form.com/6.8.0/docs/api/actioncreators.md/" target="_blank" rel="noopener noreferrer">action creators</a>'),
            ]
        },
        {
            keyReplace: 'rfmiiac2',
            prevStepsBlock: [
                {
                    text: {
                        __html: `Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/f73b2272da8c785f4961d385a6a88536b163115f" target="_blank" rel="noopener noreferrer">here</a>`
                    }
                }
            ],
        }
    ],
    guideInfo: [
        {
            keyReplace: 'rfgiiac1',
            prevSteps: [
                'Initialize your form via redux-form action creator',
            ],
            postStepsBlock: [
                'Follow next steps:',
            ],
            postSteps: [
                addHtml('Create a new connector called form <strong>connectReduxFormActionCreatorInit.js</strong>'),
                addHtml(`Edit your exercise list with the following data<br/><strong>content</strong>: Redux Form - Action Creator Init`),
                addHtml(`<strong>value</strong>: exercises/redux-form-action-creator-init`),
            ]
        },
        {
            keyReplace: 'rfgiiac2',
            prevSteps: [
                'Edit your connector in order to dispatch the initialize redux-form action creator function'
            ],
            fragment: (
`...
import { initialize } from 'redux-form';

....

const mapDispatchToProps = (dispatch) => ({
    ....
    onLoad: () => dispatch(
        initialize(
            'reduxFormBasic',
            {
                firstField: 'First Value',
                secondField: 'second',
                thirdField: 'first',
                '5Field': 'Last value',
            }
        )
    ),
});
....
`
            ),
            postStepsBlock: [
                addHtml('<strong>Note that:</strong> the onload function dispatches a <strong>redux-form</strong> action to initialize our form')
            ]
        },
    ],
    resolutionInfo: [
        {
            keyReplace: 'rfriiac1',
            prevSteps: [
                'connectReduxFormActionCreatorInit.js',
            ],
            fragment: (
`import { connect } from 'react-redux';
import flowRight from 'lodash/flowRight';
import { initialize } from 'redux-form';

import withReduxForm from 'eventbrite_design_system/form/withReduxForm';

import ReduxFormBasic from '../../components/reduxForm/ReduxFormBasic';
import { saveReduxFormBasicData } from '../../actions/reduxFormBasic';

const mapStateToProps = (
    {
        reduxBasicFormData
    }
) => ({
    reduxBasicFormData,
} );

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (formData) => dispatch(saveReduxFormBasicData(formData)),
    onLoad: () => dispatch(
        initialize(
            'reduxFormBasic',
            {
                firstField: 'First Value',
                secondField: 'second',
                thirdField: 'first',
                '5Field': 'Last value',
            }
        )
    ),
});

export default flowRight(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
    withReduxForm({
        form: 'reduxFormBasic',
    }),
)(ReduxFormBasic);
`
            )
        },
        {
            keyReplace: 'rfriiac2',
            prevSteps: [
                'ReduxFormBasic.js',
            ],
            fragment: (
`import React, { Component } from 'react';
import ClassNames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import noop from 'lodash/noop';

...
export default class ReduxFormBasic extends Component {
    static defaultProps = {
        onLoad: noop,
    }
    ...

    componentDidMount() {
        const { onLoad } = this.props;

        onLoad();
    }

    render() {
...
    }
};
`
            )
        }
    ]
}