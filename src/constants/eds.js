import {
    MAIN_CONTROLS_NOTIFICATION,
    MAIN_CONTROLS_ACTION_BAR,
} from './edsAddMainControls';

import {
   OVERLAY_CONTROLS_DIALOG,
   OVERLAY_CONTROLS_MODAL,
} from './edsAddOverlayControls';

import { EDS_FOCUS_DRAWER } from './edsAddFocusDrawerControls';

export const EDS_MODAL_INFO = {
    mainControlsNotification: MAIN_CONTROLS_NOTIFICATION.modalInfo,
    mainControlsActionBar: MAIN_CONTROLS_ACTION_BAR.modalInfo,
    overlayControlsDialog: OVERLAY_CONTROLS_DIALOG.modalInfo,
    overlayControlsModal: OVERLAY_CONTROLS_MODAL.modalInfo,
    focusDrawer: EDS_FOCUS_DRAWER.modalInfo,
};

export const GUIDE_INFO = {
    mainControlsNotification: MAIN_CONTROLS_NOTIFICATION.guideInfo,
    mainControlsActionBar: MAIN_CONTROLS_ACTION_BAR.guideInfo,
    overlayControlsDialog: OVERLAY_CONTROLS_DIALOG.guideInfo,
    overlayControlsModal: OVERLAY_CONTROLS_MODAL.guideInfo,
    focusDrawer: EDS_FOCUS_DRAWER.guideInfo,
};

export const RESOLUTION_INFO = {
    mainControlsNotification: MAIN_CONTROLS_NOTIFICATION.resolutionInfo,
    mainControlsActionBar: MAIN_CONTROLS_ACTION_BAR.resolutionInfo,
    overlayControlsDialog: OVERLAY_CONTROLS_DIALOG.resolutionInfo,
    overlayControlsModal: OVERLAY_CONTROLS_MODAL.resolutionInfo,
    focusDrawer: EDS_FOCUS_DRAWER.resolutionInfo,
};
