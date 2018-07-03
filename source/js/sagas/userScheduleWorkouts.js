import { takeLatest, put, call } from 'redux-saga/effects';
import api from 'api/userScheduleWorkouts';
import {
    getUsersWorkoutSchedulesSuccess,
    getUsersWorkoutSchedulesError,
    GET_USERS_WORKOUT_SCHEDULES_REQUEST,
    getExercisesNameSuccess,
    getExercisesNameError,
    GET_EXERCISES_NAME_REQUEST,
    addUsersWorkoutScheduleSuccess,
    addUsersWorkoutScheduleError,
    ADD_USERS_WORKOUT_SCHEDULE_REQUEST
} from '../actions/userScheduleWorkouts';

function getUsersWorkoutSchedulesByMonthData() {
    return function* (action) {
        try {
            let requestData = action.requestData;
            const data = yield call(() => api.getUsersWorkoutSchedulesByMonths(requestData));
            yield put(getUsersWorkoutSchedulesSuccess(data));
        } catch (error) {
            yield put(getUsersWorkoutSchedulesError(error));
        }
    }
}

function getExercisesName() {
    return function* (action) {
        try {
            const data = yield call(() => api.getExercisesName());
            yield put(getExercisesNameSuccess(data));
        } catch (error) {
            yield put(getExercisesNameError(error));
        }
    }
}

function addUsersWorkoutScheduleData() {
    return function* (action) {
        try {
            let requestData = action.requestData;
            const data = yield call(() => api.addUsersWorkoutSchedule(requestData));
            yield put(addUsersWorkoutScheduleSuccess(data));
        } catch (error) {
            yield put(addUsersWorkoutScheduleError(error));
        }
    }
}

export function* watchUsersWorkoutSchedulesData() {
    yield takeLatest(GET_USERS_WORKOUT_SCHEDULES_REQUEST, getUsersWorkoutSchedulesByMonthData());
    yield takeLatest(GET_EXERCISES_NAME_REQUEST, getExercisesName());
    yield takeLatest(ADD_USERS_WORKOUT_SCHEDULE_REQUEST, addUsersWorkoutScheduleData());
}

export default [
    watchUsersWorkoutSchedulesData()
];