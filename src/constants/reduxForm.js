import { REDUX_FORM_BASIC } from './reduxFormBasic';
import { REDUX_FORM_INIT, REDUX_FORM_INIT_ACTION_CREATOR } from './reduxFormInt';
import { REDUX_FORM_SELECTORS } from './reduxFormSelectors';
import { REDUX_FORM_VALIDATORS } from './reduxFormValidators';


export const REDUX_FORM_INFO = {
    reduxFormBasic: REDUX_FORM_BASIC.modalInfo,
    reduxFormStateInit: REDUX_FORM_INIT.modalInfo,
    reduxFormStateActionCreator: REDUX_FORM_INIT_ACTION_CREATOR.modalInfo,
    reduxFormSelector: REDUX_FORM_SELECTORS.modalInfo,
    reduxFormValidator: REDUX_FORM_VALIDATORS.modalInfo,
};

export const GUIDE_INFO = {
    reduxFormBasic: REDUX_FORM_BASIC.guideInfo,
    reduxFormStateInit: REDUX_FORM_INIT.guideInfo,
    reduxFormStateActionCreator: REDUX_FORM_INIT_ACTION_CREATOR.guideInfo,
    reduxFormSelector: REDUX_FORM_SELECTORS.guideInfo,
    reduxFormValidator: REDUX_FORM_VALIDATORS.guideInfo,
};

export const RESOLUTION_INFO = {
    reduxFormBasic: REDUX_FORM_BASIC.resolutionInfo,
    reduxFormStateInit: REDUX_FORM_INIT.resolutionInfo,
    reduxFormStateActionCreator: REDUX_FORM_INIT_ACTION_CREATOR.resolutionInfo,
    reduxFormSelector: REDUX_FORM_SELECTORS.resolutionInfo,
    reduxFormValidator: REDUX_FORM_VALIDATORS.resolutionInfo,
};
