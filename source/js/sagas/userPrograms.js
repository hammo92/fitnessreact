import { takeLatest, put, call } from 'redux-saga/effects';
import api from 'api/userPrograms';
import {
    getUsersProgramWorkoutScheduleSuccess,
    getUsersProgramWorkoutScheduleError,
    GET_USERS_PROGRAM_WORKOUT_SCHEDULE_REQUEST,
    getUserProgramsSuccess,
    getUserProgramsError,
    GET_USER_PROGRAMS_REQUEST,
    addUserProgramMasterSuccess,
    addUserProgramMasterError,
    ADD_USER_PROGRAM_MASTER_REQUEST,
    deleteUserProgramSuccess,
    deleteUserProgramError,
    DELETE_USER_PROGRAM_REQUEST,
    getUserProgramSuccess,
    getUserProgramError,
    GET_USER_PROGRAM_REQUEST,
    deleteUsersProgramWorkoutScheduleSuccess,
    deleteUsersProgramWorkoutScheduleError,
    DELETE_USERS_PROGRAM_WORKOUT_SCHEDULE_REQUEST,
    addUserProgramWorkoutTitleSuccess,
    addUserProgramWorkoutTitleError,
    ADD_USER_PROGRAM_WORKOUT_TITLE_REQUEST,
    ADD_USERS_PROGRAM_WORKOUT_SCHEDULE_REQUEST,
    addUsersProgramWorkoutScheduleSuccess,
    addUsersProgramWorkoutScheduleError,
    updateUserProgramWorkoutTitleSuccess,
    updateUserProgramWorkoutTitleError,
    UPDATE_USER_PROGRAM_WORKOUT_TITLE_REQUEST,
    UPDATE_USERS_PROGRAM_WORKOUT_SCHEDULE_REQUEST,
    updateUsersProgramWorkoutScheduleSuccess,
    updateUsersProgramWorkoutScheduleError,
    DELETE_USER_PROGRAM_SINGLE_EXERCISE_REQUEST,
    deleteUserProgramSingleExerciseSuccess,
    deleteUserProgramSingleExerciseError,
    DELETE_USER_PROGRAM_WHOLE_EXERCISE_REQUEST,
    deleteUserProgramWholeExerciseSuccess,
    deleteUserProgramWholeExerciseError,
    PASTE_USERS_PROGRAM_WORKOUT_SCHEDULE_REQUEST,
    pasteUsersProgramWorkoutScheduleSuccess,
    pasteUsersProgramWorkoutScheduleError,
    UPDATE_USER_PROGRAM_MASTER_REQUEST,
    updateUserProgramMasterSuccess,
    updateUserProgramMasterError,
    getWorkoutsListByProgramDaySuccess,
    getWorkoutsListByProgramDayError,
    GET_WORKOUTS_LIST_BY_PROGRAM_DAY_REQUEST,
    deleteUserProgramBulkExerciseSuccess,
    deleteUserProgramBulkExerciseError,
    DELETE_USER_PROGRAM_BULK_EXERCISE_REQUEST,
    REORDER_PROGRAM_WORKOUT_EXERCISES_REQUEST,
    reorderProgramWorkoutExercisesSuccess,
    reorderProgramWorkoutExercisesError,
} from '../actions/userPrograms';

function getUserProgramsData() {
    return function* (action) {
        try {
            const data = yield call(() => api.getUserPrograms());
            yield put(getUserProgramsSuccess(data));
        } catch (error) {
            yield put(getUserProgramsError(error));
        }
    }
}

function addUserProgramMasterData() {
    return function* (action) {
        try {
            let requestData = action.requestData;
            const data = yield call(() => api.addUserProgramMaster(requestData));
            yield put(addUserProgramMasterSuccess(data));
        } catch (error) {
            yield put(addUserProgramMasterError(error));
        }
    }
}

function deleteUserProgramData() {
    return function* (action) {
        try {
            let _id = action._id;
            const data = yield call(() => api.deleteUserProgram(_id));
            yield put(deleteUserProgramSuccess(data));
        } catch (error) {
            yield put(deleteUserProgramError(error));
        }
    }
}

function getUserProgramData() {
    return function* (action) {
        try {
            var _id = action._id;
            const data = yield call(() => api.getUserProgram(_id));
            yield put(getUserProgramSuccess(data));
        } catch (error) {
            yield put(getUserProgramError(error));
        }
    }
}

function deleteUsersProgramWorkoutScheduleData() {
    return function* (action) {
        try {
            let requestData = action.requestData;
            const data = yield call(() => api.deleteUsersProgramWorkoutSchedule(requestData));
            yield put(deleteUsersProgramWorkoutScheduleSuccess(data));
        } catch (error) {
            yield put(deleteUsersProgramWorkoutScheduleError(error));
        }
    }
}

function deleteUserProgramBulkExerciseData() {
    return function* (action) {
        try {
            let requestData = action.requestData;
            const data = yield call(() => api.deleteUserProgramBulkExercise(requestData));
            yield put(deleteUserProgramBulkExerciseSuccess(data));
        } catch (error) {
            yield put(deleteUserProgramBulkExerciseError(error));
        }
    }
}

function addUserProgramWorkoutTitleData() {
    return function* (action) {
        try {
            let requestData = action.requestData;
            const data = yield call(() => api.addUserProgramWorkoutTitle(requestData));
            yield put(addUserProgramWorkoutTitleSuccess(data));
        } catch (error) {
            yield put(addUserProgramWorkoutTitleError(error));
        }
    }
}

function getUsersProgramWorkoutScheduleData() {
    return function* (action) {
        try {
            let _id = action._id;
            const data = yield call(() => api.getUsersProgramWorkoutSchedule(_id));
            yield put(getUsersProgramWorkoutScheduleSuccess(data));
        } catch (error) {
            yield put(getUsersProgramWorkoutScheduleError(error));
        }
    }
}

function addUsersProgramWorkoutScheduleData() {
    return function* (action) {
        try {
            let requestData = action.requestData;
            const data = yield call(() => api.addUsersProgramWorkoutSchedule(requestData));
            yield put(addUsersProgramWorkoutScheduleSuccess(data));
        } catch (error) {
            yield put(addUsersProgramWorkoutScheduleError(error));
        }
    }
}

function updateUserProgramWorkoutTitleData() {
    return function* (action) {
        try {
            let _id = action._id;
            let requestData = action.requestData;
            const data = yield call(() => api.updateUserProgramWorkoutTitle(_id, requestData));
            yield put(updateUserProgramWorkoutTitleSuccess(data));
        } catch (error) {
            yield put(updateUserProgramWorkoutTitleError(error));
        }
    }
}

function updateUsersProgramWorkoutScheduleData() {
    return function* (action) {
        try {
            let requestData = action.requestData;
            const data = yield call(() => api.updateUsersProgramWorkoutSchedule(requestData));
            yield put(updateUsersProgramWorkoutScheduleSuccess(data));
        } catch (error) {
            yield put(updateUsersProgramWorkoutScheduleError(error));
        }
    }
}

function deleteUserProgramSingleExerciseData() {
    return function* (action) {
        try {
            let requestData = action.requestData;
            const data = yield call(() => api.deleteUserProgramSingleExercise(requestData));
            yield put(deleteUserProgramSingleExerciseSuccess(data));
        } catch (error) {
            yield put(deleteUserProgramSingleExerciseError(error));
        }
    }
}

function deleteUserProgramWholeExerciseData() {
    return function* (action) {
        try {
            let requestData = action.requestData;
            const data = yield call(() => api.deleteUserProgramWholeExercise(requestData));
            yield put(deleteUserProgramWholeExerciseSuccess(data));
        } catch (error) {
            yield put(deleteUserProgramWholeExerciseError(error));
        }
    }
}

function pasteUsersProgramWorkoutScheduleData() {
    return function* (action) {
        try {
            let requestData = action.requestData;
            const data = yield call(() => api.pasteUsersProgramWorkoutSchedule(requestData));
            yield put(pasteUsersProgramWorkoutScheduleSuccess(data));
        } catch (error) {
            yield put(pasteUsersProgramWorkoutScheduleError(error));
        }
    }
}

function updateUserProgramMasterData() {
    return function* (action) {
        try {
            let _id = action._id;
            let requestData = action.requestData;
            const data = yield call(() => api.updateUsersProgramMaster(_id, requestData));
            yield put(updateUserProgramMasterSuccess(data));
        } catch (error) {
            yield put(updateUserProgramMasterError(error));
        }
    }
}

function getWorkoutsListByProgramDay() {
    return function* (action) {
        try {
            let requestData = action.requestData;
            const data = yield call(() => api.getWorkoutsListByProgramDay(requestData));
            yield put(getWorkoutsListByProgramDaySuccess(data))
        } catch (error) {
            yield put(getWorkoutsListByProgramDayError(error))
        }
    }
}

function reorderProgramWorkoutExercises() {
    return function* (action) {
        try {
            let requestData = action.requestData;
            const data = yield call(() => api.reorderProgramWorkoutExercises(requestData));
            yield put(reorderProgramWorkoutExercisesSuccess(data))
        } catch (error) {
            yield put(reorderProgramWorkoutExercisesError(error))
        }
    }
}

export function* watchUserProgramsData() {
    yield takeLatest(GET_USER_PROGRAMS_REQUEST, getUserProgramsData());
    yield takeLatest(ADD_USER_PROGRAM_MASTER_REQUEST, addUserProgramMasterData());
    yield takeLatest(DELETE_USER_PROGRAM_REQUEST, deleteUserProgramData());
    yield takeLatest(GET_USER_PROGRAM_REQUEST, getUserProgramData());
    yield takeLatest(DELETE_USERS_PROGRAM_WORKOUT_SCHEDULE_REQUEST, deleteUsersProgramWorkoutScheduleData());
    yield takeLatest(ADD_USER_PROGRAM_WORKOUT_TITLE_REQUEST, addUserProgramWorkoutTitleData());
    yield takeLatest(GET_USERS_PROGRAM_WORKOUT_SCHEDULE_REQUEST, getUsersProgramWorkoutScheduleData());
    yield takeLatest(ADD_USERS_PROGRAM_WORKOUT_SCHEDULE_REQUEST, addUsersProgramWorkoutScheduleData());
    yield takeLatest(UPDATE_USER_PROGRAM_WORKOUT_TITLE_REQUEST, updateUserProgramWorkoutTitleData());
    yield takeLatest(UPDATE_USERS_PROGRAM_WORKOUT_SCHEDULE_REQUEST, updateUsersProgramWorkoutScheduleData());
    yield takeLatest(DELETE_USER_PROGRAM_SINGLE_EXERCISE_REQUEST, deleteUserProgramSingleExerciseData());
    yield takeLatest(DELETE_USER_PROGRAM_WHOLE_EXERCISE_REQUEST, deleteUserProgramWholeExerciseData());
    yield takeLatest(DELETE_USER_PROGRAM_BULK_EXERCISE_REQUEST, deleteUserProgramBulkExerciseData());
    yield takeLatest(PASTE_USERS_PROGRAM_WORKOUT_SCHEDULE_REQUEST, pasteUsersProgramWorkoutScheduleData());
    yield takeLatest(UPDATE_USER_PROGRAM_MASTER_REQUEST, updateUserProgramMasterData());
    yield takeLatest(GET_WORKOUTS_LIST_BY_PROGRAM_DAY_REQUEST, getWorkoutsListByProgramDay());
    yield takeLatest(REORDER_PROGRAM_WORKOUT_EXERCISES_REQUEST, reorderProgramWorkoutExercises());
}

export default [
    watchUserProgramsData(),
];