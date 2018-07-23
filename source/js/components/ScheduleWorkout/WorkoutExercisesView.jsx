import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    SERVER_BASE_URL,
    SCHEDULED_WORKOUT_TYPE_EXERCISE,
    SCHEDULED_WORKOUT_TYPE_SUPERSET,
    SCHEDULED_WORKOUT_TYPE_CIRCUIT,
    EXE_MEASUREMENT_UNITS,
    EXE_REST_TIME_UNITS
} from '../../constants/consts';
import noImg from 'img/common/no-img.png'
import _ from "lodash";

class WorkoutExercisesView extends Component {
    render() {
        const {
            exercises,
        } = this.props;
        return (
            <div className="workout-exercises-view-wrapper">
                <ul>
                    {exercises && exercises.length > 0 &&
                        exercises.map((o, i) => {
                            return (
                                <li key={i}>
                                    {o.subType === SCHEDULED_WORKOUT_TYPE_EXERCISE &&
                                        <WorkoutExerciseSingleView
                                            exercise={o.exercises[0]}
                                        />
                                    }
                                    {o.subType === SCHEDULED_WORKOUT_TYPE_SUPERSET &&
                                        <WorkoutExerciseSupersetView
                                            exercises={o.exercises}
                                        />
                                    }
                                    {o.subType === SCHEDULED_WORKOUT_TYPE_CIRCUIT &&
                                        <WorkoutExerciseCircuitView
                                            exercises={o.exercises}
                                        />
                                    }
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
}

export default connect(
    mapStateToProps,
)(WorkoutExercisesView);

class WorkoutExerciseSingleView extends Component {
    render() {
        const { exercise } = this.props;
        return (
            <div className="workout-exercise-head-view d-flex">
                <div className="workout-exercise-head-view-l">
                    <img
                        src={SERVER_BASE_URL + exercise.exercises.images[0]}
                        width="50"
                        onError={(e) => {
                            e.target.src = noImg
                        }}
                    />
                    <strong>{exercise.exercises.name}</strong>
                </div>
                <div className="workout-exercise-head-view-r">
                    {exercise.differentSets === 0 &&
                        <div className="workout-exercise-head-view-data-row d-flex">
                            {exercise.sets &&
                                <div className="workout-exercise-head-view-data-col">
                                    <strong>{exercise.sets}</strong>&nbsp;
                                    <strong>{'Sets'}</strong>
                                </div>
                            }
                            {typeof exercise.restTime !== 'undefined' &&
                                <div className="workout-exercise-head-view-data-col">
                                    <strong>{exercise.restTime}</strong>&nbsp;
                                    <strong>{_.find(EXE_REST_TIME_UNITS, ['value', exercise.restTimeUnit]).label} Rest</strong>
                                </div>
                            }
                            {exercise.setsDetails[0].field1 &&
                                <div className="workout-exercise-head-view-data-col">
                                    <strong>{exercise.setsDetails[0].field1.value}</strong>&nbsp;
                                    <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field1.unit]).label}</strong>
                                </div>
                            }
                            {exercise.setsDetails[0].field2 &&
                                <div className="workout-exercise-head-view-data-col">
                                    <strong>{exercise.setsDetails[0].field2.value}</strong>&nbsp;
                                    <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field2.unit]).label}</strong>
                                </div>
                            }
                            {exercise.setsDetails[0].field3 &&
                                <div className="workout-exercise-head-view-data-col">
                                    <strong>{exercise.setsDetails[0].field3.value}</strong>&nbsp;
                                    <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field3.unit]).label}</strong>
                                </div>
                            }
                            <div className="workout-exercise-head-view-actions"><h5>...</h5></div>
                            <div className="workout-exercise-head-view-cancel">
                                <button type="button">
                                    <i className="icon-cancel"></i>
                                </button>
                            </div>
                        </div>
                    }
                    {exercise.differentSets === 1 &&
                        <div className="workout-exercise-head-view-data-row d-flex">
                            {exercise.sets &&
                                <div className="workout-exercise-head-view-data-col">
                                    <strong>{exercise.sets}</strong>&nbsp;
                                    <strong>{'Sets'}</strong>
                                </div>
                            }
                            {typeof exercise.setsDetails[0].restTime !== 'undefined' &&
                                <div className="workout-exercise-head-view-data-col">
                                    <strong>{exercise.setsDetails[0].restTime}</strong>&nbsp;
                                    <strong>{_.find(EXE_REST_TIME_UNITS, ['value', exercise.setsDetails[0].restTimeUnit]).label}</strong>
                                    {exercise.setsDetails.length > 1 && typeof exercise.setsDetails[(exercise.setsDetails.length - 1)].restTime !== 'undefined' &&
                                        <strong> - {exercise.setsDetails[(exercise.setsDetails.length - 1)].restTime}</strong>
                                    }
                                    &nbsp;
                                    {exercise.setsDetails.length > 1 && typeof exercise.setsDetails[(exercise.setsDetails.length - 1)].restTimeUnit !== 'undefined' &&
                                        <strong>{_.find(EXE_REST_TIME_UNITS, ['value', exercise.setsDetails[(exercise.setsDetails.length - 1)].restTimeUnit]).label}</strong>
                                    } Rest
                                </div>
                            }
                            {exercise.setsDetails[0].field1 &&
                                <div className="workout-exercise-head-view-data-col">
                                    <strong>{exercise.setsDetails[0].field1.value}</strong>&nbsp;
                                    <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field1.unit]).label}</strong>
                                    {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field1 &&
                                        <strong> - {exercise.setsDetails[(exercise.setsDetails.length - 1)].field1.value}</strong>
                                    }
                                    &nbsp;
                                    {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field1 &&
                                        <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[(exercise.setsDetails.length - 1)].field1.unit]).label}</strong>
                                    }
                                </div>
                            }
                            {exercise.setsDetails[0].field2 &&
                                <div className="workout-exercise-head-view-data-col">
                                    <strong>{exercise.setsDetails[0].field2.value}</strong>&nbsp;
                                    <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field2.unit]).label}</strong>
                                    {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field2 &&
                                        <strong> - {exercise.setsDetails[(exercise.setsDetails.length - 1)].field2.value}</strong>
                                    }
                                    &nbsp;
                                    {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field2 &&
                                        <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[(exercise.setsDetails.length - 1)].field2.unit]).label}</strong>
                                    }
                                </div>
                            }
                            {exercise.setsDetails[0].field3 &&
                                <div className="workout-exercise-head-view-data-col">
                                    <strong>{exercise.setsDetails[0].field3.value}</strong>&nbsp;
                                    <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field3.unit]).label}</strong>
                                    {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field3 &&
                                        <strong> - {exercise.setsDetails[(exercise.setsDetails.length - 1)].field3.value}</strong>
                                    }
                                    &nbsp;
                                    {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field3 &&
                                        <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[(exercise.setsDetails.length - 1)].field3.unit]).label}</strong>
                                    }
                                </div>
                            }
                            <div className="workout-exercise-head-view-actions"><h5>...</h5></div>
                            <div className="workout-exercise-head-view-cancel">
                                <button type="button">
                                    <i className="icon-cancel"></i>
                                </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

class WorkoutExerciseSupersetView extends Component {
    render() {
        const { exercises } = this.props;
        return (
            <div className="workout-exercise-head-view-wrapper">
                <div className="workout-exercise-head-view d-flex">
                    <div className="workout-exercise-head-view-l">
                        <strong>{'Superset'}</strong>
                    </div>
                    <div className="workout-exercise-head-view-r">
                        <div className="workout-exercise-head-view-data-row d-flex">
                            {exercises[0].sets &&
                                <div className="workout-exercise-head-view-data-col">
                                    <strong>{exercises[0].sets}</strong>&nbsp;
                                    <strong>{'Sets'}</strong>
                                </div>
                            }
                            {typeof exercises[0].restTime !== 'undefined' &&
                                <div className="workout-exercise-head-view-data-col">
                                    <strong>{exercises[0].restTime}</strong>&nbsp;
                                    <strong>{_.find(EXE_REST_TIME_UNITS, ['value', exercises[0].restTimeUnit]).label} Rest</strong>
                                </div>
                            }
                            <div className="workout-exercise-head-view-actions"><h5>...</h5></div>
                            <div className="workout-exercise-head-view-cancel">
                                <button type="button">
                                    <i className="icon-cancel"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>
                        <div className="workout-exercise-body-view-wrapper">
                            {exercises && exercises.length > 0 &&
                                exercises.map((exercise, index) => {
                                    return (
                                        <div key={index} className="workout-exercise-body-view d-flex">
                                            <div className="workout-exercise-head-view-l">
                                                <img
                                                    src={SERVER_BASE_URL + exercise.exercises.images[0]}
                                                    width="50"
                                                    onError={(e) => {
                                                        e.target.src = noImg
                                                    }}
                                                />
                                                <strong>{exercise.exercises.name}</strong>
                                            </div>
                                            <div className="workout-exercise-head-view-r">
                                                {exercise.differentSets === 0 &&
                                                    <div className="workout-exercise-body-view-data-row d-flex">
                                                        {exercise.setsDetails[0].field1 &&
                                                            <div className="workout-exercise-body-view-data-col">
                                                                <strong>{exercise.setsDetails[0].field1.value}</strong>&nbsp;
                                                                <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field1.unit]).label}</strong>
                                                            </div>
                                                        }
                                                        {exercise.setsDetails[0].field2 &&
                                                            <div className="workout-exercise-body-view-data-col">
                                                                <strong>{exercise.setsDetails[0].field2.value}</strong>&nbsp;
                                                                <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field2.unit]).label}</strong>
                                                            </div>
                                                        }
                                                        {exercise.setsDetails[0].field3 &&
                                                            <div className="workout-exercise-body-view-data-col">
                                                                <strong>{exercise.setsDetails[0].field3.value}</strong>&nbsp;
                                                                <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field3.unit]).label}</strong>
                                                            </div>
                                                        }
                                                        <div className="workout-exercise-head-view-actions"><h5>...</h5></div>
                                                        <div className="workout-exercise-head-view-cancel">
                                                            <button type="button">
                                                                <i className="icon-cancel"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                }
                                                {exercise.differentSets === 1 &&
                                                    <div className="workout-exercise-body-view-data-row d-flex">
                                                        {exercise.setsDetails[0].field1 &&
                                                            <div className="workout-exercise-body-view-data-col">
                                                                <strong>{exercise.setsDetails[0].field1.value}</strong>&nbsp;
                                                                <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field1.unit]).label}</strong>
                                                                {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field1 &&
                                                                    <strong> - {exercise.setsDetails[(exercise.setsDetails.length - 1)].field1.value}</strong>
                                                                }
                                                                &nbsp;
                                                                {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field1 &&
                                                                    <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[(exercise.setsDetails.length - 1)].field1.unit]).label}</strong>
                                                                }
                                                            </div>
                                                        }
                                                        {exercise.setsDetails[0].field2 &&
                                                            <div className="workout-exercise-body-view-data-col">
                                                                <strong>{exercise.setsDetails[0].field2.value}</strong>&nbsp;
                                                                <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field2.unit]).label}</strong>
                                                                {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field2 &&
                                                                    <strong> - {exercise.setsDetails[(exercise.setsDetails.length - 1)].field2.value}</strong>
                                                                }
                                                                &nbsp;
                                                                {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field2 &&
                                                                    <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[(exercise.setsDetails.length - 1)].field2.unit]).label}</strong>
                                                                }
                                                            </div>
                                                        }
                                                        {exercise.setsDetails[0].field3 &&
                                                            <div className="workout-exercise-body-view-data-col">
                                                                <strong>{exercise.setsDetails[0].field3.value}</strong>&nbsp;
                                                                <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field3.unit]).label}</strong>
                                                                {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field3 &&
                                                                    <strong> - {exercise.setsDetails[(exercise.setsDetails.length - 1)].field3.value}</strong>
                                                                }
                                                                &nbsp;
                                                                {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field3 &&
                                                                    <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[(exercise.setsDetails.length - 1)].field3.unit]).label}</strong>
                                                                }
                                                            </div>
                                                        }
                                                        <div className="workout-exercise-head-view-actions"><h5>...</h5></div>
                                                        <div className="workout-exercise-head-view-cancel">
                                                            <button type="button">
                                                                <i className="icon-cancel"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

class WorkoutExerciseCircuitView extends Component {
    render() {
        const { exercises } = this.props;
        return (
            <div className="workout-exercise-head-view-wrapper">
                <div className="workout-exercise-head-view d-flex">
                    <div className="workout-exercise-head-view-l">
                        <strong>{'Circuit'}</strong>
                    </div>
                    <div className="workout-exercise-head-view-r">
                        <div className="workout-exercise-head-view-data-row d-flex">
                            {exercises[0].sets &&
                                <div className="workout-exercise-head-view-data-col">
                                    <strong>{exercises[0].sets}</strong>&nbsp;
                                    <strong>{'Sets'}</strong>
                                </div>
                            }
                            {typeof exercises[0].restTime !== 'undefined' &&
                                <div className="workout-exercise-head-view-data-col">
                                    <strong>{exercises[0].restTime}</strong>&nbsp;
                                    <strong>{_.find(EXE_REST_TIME_UNITS, ['value', exercises[0].restTimeUnit]).label} Rest</strong>
                                </div>
                            }
                            <div className="workout-exercise-head-view-actions"><h5>...</h5></div>
                            <div className="workout-exercise-head-view-cancel">
                                <button type="button">
                                    <i className="icon-cancel"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>
                        <div className="workout-exercise-body-view-wrapper">
                            {exercises && exercises.length > 0 &&
                                exercises.map((exercise, index) => {
                                    return (
                                        <div key={index} className="workout-exercise-body-view d-flex">
                                            <div className="workout-exercise-head-view-l">
                                                <img
                                                    src={SERVER_BASE_URL + exercise.exercises.images[0]}
                                                    width="50"
                                                    onError={(e) => {
                                                        e.target.src = noImg
                                                    }}
                                                />
                                                <strong>{exercise.exercises.name}</strong>
                                            </div>
                                            <div className="workout-exercise-head-view-r">
                                                {exercise.differentSets === 0 &&
                                                    <div className="workout-exercise-body-view-data-row d-flex">
                                                        {exercise.setsDetails[0].field1 &&
                                                            <div className="workout-exercise-body-view-data-col">
                                                                <strong>{exercise.setsDetails[0].field1.value}</strong>&nbsp;
                                                                <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field1.unit]).label}</strong>
                                                            </div>
                                                        }
                                                        {exercise.setsDetails[0].field2 &&
                                                            <div className="workout-exercise-body-view-data-col">
                                                                <strong>{exercise.setsDetails[0].field2.value}</strong>&nbsp;
                                                                <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field2.unit]).label}</strong>
                                                            </div>
                                                        }
                                                        {exercise.setsDetails[0].field3 &&
                                                            <div className="workout-exercise-body-view-data-col">
                                                                <strong>{exercise.setsDetails[0].field3.value}</strong>&nbsp;
                                                                <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field3.unit]).label}</strong>
                                                            </div>
                                                        }
                                                        <div className="workout-exercise-head-view-actions"><h5>...</h5></div>
                                                        <div className="workout-exercise-head-view-cancel">
                                                            <button type="button">
                                                                <i className="icon-cancel"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                }
                                                {exercise.differentSets === 1 &&
                                                    <div className="workout-exercise-body-view-data-row d-flex">
                                                        {exercise.setsDetails[0].field1 &&
                                                            <div className="workout-exercise-body-view-data-col">
                                                                <strong>{exercise.setsDetails[0].field1.value}</strong>&nbsp;
                                                                <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field1.unit]).label}</strong>
                                                                {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field1 &&
                                                                    <strong> - {exercise.setsDetails[(exercise.setsDetails.length - 1)].field1.value}</strong>
                                                                }
                                                                &nbsp;
                                                                {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field1 &&
                                                                    <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[(exercise.setsDetails.length - 1)].field1.unit]).label}</strong>
                                                                }
                                                            </div>
                                                        }
                                                        {exercise.setsDetails[0].field2 &&
                                                            <div className="workout-exercise-body-view-data-col">
                                                                <strong>{exercise.setsDetails[0].field2.value}</strong>&nbsp;
                                                                <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field2.unit]).label}</strong>
                                                                {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field2 &&
                                                                    <strong> - {exercise.setsDetails[(exercise.setsDetails.length - 1)].field2.value}</strong>
                                                                }
                                                                &nbsp;
                                                                {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field2 &&
                                                                    <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[(exercise.setsDetails.length - 1)].field2.unit]).label}</strong>
                                                                }
                                                            </div>
                                                        }
                                                        {exercise.setsDetails[0].field3 &&
                                                            <div className="workout-exercise-body-view-data-col">
                                                                <strong>{exercise.setsDetails[0].field3.value}</strong>&nbsp;
                                                                <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[0].field3.unit]).label}</strong>
                                                                {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field3 &&
                                                                    <strong> - {exercise.setsDetails[(exercise.setsDetails.length - 1)].field3.value}</strong>
                                                                }
                                                                &nbsp;
                                                                {exercise.setsDetails.length > 1 && exercise.setsDetails[(exercise.setsDetails.length - 1)].field3 &&
                                                                    <strong>{_.find(EXE_MEASUREMENT_UNITS, ['value', exercise.setsDetails[(exercise.setsDetails.length - 1)].field3.unit]).label}</strong>
                                                                }
                                                            </div>
                                                        }
                                                        <div className="workout-exercise-head-view-actions"><h5>...</h5></div>
                                                        <div className="workout-exercise-head-view-cancel">
                                                            <button type="button">
                                                                <i className="icon-cancel"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}