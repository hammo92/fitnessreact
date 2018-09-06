export const GET_DASHBOARD_PAGE_REQUEST = 'GET_DASHBOARD_PAGE_REQUEST';
export const GET_DASHBOARD_PAGE_SUCCESS = 'GET_DASHBOARD_PAGE_SUCCESS';
export const GET_DASHBOARD_PAGE_ERROR = 'GET_DASHBOARD_PAGE_ERROR';

export const SAVE_DASHBOARD_WIDGETS_DATA_REQUEST = 'SAVE_DASHBOARD_WIDGETS_DATA_REQUEST';
export const SAVE_DASHBOARD_WIDGETS_DATA_SUCCESS = 'SAVE_DASHBOARD_WIDGETS_DATA_SUCCESS';
export const SAVE_DASHBOARD_WIDGETS_DATA_ERROR = 'SAVE_DASHBOARD_WIDGETS_DATA_ERROR';

export const CHANGE_DASHBOARD_BODY_FAT_WIDGET_REQUEST = 'CHANGE_DASHBOARD_BODY_FAT_WIDGET_REQUEST';
export const CHANGE_DASHBOARD_BODY_FAT_WIDGET_SUCCESS = 'CHANGE_DASHBOARD_BODY_FAT_WIDGET_SUCCESS';
export const CHANGE_DASHBOARD_BODY_FAT_WIDGET_ERROR = 'CHANGE_DASHBOARD_BODY_FAT_WIDGET_ERROR';

export const CHANGE_COMPLETE_STATUS_OF_WORKOUT_REQUEST = 'CHANGE_COMPLETE_STATUS_OF_WORKOUT_REQUEST';
export const CHANGE_COMPLETE_STATUS_OF_WORKOUT_SUCCESS = 'CHANGE_COMPLETE_STATUS_OF_WORKOUT_SUCCESS';
export const CHANGE_COMPLETE_STATUS_OF_WORKOUT_ERROR = 'CHANGE_COMPLETE_STATUS_OF_WORKOUT_ERROR';

export function getDashboardPageRequest() {
    return {
        type: GET_DASHBOARD_PAGE_REQUEST
    }
}

export function getDashboardPageSuccess(data) {
    return {
        type: GET_DASHBOARD_PAGE_SUCCESS,
        data
    }
}

export function getDashboardPageError(error) {
    return {
        type: GET_DASHBOARD_PAGE_ERROR,
        error
    }
}

export function saveDashboardWidgetsDataRequest(requestData) {
    return {
        type: SAVE_DASHBOARD_WIDGETS_DATA_REQUEST,
        requestData
    }
}

export function saveDashboardWidgetsDataSuccess(data) {
    return {
        type: SAVE_DASHBOARD_WIDGETS_DATA_SUCCESS,
        data
    }
}

export function saveDashboardWidgetsDataError(error) {
    return {
        type: SAVE_DASHBOARD_WIDGETS_DATA_ERROR,
        error
    }
}

export function changeDashboardBodyFatWidgetRequest(requestData) {
    return {
        type: CHANGE_DASHBOARD_BODY_FAT_WIDGET_REQUEST,
        requestData
    }
}

export function changeDashboardBodyFatWidgetSuccess(data) {
    return {
        type: CHANGE_DASHBOARD_BODY_FAT_WIDGET_SUCCESS,
        data
    }
}

export function changeDashboardBodyFatWidgetError(error) {
    return {
        type: CHANGE_DASHBOARD_BODY_FAT_WIDGET_ERROR,
        error
    }
}

export function changeCompleteStatusOfWorkoutRequest(requestData) {
    return {
        type: CHANGE_COMPLETE_STATUS_OF_WORKOUT_REQUEST,
        requestData
    }
}

export function changeCompleteStatusOfWorkoutSuccess(data) {
    return {
        type: CHANGE_COMPLETE_STATUS_OF_WORKOUT_SUCCESS,
        data
    }
}

export function changeCompleteStatusOfWorkoutError(error) {
    return {
        type: CHANGE_COMPLETE_STATUS_OF_WORKOUT_ERROR,
        error
    }
}