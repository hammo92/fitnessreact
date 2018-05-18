export const GET_USER_FITNESS_TESTS_REQUEST = 'GET_USER_FITNESS_TESTS_REQUEST';
export const GET_USER_FITNESS_TESTS_SUCCESS = 'GET_USER_FITNESS_TESTS_SUCCESS';
export const GET_USER_FITNESS_TESTS_ERROR = 'GET_USER_FITNESS_TESTS_ERROR';

export const SAVE_USER_FITNESS_TESTS_REQUEST = 'SAVE_USER_FITNESS_TESTS_REQUEST';
export const SAVE_USER_FITNESS_TESTS_SUCCESS = 'SAVE_USER_FITNESS_TESTS_SUCCESS';
export const SAVE_USER_FITNESS_TESTS_ERROR = 'SAVE_USER_FITNESS_TESTS_ERROR';

export const RESET_USER_FITNESS_TESTS_REQUEST = 'RESET_USER_FITNESS_TESTS_REQUEST';
export const RESET_USER_FITNESS_TESTS_SUCCESS = 'RESET_USER_FITNESS_TESTS_SUCCESS';
export const RESET_USER_FITNESS_TESTS_ERROR = 'RESET_USER_FITNESS_TESTS_ERROR';

export const USER_FITNESS_TESTS_TEXT_FIELD = 'USER_FITNESS_TEST_TEXT_FIELD';
export const USER_FITNESS_TESTS_MAX_REP_FIELD = 'USER_FITNESS_TESTS_MAX_REP_FIELD';
export const USER_FITNESS_TESTS_MULTISELECT_FIELD = 'USER_FITNESS_TESTS_MULTISELECT_FIELD';
export const USER_FITNESS_TESTS_A_OR_B_FIELD = 'USER_FITNESS_TESTS_A_OR_B_FIELD';

export function getUserFitnessTestsRequest() {
    return {
        type: GET_USER_FITNESS_TESTS_REQUEST,
    }
}

export function getUserFitnessTestsSuccess(data) {
    return {
        type: GET_USER_FITNESS_TESTS_SUCCESS,
        data,
    }
}

export function getUserFitnessTestsError(error) {
    return {
        type: GET_USER_FITNESS_TESTS_ERROR,
        error,
    }
}

export function saveUserFitnessTestsRequest(requestData) {
    return {
        type: SAVE_USER_FITNESS_TESTS_REQUEST,
        requestData,
    }
}

export function saveUserFitnessTestsSuccess(data) {
    return {
        type: SAVE_USER_FITNESS_TESTS_SUCCESS,
        data,
    }
}

export function saveUserFitnessTestsError(error) {
    return {
        type: SAVE_USER_FITNESS_TESTS_ERROR,
        error,
    }
}

export function resetUserFitnessTestsRequest() {
    return {
        type: RESET_USER_FITNESS_TESTS_REQUEST,
    }
}

export function resetUserFitnessTestsSuccess(data) {
    return {
        type: RESET_USER_FITNESS_TESTS_SUCCESS,
        data,
    }
}

export function resetUserFitnessTestsError(error) {
    return {
        type: RESET_USER_FITNESS_TESTS_ERROR,
        error,
    }
}

export function userFitnessTestsTextField(_id, value) {
    return {
        type: USER_FITNESS_TESTS_TEXT_FIELD,
        _id,
        value,
    }
}

export function userFitnessTestsMaxRep(_id, value, rep) {
    return {
        type: USER_FITNESS_TESTS_MAX_REP_FIELD,
        _id,
        value,
        rep,
    }
}

export function userFitnessTestsMultiselect(_id, value) {
    return {
        type: USER_FITNESS_TESTS_MULTISELECT_FIELD,
        _id,
        value,
    }
}

export function userFitnessTestsAOrB(_id, value) {
    return {
        type: USER_FITNESS_TESTS_A_OR_B_FIELD,
        _id,
        value,
    }
}