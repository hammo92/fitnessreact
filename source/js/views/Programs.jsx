import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FitnessHeader from '../components/global/FitnessHeader';
import FitnessNav from '../components/global/FitnessNav';
import { getUserProgramsRequest, deleteUserProgramRequest } from '../actions/userPrograms';
import { DropdownButton, ButtonToolbar, MenuItem } from "react-bootstrap";
import { FaPencil, FaTrash } from 'react-icons/lib/fa';
import SweetAlert from "react-bootstrap-sweetalert";
import { routeCodes } from '../constants/routes';
import { te, ts } from '../helpers/funs';
import ReactHtmlParser from "react-html-parser";
import { showPageLoader, hidePageLoader } from '../actions/pageLoader';

class Programs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDeleteProgramAlert: false,
            deleteActionInit: false,
            selectedProgramId: null,
        }
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getUserProgramsRequest());
    }

    render() {
        const { programs } = this.props;
        const {
            showDeleteProgramAlert
        } = this.state;
        const { loggedUserData, errorMaster } = this.props;
        return (
            <div className="fitness-body">
                <FitnessHeader />
                <FitnessNav />
                <section className="body-wrap">
                    <div className="body-head d-flex justify-content-start">
                        <div className="body-head-l">
                            <h2>Programs</h2>
                            <p>Your goal choice shapes how your fitness assistant will ceate your meal and exercise plans, it’s important that you set goals which are achieveable. Keep updating your profile and your fitness assistant will keep you on track and meeting the goals you’ve set out for yourself.</p>
                        </div>
                        <div className="body-head-r">
                            <Link className="pink-btn" to={routeCodes.PROGRAM_MASTER_SAVE}>
                                <span>Add Program</span>
                                <i className="icon-add_circle"></i>
                            </Link>
                            <Link className="white-btn" to={routeCodes.EXERCISE} >
                                <span>Back</span>
                                <i className="icon-arrow_back"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="body-content d-flex row justify-content-start profilephoto-content">
                        <div className="col-md-12">
                            <div className="white-box space-btm-20">
                                <div className="whitebox-body profile-body programs-table-wrapper">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th><span><p>Name</p></span></th>
                                                <th><span>Workouts</span></th>
                                                <th><span>Frequency</span></th>
                                                <th><span>Type</span></th>
                                                <th><span>Difficulty</span></th>
                                                <th><span>Rating</span></th>
                                                <th><span>Actions</span></th>
                                            </tr>
                                        </thead>
                                        {programs && programs.length > 0 &&
                                            <tbody>
                                                {
                                                    programs.map((program, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td><span><p>{program.name}</p></span></td>
                                                                <td><span>{program.totalWorkouts}</span></td>
                                                                <td><span>{program.totalWorkouts}</span></td>
                                                                <td><span>{program.totalWorkouts}</span></td>
                                                                <td><span>{program.totalWorkouts}</span></td>
                                                                <td><span>{program.totalWorkouts}</span></td>
                                                                <td>
                                                                    <span>
                                                                        {program.userId && program.userId === loggedUserData.authId &&
                                                                            <ButtonToolbar>
                                                                                <DropdownButton title="Actions" pullRight id="dropdown-size-medium">
                                                                                    <MenuItem
                                                                                        href={`${routeCodes.PROGRAM_SAVE}/${program._id}`}
                                                                                        eventKey="1"
                                                                                        onClick={(e) => this.handleEditNavigation(e, `${routeCodes.PROGRAM_SAVE}/${program._id}`)}
                                                                                    >
                                                                                        <FaPencil className="v-align-sub" /> Edit
                                                                            </MenuItem>
                                                                                    <MenuItem
                                                                                        eventKey="2"
                                                                                        onClick={() => this.handleShowDeleteAlert(program._id)}
                                                                                    >
                                                                                        <FaTrash className="v-align-sub" /> Delete
                                                                            </MenuItem>
                                                                                </DropdownButton>
                                                                            </ButtonToolbar>
                                                                        }
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        }
                                        {programs && programs.length <= 0 &&
                                            <tbody>
                                                <tr>
                                                    <td colSpan="4">No programs found</td>
                                                </tr>
                                            </tbody>
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SweetAlert
                    show={showDeleteProgramAlert}
                    danger
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    cancelBtnBsStyle="default"
                    title="Are you sure?"
                    onConfirm={this.handleDeleteProgram}
                    onCancel={this.handleCancelDelete}
                >
                    You will not be able to recover this file!
                </SweetAlert>

            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        const { loading, error, dispatch, } = this.props;
        const { deleteActionInit, } = this.state;
        if (!loading && deleteActionInit) {
            this.setState({ deleteActionInit: false });
            this.handleCancelDelete();
            if (error && error.length <= 0) {
                ts('Program deleted successfully!');
                dispatch(getUserProgramsRequest());
            } else {
                te(error[0]);
            }
            dispatch(hidePageLoader());
        }
    }

    handleEditNavigation = (e, href) => {
        const { history } = this.props;
        e.preventDefault();
        history.push(href);
    }

    handleShowDeleteAlert = (_id) => {
        this.setState({ showDeleteProgramAlert: true, selectedProgramId: _id, });
    }

    handleCancelDelete = () => {
        this.setState({ showDeleteProgramAlert: false, selectedProgramId: null, });
    }

    handleDeleteProgram = () => {
        const { dispatch } = this.props;
        const { selectedProgramId } = this.state;
        dispatch(showPageLoader());
        dispatch(deleteUserProgramRequest(selectedProgramId));
        this.setState({ deleteActionInit: true });
    }
}

const mapStateToProps = (state) => {
    const { userPrograms, user } = state;
    return {
        loading: userPrograms.get('loading'),
        programs: userPrograms.get('programs'),
        error: userPrograms.get('error'),
        loadingMaster: userPrograms.get('loadingMaster'),
        programMaster: userPrograms.get('programMaster'),
        errorMaster: userPrograms.get('errorMaster'),
        loggedUserData: user.get('loggedUserData'),
    };
}

export default connect(
    mapStateToProps,
)(Programs);