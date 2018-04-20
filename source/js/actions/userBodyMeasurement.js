export const GET_USER_BODY_MEASUREMENT_REQUEST = 'GET_USER_BODY_MEASUREMENT_REQUEST';
export const GET_USER_BODY_MEASUREMENT_SUCCESS = 'GET_USER_BODY_MEASUREMENT_SUCCESS';
export const GET_USER_BODY_MEASUREMENT_ERROR = 'GET_USER_BODY_MEASUREMENT_ERROR';

export const GET_USER_BODY_MEASUREMENT_LOG_DATES_REQUEST = 'GET_USER_BODY_MEASUREMENT_LOG_DATES_REQUEST';
export const GET_USER_BODY_MEASUREMENT_LOG_DATES_SUCCESS = 'GET_USER_BODY_MEASUREMENT_LOG_DATES_SUCCESS';
export const GET_USER_BODY_MEASUREMENT_LOG_DATES_ERROR = 'GET_USER_BODY_MEASUREMENT_LOG_DATES_ERROR';

export const SAVE_USER_BODY_MEASUREMENT_REQUEST = 'SAVE_USER_BODY_MEASUREMENT_REQUEST';
export const SAVE_USER_BODY_MEASUREMENT_SUCCESS = 'SAVE_USER_BODY_MEASUREMENT_SUCCESS';
export const SAVE_USER_BODY_MEASUREMENT_ERROR = 'SAVE_USER_BODY_MEASUREMENT_ERROR';

export function getUserBodyMeasurementRequest(requestData) {
    return {
        type: GET_USER_BODY_MEASUREMENT_REQUEST,
        requestData,
    }
}

export function getUserBodyMeasurementSuccess(data) {
    return {
        type: GET_USER_BODY_MEASUREMENT_SUCCESS,
        data,
    }
}

export function getUserBodyMeasurementError(error) {
    return {
        type: GET_USER_BODY_MEASUREMENT_ERROR,
        error,
    }
}

export function getUserBodyMeasurementLogDatesRequest(requestData) {
    return {
        type: GET_USER_BODY_MEASUREMENT_LOG_DATES_REQUEST,
        requestData,
    }
}

export function getUserBodyMeasurementLogDatesSuccess(data) {
    return {
        type: GET_USER_BODY_MEASUREMENT_LOG_DATES_SUCCESS,
        data,
    }
}

export function getUserBodyMeasurementLogDatesError(error) {
    return {
        type: GET_USER_BODY_MEASUREMENT_LOG_DATES_ERROR,
        error,
    }
}

export function saveUserBodyMeasurementRequest(data) {
    return {
        type: SAVE_USER_BODY_MEASUREMENT_REQUEST,
        data,
    }
}

export function saveUserBodyMeasurementSuccess(data) {
    return {
        type: SAVE_USER_BODY_MEASUREMENT_SUCCESS,
        data,
    }
}

export function saveUserBodyMeasurementError(error) {
    return {
        type: SAVE_USER_BODY_MEASUREMENT_ERROR,
        error,
    }
}