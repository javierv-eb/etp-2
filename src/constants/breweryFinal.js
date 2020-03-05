import breweryFinal from '../assets/img/brewery-final.png'

import { addHtml } from './utils';

export const BREWERY_FINAL = {
    modalInfo: [
        {
            keyReplace: 'bmif1',
            prevSteps: [
                'Final Step of our custom breweries'
            ],
            prevStepsBlock: [
                addHtml('In this exercise we will incorporte <strong>redux-form</strong> and EDS <strong>FocusDrawer</strong> HOC to finish our sample exercise'),
            ],
        },
        {
            keyReplace: 'bmif2',
            prevStepsBlock: [
                {
                    text: {
                        __html: `Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/b20867de89a64347600c86e35ba9786e1b54e698" target="_blank" rel="noopener noreferrer">here</a>`
                    }
                },
                addHtml(`Checkout current branch <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commits/brewery-final" target="_blank" rel="noopener noreferrer">Brewery Final</a>`),
            ],
        }
    ],
    guideInfo: [
        {
            keyReplace: 'bgif1',
            prevSteps: [
                'Improve our brewery to add custom breweries form'
            ],
            prevStepsBlock: [
                'Our brewery page should match below image'
            ],
            imageFragment: breweryFinal,
        },
    ],
    resolutionInfo: [
        {
            keyReplace: 'brif1',
            prevSteps: [
                'BreweryForm.js'
            ],
            fragment: (
`import React, { PureComponent } from 'react';
import { browserHistory } from 'react-router';
import ClassNames from 'classnames';
import flowRight from 'lodash/flowRight';

import withFocusDrawerControls from 'eventbrite_design_system/structure/hoc/withFocusDrawerControls';
import Button from 'eventbrite_design_system/button/Button';
import InputField from 'eventbrite_design_system/inputField/InputField';
import ValidationFormField from 'eventbrite_design_system/validationFormField/ValidationFormField';
import {
    STYLE_STATIC,
} from 'eventbrite_design_system/inputField/constants';
import withReduxForm from 'eventbrite_design_system/form/withReduxForm';
import { NOTIFICATION_TYPE_FOCUS_PANEL } from 'eventbrite_design_system/form/withReduxForm/constants';

import validate from '../../validators/breweryFormValidator';

class BreweryForm extends PureComponent {
    componentDidMount() {
        const {
            showFocusDrawer,
        } = this.props;
        showFocusDrawer({
            onClose: this.handleCloseFocusDrawer
        });
    }

    componentWillUnmount() {
        const {
            closeFocusDrawer,
        } = this.props;
        closeFocusDrawer();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const result = this.props.handleSubmit();
        
        if (result && result.then) {
            result.then(this.handleCloseFocusDrawer);
        }
        
    }
    handleCloseFocusDrawer = () => {
        browserHistory.goBack();
    }

    render() {
        const formClasses = ClassNames(
            'eds-g-cell',
            'eds-g-cell-1-1',
            'eds-l-pad-top-4',
            'eds-l-lg-pad-right-4',
            'eds-l-ln-pad-right-4',
            'eds-l-lw-pad-right-4',
            'eds-l-md-pad-right-4',
            'eds-l-mn-pad-right-4',
            'eds-l-mw-pad-right-4'
        )

        return (
            <div className="eds-l-pad-top-10 eds-l-pad-hor-2">
                <h1>Create your own brewery!!!</h1>
                <form 
                    onSubmit={this.handleSubmit}
                    className={formClasses}
                >
                    <div>
                        <div>
                            <ValidationFormField
                                v2={true}
                                name="name"
                                required={true}
                            >
                                <InputField
                                    id="name"
                                    style={STYLE_STATIC}
                                    label="Brewery Name"
                                    placeholder="My brewery..."
                                    maxLength={20}
                                    required={true}
                                    hasCharacterCount={true}
                                />
                            </ValidationFormField>
                        </div>
                        <div className="eds-l-pad-top-3">
                            <ValidationFormField
                                v2={true}
                                name="street"
                                required={true}
                            >
                                <InputField
                                    id="street"
                                    style={STYLE_STATIC}
                                    label="Street name"
                                    placeholder="Fake 123..."
                                    required={true}
                                />
                            </ValidationFormField>
                        </div>
                        <div className="eds-l-pad-top-3">
                            <ValidationFormField
                                v2={true}
                                name="city"
                                required={true}
                            >
                                <InputField
                                    id="city"
                                    style={STYLE_STATIC}
                                    label="City name"
                                    placeholder="My city..."
                                    required={true}
                                />
                            </ValidationFormField>
                        </div>
                        <div className="eds-l-pad-top-3">
                            <ValidationFormField
                                v2={true}
                                name="websiteUrl"
                                required={true}
                            >
                                <InputField
                                    id="websiteUrl"
                                    style={STYLE_STATIC}
                                    label="Brewery url"
                                    placeholder="www.brewery.com..."
                                    required={true}
                                />
                            </ValidationFormField>
                        </div>
                    </div>
                    <div className="eds-align--right">
                        {/* eslint-disable-next-line */}
                        <Button style="fill" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default flowRight(
    withFocusDrawerControls,
    withReduxForm({
        form: 'breweryForm',
        notificationType: NOTIFICATION_TYPE_FOCUS_PANEL,
        validate,
    })
)(BreweryForm);
`
            )
        },
        {
            keyReplace: 'brif2',
            prevSteps: [
                'BreweryFormValidator.js'
            ],
            fragment: (
`import {
    makeValidator,
    joinValidators,
} from 'eventbrite_design_system/utils/validation/validation';
import {
    isProvided,
    makeHasMaxLength,
} from 'js-utils/validators';

const validators = makeValidator({
    'name': [
        {
            validator: isProvided,
            errorMessage: 'Name is required',
        },
        {
            validator: makeHasMaxLength(20),
            errorMessage: 'only 20 chars',
        },
    ],
    'street': [
        {
            validator: isProvided,
            errorMessage: 'Street is required'
        },
        {
            validator: makeHasMaxLength(20),
            errorMessage: 'only 20 chars',
        },
    ],
    'city': [
        {
            validator: isProvided,
            errorMessage: 'City is required'
        },
        {
            validator: makeHasMaxLength(20),
            errorMessage: 'only 20 chars',
        },
    ],
    'websiteUrl': [
        {
            validator: isProvided,
            errorMessage: 'Web Site URL is required'
        },
        {
            validator: makeHasMaxLength(40),
            errorMessage: 'only 40 chars',
        },
    ]
});

export default joinValidators(validators);
`
            )
        },
        {
            keyReplace: 'brif3',
            prevSteps: [
                'brewery.js action'
            ],
            fragment: (
`import { SubmissionError } from 'redux-form';

export const SET_OWN_BREWERIES = 'SET_OWN_BREWERIES';
export const SET_BREWERY_TAB = 'SET_BREWERY_TAB';

const setCustomBrewery = (brewery) => ({
    type: SET_OWN_BREWERIES,
    payload: brewery
});

const setBreweryTab = (brewery) => ({
    type: SET_BREWERY_TAB,
    payload: brewery
});

export const addBrewery = (brewery) => (dispatch, getState) => {
    const {
        customBreweriresReducer,
    } = getState();

    if (!customBreweriresReducer.find(({ name }) => brewery.name === name)) {
        dispatch(setCustomBrewery({
            ...brewery,
            id: new Date().getTime(),
            logoUrl: 'https://i.picsum.photos/id/' + customBreweriresReducer.length + 1 + '/200/300.jpg'
        }));
        return Promise.resolve();
    }
    throw new SubmissionError({name: 'Duplicated'});
};

export const setTabs = (tabIndex) => (dispatch) => (
    dispatch(setBreweryTab(tabIndex))
)`
            )
        },
    ]
};
