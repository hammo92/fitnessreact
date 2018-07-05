import { Map } from "immutable";
import {
    SET_SELECTED_SLOT_FROM_CALENDAR,
    GET_USERS_WORKOUT_SCHEDULES_REQUEST,
    GET_USERS_WORKOUT_SCHEDULES_SUCCESS,
    GET_USERS_WORKOUT_SCHEDULES_ERROR,
    GET_EXERCISES_NAME_REQUEST,
    GET_EXERCISES_NAME_SUCCESS,
    GET_EXERCISES_NAME_ERROR,
    ADD_USERS_WORKOUT_SCHEDULE_REQUEST,
    ADD_USERS_WORKOUT_SCHEDULE_SUCCESS,
    ADD_USERS_WORKOUT_SCHEDULE_ERROR,
    COPY_USER_WORKOUT_SCHEDULE,
    DELETE_USERS_WORKOUT_SCHEDULE_REQUEST,
    DELETE_USERS_WORKOUT_SCHEDULE_SUCCESS,
    DELETE_USERS_WORKOUT_SCHEDULE_ERROR,
    VIEW_USER_WORKOUT_SCHEDULE,
} from "../actions/userScheduleWorkouts";
import { VALIDATION_FAILURE_STATUS } from "../constants/consts";
import { generateValidationErrorMsgArr } from "../helpers/funs";

const initialState = Map({
    slotInfo: null,
    loading: false,
    workouts: [],
    workout: null,
    error: [],
    exercises: [],
    copiedWorkout: null,
    viewWorkout: null,
});

const actionMap = {
    [SET_SELECTED_SLOT_FROM_CALENDAR]: (state, action) => {
        return state.merge(Map({
            slotInfo: action.slotInfo,
        }));
    },
    [GET_USERS_WORKOUT_SCHEDULES_REQUEST]: (state, action) => {
        return state.merge(Map({
            loading: true,
            workouts: [],
            error: [],
        }));
    },
    [GET_USERS_WORKOUT_SCHEDULES_SUCCESS]: (state, action) => {
        var newState = {
            loading: false,
        };
        if (action.data.status === 1) {
            newState.workouts = action.data.workouts;
            newState.error = [];
        } else {
            var msg = (action.data.message) ? action.data.message : 'Something went wrong! please try again later.';
            newState.workouts = [];
            newState.error = [msg];
        }
        return state.merge(Map(newState));
    },
    [GET_USERS_WORKOUT_SCHEDULES_ERROR]: (state, action) => {
        let error = [];
        if (action.error.status && action.error.status === VALIDATION_FAILURE_STATUS && action.error.response.message) {
            error = generateValidationErrorMsgArr(action.error.response.message);
        } else if (action.error && action.error.message) {
            error = [action.error.message];
        } else {
            error = ['Something went wrong! please try again later'];
        }
        return state.merge(Map({
            loading: false,
            error: error,
        }));
    },
    [GET_EXERCISES_NAME_REQUEST]: (state, action) => {
        return state.merge(Map({
            exercises: [],
        }));
    },
    [GET_EXERCISES_NAME_SUCCESS]: (state, action) => {
        var newState = {};
        if (action.data.status === 1) {
            newState.exercises = action.data.exercises;
        }
        return state.merge(Map(newState));
    },
    [GET_EXERCISES_NAME_ERROR]: (state, action) => {
        return state.merge(Map({
            exercises: [],
        }));
    },
    [ADD_USERS_WORKOUT_SCHEDULE_REQUEST]: (state, action) => {
        return state.merge(Map({
            loading: true,
            workout: null,
            error: [],
        }));
    },
    [ADD_USERS_WORKOUT_SCHEDULE_SUCCESS]: (state, action) => {
        var newState = {
            loading: false,
        };
        if (action.data.status === 1) {
            newState.workout = action.data.workout;
        } else {
            var msg = (action.data.message) ? action.data.message : 'Something went wrong! please try again later.';
            newState.error = [msg];
        }
        return state.merge(Map(newState));
    },
    [ADD_USERS_WORKOUT_SCHEDULE_ERROR]: (state, action) => {
        let error = [];
        if (action.error.status && action.error.status === VALIDATION_FAILURE_STATUS && action.error.response.message) {
            error = generateValidationErrorMsgArr(action.error.response.message);
        } else if (action.error && action.error.message) {
            error = [action.error.message];
        } else {
            error = ['Something went wrong! please try again later'];
        }
        return state.merge(Map({
            loading: false,
            error: error,
        }));
    },
    [COPY_USER_WORKOUT_SCHEDULE]: (state, action) => {
        return state.merge(Map({
            copiedWorkout: action.selectedData,
        }));
    },
    [DELETE_USERS_WORKOUT_SCHEDULE_REQUEST]: (state, action) => {
        return state.merge(Map({
            loading: true,
            error: [],
        }));
    },
    [DELETE_USERS_WORKOUT_SCHEDULE_SUCCESS]: (state, action) => {
        var newState = {
            loading: false,
        };
        if (action.data.status !== 1) {
            var msg = (action.data.message) ? action.data.message : 'Something went wrong! please try again later.';
            newState.error = [msg];
        }
        return state.merge(Map(newState));
    },
    [DELETE_USERS_WORKOUT_SCHEDULE_ERROR]: (state, action) => {
        let error = [];
        if (action.error.status && action.error.status === VALIDATION_FAILURE_STATUS && action.error.response.message) {
            error = generateValidationErrorMsgArr(action.error.response.message);
        } else if (action.error && action.error.message) {
            error = [action.error.message];
        } else {
            error = ['Something went wrong! please try again later'];
        }
        return state.merge(Map({
            loading: false,
            error: error,
        }));
    },
    [VIEW_USER_WORKOUT_SCHEDULE]: (state, action) => {
        return state.merge(Map({
            viewWorkout: action.selectedData,
        }));
    },
}

export default function reducer(state = initialState, action = {}) {
    const fn = actionMap[action.type];
    return fn ? fn(state, action) : state;
}